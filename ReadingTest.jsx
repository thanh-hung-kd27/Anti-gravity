'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Clock,
  Settings,
  Flag,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Send,
  X,
  Highlighter,
  Eraser,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  HelpCircle,
  Pause,
  Play,
  Trash2,
  Award,
  Type,
  Square,
} from 'lucide-react';

// ============================================================================
// 1. STATIC CONFIGURATIONS & DUMMY EXAM DATA (40 QUESTIONS ACROSS 3 PASSAGES)
// ============================================================================

const INITIAL_TIME_SECONDS = 59 * 60 + 59; // 59:59

const THEME_STYLES = {
  light: {
    label: 'Trắng học thuật (Chuẩn IELTS)',
    workspaceBg: 'bg-white text-slate-800',
    questionsBg: 'bg-slate-50/80 text-slate-800',
    cardBg: 'bg-white border-slate-200 text-slate-800',
    summaryBoxBg: 'bg-slate-50/70 border-slate-200/90 text-slate-900',
    mutedText: 'text-slate-500',
    subBarBg: 'bg-slate-100/90 border-slate-200 text-slate-700',
    inputBg: 'bg-white border-slate-300 text-slate-900 focus:border-blue-600',
    cardActive: 'border-blue-500 ring-2 ring-blue-100',
    cardInactive: 'border-slate-200/90',
    pillDefault: 'bg-slate-50 text-slate-700 border-slate-300 hover:border-blue-400 hover:bg-blue-50/40',
    optionDefault: 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/80',
    optionSelected: 'bg-blue-50 border-blue-600 text-blue-950 font-medium shadow-sm',
  },
  cream: {
    label: 'Vàng giấy dịu mắt (Sepia)',
    workspaceBg: 'bg-[#FAF6EE] text-[#2C251D]',
    questionsBg: 'bg-[#F3ECE0] text-[#2C251D]',
    cardBg: 'bg-[#FFFDF9] border-[#E5DCCB] text-[#2C251D]',
    summaryBoxBg: 'bg-[#FBF7EE] border-[#E5DCCB] text-[#2C251D]',
    mutedText: 'text-[#736757]',
    subBarBg: 'bg-[#EFE6D5] border-[#E0D5C1] text-[#4A3F32]',
    inputBg: 'bg-[#FFFDF9] border-[#CBBFA8] text-[#2C251D] focus:border-blue-700',
    cardActive: 'border-blue-600 ring-2 ring-blue-100',
    cardInactive: 'border-[#E5DCCB]',
    pillDefault: 'bg-[#FAF6EE] text-[#4A3F32] border-[#D8CCB8] hover:border-blue-500 hover:bg-blue-50/40',
    optionDefault: 'border-[#E5DCCB] hover:border-blue-400 hover:bg-[#FAF6EE]',
    optionSelected: 'bg-blue-50 border-blue-600 text-blue-950 font-medium shadow-sm',
  },
  contrast: {
    label: 'Tương phản cao (Nền tối)',
    workspaceBg: 'bg-slate-950 text-slate-100',
    questionsBg: 'bg-slate-900 text-slate-100',
    cardBg: 'bg-slate-900 border-slate-700 text-slate-100',
    summaryBoxBg: 'bg-slate-800/75 border-slate-700 text-slate-100',
    mutedText: 'text-slate-400',
    subBarBg: 'bg-slate-900 border-slate-800 text-slate-200',
    inputBg: 'bg-slate-800 border-slate-600 text-white focus:border-blue-400',
    cardActive: 'border-blue-400 ring-2 ring-blue-900/70',
    cardInactive: 'border-slate-700',
    pillDefault: 'bg-slate-800 text-slate-200 border-slate-600 hover:border-blue-400 hover:bg-slate-700',
    optionDefault: 'border-slate-700 hover:border-blue-400 hover:bg-slate-800',
    optionSelected: 'bg-blue-950/80 border-blue-400 text-blue-100 font-medium shadow-sm',
  },
};

const FONT_SIZE_CLASSES = {
  base: { label: 'Vừa (16px)', text: 'text-base leading-relaxed' },
  lg: { label: 'Chuẩn thi (18px)', text: 'text-lg leading-[1.75]' },
  xl: { label: 'Lớn (20px)', text: 'text-xl leading-[1.8]' },
};

const HIGHLIGHT_COLORS = {
  yellow: {
    label: 'Vàng',
    swatch: 'bg-yellow-300 border-yellow-500',
    mark: 'bg-yellow-200/90 text-slate-950 rounded-sm px-0.5',
  },
  green: {
    label: 'Xanh lá',
    swatch: 'bg-emerald-300 border-emerald-500',
    mark: 'bg-emerald-200/90 text-slate-950 rounded-sm px-0.5',
  },
  pink: {
    label: 'Hồng',
    swatch: 'bg-rose-300 border-rose-500',
    mark: 'bg-rose-200/90 text-slate-950 rounded-sm px-0.5',
  },
};

const READING_PASSAGES = [
  {
    id: 1,
    label: 'Passage 1',
    questionRange: [1, 13],
    timeGuidance: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
    title: 'The Architecture of Time: How Ancient Civilizations Measured the Cosmos',
    subtitle: 'From Neolithic solar alignments to Alexandrian water clocks, early horology reshaped human social coordination.',
    paragraphs: [
      {
        id: 'A',
        text: 'Long before mechanical escapements ticked inside European cathedrals, early agrarian societies confronted an urgent cognitive problem: how to synchronize planting, irrigation, and ritual calendars with celestial rhythms. Archaeological excavations across Mesopotamia and Upper Egypt reveal that the earliest timekeeping instruments were not portable gadgets, but monumental stone sightlines anchored directly into the landscape. By tracking the horizon point where the sun rose at the solstices, priest-astronomers transformed vast architectural terraces into durable astronomical calculators.',
      },
      {
        id: 'B',
        text: 'Around 1500 BCE, Egyptian engineers refined portable measurement by introducing the shadow clock, or merkhet, alongside calibrated water vessels known as clepsydrae. Unlike sundials, which became useless after dusk or beneath overcast skies, the outflow clepsydra relied on water escaping through a tiny aperture at the base of a stone bowl. However, early artisans quickly noticed a physical flaw: as the water level dropped, reduced hydrostatic pressure slowed the drip rate, causing hours measured late at night to stretch noticeably longer than earlier ones.',
      },
      {
        id: 'C',
        text: 'This hydro-mechanical distortion puzzled Mediterranean scholars for centuries until Ctesibius of Alexandria devised an ingenious constant-head regulator in the third century BCE. By channeling water from a continuously overflowing primary reservoir into a secondary cylinder fitted with a conical float, Ctesibius ensured that pressure remained uniform throughout the day and night. His float carried a miniature bronze pointer that rose steadily past an engraved pillar, and in his most ambitious designs, cascading water drove gear trains that sounded bronze bells and released sculpted pebbles at each passing hour.',
      },
      {
        id: 'D',
        text: 'Parallel innovations unfolded independently in East Asia, culminating in the monumental cosmic clock tower constructed by Su Song in Kaifeng in 1088 CE. Powered by a massive eleven-meter waterwheel, Su Song’s tower employed an intermittent bucket-release escapement—a crucial mechanical precursor to the verge-and-foliot regulators later adopted in medieval Europe. Notably, Su Song documented every cog, pivot, and counterweight in an illustrated treatise so that future imperial workshops could replicate the mechanism without relying solely on oral apprenticeship.',
      },
      {
        id: 'E',
        text: 'Yet precision timekeeping was never purely an engineering pursuit; it fundamentally reordered collective labor and political authority. Once civic bells and geared towers divided workdays into uniform, quantifiable segments rather than fluid intervals between dawn and dusk, time shifted from a lived natural cycle into an abstract commodity. Historians of technology argue that this transition laid the conceptual foundation for modern industrial scheduling centuries before the steam engine arrived.',
      },
    ],
    questionGroups: [
      {
        id: 'p1-tfng',
        type: 'tfng',
        title: 'Questions 1–5',
        instruction:
          'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE, or NOT GIVEN.',
        questions: [
          {
            id: 1,
            statement: 'The earliest timekeeping devices discovered in Mesopotamia and Upper Egypt were designed to be easily carried from village to village.',
            answer: 'FALSE',
            explanation: 'Paragraph A states the earliest instruments were "not portable gadgets, but monumental stone sightlines anchored directly into the landscape."',
          },
          {
            id: 2,
            statement: 'Early Egyptian water clocks operated reliably regardless of cloud cover or the absence of sunlight.',
            answer: 'TRUE',
            explanation: 'Paragraph B contrasts clepsydrae with sundials, noting that sundials failed after dusk or under overcast skies whereas outflow clepsydrae worked continuously.',
          },
          {
            id: 3,
            statement: 'In early outflow clepsydrae, the rate of water dripping accelerated as the vessel gradually emptied.',
            answer: 'FALSE',
            explanation: 'Paragraph B states that "reduced hydrostatic pressure slowed the drip rate" as the water level fell, making late-night hours longer.',
          },
          {
            id: 4,
            statement: 'Ctesibius collaborated directly with Egyptian temple builders before inventing his conical float regulator.',
            answer: 'NOT GIVEN',
            explanation: 'Paragraph C describes Ctesibius’s invention in Alexandria, but gives no information about whether he collaborated with Egyptian temple builders.',
          },
          {
            id: 5,
            statement: 'Su Song produced written technical drawings so that others could rebuild his clock tower in the future.',
            answer: 'TRUE',
            explanation: 'Paragraph D states he "documented every cog, pivot, and counterweight in an illustrated treatise so that future imperial workshops could replicate the mechanism."',
          },
        ],
      },
      {
        id: 'p1-mcq',
        type: 'mcq',
        title: 'Questions 6–9',
        instruction: 'Choose the correct letter, A, B, C, or D.',
        questions: [
          {
            id: 6,
            prompt: 'What key problem did Ctesibius’s primary reservoir solve in third-century BCE Alexandria?',
            options: [
              'A. It prevented algae from blocking the narrow outflow hole.',
              'B. It maintained consistent water pressure regardless of total volume.',
              'C. It eliminated the need to refill the clock during winter months.',
              'D. It replaced bronze bells with lighter wooden indicators.',
            ],
            answer: 'B',
            explanation: 'Paragraph C explains that keeping a continuously overflowing primary reservoir ensured "that pressure remained uniform throughout the day and night."',
          },
          {
            id: 7,
            prompt: 'Why is Su Song’s 1088 CE clock tower highlighted as a milestone in mechanical engineering?',
            options: [
              'A. It was the first clock in history to operate without water.',
              'B. It introduced an escapement mechanism that regulated motion in intervals.',
              'C. It directly copied European verge-and-foliot cathedral clocks.',
              'D. It relied entirely on secret oral instructions passed to apprentices.',
            ],
            answer: 'B',
            explanation: 'Paragraph D highlights its "intermittent bucket-release escapement—a crucial mechanical precursor to the verge-and-foliot regulators."',
          },
          {
            id: 8,
            prompt: 'According to Paragraph E, how did mechanical clocks alter human perception of time?',
            options: [
              'A. People abandoned agricultural calendars completely.',
              'B. Workers preferred flexible intervals tied to natural daylight.',
              'C. Time began to be treated as a measurable, standardized resource.',
              'D. Religious ceremonies lost their influence over civic festivals.',
            ],
            answer: 'C',
            explanation: 'Paragraph E notes that time "shifted from a lived natural cycle into an abstract commodity" divided into uniform segments.',
          },
          {
            id: 9,
            prompt: 'Which statement best reflects the main thesis of Reading Passage 1?',
            options: [
              'A. Ancient astronomers were more accurate than modern atomic physicists.',
              'B. Technical advances in timekeeping gradually reshaped both mechanics and society.',
              'C. European clocks emerged independently without any Asian predecessors.',
              'D. Stone calendars proved superior to water-driven horology.',
            ],
            answer: 'B',
            explanation: 'The passage traces architectural sightlines, clepsydrae, Ctesibius, Su Song, and concludes with societal/industrial transformation.',
          },
        ],
      },
      {
        id: 'p1-summary',
        type: 'summary',
        title: 'Questions 10–13',
        instruction:
          'Complete the summary below. Choose ONE WORD ONLY from Reading Passage 1 for each answer.',
        summaryTitle: 'From Solar Monuments to Regulated Clocks',
        segments: [
          { type: 'text', value: 'Early agricultural civilizations initially aligned monumental ' },
          { type: 'blank', questionId: 10, answer: 'stone', explanation: 'Paragraph A: "monumental stone sightlines"' },
          { type: 'text', value: ' structures with solar horizons to organize seasonal harvests. Later, Egyptian artisans constructed water-based clepsydrae that functioned even during cloudy nights, though declining hydrostatic ' },
          { type: 'blank', questionId: 11, answer: 'pressure', explanation: 'Paragraph B: "reduced hydrostatic pressure slowed the drip rate"' },
          { type: 'text', value: ' distorted their accuracy. In Alexandria, Ctesibius stabilized flow rates by adding a secondary cylinder and a conical ' },
          { type: 'blank', questionId: 12, answer: 'float', explanation: 'Paragraph C: "fitted with a conical float"' },
          { type: 'text', value: ' that drove time markers. Centuries later in Kaifeng, Su Song published a detailed ' },
          { type: 'blank', questionId: 13, answer: 'treatise', explanation: 'Paragraph D: "an illustrated treatise"' },
          { type: 'text', value: ' preserving the blueprints of his geared cosmic tower for future craftsmen.' },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Passage 2',
    questionRange: [14, 26],
    timeGuidance: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
    title: 'Subterranean Commerce: Mycorrhizal Networks and Cooperative Forest Ecology',
    subtitle: 'How microscopic fungal filaments transform isolated trees into chemically linked underground economies.',
    paragraphs: [
      {
        id: 'A',
        text: 'For much of the twentieth century, classical forestry modeled woodland ecosystems primarily as Darwinian arenas of solitary competition, where neighboring trees raced upward for sunlight and horizontally for groundwater. Beneath the leaf litter, however, microscopic filaments called hyphae—produced by symbiotic mycorrhizal fungi—weave dense subterranean webs linking the root tips of distinct trees, sometimes across unrelated botanical species. Because these fungal threads are orders of magnitude finer than plant root hairs, they infiltrate microscopic soil pores inaccessible to trees alone.',
      },
      {
        id: 'B',
        text: 'This biological alliance operates through calibrated biochemical reciprocity. Tree canopies harvest solar energy via photosynthesis, converting atmospheric carbon dioxide into soluble sugars that are pumped downward into root tissues. Fungi cannot synthesize carbohydrates independently, so they absorb a portion of these carbon-rich sugars; in exchange, fungal enzymes dissolve mineral phosphorus and organic nitrogen locked inside decaying rock and humus, delivering vital nutrients back to their photosynthetic hosts.',
      },
      {
        id: 'C',
        text: 'In the late 1990s, forest ecologist Suzanne Simard conducted isotope-tracing experiments in temperate Douglas-fir and paper-birch stands in British Columbia. By enclosing branches in airtight plastic bags containing radioactive carbon-13 and carbon-14 isotopes, Simard demonstrated that carbon fixed by sunlit birch trees migrated through fungal conduits into shaded fir seedlings several meters away. Crucially, the direction of net carbon flow reversed seasonally: when birch trees shed their leaves in autumn, evergreen firs supplied carbon back to their dormant deciduous neighbors.',
      },
      {
        id: 'D',
        text: 'Beyond metabolic exchange, field trials indicate that mycorrhizal networks transmit chemical warning signals when foliage faces herbivore attack. When aphids infest a donor plant, elevated concentrations of salicylic and jasmonic acid derivatives travel along hyphal bridges to neighboring saplings within twenty-four hours, prompting uninfected recipients to synthesize bitter defensive compounds preemptively. Nevertheless, several skeptical plant physiologists caution against romanticizing the forest as a wholly altruistic superorganism, pointing out that fungi may hoard scarce phosphorus when soil reserves drop to protect their own reproductive spores.',
      },
      {
        id: 'E',
        text: 'Understanding these underground trade networks carries direct implications for modern silviculture. Clear-cutting practices that strip mature "hub trees" and sterilize topsoil with heavy machinery sever centuries-old fungal lineages, forcing newly planted monoculture saplings to endure severe nutrient stress. By retaining diverse seed trees and minimizing soil compaction, contemporary conservationists hope to preserve the living subterranean infrastructure that buffers forests against drought and pathogen outbreaks.',
      },
    ],
    questionGroups: [
      {
        id: 'p2-tfng',
        type: 'tfng',
        title: 'Questions 14–18',
        instruction: 'Do the following statements agree with the information given in Reading Passage 2? Choose TRUE, FALSE, or NOT GIVEN.',
        questions: [
          {
            id: 14,
            statement: 'Mycorrhizal fungal hyphae can only connect trees belonging to the same botanical species.',
            answer: 'FALSE',
            explanation: 'Paragraph A explicitly says they connect roots "sometimes across unrelated botanical species."',
          },
          {
            id: 15,
            statement: 'Fungi are unable to manufacture their own carbohydrates directly from sunlight.',
            answer: 'TRUE',
            explanation: 'Paragraph B states: "Fungi cannot synthesize carbohydrates independently, so they absorb a portion of these carbon-rich sugars."',
          },
          {
            id: 16,
            statement: 'In Simard’s British Columbia study, net carbon transfer always moved exclusively from birch trees to fir seedlings throughout the entire year.',
            answer: 'FALSE',
            explanation: 'Paragraph C specifies that "the direction of net carbon flow reversed seasonally" in autumn.',
          },
          {
            id: 17,
            statement: 'Suzanne Simard repeated her carbon isotope experiments in tropical rainforests in South America.',
            answer: 'NOT GIVEN',
            explanation: 'Paragraph C mentions British Columbia temperate stands only; tropical rainforests are never mentioned.',
          },
          {
            id: 18,
            statement: 'Some scientists dispute the view that fungal networks always distribute nutrients out of pure generosity toward host trees.',
            answer: 'TRUE',
            explanation: 'Paragraph D notes skeptical physiologists argue fungi "may hoard scarce phosphorus when soil reserves drop to protect their own reproductive spores."',
          },
        ],
      },
      {
        id: 'p2-mcq',
        type: 'mcq',
        title: 'Questions 19–22',
        instruction: 'Choose the correct letter, A, B, C, or D.',
        questions: [
          {
            id: 19,
            prompt: 'Why are fungal hyphae particularly effective at extracting mineral nutrients from forest soil?',
            options: [
              'A. They grow thicker than tree trunks near the surface.',
              'B. They are slim enough to penetrate microscopic soil spaces.',
              'C. They replace the need for atmospheric carbon dioxide.',
              'D. They store rainwater inside hollow wooden stems.',
            ],
            answer: 'B',
            explanation: 'Paragraph A notes hyphae are "orders of magnitude finer than plant root hairs" and enter microscopic soil pores.',
          },
          {
            id: 20,
            prompt: 'How did Simard verify the movement of carbon between separate trees?',
            options: [
              'A. By staining fungal filaments with fluorescent blue dye.',
              'B. By enclosing foliage in bags infused with traceable carbon isotopes.',
              'C. By weighing fallen autumn birch leaves over five years.',
              'D. By severing root systems with stainless steel barriers.',
            ],
            answer: 'B',
            explanation: 'Paragraph C describes sealing branches in airtight bags containing radioactive carbon-13 and carbon-14 isotopes.',
          },
          {
            id: 21,
            prompt: 'What happens to nearby saplings after a donor tree suffers an aphid infestation?',
            options: [
              'A. They immediately shed their leaves to halt fungal spread.',
              'B. They receive chemical signals and begin producing protective deterrents.',
              'C. They expel all mycorrhizal fungi from their root hairs.',
              'D. They double their photosynthesis rate within two hours.',
            ],
            answer: 'B',
            explanation: 'Paragraph D explains chemical derivatives travel along hyphal bridges, prompting recipients to synthesize bitter defensive compounds.',
          },
          {
            id: 22,
            prompt: 'What silvicultural reform does Paragraph E recommend?',
            options: [
              'A. Applying synthetic fertilizers after complete clear-cutting.',
              'B. Planting fast-growing monocultures with deep mechanical tilling.',
              'C. Preserving mature seed trees and avoiding severe soil disturbance.',
              'D. Removing deciduous species from boreal woodland margins.',
            ],
            answer: 'C',
            explanation: 'Paragraph E advocates "retaining diverse seed trees and minimizing soil compaction."',
          },
        ],
      },
      {
        id: 'p2-summary',
        type: 'summary',
        title: 'Questions 23–26',
        instruction: 'Complete the summary below. Choose ONE WORD ONLY from Reading Passage 2 for each answer.',
        summaryTitle: 'Underground Fungal Trade & Forest Defense',
        segments: [
          { type: 'text', value: 'Rather than functioning purely through isolated competition, forest trees trade carbon-based ' },
          { type: 'blank', questionId: 23, answer: 'sugars', explanation: 'Paragraph B: "soluble sugars" / "carbon-rich sugars"' },
          { type: 'text', value: ' produced in their canopies for dissolved minerals such as nitrogen and ' },
          { type: 'blank', questionId: 24, answer: 'phosphorus', explanation: 'Paragraph B: "dissolve mineral phosphorus"' },
          { type: 'text', value: ' supplied by root-associated fungi. Besides nutrients, hyphal conduits relay biochemical alerts triggered by ' },
          { type: 'blank', questionId: 25, answer: 'aphids', explanation: 'Paragraph D: "When aphids infest a donor plant"' },
          { type: 'text', value: ' or other herbivores, enabling nearby saplings to mount chemical defenses ahead of time. Protecting mature hub trees helps forests resist pathogen outbreaks and ' },
          { type: 'blank', questionId: 26, answer: 'drought', explanation: 'Paragraph E: "buffers forests against drought and pathogen outbreaks"' },
          { type: 'text', value: '.' },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Passage 3',
    questionRange: [27, 40],
    timeGuidance: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
    title: 'Linguistic Relativity, Cognitive Architecture, and the Limits of Thought',
    subtitle: 'An academic inquiry into formal syntax, universal grammar, and whether native language constrains human consciousness.',
    paragraphs: [
      {
        id: 'A',
        text: 'For over two centuries, philosophers of mind and anthropological linguists have grappled with the intimate entanglement between formal language and human consciousness. In its most unyielding formulation—known colloquially as the strong Sapir-Whorf hypothesis or radical linguistic determinism—the theory posits that human cognitive architecture is inexorably constrained by the formal syntax and lexical taxonomy of one’s native tongue. Propounded in the early twentieth century by Edward Sapir and Benjamin Lee Whorf, this perspective suggested that individuals whose languages lack temporal inflection do not merely describe time differently; they inhabit an entirely disparate metaphysical landscape.',
      },
      {
        id: 'B',
        text: 'By the mid-twentieth century, however, this radical determinist paradigm encountered severe empirical resistance. A landmark refutation emerged from color perception experiments conducted by Eleanor Rosch among the Dani, an indigenous community in the highlands of Papua New Guinea. The Dani lexicon contains precisely two fundamental color terms: mili (dark and cool hues) and mola (light and warm hues). According to strict linguistic determinism, the Dani should have been perceptually incapable of discriminating between adjacent spectral shades. Yet empirical testing established that Dani subjects distinguished focal chromatic hues with identical perceptual acuity to native English speakers.',
      },
      {
        id: 'C',
        text: 'The theoretical coup de grâce against strong determinism was delivered by Noam Chomsky’s cognitive revolution in generative linguistics. Chomsky argued that human languages, despite conspicuous surface variances, share a biologically endowed computational blueprint termed Universal Grammar (UG). Beneath the phonetic diversity of seven thousand tongues lies a uniform recursive syntactic operation—formalized in minimalist syntax as Merge—which builds hierarchical expressions from discrete lexical items. From this nativist vantage point, thought fundamentally precedes speech, rooted in an internal conceptual framework independent of superficial phonology.',
      },
      {
        id: 'D',
        text: 'Contemporary neuroimaging technologies—most notably functional Magnetic Resonance Imaging (fMRI) and magnetoencephalography (MEG)—have corroborated this pre-linguistic architecture. Studies measuring neural activation during abstract problem-solving show that dense semantic computations unfold across prefrontal and parietal cortices milliseconds prior to the recruitment of Broca’s and Wernicke’s areas. Moreover, clinical evaluations of patients with severe global aphasia reveal that individuals suffering catastrophic damage to language centers frequently retain intact capacities for deductive syllogistic reasoning, spatial navigation, and mathematical calculation.',
      },
      {
        id: 'E',
        text: 'Nevertheless, the burial of radical determinism did not consign linguistic relativity to obsolescence. Cognitive psychologists such as Lera Boroditsky and Dan Slobin have championed weak linguistic relativity—contending that while language erects no prison around thought, it systematically directs habitual attention. For instance, the Australian Aboriginal community of Pormpuraaw speaks Kuuk Thaayorre, which replaces egocentric coordinates ("to my left") with absolute cardinal directions ("north", "south-west"). Consequently, Kuuk Thaayorre speakers maintain an automated dead-reckoning awareness foreign to speakers of Indo-European languages.',
      },
      {
        id: 'F',
        text: 'A fertile philosophical synthesis between universal cognition and linguistic influence emerges in the Extended Mind thesis articulated by Andy Clark and David Chalmers. Human working memory is strictly bounded by biological bandwidth. Within Clark and Chalmers’ framework, formal syntax, mathematical notation, and logical distinctions act not as arbitrary cultural shackles, but as external epistemic scaffolding—cognitive levers enabling finite biological minds to manipulate complex deductive chains and inspect their own reasoning critically.',
      },
    ],
    questionGroups: [
      {
        id: 'p3-mcq',
        type: 'mcq',
        title: 'Questions 27–31',
        instruction: 'Choose the correct letter, A, B, C, or D.',
        questions: [
          {
            id: 27,
            prompt: 'What core claim did the strong Sapir-Whorf hypothesis make in the early twentieth century?',
            options: [
              'A. Spoken grammar passively translates an already uniform mental reality.',
              'B. Native vocabulary and syntax rigidly bound how humans conceptualize reality.',
              'C. Temporal metaphors exist identically in every ancient language.',
              'D. Children acquire metaphysical beliefs prior to learning any spoken words.',
            ],
            answer: 'B',
            explanation: 'Paragraph A defines radical linguistic determinism as the claim that cognitive architecture is "inexorably constrained" by native syntax and taxonomy.',
          },
          {
            id: 28,
            prompt: 'Why did Eleanor Rosch’s experiment with the Dani challenge linguistic determinism?',
            options: [
              'A. Dani speakers invented new English loanwords during visual testing.',
              'B. Two color labels prevented Dani subjects from noticing warm tones.',
              'C. Subjects matched English speakers’ color discrimination despite limited color vocabulary.',
              'D. Cool hues triggered faster eye movements among highland villagers.',
            ],
            answer: 'C',
            explanation: 'Paragraph B shows Dani subjects discriminated focal colors with "identical perceptual acuity to native English speakers."',
          },
          {
            id: 29,
            prompt: 'What does Noam Chomsky mean by describing "Merge" as a universal operation?',
            options: [
              'A. All world languages share an innate rule that recursively combines elements hierarchically.',
              'B. Distant languages inevitably fuse into one global vocabulary over centuries.',
              'C. Phonetic accents disappear once speakers master minimalist syntax.',
              'D. Surface spelling dictates whether an individual can learn recursion.',
            ],
            answer: 'A',
            explanation: 'Paragraph C defines Merge as "a uniform recursive syntactic operation... which constructs hierarchical expressions."',
          },
          {
            id: 30,
            prompt: 'What distinguishes Kuuk Thaayorre spatial cognition from English speakers’ spatial habits?',
            options: [
              'A. Kuuk Thaayorre lacks words for geographical landmarks.',
              'B. Kuuk Thaayorre relies on body-relative directions like left and right.',
              'C. Kuuk Thaayorre speakers habitually encode locations via fixed compass bearings.',
              'D. Kuuk Thaayorre prevents speakers from navigating enclosed buildings.',
            ],
            answer: 'C',
            explanation: 'Paragraph E notes Kuuk Thaayorre replaces egocentric terms with "absolute cardinal directions" cultivating automated dead-reckoning.',
          },
          {
            id: 31,
            prompt: 'According to Andy Clark and David Chalmers, what role does formal academic syntax perform?',
            options: [
              'A. It permanently rewires human ocular biology.',
              'B. It functions as an external cognitive scaffold supporting working memory.',
              'C. It replaces philosophical inquiry with emotional intuition.',
              'D. It restricts abstract reasoning to native Indo-European speakers.',
            ],
            answer: 'B',
            explanation: 'Paragraph F describes formal syntax and notation as "external epistemic scaffolding—cognitive levers" supporting bounded working memory.',
          },
        ],
      },
      {
        id: 'p3-tfng',
        type: 'tfng',
        title: 'Questions 32–35',
        instruction: 'Do the following statements agree with the information given in Reading Passage 3? Choose TRUE, FALSE, or NOT GIVEN.',
        questions: [
          {
            id: 32,
            statement: 'Proponents of radical linguistic determinism argued that differences in grammatical tense alter speakers’ fundamental experience of time.',
            answer: 'TRUE',
            explanation: 'Paragraph A explicitly says speakers without temporal inflection "inhabit an entirely disparate metaphysical landscape."',
          },
          {
            id: 33,
            statement: 'Eleanor Rosch found that having only two basic color terms prevented the Dani from telling blue and green apart.',
            answer: 'FALSE',
            explanation: 'Paragraph B states they "distinguished focal chromatic hues with identical perceptual acuity to native English speakers."',
          },
          {
            id: 34,
            statement: 'Noam Chomsky performed physical surgical experiments on human brain tissue to locate Universal Grammar.',
            answer: 'NOT GIVEN',
            explanation: 'Paragraph C presents Chomsky’s computational theory of Universal Grammar; the text never states whether he conducted or avoided surgical brain experiments.',
          },
          {
            id: 35,
            statement: 'Patients suffering from severe global aphasia invariably lose all capacity for mathematical reasoning.',
            answer: 'FALSE',
            explanation: 'Paragraph D states patients with severe global aphasia "frequently retain intact capacities for... mathematical calculation."',
          },
        ],
      },
      {
        id: 'p3-summary',
        type: 'summary',
        title: 'Questions 36–40',
        instruction: 'Complete the summary below. Choose ONE WORD ONLY from Reading Passage 3 for each answer.',
        summaryTitle: 'Reconciling Language and Human Thought',
        segments: [
          { type: 'text', value: 'Whereas early linguistic ' },
          { type: 'blank', questionId: 36, answer: 'determinism', explanation: 'Paragraph A: "radical linguistic determinism"' },
          { type: 'text', value: ' argued that native grammar confines thought rigidly, color tests with the Dani community demonstrated intact sensory discrimination. Chomsky later proposed that an innate computational operation known as ' },
          { type: 'blank', questionId: 37, answer: 'Merge', explanation: 'Paragraph C: "formalized in minimalist syntax as Merge"' },
          { type: 'text', value: ' underlies all spoken languages. Modern neuroimaging and clinical cases of severe global ' },
          { type: 'blank', questionId: 38, answer: 'aphasia', explanation: 'Paragraph D: "severe global aphasia"' },
          { type: 'text', value: ' further indicate that conceptual computation occurs prior to speech production. Nonetheless, neo-Whorfian researchers note that grammar guides habitual ' },
          { type: 'blank', questionId: 39, answer: 'attention', explanation: 'Paragraph E: "systematically directs habitual attention"' },
          { type: 'text', value: ', while philosophers Clark and Chalmers portray formal syntax as external epistemic ' },
          { type: 'blank', questionId: 40, answer: 'scaffolding', explanation: 'Paragraph F: "external epistemic scaffolding"' },
          { type: 'text', value: ' that amplifies human working memory.' },
        ],
      },
    ],
  },
];

// Build lookup maps once from structured passage data so no question logic is duplicated
const ALL_QUESTION_META = (() => {
  const map = {};
  READING_PASSAGES.forEach((passage) => {
    passage.questionGroups.forEach((group) => {
      if (group.type === 'summary') {
        group.segments.forEach((seg) => {
          if (seg.type === 'blank') {
            map[seg.questionId] = {
              id: seg.questionId,
              passageId: passage.id,
              type: 'summary',
              answer: seg.answer,
              explanation: seg.explanation,
              prompt: `Summary blank ${seg.questionId} (${group.summaryTitle})`,
            };
          }
        });
      } else {
        group.questions.forEach((q) => {
          map[q.id] = {
            id: q.id,
            passageId: passage.id,
            type: group.type,
            answer: q.answer,
            explanation: q.explanation,
            prompt: q.statement || q.prompt,
          };
        });
      }
    });
  });
  return map;
})();

const TOTAL_QUESTIONS = 40;
const QUESTION_NUMBERS = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1);

// ============================================================================
// 2. PURE HELPER FUNCTIONS (Time Formatting, Scoring, Text Highlights, AI Brain)
// ============================================================================

function formatCountdown(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function estimateIELTSBand(correctCount) {
  if (correctCount >= 39) return '9.0';
  if (correctCount >= 37) return '8.5';
  if (correctCount >= 35) return '8.0';
  if (correctCount >= 33) return '7.5';
  if (correctCount >= 30) return '7.0';
  if (correctCount >= 27) return '6.5';
  if (correctCount >= 23) return '6.0';
  if (correctCount >= 19) return '5.5';
  if (correctCount >= 15) return '5.0';
  return '4.5';
}

function normalizeAnswer(val) {
  return (val || '').trim().toLowerCase();
}

function isAnswerCorrect(qId, userVal) {
  const meta = ALL_QUESTION_META[qId];
  if (!meta || !userVal) return false;
  return normalizeAnswer(userVal) === normalizeAnswer(meta.answer);
}

/**
 * Compute character offsets of current Selection relative to paragraph plain text.
 * Relies on <p> containing only text segments (plain text + <mark> spans).
 */
function getParagraphSelectionOffsets(paragraphEl) {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return null;

  const range = selection.getRangeAt(0);
  if (!paragraphEl.contains(range.startContainer) || !paragraphEl.contains(range.endContainer)) {
    return null;
  }

  const preStart = document.createRange();
  preStart.selectNodeContents(paragraphEl);
  preStart.setEnd(range.startContainer, range.startOffset);
  const start = preStart.toString().length;

  const selectedText = range.toString();
  const end = start + selectedText.length;

  if (!selectedText.trim() || start === end) return null;
  return { start, end, text: selectedText };
}

/**
 * Insert a new highlight interval into an existing non-overlapping sorted array.
 */
function insertNonOverlappingHighlight(existingList, newItem) {
  const result = [];
  for (const item of existingList) {
    if (item.end <= newItem.start || item.start >= newItem.end) {
      result.push(item);
      continue;
    }
    // Trim partial leftovers outside the new highlight range
    if (item.start < newItem.start) {
      result.push({ ...item, id: `${item.id}-L`, end: newItem.start });
    }
    if (item.end > newItem.end) {
      result.push({ ...item, id: `${item.id}-R`, start: newItem.end });
    }
  }
  result.push(newItem);
  return result.sort((a, b) => a.start - b.start);
}

/**
 * Generate Socratic AI Tutor response grounded in active passage, question, or highlighted quote.
 */
function generateSocraticReply(userMessage, context) {
  const qLower = userMessage.toLowerCase();
  const qMatch = userMessage.match(/\b([1-9]|[1-3][0-9]|40)\b/);
  const targetQId = qMatch ? Number(qMatch[1]) : context.activeQuestion;
  const meta = ALL_QUESTION_META[targetQId];

  if (qLower.includes('false') && qLower.includes('not given')) {
    return [
      '**Nguyên tắc Phân biệt FALSE vs NOT GIVEN (Logic học Hình thức):**',
      '1. **FALSE (Mâu thuẫn trực tiếp P ∧ ¬P):** Bài đọc chứa phát biểu khẳng định điều *ngược lại* với mệnh đề câu hỏi.',
      '2. **NOT GIVEN (Bất định tri thức):** Bài đọc không đề cập hoặc không đủ tiền đề logic để xác nhận đúng hay sai. Tuyệt đối không dùng kiến thức nền cá nhân để suy diễn thành FALSE!',
      targetQId && meta?.type === 'tfng'
        ? `\n*Gợi ý cho Câu ${targetQId}:* Hãy tìm từ khóa định lượng hoặc mệnh đề phủ định trong đoạn liên quan. Bạn thấy có tiền đề mâu thuẫn trực tiếp hay tác giả hoàn toàn im lặng?`
        : '',
    ].join('\n');
  }

  if (context.quotedText && (qLower.includes('giải thích') || qLower.includes('highlight') || qLower.includes('đoạn'))) {
    return [
      `Đang phân tích ngữ nghĩa & cú pháp đoạn bạn vừa trích dẫn:\n> "${context.quotedText.slice(0, 140)}${context.quotedText.length > 140 ? '...' : ''}"`,
      '',
      '**Góc nhìn Socratic:**',
      '• Chú ý quan hệ *chủ ngữ logic — động từ chính* và các liên từ nhượng bộ (`however`, `yet`, `nevertheless`). Trong IELTS Reading, câu chứa tín hiệu đảo chiều thường giấu luận điểm cốt lõi.',
      '• Bạn thử xác định: Mệnh đề này đang *bác bỏ* giả thuyết trước đó hay đang đưa ra *bằng chứng bổ sung*?',
    ].join('\n');
  }

  if (targetQId === 34) {
    return [
      '**Phân tích Socratic cho Câu 34 (Noam Chomsky & Universal Grammar):**',
      'Câu hỏi kiểm tra: *"Chomsky performed physical surgical experiments on human brain tissue..."*',
      '',
      '• **Bước 1:** Đối chiếu Đoạn C Passage 3 — bài đọc nói Chomsky đề xuất mô hình tính toán *Universal Grammar (Merge)*.',
      '• **Bước 2 (Câu hỏi phản biện):** Văn bản có nói ông *từng mổ não* hay nói ông *tuyệt đối không bao giờ mổ não* không?',
      '• **Kết luận phương pháp:** Khi *thiếu dữ kiện xác nhận* (Absence of Evidence) chứ không phải *dữ kiện phản bác* (Evidence of Absence), đáp án hợp logic là **NOT GIVEN**.',
    ].join('\n');
  }

  if (meta) {
    const typeHints = {
      tfng: 'Đây là dạng **True / False / Not Given**. Hãy khoanh vùng 1–2 câu bằng chứng trực tiếp trước khi kết luận; đừng suy diễn ngoài văn bản.',
      mcq: 'Đây là dạng **Multiple Choice (A–D)**. Hãy dùng phép loại trừ 3 phương án bẫy: quá cực đoan (*always/only*), sai quan hệ nhân quả, hoặc ngoài phạm vi đoạn.',
      summary: 'Đây là dạng **Summary Completion (ONE WORD ONLY)**. Xác định từ loại cần điền (danh từ / tính từ / động từ) trước khi quay lại quét Passage.',
    };
    return [
      `**Định hướng tư duy cho Câu ${targetQId} (Passage ${meta.passageId}):**`,
      `> ${meta.prompt}`,
      '',
      typeHints[meta.type],
      context.isFinished
        ? `\n✅ **Chữa bài chi tiết:** Đáp án chuẩn là **${meta.answer}**. (${meta.explanation})`
        : '\n💡 *Gợi ý:* Bạn hãy đối chiếu từ khóa chính với Passage bên trái, chọn câu trả lời thử rồi hỏi lại mình lập luận của bạn nhé!',
    ].join('\n');
  }

  return [
    `Tôi đã tiếp nhận câu hỏi của bạn trong **Passage ${context.currentPassage}**: "${userMessage}"`,
    '',
    'Để mình hỗ trợ sâu nhất theo phương pháp Socrates:',
    '1. Bạn có thể **bôi đen một câu tiếng Anh** ở cột Passage trái rồi bấm **"Hỏi AI"**.',
    '2. Hoặc gõ số câu hỏi (ví dụ: `"Phân tích câu 3"` hoặc `"Tại sao câu 34 là NOT GIVEN?"`).',
  ].join('\n');
}

// ============================================================================
// 3. SUB-COMPONENTS (Header, Passage Pane, Questions Pane, Bottom Nav, AI, Modals)
// ============================================================================

function TopHeader({
  examTitle,
  timeLeft,
  answeredCount,
  isTimerPaused,
  onTogglePause,
  onOpenSettings,
  onOpenFinishModal,
  isFinished,
}) {
  const isLowTime = timeLeft <= 300 && timeLeft > 60;
  const isCriticalTime = timeLeft <= 60;

  return (
    <header className="h-14 shrink-0 bg-blue-700 text-white px-4 sm:px-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-blue-800 shadow-sm z-30">
      {/* Left: Exam Title & Progress */}
      <div className="flex items-center gap-3 min-w-0 justify-self-start">
        <div className="hidden sm:flex items-center gap-1.5 bg-blue-800/80 border border-blue-500/40 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-amber-300" />
          <span>IELTS Academic</span>
        </div>
        <div className="min-w-0">
          <h1 className="font-bold text-sm sm:text-base truncate leading-tight">
            {examTitle}
          </h1>
          <p className="text-[11px] text-blue-100/90 hidden sm:block">
            Academic Reading • {answeredCount}/{TOTAL_QUESTIONS} câu đã trả lời
          </p>
        </div>
      </div>

      {/* Center: Fixed Monospace Countdown Timer */}
      <div
        className={`justify-self-center flex items-center gap-2 px-3.5 py-1 rounded-lg border transition-colors ${
          isCriticalTime
            ? 'bg-red-600/90 border-red-300 animate-pulse'
            : isLowTime
              ? 'bg-amber-500/25 border-amber-300 text-amber-100'
              : 'bg-blue-800/70 border-blue-500/50'
        }`}
        aria-live="polite"
      >
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-100 shrink-0" />
        <span className="font-mono text-xl sm:text-2xl font-bold tracking-wider tabular-nums">
          {formatCountdown(timeLeft)}
        </span>
        {!isFinished && (
          <button
            type="button"
            onClick={onTogglePause}
            title={isTimerPaused ? 'Tiếp tục đồng hồ' : 'Tạm dừng đồng hồ'}
            className="ml-1 p-1 rounded hover:bg-white/15 transition-colors"
          >
            {isTimerPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* Right: Settings Icon & Finish Test Button */}
      <div className="justify-self-end flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onOpenSettings}
          title="Cài đặt hiển thị & Giao diện thi"
          className="p-2 rounded-lg bg-blue-800/70 hover:bg-blue-600 border border-blue-500/40 text-white transition-colors"
        >
          <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={onOpenFinishModal}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{isFinished ? 'Xem Kết Quả' : 'Finish Test'}</span>
        </button>
      </div>
    </header>
  );
}

function ReadingPassagePane({
  passage,
  themeStyle,
  fontSizeClass,
  highlights,
  activeHighlightColor,
  onChangeHighlightColor,
  autoHighlight,
  onToggleAutoHighlight,
  onAddHighlight,
  onRemoveHighlight,
  onClearPassageHighlights,
  onAskAIWithQuote,
}) {
  const [selectionPopup, setSelectionPopup] = useState(null);
  const paneRef = useRef(null);

  // Clear stale selection toolbar when switching passages
  useEffect(() => {
    setSelectionPopup(null);
  }, [passage.id]);

  const handleParagraphMouseUp = (paraId, e) => {
    const paragraphEl = e.currentTarget;
    const offsets = getParagraphSelectionOffsets(paragraphEl);
    if (!offsets) {
      setSelectionPopup(null);
      return;
    }

    if (autoHighlight) {
      onAddHighlight(passage.id, paraId, {
        id: `${paraId}-${Date.now()}`,
        start: offsets.start,
        end: offsets.end,
        color: activeHighlightColor,
        text: offsets.text,
      });
      window.getSelection()?.removeAllRanges();
      setSelectionPopup(null);
      return;
    }

    const selection = window.getSelection();
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    setSelectionPopup({
      paraId,
      offsets,
      top: Math.max(68, rect.top - 48),
      left: Math.min(window.innerWidth - 270, Math.max(16, rect.left + rect.width / 2 - 120)),
    });
  };

  const applyPopupHighlight = (colorKey) => {
    if (!selectionPopup) return;
    onAddHighlight(passage.id, selectionPopup.paraId, {
      id: `${selectionPopup.paraId}-${Date.now()}`,
      start: selectionPopup.offsets.start,
      end: selectionPopup.offsets.end,
      color: colorKey,
      text: selectionPopup.offsets.text,
    });
    window.getSelection()?.removeAllRanges();
    setSelectionPopup(null);
  };

  const handlePopupAskAI = () => {
    if (!selectionPopup) return;
    onAskAIWithQuote(selectionPopup.offsets.text);
    window.getSelection()?.removeAllRanges();
    setSelectionPopup(null);
  };

  const renderParagraphSegments = (paraId, text) => {
    const paraHighlights = highlights[`${passage.id}:${paraId}`] || [];
    if (paraHighlights.length === 0) return text;

    const nodes = [];
    let cursor = 0;

    paraHighlights.forEach((hl) => {
      if (hl.start > cursor) {
        nodes.push(text.slice(cursor, hl.start));
      }
      const markStyle = HIGHLIGHT_COLORS[hl.color]?.mark || HIGHLIGHT_COLORS.yellow.mark;
      nodes.push(
        <mark
          key={hl.id}
          onClick={(evt) => {
            evt.stopPropagation();
            onRemoveHighlight(passage.id, paraId, hl.id);
          }}
          title="Nhấp để xóa highlight này"
          className={`${markStyle} cursor-pointer hover:opacity-80 transition-opacity`}
        >
          {text.slice(hl.start, hl.end)}
        </mark>
      );
      cursor = hl.end;
    });

    if (cursor < text.length) {
      nodes.push(text.slice(cursor));
    }
    return nodes;
  };

  const passageHighlightCount = Object.entries(highlights)
    .filter(([key]) => key.startsWith(`${passage.id}:`))
    .reduce((acc, [, list]) => acc + list.length, 0);

  return (
    <section
      ref={paneRef}
      onScroll={() => selectionPopup && setSelectionPopup(null)}
      className={`h-full overflow-y-auto border-b md:border-b-0 md:border-r border-slate-200 select-text relative ${themeStyle.workspaceBg}`}
    >
      {/* Sticky Highlighter Toolbar */}
      <div className={`sticky top-0 z-10 px-6 py-2.5 border-b backdrop-blur-sm flex flex-wrap items-center justify-between gap-2 text-xs ${themeStyle.subBarBg}`}>
        <div className="flex items-center gap-2 font-semibold">
          <span className="uppercase tracking-wider text-blue-600 font-mono">
            {passage.label}
          </span>
          <span className={themeStyle.mutedText}>• Bôi đen văn bản để Highlight hoặc Hỏi AI</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Color Picker Swatches */}
          <div className="flex items-center gap-1 pr-2 border-r border-slate-300/70">
            {Object.entries(HIGHLIGHT_COLORS).map(([colorKey, cfg]) => (
              <button
                key={colorKey}
                type="button"
                onClick={() => onChangeHighlightColor(colorKey)}
                title={`Màu highlight: ${cfg.label}`}
                className={`w-4 h-4 rounded-full border transition-transform ${cfg.swatch} ${
                  activeHighlightColor === colorKey ? 'ring-2 ring-blue-600 scale-110' : 'opacity-75 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleAutoHighlight}
            className={`flex items-center gap-1 px-2 py-1 rounded-md border font-medium transition-colors ${
              autoHighlight
                ? 'bg-amber-100 text-amber-900 border-amber-400'
                : 'bg-white/80 text-slate-700 border-slate-300 hover:bg-white'
            }`}
            title="Khi bật: chỉ cần kéo chuột bôi đen là tự động highlight ngay"
          >
            <Highlighter className="w-3.5 h-3.5" />
            <span>{autoHighlight ? 'Highlight nhanh: BẬT' : 'Highlight: Menu'}</span>
          </button>

          {passageHighlightCount > 0 && (
            <button
              type="button"
              onClick={() => onClearPassageHighlights(passage.id)}
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-slate-300 bg-white/80 text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors"
              title="Xóa tất cả highlight trong bài đọc này"
            >
              <Eraser className="w-3.5 h-3.5" />
              <span>Xóa ({passageHighlightCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* Floating Contextual Selection Action Bar */}
      {selectionPopup && (
        <div
          style={{ top: selectionPopup.top, left: selectionPopup.left }}
          className="fixed z-50 flex items-center gap-1.5 bg-slate-900 text-white px-2.5 py-1.5 rounded-lg shadow-xl border border-slate-700 text-xs"
        >
          <span className="text-slate-300 mr-0.5 flex items-center gap-1">
            <Highlighter className="w-3.5 h-3.5 text-yellow-300" />
          </span>
          {Object.entries(HIGHLIGHT_COLORS).map(([colorKey, cfg]) => (
            <button
              key={colorKey}
              type="button"
              onClick={() => applyPopupHighlight(colorKey)}
              className={`w-4 h-4 rounded-full border ${cfg.swatch} hover:scale-110 transition-transform`}
              title={`Highlight ${cfg.label}`}
            />
          ))}
          <div className="h-4 w-px bg-slate-700 mx-1" />
          <button
            type="button"
            onClick={handlePopupAskAI}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Hỏi AI</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectionPopup(null)}
            className="p-0.5 text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Passage Content */}
      <article className="px-6 py-6 md:px-10 md:py-8 max-w-3xl mx-auto space-y-6">
        <div className="space-y-2 pb-4 border-b border-slate-200/80">
          <p className={`text-xs font-mono uppercase tracking-wider ${themeStyle.mutedText}`}>
            {passage.timeGuidance}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight leading-snug">
            {passage.title}
          </h2>
          <p className={`text-sm italic ${themeStyle.mutedText}`}>{passage.subtitle}</p>
        </div>

        <div className="space-y-5">
          {passage.paragraphs.map((para) => (
            <div key={para.id} className="flex items-start gap-3.5">
              <span className="mt-1.5 shrink-0 w-7 h-7 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold flex items-center justify-center select-none">
                {para.id}
              </span>
              <p
                onMouseUp={(e) => handleParagraphMouseUp(para.id, e)}
                className={`font-serif ${fontSizeClass} select-text selection:bg-blue-200 selection:text-slate-900`}
              >
                {renderParagraphSegments(para.id, para.text)}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function QuestionHeaderActions({
  qId,
  isFlagged,
  onToggleFlag,
  onAskAI,
}) {
  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onAskAI(qId);
        }}
        title={`Hỏi Socratic AI về câu ${qId}`}
        className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
      >
        <Sparkles className="w-3 h-3 text-amber-500" />
        <span>Hỏi AI</span>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFlag(qId);
        }}
        title={isFlagged ? 'Bỏ đánh dấu xem lại' : 'Đánh dấu xem lại (Review)'}
        className={`p-1.5 rounded border transition-colors ${
          isFlagged
            ? 'bg-amber-100 border-amber-400 text-amber-700'
            : 'bg-white border-slate-200 text-slate-400 hover:text-amber-600 hover:border-amber-300'
        }`}
      >
        <Flag className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function AnswerReviewBadge({ qId, userAnswer, isFinished }) {
  if (!isFinished) return null;
  const meta = ALL_QUESTION_META[qId];
  const correct = isAnswerCorrect(qId, userAnswer);

  return (
    <div
      className={`mt-2.5 p-2.5 rounded-lg border text-xs flex items-start gap-2 ${
        correct
          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
          : 'bg-red-50 border-red-200 text-red-900'
      }`}
    >
      {correct ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
      )}
      <div>
        <span className="font-bold">
          {correct ? 'Chính xác!' : `Đáp án đúng: ${meta.answer}`}
        </span>
        <p className="mt-0.5 opacity-90">{meta.explanation}</p>
      </div>
    </div>
  );
}

function QuestionCardShell({
  qId,
  promptText,
  promptBold,
  isActive,
  isFlagged,
  userAnswer,
  isFinished,
  questionRefs,
  themeStyle,
  onSelectQuestion,
  onToggleFlag,
  onAskAI,
  children,
}) {
  return (
    <div
      ref={(el) => (questionRefs.current[qId] = el)}
      onClick={() => onSelectQuestion(qId)}
      className={`p-3.5 rounded-lg border transition-all ${
        isActive ? themeStyle.cardActive : themeStyle.cardInactive
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className={`text-sm leading-relaxed ${promptBold ? 'font-semibold' : 'font-medium'}`}>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-700 text-white font-mono text-xs font-bold mr-2">
            {qId}
          </span>
          {promptText}
        </p>
        <QuestionHeaderActions
          qId={qId}
          isFlagged={isFlagged}
          onToggleFlag={onToggleFlag}
          onAskAI={onAskAI}
        />
      </div>

      {children}

      <AnswerReviewBadge qId={qId} userAnswer={userAnswer} isFinished={isFinished} />
    </div>
  );
}

function QuestionsPane({
  passage,
  themeStyle,
  answers,
  flaggedQuestions,
  activeQuestion,
  questionRefs,
  isFinished,
  onSelectQuestion,
  onChangeAnswer,
  onToggleFlag,
  onAskAIForQuestion,
}) {
  const tfngChoices = ['TRUE', 'FALSE', 'NOT GIVEN'];

  return (
    <section className={`h-full overflow-y-auto px-5 py-6 md:px-8 space-y-6 ${themeStyle.questionsBg}`}>
      {passage.questionGroups.map((group) => (
        <div key={group.id} className={`rounded-xl border p-5 shadow-sm space-y-4 ${themeStyle.cardBg}`}>
          {/* Group Header */}
          <div className="border-b border-slate-200/80 pb-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold text-base text-blue-700">{group.title}</h3>
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                {group.type === 'tfng'
                  ? 'True / False / Not Given'
                  : group.type === 'mcq'
                    ? 'Multiple Choice'
                    : 'Summary Completion'}
              </span>
            </div>
            <p className={`text-sm mt-1 ${themeStyle.mutedText}`}>{group.instruction}</p>
          </div>

          {/* 1. TRUE / FALSE / NOT GIVEN */}
          {group.type === 'tfng' && (
            <div className="space-y-4">
              {group.questions.map((q) => {
                const selectedVal = answers[q.id] || '';
                return (
                  <QuestionCardShell
                    key={q.id}
                    qId={q.id}
                    promptText={q.statement}
                    promptBold={false}
                    isActive={activeQuestion === q.id}
                    isFlagged={flaggedQuestions.has(q.id)}
                    userAnswer={selectedVal}
                    isFinished={isFinished}
                    questionRefs={questionRefs}
                    themeStyle={themeStyle}
                    onSelectQuestion={onSelectQuestion}
                    onToggleFlag={onToggleFlag}
                    onAskAI={onAskAIForQuestion}
                  >
                    <div className="mt-3 flex flex-wrap gap-2.5 pl-8">
                      {tfngChoices.map((choice) => {
                        const checked = selectedVal === choice;
                        return (
                          <label
                            key={choice}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs font-mono font-semibold cursor-pointer transition-all ${
                              checked
                                ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                                : themeStyle.pillDefault
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={choice}
                              checked={checked}
                              disabled={isFinished}
                              onChange={() => onChangeAnswer(q.id, choice)}
                              className="sr-only"
                            />
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                checked ? 'border-white bg-white' : 'border-slate-400 bg-white'
                              }`}
                            >
                              {checked && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                            </span>
                            <span>{choice}</span>
                          </label>
                        );
                      })}
                    </div>
                  </QuestionCardShell>
                );
              })}
            </div>
          )}

          {/* 2. MULTIPLE CHOICE (A, B, C, D) */}
          {group.type === 'mcq' && (
            <div className="space-y-4">
              {group.questions.map((q) => {
                const selectedVal = answers[q.id] || '';
                return (
                  <QuestionCardShell
                    key={q.id}
                    qId={q.id}
                    promptText={q.prompt}
                    promptBold
                    isActive={activeQuestion === q.id}
                    isFlagged={flaggedQuestions.has(q.id)}
                    userAnswer={selectedVal}
                    isFinished={isFinished}
                    questionRefs={questionRefs}
                    themeStyle={themeStyle}
                    onSelectQuestion={onSelectQuestion}
                    onToggleFlag={onToggleFlag}
                    onAskAI={onAskAIForQuestion}
                  >
                    <div className="mt-3 space-y-2 pl-2 sm:pl-8">
                      {q.options.map((optionText) => {
                        const letter = optionText.charAt(0);
                        const checked = selectedVal === letter;

                        return (
                          <label
                            key={letter}
                            className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-sm cursor-pointer transition-all ${
                              checked ? themeStyle.optionSelected : themeStyle.optionDefault
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={letter}
                              checked={checked}
                              disabled={isFinished}
                              onChange={() => onChangeAnswer(q.id, letter)}
                              className="mt-0.5 accent-blue-600 shrink-0"
                            />
                            <span>{optionText}</span>
                          </label>
                        );
                      })}
                    </div>
                  </QuestionCardShell>
                );
              })}
            </div>
          )}

          {/* 3. SUMMARY COMPLETION (INLINE INPUT FIELDS) */}
          {group.type === 'summary' && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border ${themeStyle.summaryBoxBg}`}>
                <h4 className="font-bold text-sm text-center mb-3 tracking-wide uppercase">
                  {group.summaryTitle}
                </h4>

                <p className="text-sm sm:text-base leading-[2.1]">
                  {group.segments.map((seg, idx) => {
                    if (seg.type === 'text') {
                      return <span key={idx}>{seg.value}</span>;
                    }

                    const qId = seg.questionId;
                    const val = answers[qId] || '';
                    const isActive = activeQuestion === qId;
                    const isFlagged = flaggedQuestions.has(qId);
                    const correct = isFinished && isAnswerCorrect(qId, val);

                    return (
                      <span
                        key={qId}
                        ref={(el) => (questionRefs.current[qId] = el)}
                        className="inline-flex items-center gap-1 mx-1 align-baseline"
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-blue-700 text-white font-mono text-[11px] font-bold">
                          {qId}
                        </span>
                        <input
                          type="text"
                          value={val}
                          disabled={isFinished}
                          onFocus={() => onSelectQuestion(qId)}
                          onChange={(e) => onChangeAnswer(qId, e.target.value)}
                          placeholder={`Q${qId}`}
                          aria-label={`Question ${qId}`}
                          className={`w-32 px-2 py-0.5 rounded border text-sm font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                            isFinished
                              ? correct
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                                : 'bg-red-50 border-red-400 text-red-800'
                              : isActive
                                ? 'border-blue-600 ring-1 ring-blue-300 ' + themeStyle.inputBg
                                : themeStyle.inputBg
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => onToggleFlag(qId)}
                          title={`Đánh dấu xem lại câu ${qId}`}
                          className={`p-0.5 rounded ${
                            isFlagged ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'
                          }`}
                        >
                          <Flag className="w-3 h-3" />
                        </button>
                      </span>
                    );
                  })}
                </p>
              </div>

              {isFinished && (
                <div className="space-y-2">
                  {group.segments
                    .filter((seg) => seg.type === 'blank')
                    .map((seg) => (
                      <AnswerReviewBadge
                        key={seg.questionId}
                        qId={seg.questionId}
                        userAnswer={answers[seg.questionId]}
                        isFinished={isFinished}
                      />
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

function BottomNavigation({
  passages,
  currentPassage,
  answers,
  flaggedQuestions,
  activeQuestion,
  onSelectPassage,
  onJumpToQuestion,
  onToggleFlagActive,
}) {
  const paletteScrollRef = useRef(null);

  const scrollPalette = (direction) => {
    if (!paletteScrollRef.current) return;
    paletteScrollRef.current.scrollBy({
      left: direction * 240,
      behavior: 'smooth',
    });
  };

  const isCurrentFlagged = flaggedQuestions.has(activeQuestion);

  return (
    <nav
      aria-label="Exam Navigation and Question Palette"
      className="fixed bottom-0 left-0 right-0 z-30 h-16 bg-gray-100 border-t border-gray-300 px-3 sm:px-5 flex items-center justify-between gap-3 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]"
    >
      {/* Left: 3 Passage Tabs */}
      <div className="flex items-stretch h-full shrink-0 gap-1">
        {passages.map((p) => {
          const isActive = currentPassage === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPassage(p.id)}
              className={`px-2.5 sm:px-4 flex flex-col justify-center items-center text-xs sm:text-sm transition-all border-b-4 ${
                isActive
                  ? 'border-blue-800 text-blue-900 bg-blue-100/70 font-bold'
                  : 'border-transparent text-slate-600 hover:text-blue-700 hover:bg-gray-200/70 font-medium'
              }`}
            >
              <span>{p.label}</span>
              <span className="text-[10px] font-mono text-slate-500 hidden lg:inline">
                Q{p.questionRange[0]}–{p.questionRange[1]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Center: Scrollable 1-40 Question Palette */}
      <div className="flex-1 min-w-0 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => scrollPalette(-1)}
          aria-label="Cuộn trái danh sách câu hỏi"
          className="p-1.5 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-200 hover:text-blue-700 shrink-0 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={paletteScrollRef}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto py-1.5 px-1 no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {QUESTION_NUMBERS.map((num) => {
            const isAnswered = Boolean(answers[num] && answers[num].trim().length > 0);
            const isFlagged = flaggedQuestions.has(num);
            const isCurrent = activeQuestion === num;

            return (
              <button
                key={num}
                type="button"
                onClick={() => onJumpToQuestion(num)}
                title={`Câu ${num}${isAnswered ? ' (Đã làm)' : ' (Chưa làm)'}${isFlagged ? ' • Đã gắn cờ Review' : ''}`}
                className={`relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-md font-mono text-xs font-bold border transition-all flex items-center justify-center ${
                  isAnswered
                    ? 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
                    : isFlagged
                      ? 'bg-amber-100 text-amber-900 border-amber-400 hover:bg-amber-200'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                } ${isCurrent ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
              >
                {num}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 border border-white" />
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scrollPalette(1)}
          aria-label="Cuộn phải danh sách câu hỏi"
          className="p-1.5 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-200 hover:text-blue-700 shrink-0 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Review / Flag Button */}
      <div className="shrink-0 flex items-center">
        <button
          type="button"
          onClick={onToggleFlagActive}
          title={`Đánh dấu câu ${activeQuestion} để xem lại`}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all ${
            isCurrentFlagged
              ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
              : 'bg-white text-slate-700 border-gray-300 hover:border-amber-400 hover:text-amber-700'
          }`}
        >
          <Flag className="w-4 h-4" />
          <span className="hidden sm:inline">Review</span>
          <span className="font-mono text-xs opacity-90">
            Q{activeQuestion}
            {flaggedQuestions.size > 0 ? ` (${flaggedQuestions.size})` : ''}
          </span>
        </button>
      </div>
    </nav>
  );
}

/**
 * Safely render simple inline Markdown (**bold**, *italic*, `code`, > quote) as React elements.
 */
function FormattedMessageContent({ text, isUser }) {
  const renderInline = (line) => {
    const tokens = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
    return tokens.map((token, idx) => {
      if (token.startsWith('**') && token.endsWith('**')) {
        return <strong key={idx} className="font-bold">{token.slice(2, -2)}</strong>;
      }
      if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
        return <em key={idx} className="italic">{token.slice(1, -1)}</em>;
      }
      if (token.startsWith('`') && token.endsWith('`') && token.length > 2) {
        return (
          <code
            key={idx}
            className={`px-1 py-0.5 rounded font-mono text-[11px] ${
              isUser ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-blue-800 border border-slate-200'
            }`}
          >
            {token.slice(1, -1)}
          </code>
        );
      }
      return <React.Fragment key={idx}>{token}</React.Fragment>;
    });
  };

  return (
    <div className="space-y-1.5">
      {text.split('\n').map((line, lineIdx) => {
        if (!line.trim()) return <div key={lineIdx} className="h-1" />;
        if (line.startsWith('> ')) {
          return (
            <blockquote
              key={lineIdx}
              className={`pl-2.5 border-l-2 italic ${
                isUser ? 'border-blue-300 text-blue-50' : 'border-blue-500 text-slate-600 bg-blue-50/50 py-1 rounded-r'
              }`}
            >
              {renderInline(line.slice(2))}
            </blockquote>
          );
        }
        return <p key={lineIdx}>{renderInline(line)}</p>;
      })}
    </div>
  );
}

function SocraticAISidebar({
  isOpen,
  onClose,
  messages,
  inputValue,
  onChangeInput,
  onSendMessage,
  onStopGenerating,
  isGenerating,
  quotedText,
  onClearQuote,
  activeQuestion,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerating]);

  const quickPrompts = [
    `Phân tích logic Câu ${activeQuestion}`,
    'Phân biệt FALSE và NOT GIVEN',
    'Cách tìm từ điền Summary Completion',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isGenerating) return;
    onSendMessage(inputValue);
  };

  return (
    <aside
      aria-label="Socratic AI Tutor Sidebar"
      className={`fixed top-14 bottom-16 right-0 z-40 w-[300px] sm:w-[320px] bg-white border-l border-slate-200 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
    >
      {/* Sidebar Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-blue-800 to-blue-700 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-tight">Socratic AI Tutor</h3>
            <p className="text-[11px] text-blue-100">Trợ giảng Logic & Cú pháp IELTS</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng Socratic AI Tutor"
          className="p-1.5 rounded-lg hover:bg-white/15 text-blue-100 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Active Quote Context Banner */}
      {quotedText && (
        <div className="px-3.5 py-2 bg-amber-50 border-b border-amber-200 text-xs flex items-start justify-between gap-2 shrink-0">
          <div className="min-w-0">
            <span className="font-bold text-amber-800 block text-[11px]">Đoạn trích đang hỏi:</span>
            <p className="text-amber-950 italic truncate">"{quotedText}"</p>
          </div>
          <button
            type="button"
            onClick={onClearQuote}
            className="text-amber-700 hover:text-amber-950 shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-slate-50 text-xs leading-relaxed">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-xl px-3.5 py-2.5 shadow-sm ${
                  isUser
                    ? 'bg-blue-700 text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                }`}
              >
                <FormattedMessageContent text={msg.content} isUser={isUser} />
              </div>
            </div>
          );
        })}

        {isGenerating && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
              <span>Socratic AI đang phân tích logic...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompt Chips */}
      <div className="px-3 py-2 bg-white border-t border-slate-200 flex flex-wrap gap-1.5 shrink-0">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={isGenerating}
            onClick={() => onSendMessage(prompt)}
            className="px-2 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-[11px] font-medium text-slate-700 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onChangeInput(e.target.value)}
          placeholder={isGenerating ? "AI đang trả lời..." : "Hỏi về từ vựng, ngữ pháp, logic..."}
          className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
        />
        {isGenerating ? (
          <button
            type="button"
            onClick={onStopGenerating}
            title="Dừng sinh câu trả lời"
            className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors shrink-0 flex items-center justify-center"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        )}
      </form>
    </aside>
  );
}

function SettingsModal({
  isOpen,
  onClose,
  themeKey,
  onChangeTheme,
  fontSizeKey,
  onChangeFontSize,
  onClearAllHighlights,
  onResetExam,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden">
        <div className="px-5 py-4 bg-blue-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Settings className="w-4 h-4" />
            <span>Cài đặt Phòng thi IELTS</span>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded hover:bg-white/15">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5 text-sm">
          {/* Color Theme */}
          <div className="space-y-2">
            <label className="font-semibold text-slate-700 block">Chế độ tương phản (Contrast)</label>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(THEME_STYLES).map(([key, cfg]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => onChangeTheme(key)}
                  className={`px-3.5 py-2 rounded-lg border text-left font-medium transition-all ${
                    themeKey === key
                      ? 'border-blue-600 bg-blue-50 text-blue-800 ring-1 ring-blue-500'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {cfg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <label className="font-semibold text-slate-700 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-blue-600" />
              <span>Cỡ chữ bài đọc (Text Size)</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(FONT_SIZE_CLASSES).map(([key, cfg]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => onChangeFontSize(key)}
                  className={`py-2 px-2 rounded-lg border text-xs font-semibold transition-all ${
                    fontSizeKey === key
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-slate-200 hover:border-blue-300 text-slate-700'
                  }`}
                >
                  {cfg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Danger/Reset Actions */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={onClearAllHighlights}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa mọi Highlight</span>
            </button>

            <button
              type="button"
              onClick={onResetExam}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-red-200 bg-red-50 text-xs font-semibold text-red-700 hover:bg-red-100"
            >
              <span>Làm lại bài thi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinishTestModal({
  isOpen,
  onClose,
  isFinished,
  onConfirmSubmit,
  answeredCount,
  flaggedCount,
  correctCount,
}) {
  if (!isOpen) return null;

  const bandScore = estimateIELTSBand(correctCount);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden">
        <div className="px-5 py-4 bg-blue-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Award className="w-5 h-5 text-amber-300" />
            <span>{isFinished ? 'Kết quả Reading Mock Test' : 'Xác nhận Nộp Bài Thi'}</span>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded hover:bg-white/15">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {!isFinished ? (
            <>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="font-mono text-2xl font-bold text-blue-700">{answeredCount}</div>
                  <div className="text-xs text-slate-600">Đã làm</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-mono text-2xl font-bold text-slate-700">
                    {TOTAL_QUESTIONS - answeredCount}
                  </div>
                  <div className="text-xs text-slate-600">Chưa làm</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="font-mono text-2xl font-bold text-amber-700">{flaggedCount}</div>
                  <div className="text-xs text-slate-600">Cắm cờ Review</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Sau khi nộp bài, hệ thống sẽ chấm điểm tự động 40 câu hỏi và mở khóa đáp án giải thích chi tiết cùng{' '}
                <strong>Socratic AI Tutor</strong>.
              </p>

              <div className="flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Làm bài tiếp
                </button>
                <button
                  type="button"
                  onClick={onConfirmSubmit}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-bold shadow-sm"
                >
                  Nộp bài & Chấm điểm
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center space-y-2 py-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  IELTS Academic Reading Estimate
                </span>
                <div className="text-5xl font-mono font-extrabold text-blue-700">
                  Band {bandScore}
                </div>
                <p className="text-sm text-slate-600">
                  Số câu chính xác: <strong className="text-slate-900">{correctCount} / {TOTAL_QUESTIONS}</strong>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Bấm <strong>"Xem giải thích chi tiết"</strong> để rà soát từng câu sai ngay trên khung đề thi và hỏi Socratic AI phân tích bẫy logic.
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm transition-colors"
              >
                Xem giải thích chi tiết
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. ROOT PAGE COMPONENT: ReadingTest
// ============================================================================

export default function ReadingTest() {
  // Core Exam State
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_SECONDS);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [currentPassage, setCurrentPassage] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(() => new Set());
  const [isFinished, setIsFinished] = useState(false);

  // Display & Highlighting State
  const [themeKey, setThemeKey] = useState('light');
  const [fontSizeKey, setFontSizeKey] = useState('lg');
  const [highlights, setHighlights] = useState({});
  const [activeHighlightColor, setActiveHighlightColor] = useState('yellow');
  const [autoHighlight, setAutoHighlight] = useState(false);

  // Modals State
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [finishModalOpen, setFinishModalOpen] = useState(false);

  // Socratic AI Sidebar State
  const [aiOpen, setAiOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [quotedText, setQuotedText] = useState('');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      id: 'welcome-1',
      role: 'assistant',
      content:
        'Chào bạn! Mình là **Socratic AI Tutor** của IELTS Academic.\n\nBạn có thể bôi đen đoạn văn bên trái rồi chọn "Hỏi AI", hoặc hỏi bất kỳ câu nào (VD: "Phân tích logic câu 3") để mình hướng dẫn tư duy thay vì đưa đáp án ăn liền!',
    },
  ]);

  const questionRefs = useRef({});
  const aiTimerRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Countdown Timer Effect (1 second interval)
  useEffect(() => {
    if (isFinished || isTimerPaused) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isFinished, isTimerPaused]);

  // Auto-submit cleanly when countdown hits 00:00
  useEffect(() => {
    if (timeLeft === 0 && !isFinished) {
      setIsFinished(true);
      setFinishModalOpen(true);
    }
  }, [timeLeft, isFinished]);

  // Cleanup simulated AI stream timer on unmount
  useEffect(() => {
    return () => {
      if (aiTimerRef.current) clearTimeout(aiTimerRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  const activePassageObj = useMemo(
    () => READING_PASSAGES.find((p) => p.id === currentPassage) || READING_PASSAGES[0],
    [currentPassage]
  );

  const answeredCount = useMemo(
    () => Object.values(answers).filter((val) => val && val.trim().length > 0).length,
    [answers]
  );

  const correctCount = useMemo(
    () => QUESTION_NUMBERS.filter((num) => isAnswerCorrect(num, answers[num])).length,
    [answers]
  );

  // Answer Update Handler -> immediately drives Question Palette color
  const handleAnswerChange = (qId, value) => {
    setActiveQuestion(qId);
    setAnswers((prev) => ({
      ...prev,
      [qId]: value,
    }));
  };

  // Switch Passage Tab
  const handleSelectPassage = (passageId) => {
    setCurrentPassage(passageId);
    const targetPassage = READING_PASSAGES.find((p) => p.id === passageId);
    if (targetPassage) {
      setActiveQuestion(targetPassage.questionRange[0]);
    }
  };

  // Jump via Question Palette (switches passage if needed & scrolls smoothly)
  const handleJumpToQuestion = (qId) => {
    const meta = ALL_QUESTION_META[qId];
    setActiveQuestion(qId);

    if (meta && meta.passageId !== currentPassage) {
      setCurrentPassage(meta.passageId);
      setTimeout(() => {
        questionRefs.current[qId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 60);
    } else {
      questionRefs.current[qId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Toggle Flag / Review status
  const handleToggleFlag = (qId) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  // Highlighting Handlers
  const handleAddHighlight = (passageId, paraId, item) => {
    const key = `${passageId}:${paraId}`;
    setHighlights((prev) => ({
      ...prev,
      [key]: insertNonOverlappingHighlight(prev[key] || [], item),
    }));
  };

  const handleRemoveHighlight = (passageId, paraId, highlightId) => {
    const key = `${passageId}:${paraId}`;
    setHighlights((prev) => ({
      ...prev,
      [key]: (prev[key] || []).filter((item) => item.id !== highlightId),
    }));
  };

  const handleClearPassageHighlights = (passageId) => {
    setHighlights((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`${passageId}:`)) delete next[key];
      });
      return next;
    });
  };

  // Socratic AI Messaging Handlers - Secure Production SSE Streaming from /api/v1/chat/tutor
  const sendToSocraticAI = async (textToSend, overrideQuote) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isGeneratingAI) return;

    const quoteSnapshot = overrideQuote !== undefined ? overrideQuote : quotedText;
    const activeMeta = ALL_QUESTION_META[activeQuestion] || {};

    const userMsgId = `u-${Date.now()}`;
    const assistantMsgId = `ai-${Date.now()}`;

    const nextHistory = [
      ...aiMessages,
      { id: userMsgId, role: 'user', content: trimmed },
    ];

    // Pre-create the assistant message bubble to receive streaming tokens
    setAiMessages([
      ...nextHistory,
      { id: assistantMsgId, role: 'assistant', content: '' },
    ]);
    setAiInput('');
    setIsGeneratingAI(true);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const currentQuestionContext = {
      questionId: activeQuestion,
      questionType: activeMeta.type || 'Academic Reading',
      promptText: activeMeta.prompt || '',
      passageExcerpt: `${activePassageObj.title} (${activePassageObj.subtitle})`,
      quotedSnippet: quoteSnapshot || '',
    };

    try {
      const response = await fetch('/api/v1/chat/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortControllerRef.current.signal,
        body: JSON.stringify({
          chatHistory: nextHistory.map((m) => ({ role: m.role, content: m.content })),
          currentQuestionContext,
          stream: true,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine.startsWith('data:')) continue;

          const dataStr = trimmedLine.replace('data:', '').trim();
          if (dataStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(dataStr);
            if (parsed.text) {
              accumulatedContent += parsed.text;
              setAiMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMsgId
                    ? { ...msg, content: accumulatedContent }
                    : msg
                )
              );
            } else if (parsed.error) {
              accumulatedContent += `\n\n*(Thông báo: ${parsed.error})*`;
              setAiMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMsgId
                    ? { ...msg, content: accumulatedContent }
                    : msg
                )
              );
            }
          } catch (e) {
            // Partial chunk
          }
        }
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('User cancelled Socratic AI response.');
      } else {
        console.warn('[Backend SSE unavailable, falling back to local Socratic brain]:', err);
        const fallbackReply = generateSocraticReply(trimmed, {
          currentPassage,
          activeQuestion,
          quotedText: quoteSnapshot,
          isFinished,
        });
        setAiMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? { ...msg, content: fallbackReply }
              : msg
          )
        );
      }
    } finally {
      setIsGeneratingAI(false);
      abortControllerRef.current = null;
    }
  };

  const handleStopGeneratingAI = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsGeneratingAI(false);
    }
  };

  const handleAskAIWithQuote = (text) => {
    setQuotedText(text);
    setAiOpen(true);
    sendToSocraticAI('Hãy giải thích logic và từ vựng học thuật của đoạn vừa highlight.', text);
  };

  const handleAskAIForQuestion = (qId) => {
    setActiveQuestion(qId);
    setAiOpen(true);
    sendToSocraticAI(`Hướng dẫn mình tư duy logic để giải Câu ${qId}.`);
  };

  const handleResetExam = () => {
    setTimeLeft(INITIAL_TIME_SECONDS);
    setIsTimerPaused(false);
    setAnswers({});
    setFlaggedQuestions(new Set());
    setHighlights({});
    setIsFinished(false);
    setCurrentPassage(1);
    setActiveQuestion(1);
    setSettingsOpen(false);
    setFinishModalOpen(false);
  };

  const themeStyle = THEME_STYLES[themeKey] || THEME_STYLES.light;
  const fontSizeClass = FONT_SIZE_CLASSES[fontSizeKey]?.text || FONT_SIZE_CLASSES.lg.text;

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-white text-slate-900 select-none font-sans">
      {/* 1. TOP HEADER */}
      <TopHeader
        examTitle="Cambridge 19 - Reading Test 1"
        timeLeft={timeLeft}
        answeredCount={answeredCount}
        isTimerPaused={isTimerPaused}
        onTogglePause={() => setIsTimerPaused((p) => !p)}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenFinishModal={() => setFinishModalOpen(true)}
        isFinished={isFinished}
      />

      {/* 2. MAIN WORKSPACE: 50/50 SPLIT SCREEN (mb-16 keeps scrollbars clear of fixed bottom nav) */}
      <main className="flex-1 min-h-0 mb-16 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden">
        <ReadingPassagePane
          passage={activePassageObj}
          themeStyle={themeStyle}
          fontSizeClass={fontSizeClass}
          highlights={highlights}
          activeHighlightColor={activeHighlightColor}
          onChangeHighlightColor={setActiveHighlightColor}
          autoHighlight={autoHighlight}
          onToggleAutoHighlight={() => setAutoHighlight((v) => !v)}
          onAddHighlight={handleAddHighlight}
          onRemoveHighlight={handleRemoveHighlight}
          onClearPassageHighlights={handleClearPassageHighlights}
          onAskAIWithQuote={handleAskAIWithQuote}
        />

        <QuestionsPane
          passage={activePassageObj}
          themeStyle={themeStyle}
          answers={answers}
          flaggedQuestions={flaggedQuestions}
          activeQuestion={activeQuestion}
          questionRefs={questionRefs}
          isFinished={isFinished}
          onSelectQuestion={setActiveQuestion}
          onChangeAnswer={handleAnswerChange}
          onToggleFlag={handleToggleFlag}
          onAskAIForQuestion={handleAskAIForQuestion}
        />
      </main>

      {/* 3. BOTTOM NAVIGATION & QUESTION PALETTE (1-40) */}
      <BottomNavigation
        passages={READING_PASSAGES}
        currentPassage={currentPassage}
        answers={answers}
        flaggedQuestions={flaggedQuestions}
        activeQuestion={activeQuestion}
        onSelectPassage={handleSelectPassage}
        onJumpToQuestion={handleJumpToQuestion}
        onToggleFlagActive={() => handleToggleFlag(activeQuestion)}
      />

      {/* 4. SOCRATIC AI TUTOR FAB (hides smoothly while sidebar is open so it never overlaps Send) */}
      <button
        type="button"
        onClick={() => setAiOpen(true)}
        aria-label="Mở Socratic AI Tutor"
        className={`fixed bottom-20 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-amber-500 to-orange-500 text-white ring-4 ring-amber-400/25 ${
          aiOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden sm:inline">Socratic AI</span>
      </button>

      <SocraticAISidebar
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
        messages={aiMessages}
        inputValue={aiInput}
        onChangeInput={setAiInput}
        onSendMessage={(msg) => sendToSocraticAI(msg)}
        onStopGenerating={handleStopGeneratingAI}
        isGenerating={isGeneratingAI}
        quotedText={quotedText}
        onClearQuote={() => setQuotedText('')}
        activeQuestion={activeQuestion}
      />

      {/* MODALS: Settings & Finish Test */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        themeKey={themeKey}
        onChangeTheme={setThemeKey}
        fontSizeKey={fontSizeKey}
        onChangeFontSize={setFontSizeKey}
        onClearAllHighlights={() => setHighlights({})}
        onResetExam={handleResetExam}
      />

      <FinishTestModal
        isOpen={finishModalOpen}
        onClose={() => setFinishModalOpen(false)}
        isFinished={isFinished}
        onConfirmSubmit={() => {
          setIsFinished(true);
        }}
        answeredCount={answeredCount}
        flaggedCount={flaggedQuestions.size}
        correctCount={correctCount}
      />
    </div>
  );
}
