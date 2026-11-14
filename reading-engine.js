
(function () {
  'use strict';

  // ==========================================
  // 1. DATA STRUCTURE: 3 AUTHENTIC ACADEMIC PASSAGES & 40 QUESTIONS
  // ==========================================
  const READING_TEST_DATA = {
    id: 'cam19-reading-t1',
    title: 'Cambridge 19 - Test 1: Academic Reading (Passages 1–3)',
    timeLimitMinutes: 60,
    totalQuestions: 40,
    passages: [
      // ----------------------------------------------------
      // PASSAGE 1: QUESTIONS 1 - 13
      // ----------------------------------------------------
      {
        id: 1,
        title: 'The Architecture of Time: How Ancient Civilizations Measured the Cosmos',
        subtitle: 'From Neolithic solar alignments to Alexandrian water clocks, early horology reshaped human social coordination.',
        qRange: '1–13',
        timeGuidance: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        paragraphs: [
          {
            id: 'A',
            text: 'Long before mechanical escapements ticked inside European cathedrals, early agrarian societies confronted an urgent cognitive problem: how to synchronize planting, irrigation, and ritual calendars with celestial rhythms. Archaeological excavations across Mesopotamia and Upper Egypt reveal that the earliest timekeeping instruments were not portable gadgets, but monumental stone sightlines anchored directly into the landscape. By tracking the horizon point where the sun rose at the solstices, priest-astronomers transformed vast architectural terraces into durable astronomical calculators.'
          },
          {
            id: 'B',
            text: 'Around 1500 BCE, Egyptian engineers refined portable measurement by introducing the shadow clock, or merkhet, alongside calibrated water vessels known as clepsydrae. Unlike sundials, which became useless after dusk or beneath overcast skies, the outflow clepsydra relied on water escaping through a tiny aperture at the base of a stone bowl. However, early artisans quickly noticed a physical flaw: as the water level dropped, reduced hydrostatic pressure slowed the drip rate, causing hours measured late at night to stretch noticeably longer than earlier ones.'
          },
          {
            id: 'C',
            text: 'This hydro-mechanical distortion puzzled Mediterranean scholars for centuries until Ctesibius of Alexandria devised an ingenious constant-head regulator in the third century BCE. By channeling water from a continuously overflowing primary reservoir into a secondary cylinder fitted with a conical float, Ctesibius ensured that pressure remained uniform throughout the day and night. His float carried a miniature bronze pointer that rose steadily past an engraved pillar, and in his most ambitious designs, cascading water drove gear trains that sounded bronze bells and released sculpted pebbles at each passing hour.'
          },
          {
            id: 'D',
            text: 'Parallel innovations unfolded independently in East Asia, culminating in the monumental cosmic clock tower constructed by Su Song in Kaifeng in 1088 CE. Powered by a massive eleven-meter waterwheel, Su Song’s tower employed an intermittent bucket-release escapement—a crucial mechanical precursor to the verge-and-foliot regulators later adopted in medieval Europe. Notably, Su Song documented every cog, pivot, and counterweight in an illustrated treatise so that future imperial workshops could replicate the mechanism without relying solely on oral apprenticeship.'
          },
          {
            id: 'E',
            text: 'Yet precision timekeeping was never purely an engineering pursuit; it fundamentally reordered collective labor and political authority. Once civic bells and geared towers divided workdays into uniform, quantifiable segments rather than fluid intervals between dawn and dusk, time shifted from a lived natural cycle into an abstract commodity. Historians of technology argue that this transition laid the conceptual foundation for modern industrial scheduling centuries before the steam engine arrived.'
          }
        ],
        questionGroups: [
          {
            id: 'p1-g1',
            type: 'tfng',
            title: 'Questions 1–5: True / False / Not Given',
            instruction: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
            questions: [
              {
                num: 1,
                statement: 'The earliest timekeeping devices discovered in Mesopotamia and Upper Egypt were designed to be easily carried from village to village.',
                expected: ['FALSE'],
                display: 'FALSE',
                evidence: 'Paragraph A states the earliest instruments were "not portable gadgets, but monumental stone sightlines anchored directly into the landscape."',
                trap: 'Bẫy tính di động (portable gadgets vs monumental stone sightlines anchored into landscape).'
              },
              {
                num: 2,
                statement: 'Early Egyptian water clocks operated reliably regardless of cloud cover or the absence of sunlight.',
                expected: ['TRUE'],
                display: 'TRUE',
                evidence: 'Paragraph B explains that clepsydrae operated continuously unlike sundials which became useless after dusk or under overcast skies.',
                trap: 'Đối lập trực tiếp với đồng hồ mặt trời (sundials).'
              },
              {
                num: 3,
                statement: 'In early outflow clepsydrae, the rate of water dripping accelerated as the vessel gradually emptied.',
                expected: ['FALSE'],
                display: 'FALSE',
                evidence: 'Paragraph B states that "as the water level dropped, reduced hydrostatic pressure slowed the drip rate", making late-night hours stretch longer.',
                trap: 'Bẫy tốc độ chảy: áp suất giảm làm nước nhỏ giọt chậm lại (slowed), không phải tăng tốc (accelerated).'
              },
              {
                num: 4,
                statement: 'Ctesibius collaborated directly with Egyptian temple builders before inventing his conical float regulator.',
                expected: ['NOT GIVEN'],
                display: 'NOT GIVEN',
                evidence: 'Paragraph C describes Ctesibius’s invention in Alexandria, but does not state whether he collaborated with Egyptian temple builders.',
                trap: 'Không có thông tin xác nhận việc hợp tác với thợ xây đền thờ Ai Cập.'
              },
              {
                num: 5,
                statement: 'Su Song produced written technical drawings so that others could rebuild his clock tower in the future.',
                expected: ['TRUE'],
                display: 'TRUE',
                evidence: 'Paragraph D states he "documented every cog, pivot, and counterweight in an illustrated treatise so that future imperial workshops could replicate the mechanism."',
                trap: 'Sách chuyên khảo có hình vẽ minh họa (illustrated treatise) nhằm mục đích nhân bản kỹ thuật.'
              }
            ]
          },
          {
            id: 'p1-g2',
            type: 'mcq',
            title: 'Questions 6–9: Multiple Choice',
            instruction: 'Choose the correct letter, A, B, C, or D.',
            questions: [
              {
                num: 6,
                prompt: 'What key problem did Ctesibius’s primary reservoir solve in third-century BCE Alexandria?',
                options: [
                  { key: 'A', text: 'It prevented algae from blocking the narrow outflow hole.' },
                  { key: 'B', text: 'It maintained consistent water pressure regardless of total volume.' },
                  { key: 'C', text: 'It eliminated the need to refill the clock during winter months.' },
                  { key: 'D', text: 'It replaced bronze bells with lighter wooden indicators.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph C explains that a continuously overflowing primary reservoir ensured "that pressure remained uniform throughout the day and night."',
                trap: 'Cơ chế duy trì áp suất nước đồng nhất (uniform pressure).'
              },
              {
                num: 7,
                prompt: 'Why is Su Song’s 1088 CE clock tower highlighted as a milestone in mechanical engineering?',
                options: [
                  { key: 'A', text: 'It was the first clock in history to operate without water.' },
                  { key: 'B', text: 'It introduced an escapement mechanism that regulated motion in intervals.' },
                  { key: 'C', text: 'It directly copied European verge-and-foliot cathedral clocks.' },
                  { key: 'D', text: 'It relied entirely on secret oral instructions passed to apprentices.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph D highlights its "intermittent bucket-release escapement—a crucial mechanical precursor to the verge-and-foliot regulators."',
                trap: 'Bộ hồi xung nhịp (escapement mechanism) điều tiết chuyển động ngắt quãng.'
              },
              {
                num: 8,
                prompt: 'According to Paragraph E, how did mechanical clocks alter human perception of time?',
                options: [
                  { key: 'A', text: 'People abandoned agricultural calendars completely.' },
                  { key: 'B', text: 'Workers preferred flexible intervals tied to natural daylight.' },
                  { key: 'C', text: 'Time began to be treated as a measurable, standardized resource.' },
                  { key: 'D', text: 'Religious ceremonies lost their influence over civic festivals.' }
                ],
                expected: ['C'],
                display: 'C',
                evidence: 'Paragraph E notes that time "shifted from a lived natural cycle into an abstract commodity" divided into uniform segments.',
                trap: 'Thời gian biến thành một đơn vị hàng hóa/tài nguyên trừu tượng (abstract commodity).'
              },
              {
                num: 9,
                prompt: 'Which statement best reflects the main thesis of Reading Passage 1?',
                options: [
                  { key: 'A', ancient: 'Ancient astronomers were more accurate than modern atomic physicists.' },
                  { key: 'B', text: 'Technical advances in timekeeping gradually reshaped both mechanics and society.' },
                  { key: 'C', text: 'European clocks emerged independently without any Asian predecessors.' },
                  { key: 'D', text: 'Stone calendars proved superior to water-driven horology.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'The passage traces timekeeping instruments from stone monuments to water regulators and shows how they revolutionized social coordination and labor scheduling.',
                trap: 'Ý chính xuyên suốt: Tiến bộ đo thời gian tác động đến cả cơ khí chế tạo lẫn cấu trúc xã hội.'
              }
            ]
          },
          {
            id: 'p1-g3',
            type: 'summary',
            title: 'Questions 10–13: Summary Completion',
            instruction: 'Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.',
            summaryTitle: 'From Solar Monuments to Regulated Clocks',
            prefix: 'Early agricultural civilizations initially aligned monumental ',
            segments: [
              {
                num: 10,
                prefix: 'Early agricultural civilizations initially aligned monumental ',
                suffix: ' structures with solar horizons to organize seasonal harvests.',
                placeholder: '1 từ...',
                expected: ['stone'],
                display: 'stone',
                evidence: 'Paragraph A: "monumental stone sightlines anchored directly into the landscape."',
                trap: 'Điền chính xác từ trong bài: "stone".'
              },
              {
                num: 11,
                prefix: 'Later, Egyptian artisans constructed water-based clepsydrae, though declining hydrostatic ',
                suffix: ' distorted their accuracy.',
                placeholder: '1 từ...',
                expected: ['pressure'],
                display: 'pressure',
                evidence: 'Paragraph B: "reduced hydrostatic pressure slowed the drip rate."',
                trap: 'Điền danh từ "pressure" (áp suất thủy tĩnh).'
              },
              {
                num: 12,
                prefix: 'In Alexandria, Ctesibius stabilized flow rates by adding a secondary cylinder and a conical ',
                suffix: ' that drove time markers.',
                placeholder: '1 từ...',
                expected: ['float'],
                display: 'float',
                evidence: 'Paragraph C: "fitted with a conical float, Ctesibius ensured that pressure remained uniform."',
                trap: 'Phao hình nón: "float".'
              },
              {
                num: 13,
                prefix: 'Centuries later in Kaifeng, Su Song published a detailed ',
                suffix: ' preserving the blueprints of his geared cosmic tower for future craftsmen.',
                placeholder: '1 từ...',
                expected: ['treatise'],
                display: 'treatise',
                evidence: 'Paragraph D: "documented every cog, pivot, and counterweight in an illustrated treatise."',
                trap: 'Sách chuyên khảo: "treatise".'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // PASSAGE 2: QUESTIONS 14 - 26
      // ----------------------------------------------------
      {
        id: 2,
        title: 'Subterranean Commerce: Mycorrhizal Networks and Cooperative Forest Ecology',
        subtitle: 'How microscopic fungal filaments transform isolated trees into chemically linked underground economies.',
        qRange: '14–26',
        timeGuidance: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        paragraphs: [
          {
            id: 'A',
            text: 'For much of the twentieth century, classical forestry modeled woodland ecosystems primarily as Darwinian arenas of solitary competition, where neighboring trees raced upward for sunlight and horizontally for groundwater. Beneath the leaf litter, however, microscopic filaments called hyphae—produced by symbiotic mycorrhizal fungi—weave dense subterranean webs linking the root tips of distinct trees, sometimes across unrelated botanical species. Because these fungal threads are orders of magnitude finer than plant root hairs, they infiltrate microscopic soil pores inaccessible to trees alone.'
          },
          {
            id: 'B',
            text: 'This biological alliance operates through calibrated biochemical reciprocity. Tree canopies harvest solar energy via photosynthesis, converting atmospheric carbon dioxide into soluble sugars that are pumped downward into root tissues. Fungi cannot synthesize carbohydrates independently, so they absorb a portion of these carbon-rich sugars; in exchange, fungal enzymes dissolve mineral phosphorus and organic nitrogen locked inside decaying rock and humus, delivering vital nutrients back to their photosynthetic hosts.'
          },
          {
            id: 'C',
            text: 'In the late 1990s, forest ecologist Suzanne Simard conducted isotope-tracing experiments in temperate Douglas-fir and paper-birch stands in British Columbia. By enclosing branches in airtight plastic bags containing radioactive carbon-13 and carbon-14 isotopes, Simard demonstrated that carbon fixed by sunlit birch trees migrated through fungal conduits into shaded fir seedlings several meters away. Crucially, the direction of net carbon flow reversed seasonally: when birch trees shed their leaves in autumn, evergreen firs supplied carbon back to their dormant deciduous neighbors.'
          },
          {
            id: 'D',
            text: 'Beyond metabolic exchange, field trials indicate that mycorrhizal networks transmit chemical warning signals when foliage faces herbivore attack. When aphids infest a donor plant, elevated concentrations of salicylic and jasmonic acid derivatives travel along hyphal bridges to neighboring saplings within twenty-four hours, prompting uninfected recipients to synthesize bitter defensive compounds preemptively. Nevertheless, several skeptical plant physiologists caution against romanticizing the forest as a wholly altruistic superorganism, pointing out that fungi may hoard scarce phosphorus when soil reserves drop to protect their own reproductive spores.'
          },
          {
            id: 'E',
            text: 'Understanding these underground trade networks carries direct implications for modern silviculture. Clear-cutting practices that strip mature "hub trees" and sterilize topsoil with heavy machinery sever centuries-old fungal lineages, forcing newly planted monoculture saplings to endure severe nutrient stress. By retaining diverse seed trees and minimizing soil compaction, contemporary conservationists hope to preserve the living subterranean infrastructure that buffers forests against drought and pathogen outbreaks.'
          }
        ],
        questionGroups: [
          {
            id: 'p2-g1',
            type: 'tfng',
            title: 'Questions 14–18: True / False / Not Given',
            instruction: 'Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.',
            questions: [
              {
                num: 14,
                statement: 'Mycorrhizal fungal hyphae can only connect trees belonging to the same botanical species.',
                expected: ['FALSE'],
                display: 'FALSE',
                evidence: 'Paragraph A explicitly states they link trees "sometimes across unrelated botanical species."',
                trap: 'Bẫy từ "only": mạng nấm có thể kết nối cả các loài thực vật không cùng họ hàng.'
              },
              {
                num: 15,
                statement: 'Fungi are unable to manufacture their own carbohydrates directly from sunlight.',
                expected: ['TRUE'],
                display: 'TRUE',
                evidence: 'Paragraph B confirms: "Fungi cannot synthesize carbohydrates independently, so they absorb a portion of these carbon-rich sugars."',
                trap: 'Nấm không thể quang hợp tự tổng hợp carbohydrate.'
              },
              {
                num: 16,
                statement: 'In Simard’s British Columbia study, net carbon transfer always moved exclusively from birch trees to fir seedlings throughout the entire year.',
                expected: ['FALSE'],
                display: 'FALSE',
                evidence: 'Paragraph C states that "the direction of net carbon flow reversed seasonally: when birch trees shed their leaves in autumn, evergreen firs supplied carbon back."',
                trap: 'Dòng vận chuyển carbon đảo chiều theo mùa (reversed seasonally), không phải một chiều quanh năm.'
              },
              {
                num: 17,
                statement: 'Suzanne Simard repeated her carbon isotope experiments in tropical rainforests in South America.',
                expected: ['NOT GIVEN'],
                display: 'NOT GIVEN',
                evidence: 'Paragraph C refers only to British Columbia temperate stands; no mention is made of South American rainforests.',
                trap: 'Bài viết không đề cập đến rừng mưa nhiệt đới Nam Mỹ.'
              },
              {
                num: 18,
                statement: 'Some scientists dispute the view that fungal networks always distribute nutrients out of pure generosity toward host trees.',
                expected: ['TRUE'],
                display: 'TRUE',
                evidence: 'Paragraph D notes skeptical physiologists warn fungi "may hoard scarce phosphorus when soil reserves drop to protect their own reproductive spores."',
                trap: 'Các nhà sinh lý học cảnh báo không nên lãng mạn hóa rừng là siêu sinh vật vị tha hoàn toàn.'
              }
            ]
          },
          {
            id: 'p2-g2',
            type: 'mcq',
            title: 'Questions 19–22: Multiple Choice',
            instruction: 'Choose the correct letter, A, B, C, or D.',
            questions: [
              {
                num: 19,
                prompt: 'Why are fungal hyphae particularly effective at extracting mineral nutrients from forest soil?',
                options: [
                  { key: 'A', text: 'They grow thicker than tree trunks near the surface.' },
                  { key: 'B', text: 'They are slim enough to penetrate microscopic soil spaces.' },
                  { key: 'C', text: 'They replace the need for atmospheric carbon dioxide.' },
                  { key: 'D', text: 'They store rainwater inside hollow wooden stems.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph A explains hyphae are "orders of magnitude finer than plant root hairs, they infiltrate microscopic soil pores inaccessible to trees alone."',
                trap: 'Sợi nấm siêu mảnh len lỏi vào các khe hở vi mô của đất.'
              },
              {
                num: 20,
                prompt: 'How did Simard verify the movement of carbon between separate trees?',
                options: [
                  { key: 'A', text: 'By staining fungal filaments with fluorescent blue dye.' },
                  { key: 'B', text: 'By enclosing foliage in bags infused with traceable carbon isotopes.' },
                  { key: 'C', text: 'By weighing fallen autumn birch leaves over five years.' },
                  { key: 'D', text: 'By severing root systems with stainless steel barriers.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph C: "enclosing branches in airtight plastic bags containing radioactive carbon-13 and carbon-14 isotopes."',
                trap: 'Phương pháp đánh dấu đồng vị phóng xạ carbon-13 và carbon-14.'
              },
              {
                num: 21,
                prompt: 'What happens to nearby saplings after a donor tree suffers an aphid infestation?',
                options: [
                  { key: 'A', text: 'They immediately shed their leaves to halt fungal spread.' },
                  { key: 'B', text: 'They receive chemical signals and begin producing protective deterrents.' },
                  { key: 'C', text: 'They expel all mycorrhizal fungi from their root hairs.' },
                  { key: 'D', text: 'They double their photosynthesis rate within two hours.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph D states chemical warnings travel along hyphae, "prompting uninfected recipients to synthesize bitter defensive compounds preemptively."',
                trap: 'Tổng hợp hợp chất tự vệ phòng ngừa sâu bọ.'
              },
              {
                num: 22,
                prompt: 'What silvicultural reform does Paragraph E recommend?',
                options: [
                  { key: 'A', text: 'Applying synthetic fertilizers after complete clear-cutting.' },
                  { key: 'B', text: 'Planting fast-growing monocultures with deep mechanical tilling.' },
                  { key: 'C', text: 'Preserving mature seed trees and avoiding severe soil disturbance.' },
                  { key: 'D', text: 'Removing deciduous species from boreal woodland margins.' }
                ],
                expected: ['C'],
                display: 'C',
                evidence: 'Paragraph E recommends "retaining diverse seed trees and minimizing soil compaction" to protect fungal infrastructure.',
                trap: 'Bảo tồn cây mẹ và giảm thiểu nén ép đất do máy móc.'
              }
            ]
          },
          {
            id: 'p2-g3',
            type: 'summary',
            title: 'Questions 23–26: Summary Completion',
            instruction: 'Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.',
            summaryTitle: 'Underground Fungal Trade & Forest Defense',
            segments: [
              {
                num: 23,
                prefix: 'Rather than functioning purely through isolated competition, forest trees trade carbon-based ',
                suffix: ' produced in their canopies for vital underground minerals.',
                placeholder: '1 từ...',
                expected: ['sugars', 'sugar'],
                display: 'sugars',
                evidence: 'Paragraph B: "converting atmospheric carbon dioxide into soluble sugars."',
                trap: 'Chất đường hòa tan: "sugars".'
              },
              {
                num: 24,
                prefix: 'In exchange, fungi deliver dissolved nitrogen and mineral ',
                suffix: ' extracted from rocky soil.',
                placeholder: '1 từ...',
                expected: ['phosphorus'],
                display: 'phosphorus',
                evidence: 'Paragraph B: "fungal enzymes dissolve mineral phosphorus and organic nitrogen."',
                trap: 'Khoáng chất phốt pho: "phosphorus".'
              },
              {
                num: 25,
                prefix: 'Besides nutrients, hyphal conduits relay biochemical alerts triggered by ',
                suffix: ' or other pests, prompting saplings to mount defense compounds.',
                placeholder: '1 từ...',
                expected: ['aphids', 'aphid'],
                display: 'aphids',
                evidence: 'Paragraph D: "When aphids infest a donor plant, elevated concentrations of salicylic... travel along hyphal bridges."',
                trap: 'Rệp cây gây hại: "aphids".'
              },
              {
                num: 26,
                prefix: 'Protecting mature hub trees helps forests resist pathogen outbreaks and severe ',
                suffix: '.',
                placeholder: '1 từ...',
                expected: ['drought'],
                display: 'drought',
                evidence: 'Paragraph E: "buffers forests against drought and pathogen outbreaks."',
                trap: 'Khô hạn: "drought".'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // PASSAGE 3: QUESTIONS 27 - 40
      // ----------------------------------------------------
      {
        id: 3,
        title: 'Linguistic Relativity, Cognitive Architecture, and the Limits of Thought',
        subtitle: 'An academic inquiry into formal syntax, universal grammar, and whether native language constrains human consciousness.',
        qRange: '27–40',
        timeGuidance: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        paragraphs: [
          {
            id: 'A',
            text: 'For over two centuries, philosophers of mind and anthropological linguists have grappled with the intimate entanglement between formal language and human consciousness. In its most unyielding formulation—known colloquially as the strong Sapir-Whorf hypothesis or radical linguistic determinism—the theory posits that human cognitive architecture is inexorably constrained by the formal syntax and lexical taxonomy of one’s native tongue. Propounded in the early twentieth century by Edward Sapir and Benjamin Lee Whorf, this perspective suggested that individuals whose languages lack temporal inflection do not merely describe time differently; they inhabit an entirely disparate metaphysical landscape.'
          },
          {
            id: 'B',
            text: 'By the mid-twentieth century, however, this radical determinist paradigm encountered severe empirical resistance. A landmark refutation emerged from color perception experiments conducted by Eleanor Rosch among the Dani, an indigenous community in the highlands of Papua New Guinea. The Dani lexicon contains precisely two fundamental color terms: mili (dark and cool hues) and mola (light and warm hues). According to strict linguistic determinism, the Dani should have been perceptually incapable of discriminating between adjacent spectral shades. Yet empirical testing established that Dani subjects distinguished focal chromatic hues with identical perceptual acuity to native English speakers.'
          },
          {
            id: 'C',
            text: 'The theoretical coup de grâce against strong determinism was delivered by Noam Chomsky’s cognitive revolution in generative linguistics. Chomsky argued that human languages, despite conspicuous surface variances, share a biologically endowed computational blueprint termed Universal Grammar (UG). Beneath the phonetic diversity of seven thousand tongues lies a uniform recursive syntactic operation—formalized in minimalist syntax as Merge—which builds hierarchical expressions from discrete lexical items. From this nativist vantage point, thought fundamentally precedes speech, rooted in an internal conceptual framework independent of superficial phonology.'
          },
          {
            id: 'D',
            text: 'Contemporary neuroimaging technologies—most notably functional Magnetic Resonance Imaging (fMRI) and magnetoencephalography (MEG)—have corroborated this pre-linguistic architecture. Studies measuring neural activation during abstract problem-solving show that dense semantic computations unfold across prefrontal and parietal cortices milliseconds prior to the recruitment of Broca’s and Wernicke’s areas. Moreover, clinical evaluations of patients with severe global aphasia reveal that individuals suffering catastrophic damage to language centers frequently retain intact capacities for deductive syllogistic reasoning, spatial navigation, and mathematical calculation.'
          },
          {
            id: 'E',
            text: 'Nevertheless, the burial of radical determinism did not consign linguistic relativity to obsolescence. Cognitive psychologists such as Lera Boroditsky and Dan Slobin have championed weak linguistic relativity—contending that while language erects no prison around thought, it systematically directs habitual attention. For instance, the Australian Aboriginal community of Pormpuraaw speaks Kuuk Thaayorre, which replaces egocentric coordinates ("to my left") with absolute cardinal directions ("north", "south-west"). Consequently, Kuuk Thaayorre speakers maintain an automated dead-reckoning awareness foreign to speakers of Indo-European languages.'
          },
          {
            id: 'F',
            text: 'A fertile philosophical synthesis between universal cognition and linguistic influence emerges in the Extended Mind thesis articulated by Andy Clark and David Chalmers. Human working memory is strictly bounded by biological bandwidth. Within Clark and Chalmers’ framework, formal syntax, mathematical notation, and logical distinctions act not as arbitrary cultural shackles, but as external epistemic scaffolding—cognitive levers enabling finite biological minds to manipulate complex deductive chains and inspect their own reasoning critically.'
          }
        ],
        questionGroups: [
          {
            id: 'p3-g1',
            type: 'mcq',
            title: 'Questions 27–31: Multiple Choice',
            instruction: 'Choose the correct letter, A, B, C, or D.',
            questions: [
              {
                num: 27,
                prompt: 'What core claim did the strong Sapir-Whorf hypothesis make in the early twentieth century?',
                options: [
                  { key: 'A', text: 'Spoken grammar passively translates an already uniform mental reality.' },
                  { key: 'B', text: 'Native vocabulary and syntax rigidly bound how humans conceptualize reality.' },
                  { key: 'C', text: 'Temporal metaphors exist identically in every ancient language.' },
                  { key: 'D', text: 'Children acquire metaphysical beliefs prior to learning any spoken words.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph A defines radical linguistic determinism as the claim that cognitive architecture is "inexorably constrained" by native syntax and taxonomy.',
                trap: 'Thuyết quyết định luận ngôn ngữ cho rằng cú pháp tiếng mẹ đẻ giới hạn tư duy.'
              },
              {
                num: 28,
                prompt: 'Why did Eleanor Rosch’s experiment with the Dani challenge linguistic determinism?',
                options: [
                  { key: 'A', text: 'Dani speakers invented new English loanwords during visual testing.' },
                  { key: 'B', text: 'Two color labels prevented Dani subjects from noticing warm tones.' },
                  { key: 'C', text: 'Subjects matched English speakers’ color discrimination despite limited color vocabulary.' },
                  { key: 'D', text: 'Cool hues triggered faster eye movements among highland villagers.' }
                ],
                expected: ['C'],
                display: 'C',
                evidence: 'Paragraph B shows Dani subjects discriminated focal colors with "identical perceptual acuity to native English speakers" despite only having two words.',
                trap: 'Dù chỉ có 2 từ màu (mili, mola), người Dani vẫn phân biệt màu sắc chính xác như người nói tiếng Anh.'
              },
              {
                num: 29,
                prompt: 'What does Noam Chomsky mean by describing "Merge" as a universal operation?',
                options: [
                  { key: 'A', text: 'All world languages share an innate rule that recursively combines elements hierarchically.' },
                  { key: 'B', text: 'Distant languages inevitably fuse into one global vocabulary over centuries.' },
                  { key: 'C', text: 'Phonetic accents disappear once speakers master minimalist syntax.' },
                  { key: 'D', text: 'Surface spelling dictates whether an individual can learn recursion.' }
                ],
                expected: ['A'],
                display: 'A',
                evidence: 'Paragraph C defines Merge as "a uniform recursive syntactic operation... which builds hierarchical expressions from discrete lexical items."',
                trap: 'Thao tác đệ quy kết hợp các yếu tố ngôn ngữ thành cấu trúc phân tầng (recursive hierarchical syntax).'
              },
              {
                num: 30,
                prompt: 'What distinguishes Kuuk Thaayorre spatial cognition from English speakers’ spatial habits?',
                options: [
                  { key: 'A', text: 'Kuuk Thaayorre lacks words for geographical landmarks.' },
                  { key: 'B', text: 'Kuuk Thaayorre relies on body-relative directions like left and right.' },
                  { key: 'C', text: 'Kuuk Thaayorre speakers habitually encode locations via fixed compass bearings.' },
                  { key: 'D', text: 'Kuuk Thaayorre prevents speakers from navigating enclosed buildings.' }
                ],
                expected: ['C'],
                display: 'C',
                evidence: 'Paragraph E notes Kuuk Thaayorre replaces egocentric terms with "absolute cardinal directions" cultivating automated dead-reckoning.',
                trap: 'Định vị bằng phương hướng địa lý tuyệt đối (cardinal directions / compass bearings).'
              },
              {
                num: 31,
                prompt: 'According to Andy Clark and David Chalmers, what role does formal academic syntax perform?',
                options: [
                  { key: 'A', text: 'It permanently rewires human ocular biology.' },
                  { key: 'B', text: 'It functions as an external cognitive scaffold supporting working memory.' },
                  { key: 'C', text: 'It replaces philosophical inquiry with emotional intuition.' },
                  { key: 'D', text: 'It restricts abstract reasoning to native Indo-European speakers.' }
                ],
                expected: ['B'],
                display: 'B',
                evidence: 'Paragraph F describes formal syntax and notation as "external epistemic scaffolding—cognitive levers" supporting bounded working memory.',
                trap: 'Giàn giáo nhận thức ngoại tại (external epistemic scaffolding) hỗ trợ dung lượng trí nhớ làm việc.'
              }
            ]
          },
          {
            id: 'p3-g2',
            type: 'tfng',
            title: 'Questions 32–35: True / False / Not Given',
            instruction: 'Do the following statements agree with the information given in Reading Passage 3? Write TRUE, FALSE, or NOT GIVEN.',
            questions: [
              {
                num: 32,
                statement: 'Proponents of radical linguistic determinism argued that differences in grammatical tense alter speakers’ fundamental experience of time.',
                expected: ['TRUE'],
                display: 'TRUE',
                evidence: 'Paragraph A states speakers without temporal inflection "inhabit an entirely disparate metaphysical landscape."',
                trap: 'Người theo Sapir-Whorf tin rằng khác biệt ngữ pháp tạo nên sự trải nghiệm siêu hình khác nhau về thời gian.'
              },
              {
                num: 33,
                statement: 'Eleanor Rosch found that having only two basic color terms prevented the Dani from telling blue and green apart.',
                expected: ['FALSE'],
                display: 'FALSE',
                evidence: 'Paragraph B states they "distinguished focal chromatic hues with identical perceptual acuity to native English speakers."',
                trap: 'Kết quả thực nghiệm chứng minh họ vẫn phân biệt rạch ròi các sắc độ quang phổ.'
              },
              {
                num: 34,
                statement: 'Noam Chomsky performed physical surgical experiments on human brain tissue to locate Universal Grammar.',
                expected: ['NOT GIVEN'],
                display: 'NOT GIVEN',
                evidence: 'Paragraph C presents Chomsky’s computational model of linguistics; it does not mention surgical brain experiments.',
                trap: 'Không có thông tin về thí nghiệm phẫu thuật não của Chomsky.'
              },
              {
                num: 35,
                statement: 'Patients suffering from severe global aphasia invariably lose all capacity for mathematical reasoning.',
                expected: ['FALSE'],
                display: 'FALSE',
                evidence: 'Paragraph D states patients with severe global aphasia "frequently retain intact capacities for... mathematical calculation."',
                trap: 'Bệnh nhân mất ngôn ngữ nặng vẫn duy trì tốt năng lực suy luận toán học và không gian.'
              }
            ]
          },
          {
            id: 'p3-g3',
            type: 'summary',
            title: 'Questions 36–40: Summary Completion',
            instruction: 'Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.',
            summaryTitle: 'Reconciling Language and Human Thought',
            segments: [
              {
                num: 36,
                prefix: 'Whereas early linguistic ',
                suffix: ' argued that native grammar confines thought rigidly, color tests with the Dani community demonstrated intact sensory discrimination.',
                placeholder: '1 từ...',
                expected: ['determinism'],
                display: 'determinism',
                evidence: 'Paragraph A: "radical linguistic determinism."',
                trap: 'Quyết định luận ngôn ngữ: "determinism".'
              },
              {
                num: 37,
                prefix: 'Chomsky later proposed that an innate computational operation known as ',
                suffix: ' underlies all spoken languages.',
                placeholder: '1 từ...',
                expected: ['Merge', 'merge'],
                display: 'Merge',
                evidence: 'Paragraph C: "formalized in minimalist syntax as Merge."',
                trap: 'Thuật ngữ cú pháp: "Merge".'
              },
              {
                num: 38,
                prefix: 'Modern neuroimaging and clinical cases of severe global ',
                suffix: ' further indicate that conceptual computation occurs prior to speech production.',
                placeholder: '1 từ...',
                expected: ['aphasia'],
                display: 'aphasia',
                evidence: 'Paragraph D: "severe global aphasia."',
                trap: 'Chứng mất ngôn ngữ: "aphasia".'
              },
              {
                num: 39,
                prefix: 'Nonetheless, neo-Whorfian researchers note that grammar systematically guides habitual ',
                suffix: '.',
                placeholder: '1 từ...',
                expected: ['attention'],
                display: 'attention',
                evidence: 'Paragraph E: "systematically directs habitual attention."',
                trap: 'Sự chú ý mang tính thói quen: "attention".'
              },
              {
                num: 40,
                prefix: 'Finally, philosophers Clark and Chalmers portray formal syntax as external epistemic ',
                suffix: ' that amplifies human working memory.',
                placeholder: '1 từ...',
                expected: ['scaffolding'],
                display: 'scaffolding',
                evidence: 'Paragraph F: "external epistemic scaffolding—cognitive levers."',
                trap: 'Giàn giáo nhận thức: "scaffolding".'
              }
            ]
          }
        ]
      }
    ]
  };

  // Build lookup index for all 40 questions
  const ALL_READING_QUESTIONS = {};
  READING_TEST_DATA.passages.forEach(p => {
    p.questionGroups.forEach(g => {
      if (g.questions) {
        g.questions.forEach(q => {
          ALL_READING_QUESTIONS[q.num] = {
            ...q,
            passageId: p.id,
            groupType: g.type,
            groupTitle: g.title
          };
        });
      } else if (g.segments) {
        g.segments.forEach(s => {
          ALL_READING_QUESTIONS[s.num] = {
            num: s.num,
            statement: (s.prefix || '') + ' [BLANK] ' + (s.suffix || ''),
            expected: s.expected,
            display: s.display,
            evidence: s.evidence,
            trap: s.trap,
            passageId: p.id,
            groupType: 'summary',
            groupTitle: g.title
          };
        });
      }
    });
  });

  // ==========================================
  // 2. STATE MANAGEMENT
  // ==========================================
  let currentReadingPassageId = 1;
  let readingUserAnswers = {};
  let readingFlaggedQuestions = {};
  let isReadingSubmitted = false;
  let readingGradingResults = null;
  let readingFontSize = 14; // base px

  // ==========================================
  // 3. UI RENDERING ENGINE
  // ==========================================
  function renderReadingTestEnvironment() {
    const viewport = document.getElementById('testViewport');
    if (!viewport) return;

    viewport.innerHTML = `
      <div class="flex flex-col h-full space-y-4">
        
        <!-- TOP READING NAVIGATION & TOOLBAR -->
        <div class="p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-[#081b2e] dark:to-[#0f2d4a] rounded-xl border border-emerald-200 dark:border-emerald-900/60 shadow-sm flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          <!-- Passage Selector Tabs (P1, P2, P3) -->
          <div class="flex items-center gap-1.5 sm:gap-2">
            ${READING_TEST_DATA.passages.map(p => `
              <button id="reading-tab-${p.id}" onclick="switchReadingPassage(${p.id})" class="px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 ${currentReadingPassageId === p.id ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300 dark:ring-emerald-800' : 'bg-white dark:bg-[#0D1C34] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-[#152a4e]'}">
                <span>Passage ${p.id}</span>
                <span id="reading-badge-p${p.id}" class="text-[10px] px-1.5 py-0.2 rounded-full ${currentReadingPassageId === p.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'} font-bold">
                  ${getPassageAnsweredCount(p.id)}/${p.id === 3 ? 14 : 13}
                </span>
              </button>
            `).join('')}
          </div>

          <!-- Reading Tools: Font size & Highlighter -->
          <div class="flex items-center gap-2">
            <div class="flex items-center bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-xs">
              <span class="text-[10px] text-slate-500 dark:text-slate-400 px-1.5 font-mono">Cỡ chữ:</span>
              <button onclick="changeReadingFontSize(-1)" class="px-2 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-slate-800 dark:text-slate-100" title="Giảm cỡ chữ">A-</button>
              <button onclick="changeReadingFontSize(1)" class="px-2 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-slate-800 dark:text-slate-100" title="Tăng cỡ chữ">A+</button>
            </div>

            <div class="flex items-center bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-xs">
              <span class="text-[10px] text-slate-500 dark:text-slate-400 px-1.5 font-mono">Bút highlight:</span>
              <button onclick="highlightReadingSelection('#fef08a')" class="w-5 h-5 rounded bg-yellow-200 hover:bg-yellow-300 border border-yellow-400 mr-1 shadow-2xs" title="Bôi màu vàng"></button>
              <button onclick="highlightReadingSelection('#a7f3d0')" class="w-5 h-5 rounded bg-emerald-200 hover:bg-emerald-300 border border-emerald-400 mr-1 shadow-2xs" title="Bôi màu xanh lá"></button>
              <button onclick="highlightReadingSelection('#fbcfe8')" class="w-5 h-5 rounded bg-pink-200 hover:bg-pink-300 border border-pink-400 mr-1 shadow-2xs" title="Bôi màu hồng"></button>
              <button onclick="clearReadingHighlights()" class="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-rose-500" title="Xóa toàn bộ highlight">
                <i data-lucide="eraser" class="w-3.5 h-3.5"></i>
              </button>
            </div>

            <!-- Progress summary pill -->
            <div class="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 text-xs font-mono font-bold border border-emerald-300 dark:border-emerald-700">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
              <span id="readingGlobalProgressText">${getTotalAnsweredCount()}/40 đã làm</span>
            </div>
          </div>
        </div>

        <!-- SPLIT-SCREEN READING WORKSPACE: 50% LEFT (PASSAGE) & 50% RIGHT (QUESTIONS) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-[580px] overflow-hidden">
          
          <!-- LEFT 50%: PASSAGE VIEWER -->
          <div id="readingPassageViewer" class="p-6 bg-white dark:bg-[#071326] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-y-auto max-h-[calc(100vh-270px)] space-y-4 leading-relaxed font-sans select-text text-slate-800 dark:text-slate-100" style="font-size: ${readingFontSize}px;">
            <!-- Rendered by switchReadingPassage() -->
          </div>

          <!-- RIGHT 50%: QUESTIONS VIEWER -->
          <div id="readingQuestionsViewer" class="p-6 bg-slate-50 dark:bg-[#0c1833] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-y-auto max-h-[calc(100vh-270px)] space-y-6">
            <!-- Rendered by switchReadingPassage() -->
          </div>

        </div>

        <!-- BOTTOM CD-IELTS 40-QUESTION PALETTE BAR -->
        <div class="p-3 bg-white dark:bg-[#071326] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 shrink-0">
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2 font-mono">
              <span class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">Bảng Điều Hướng 40 Câu:</span>
              <span class="text-[10px] text-slate-500 dark:text-slate-400">Nhấp số câu để cuộn tới</span>
            </div>
            <div class="flex items-center gap-3 text-[11px] font-mono text-slate-600 dark:text-slate-300">
              <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-blue-600 inline-block"></span> Đã trả lời</span>
              <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700 inline-block"></span> Chưa làm</span>
              <span class="flex items-center gap-1"><span class="w-3 h-3 rounded border border-amber-400 bg-amber-50 dark:bg-amber-950/60 inline-block"></span> 🚩 Xem lại</span>
              ${isReadingSubmitted ? `<span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-600 inline-block"></span> Đúng</span><span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-rose-600 inline-block"></span> Sai</span>` : ''}
            </div>
          </div>

          <!-- Buttons 1 to 40 grouped by passage -->
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 font-mono">
            
            <!-- Group 1: 1-13 -->
            <div class="flex items-center gap-1 p-1 rounded-lg bg-slate-100/90 dark:bg-[#061224] border border-slate-200 dark:border-slate-800">
              <span class="text-[10px] text-emerald-600 font-bold px-1 hidden sm:inline">P1:</span>
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(qNum => renderPaletteButtonHtml(qNum)).join('')}
            </div>

            <!-- Group 2: 14-26 -->
            <div class="flex items-center gap-1 p-1 rounded-lg bg-slate-100/90 dark:bg-[#061224] border border-slate-200 dark:border-slate-800">
              <span class="text-[10px] text-teal-600 font-bold px-1 hidden sm:inline">P2:</span>
              ${[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(qNum => renderPaletteButtonHtml(qNum)).join('')}
            </div>

            <!-- Group 3: 27-40 -->
            <div class="flex items-center gap-1 p-1 rounded-lg bg-slate-100/90 dark:bg-[#061224] border border-slate-200 dark:border-slate-800">
              <span class="text-[10px] text-blue-600 font-bold px-1 hidden sm:inline">P3:</span>
              ${[27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map(qNum => renderPaletteButtonHtml(qNum)).join('')}
            </div>

            <!-- Submit Exam Action Button -->
            <div class="ml-auto pl-2">
              <button onclick="checkReadingAnswers()" class="px-4 py-2 rounded-lg bg-iot-green hover:bg-green-700 text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5">
                <i data-lucide="check-square" class="w-3.5 h-3.5"></i>
                <span>${isReadingSubmitted ? 'Xem Lại Bảng Điểm' : 'Nộp Bài Reading (40 Câu)'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    switchReadingPassage(currentReadingPassageId);

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function renderPaletteButtonHtml(qNum) {
    const isAnswered = Boolean(readingUserAnswers[qNum] && readingUserAnswers[qNum].trim() !== '');
    const isFlagged = Boolean(readingFlaggedQuestions[qNum]);

    let btnClass = "w-7 h-7 rounded-md font-mono text-[11px] font-bold flex items-center justify-center transition-all cursor-pointer relative ";

    if (isReadingSubmitted && readingGradingResults) {
      const isCorrect = readingGradingResults.details[qNum] && readingGradingResults.details[qNum].isCorrect;
      if (isCorrect) {
        btnClass += "bg-emerald-600 text-white shadow-xs ";
      } else {
        btnClass += "bg-rose-600 text-white shadow-xs ";
      }
    } else {
      if (isAnswered) {
        btnClass += "bg-blue-600 text-white shadow-xs ";
      } else {
        btnClass += "bg-white dark:bg-[#0D1C34] text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-[#152a4e] ";
      }
    }

    if (isFlagged) {
      btnClass += "ring-2 ring-amber-400 font-black ";
    }

    return `
      <button id="reading-palette-btn-${qNum}" onclick="jumpToReadingQuestion(${qNum})" class="${btnClass}" title="Câu ${qNum}">
        ${qNum}
        ${isFlagged ? `<span class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>` : ''}
      </button>
    `;
  }

  function updateReadingPaletteButton(qNum) {
    const btn = document.getElementById(`reading-palette-btn-${qNum}`);
    if (!btn) return;
    const isAnswered = Boolean(readingUserAnswers[qNum] && readingUserAnswers[qNum].trim() !== '');
    const isFlagged = Boolean(readingFlaggedQuestions[qNum]);

    let btnClass = "w-7 h-7 rounded-md font-mono text-[11px] font-bold flex items-center justify-center transition-all cursor-pointer relative ";

    if (isReadingSubmitted && readingGradingResults) {
      const isCorrect = readingGradingResults.details[qNum] && readingGradingResults.details[qNum].isCorrect;
      if (isCorrect) btnClass += "bg-emerald-600 text-white shadow-xs ";
      else btnClass += "bg-rose-600 text-white shadow-xs ";
    } else {
      if (isAnswered) btnClass += "bg-blue-600 text-white shadow-xs ";
      else btnClass += "bg-white dark:bg-[#0D1C34] text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-[#152a4e] ";
    }

    if (isFlagged) btnClass += "ring-2 ring-amber-400 font-black ";

    btn.className = btnClass;
    btn.innerHTML = `${qNum}${isFlagged ? `<span class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>` : ''}`;
  }

  function switchReadingPassage(passageId) {
    currentReadingPassageId = passageId;
    const passage = READING_TEST_DATA.passages.find(p => p.id === passageId);
    if (!passage) return;

    // Update top tabs styling
    [1, 2, 3].forEach(id => {
      const tab = document.getElementById(`reading-tab-${id}`);
      const badge = document.getElementById(`reading-badge-p${id}`);
      if (tab) {
        if (id === passageId) {
          tab.className = "px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300 dark:ring-emerald-800";
        } else {
          tab.className = "px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 bg-white dark:bg-[#0D1C34] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-[#152a4e]";
        }
      }
      if (badge) {
        badge.innerText = `${getPassageAnsweredCount(id)}/${id === 3 ? 14 : 13}`;
        badge.className = `text-[10px] px-1.5 py-0.2 rounded-full font-bold ${id === passageId ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`;
      }
    });

    // Render Left 50% Passage Viewer
    const leftViewer = document.getElementById('readingPassageViewer');
    if (leftViewer) {
      leftViewer.innerHTML = `
        <div class="border-b border-slate-200 dark:border-slate-800 pb-3.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">READING PASSAGE ${passage.id}</span>
            <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">Questions ${passage.qRange}</span>
          </div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 leading-snug tracking-tight">
            ${passage.title}
          </h2>
          <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 italic mt-1 leading-relaxed">
            ${passage.subtitle}
          </p>
        </div>

        <!-- Paragraphs with Labels [A], [B], [C]... -->
        <div class="space-y-4 pt-2">
          ${passage.paragraphs.map(para => `
            <div id="para-${passage.id}-${para.id}" class="space-y-1.5">
              <span class="font-bold font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-700 px-2.5 py-0.5 rounded text-xs select-none inline-block shadow-2xs">
                [Paragraph ${para.id}]
              </span>
              <p class="passage-text text-justify leading-relaxed text-slate-800 dark:text-slate-100 font-sans tracking-normal pt-0.5">
                ${para.text}
              </p>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Render Right 50% Questions Viewer
    renderActivePassageQuestions();

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function renderActivePassageQuestions() {
    const rightViewer = document.getElementById('readingQuestionsViewer');
    const passage = READING_TEST_DATA.passages.find(p => p.id === currentReadingPassageId);
    if (!rightViewer || !passage) return;

    rightViewer.innerHTML = `
      <div class="space-y-6">
        <div class="p-3.5 bg-white dark:bg-[#091528] rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-2xs flex items-center justify-between text-xs">
          <span class="font-bold font-mono text-blue-700 dark:text-blue-300 uppercase tracking-wide">PASSAGE ${passage.id}: CÂU HỎI ${passage.qRange}</span>
          <span class="text-slate-500 dark:text-slate-400 font-mono text-[11px] font-semibold">${passage.timeGuidance.split(',')[0]}</span>
        </div>

        ${passage.questionGroups.map(grp => {
      if (grp.type === 'tfng') {
        return `
              <div class="p-5 sm:p-6 bg-white dark:bg-[#091528] rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
                <div class="border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h4 class="font-bold text-xs sm:text-sm uppercase font-mono tracking-wider text-blue-700 dark:text-blue-400">${grp.title}</h4>
                  <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">${grp.instruction}</p>
                </div>

                <div class="space-y-3.5">
                  ${grp.questions.map(q => renderTfngQuestionCard(q)).join('')}
                </div>
              </div>
            `;
      } else if (grp.type === 'mcq') {
        return `
              <div class="p-5 sm:p-6 bg-white dark:bg-[#091528] rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
                <div class="border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h4 class="font-bold text-xs sm:text-sm uppercase font-mono tracking-wider text-blue-700 dark:text-blue-400">${grp.title}</h4>
                  <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">${grp.instruction}</p>
                </div>

                <div class="space-y-4">
                  ${grp.questions.map(q => renderMcqQuestionCard(q)).join('')}
                </div>
              </div>
            `;
      } else if (grp.type === 'summary') {
        return `
              <div class="p-5 sm:p-6 bg-white dark:bg-[#091528] rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
                <div class="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm uppercase font-mono tracking-wider text-blue-700 dark:text-blue-400">${grp.title}</h4>
                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">${grp.instruction}</p>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-300 dark:border-teal-700">
                    ONE WORD ONLY
                  </span>
                </div>

                <div class="p-4 sm:p-5 bg-slate-50 dark:bg-[#061224] rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-3.5 leading-relaxed text-xs">
                  <h5 class="font-bold font-mono text-center text-xs sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center justify-center gap-2">
                    <i data-lucide="file-text" class="w-4 h-4 text-emerald-600 dark:text-emerald-400"></i>
                    <span>${grp.summaryTitle}</span>
                  </h5>
                  <div class="space-y-3 pt-1">
                    ${grp.segments.map(s => renderSummaryBlankSegment(s)).join('')}
                  </div>
                </div>
              </div>
            `;
      }
      return '';
    }).join('')}
      </div>
    `;
  }

  function renderTfngQuestionCard(q) {
    const val = readingUserAnswers[q.num] || '';
    const isFlagged = Boolean(readingFlaggedQuestions[q.num]);
    const details = isReadingSubmitted && readingGradingResults ? readingGradingResults.details[q.num] : null;

    let borderState = "border-slate-200 dark:border-slate-700/80";
    if (details) {
      borderState = details.isCorrect ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30" : "border-rose-500 bg-rose-50/50 dark:bg-rose-950/30";
    }

    return `
      <div id="q_card_${q.num}" class="p-4 rounded-xl bg-slate-50 dark:bg-[#061224] border ${borderState} space-y-3 transition-all shadow-2xs hover:border-slate-400 dark:hover:border-slate-600">
        <div class="flex items-start justify-between gap-2.5">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300 dark:border-emerald-700">
              ${q.num}
            </span>
            <p class="text-xs sm:text-[13px] font-semibold text-slate-900 dark:text-slate-100 leading-relaxed font-sans">
              ${q.statement}
            </p>
          </div>
          
          <button onclick="toggleReadingFlag(${q.num})" class="px-2 py-1 rounded-md text-[11px] font-mono transition-all shrink-0 ${isFlagged ? 'text-amber-500 font-bold bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700' : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'}" title="Đánh dấu xem lại">
            🚩
          </button>
        </div>

        <!-- 3 Interactive Options: TRUE / FALSE / NOT GIVEN -->
        <div class="flex flex-wrap items-center gap-2 sm:gap-2.5 pl-8 sm:pl-9">
          ${['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => `
            <button onclick="handleReadingAnswer(${q.num}, '${opt}')" onkeydown="handleReadingInputKeydown(event, ${q.num})" class="px-3.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all ${val === opt ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-300 dark:ring-blue-800 font-black' : 'bg-white dark:bg-[#13233c] text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-slate-100 dark:hover:bg-[#1a3052] shadow-2xs'}">
              ${opt}
            </button>
          `).join('')}
        </div>

        <!-- Feedback Card if submitted -->
        ${details ? `
          <div class="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 text-xs pl-8 sm:pl-9 space-y-1.5">
            <div class="flex items-center gap-2 font-mono">
              <span class="${details.isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-rose-600 dark:text-rose-400 font-bold'}">
                ${details.isCorrect ? '✓ Chính xác' : '✗ Chưa đúng'}
              </span>
              <span class="text-slate-500 dark:text-slate-400">• Đáp án chuẩn: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">${q.display}</strong></span>
            </div>
            <p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              📖 <strong>Dẫn chứng:</strong> ${q.evidence}
            </p>
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderMcqQuestionCard(q) {
    const val = readingUserAnswers[q.num] || '';
    const isFlagged = Boolean(readingFlaggedQuestions[q.num]);
    const details = isReadingSubmitted && readingGradingResults ? readingGradingResults.details[q.num] : null;

    let borderState = "border-slate-200 dark:border-slate-700/80";
    if (details) {
      borderState = details.isCorrect ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30" : "border-rose-500 bg-rose-50/50 dark:bg-rose-950/30";
    }

    return `
      <div id="q_card_${q.num}" class="p-4 rounded-xl bg-slate-50 dark:bg-[#061224] border ${borderState} space-y-3.5 transition-all shadow-2xs hover:border-slate-400 dark:hover:border-slate-600">
        <div class="flex items-start justify-between gap-2.5">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-blue-300 dark:border-blue-700">
              ${q.num}
            </span>
            <p class="text-xs sm:text-[13px] font-semibold text-slate-900 dark:text-slate-100 leading-relaxed font-sans">
              ${q.prompt}
            </p>
          </div>

          <button onclick="toggleReadingFlag(${q.num})" class="px-2 py-1 rounded-md text-[11px] font-mono transition-all shrink-0 ${isFlagged ? 'text-amber-500 font-bold bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700' : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'}" title="Đánh dấu xem lại">
            🚩
          </button>
        </div>

        <!-- MCQ Options (A, B, C, D) -->
        <div class="space-y-2 pl-8 sm:pl-9 text-xs font-sans">
          ${q.options.map(opt => `
            <div onclick="handleReadingAnswer(${q.num}, '${opt.key}')" onkeydown="handleReadingInputKeydown(event, ${q.num})" tabindex="0" class="p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${val === opt.key ? 'bg-blue-50 dark:bg-blue-950/80 border-2 border-blue-600 dark:border-blue-400 text-blue-950 dark:text-blue-100 font-semibold shadow-xs ring-1 ring-blue-500/20' : 'bg-white dark:bg-[#13233c] border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-[#1a3052] shadow-2xs'}">
              <span class="w-6 h-6 rounded-md font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border transition-all ${val === opt.key ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'}">
                ${opt.key}
              </span>
              <span class="leading-relaxed text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 pt-0.5">${opt.text}</span>
            </div>
          `).join('')}
        </div>

        <!-- Feedback Card if submitted -->
        ${details ? `
          <div class="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 text-xs pl-8 sm:pl-9 space-y-1.5">
            <div class="flex items-center gap-2 font-mono">
              <span class="${details.isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-rose-600 dark:text-rose-400 font-bold'}">
                ${details.isCorrect ? '✓ Chính xác' : '✗ Chưa đúng'}
              </span>
              <span class="text-slate-500 dark:text-slate-400">• Đáp án chuẩn: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">${q.display}</strong></span>
            </div>
            <p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              📖 <strong>Dẫn chứng:</strong> ${q.evidence}
            </p>
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderSummaryBlankSegment(s) {
    const val = readingUserAnswers[s.num] || '';
    const isFlagged = Boolean(readingFlaggedQuestions[s.num]);
    const details = isReadingSubmitted && readingGradingResults ? readingGradingResults.details[s.num] : null;

    let borderState = "border-slate-300 dark:border-slate-600";
    if (details) {
      borderState = details.isCorrect ? "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100" : "border-rose-500 bg-rose-50/60 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100";
    }

    return `
      <div id="q_card_${s.num}" class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#061224] border border-slate-200 dark:border-slate-700/80 space-y-2.5 shadow-2xs hover:border-slate-400 dark:hover:border-slate-600 transition-all">
        <div class="flex items-start justify-between gap-2.5">
          <div class="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 leading-relaxed font-sans">
            <span>${s.prefix || ''}</span>
            <div class="inline-flex items-center gap-1.5 mx-1">
              <span class="w-6 h-6 rounded-md bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-mono font-bold text-xs inline-flex items-center justify-center border border-teal-300 dark:border-teal-700">
                ${s.num}
              </span>
              <input type="text"
                     id="q_input_${s.num}"
                     value="${val}"
                     oninput="handleReadingAnswer(${s.num}, this.value)"
                     onkeydown="handleReadingInputKeydown(event, ${s.num})"
                     placeholder="${s.placeholder}"
                     class="px-3 py-1.5 rounded-lg border-2 text-xs sm:text-sm w-40 sm:w-52 font-mono font-bold transition-all shadow-inner
                            bg-white dark:bg-[#050C1A]
                            text-slate-900 dark:text-white
                            placeholder:text-slate-400 dark:placeholder:text-slate-500
                            focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20
                            ${borderState}" />
            </div>
            <span>${s.suffix || ''}</span>
          </div>

          <button onclick="toggleReadingFlag(${s.num})" class="px-2 py-1 rounded-md text-[11px] font-mono transition-all shrink-0 ${isFlagged ? 'text-amber-500 font-bold bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700' : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'}" title="Đánh dấu xem lại">
            🚩
          </button>
        </div>

        ${details ? `
          <div class="pt-2 border-t border-slate-200 dark:border-slate-700/80 text-xs space-y-1">
            <div class="flex items-center gap-2 font-mono">
              <span class="${details.isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-rose-600 dark:text-rose-400 font-bold'}">
                ${details.isCorrect ? '✓ Chính xác' : '✗ Chưa đúng'}
              </span>
              <span class="text-slate-500 dark:text-slate-400">• Đáp án chuẩn: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">${s.display}</strong></span>
            </div>
            <p class="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              📖 <strong>Dẫn chứng:</strong> ${s.evidence}
            </p>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ==========================================
  // 4. INTERACTION EVENT HANDLERS
  // ==========================================
  function handleReadingAnswer(qNum, value) {
    readingUserAnswers[qNum] = (value != null ? String(value) : '').trim();
    updateReadingPaletteButton(qNum);

    // Update passage badge count
    const qData = ALL_READING_QUESTIONS[qNum];
    if (qData) {
      const badge = document.getElementById(`reading-badge-p${qData.passageId}`);
      if (badge) {
        badge.innerText = `${getPassageAnsweredCount(qData.passageId)}/${qData.passageId === 3 ? 14 : 13}`;
      }
    }

    // Update global counter
    const globalText = document.getElementById('readingGlobalProgressText');
    if (globalText) {
      globalText.innerText = `${getTotalAnsweredCount()}/40 đã làm`;
    }
  }

  function toggleReadingFlag(qNum) {
    readingFlaggedQuestions[qNum] = !readingFlaggedQuestions[qNum];
    updateReadingPaletteButton(qNum);
    renderActivePassageQuestions();
  }

  function jumpToReadingQuestion(qNum) {
    const qData = ALL_READING_QUESTIONS[qNum];
    if (!qData) return;

    if (qData.passageId !== currentReadingPassageId) {
      switchReadingPassage(qData.passageId);
    }

    setTimeout(() => {
      const el = document.getElementById(`q_card_${qNum}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-blue-500');
        setTimeout(() => el.classList.remove('ring-2', 'ring-blue-500'), 1500);
      }
      const inp = document.getElementById(`q_input_${qNum}`);
      if (inp) {
        inp.focus();
        if (typeof inp.select === 'function') inp.select();
      }
    }, 80);
  }

  function handleReadingInputKeydown(event, qNum) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.target && event.target.value) {
        handleReadingAnswer(qNum, event.target.value);
      }

      if (qNum === 40) {
        checkReadingAnswers();
        return;
      }

      const nextQ = qNum + 1;
      jumpToReadingQuestion(nextQ);
    }
  }

  function getPassageAnsweredCount(passageId) {
    const range = passageId === 1 ? [1, 13] : (passageId === 2 ? [14, 26] : [27, 40]);
    let count = 0;
    for (let i = range[0]; i <= range[1]; i++) {
      if (readingUserAnswers[i] && readingUserAnswers[i].trim() !== '') {
        count++;
      }
    }
    return count;
  }

  function getTotalAnsweredCount() {
    let count = 0;
    for (let i = 1; i <= 40; i++) {
      if (readingUserAnswers[i] && readingUserAnswers[i].trim() !== '') count++;
    }
    return count;
  }

  // ==========================================
  // 5. OFFICIAL IELTS READING BAND CALCULATION
  // ==========================================
  function calculateIeltsReadingBand(score) {
    if (score >= 39) return "Band 9.0";
    if (score >= 37) return "Band 8.5";
    if (score >= 35) return "Band 8.0";
    if (score >= 33) return "Band 7.5";
    if (score >= 30) return "Band 7.0";
    if (score >= 27) return "Band 6.5";
    if (score >= 23) return "Band 6.0";
    if (score >= 19) return "Band 5.5";
    if (score >= 15) return "Band 5.0";
    if (score >= 13) return "Band 4.5";
    if (score >= 10) return "Band 4.0";
    return "Band 3.5";
  }

  // ==========================================
  // 6. CHECK ANSWERS & GRADING ENGINE
  // ==========================================
  function checkReadingAnswers() {
    if (typeof window !== 'undefined' && window.examLockdown && typeof window.examLockdown.releaseExamLockdown === 'function') {
      window.examLockdown.releaseExamLockdown();
    }
    let totalScore = 0;
    const passageScores = { 1: 0, 2: 0, 3: 0 };
    const details = {};
    const mistakes = [];

    for (let i = 1; i <= 40; i++) {
      const q = ALL_READING_QUESTIONS[i];
      if (!q) continue;

      const userAns = (readingUserAnswers[i] || '').trim().toLowerCase();
      const expectedList = (q.expected || []).map(e => e.toLowerCase());
      const isCorrect = expectedList.includes(userAns);

      if (isCorrect) {
        totalScore++;
        passageScores[q.passageId]++;
        details[i] = {
          isCorrect: true,
          userAns: readingUserAnswers[i] || "Chưa trả lời",
          correctAns: q.display,
          evidence: q.evidence,
          trap: q.trap
        };
      } else {
        details[i] = {
          isCorrect: false,
          userAns: readingUserAnswers[i] || "Chưa trả lời",
          correctAns: q.display,
          evidence: q.evidence,
          trap: q.trap
        };
        mistakes.push({
          qNum: i,
          passageId: q.passageId,
          userAns: readingUserAnswers[i] || "Chưa trả lời",
          correctAns: q.display,
          evidence: q.evidence,
          trap: q.trap
        });
      }
    }

    const estBand = calculateIeltsReadingBand(totalScore);

    isReadingSubmitted = true;
    readingGradingResults = {
      totalScore,
      estBand,
      passageScores,
      details,
      mistakes
    };

    // Update all palette buttons to show green/red
    for (let i = 1; i <= 40; i++) {
      updateReadingPaletteButton(i);
    }

    // Re-render current passage questions to display answers and evidence
    renderActivePassageQuestions();

    const studentName = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.name : 'Học viên';

    // Socratic AI Record Result
    if (window.socraticAI) {
      window.socraticAI.recordTestResult({
        testId: READING_TEST_DATA.id,
        title: READING_TEST_DATA.title,
        skill: 'READING',
        score: totalScore,
        total: 40,
        band: estBand,
        mistakes: mistakes.map(m => ({
          qNum: m.qNum,
          userAns: m.userAns,
          correctAns: m.correctAns,
          category: m.qNum <= 13 ? 'ancient_horology' : (m.qNum <= 26 ? 'subterranean_ecology' : 'linguistic_architecture'),
          fallacy: m.trap
        }))
      });
    }

    // Render summary in Socratic AI chatbox
    renderReadingReportInChat(totalScore, estBand, passageScores, mistakes, studentName);

    // Open Professional CD-IELTS Scorecard Modal (No web alert)
    openOfficialReadingScorecardModal(readingGradingResults);
  }

  function renderReadingReportInChat(totalScore, estBand, passageScores, mistakes, studentName) {
    const chatContainer = document.getElementById('aiChatBox');
    if (!chatContainer) return;

    chatContainer.innerHTML = `
      <div class="p-3.5 rounded-xl bg-white dark:bg-[#111C44] border border-iot-border dark:border-slate-700 shadow-sm text-xs space-y-3 font-sans">
        <div class="flex items-center gap-2 text-iot-green font-bold font-mono">
          <i data-lucide="award" class="w-4 h-4 text-amber-500"></i>
          <span>BÁO CÁO SOCRATIC AI: READING TEST REPORT</span>
        </div>

        <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs">
          Thí sinh <strong>${studentName}</strong> hoàn thành bài thi Academic Reading (3 Passages, 40 câu):
          <div class="font-mono font-bold text-sm text-emerald-800 dark:text-emerald-200 mt-1">
            Kết quả: ${totalScore}/40 câu chính xác ➔ ${estBand}
          </div>
          <div class="text-[11px] text-iot-muted mt-1 font-mono">
            P1: ${passageScores[1]}/13 • P2: ${passageScores[2]}/13 • P3: ${passageScores[3]}/14
          </div>
        </div>

        ${mistakes.length === 0 ? `
          <p class="text-iot-green font-bold text-xs">
            🎉 Tuyệt đối 40/40! Bạn có năng lực đọc hiểu học thuật và phân tích bẫy ngôn ngữ đạt chuẩn Band 9.0 đỉnh cao.
          </p>
        ` : `
          <div class="space-y-1.5 text-[11px]">
            <span class="font-bold text-red-600 dark:text-red-400 font-mono">Giải mã bẫy đọc hiểu cần chú ý:</span>
            <ul class="space-y-1 font-mono text-slate-700 dark:text-slate-300">
              ${mistakes.slice(0, 4).map(m => `
                <li class="p-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <strong>Câu ${m.qNum} (Passage ${m.passageId}):</strong> Bạn chọn <em>"${m.userAns}"</em> ➔ Đáp án chuẩn: <strong class="text-iot-green">"${m.correctAns}"</strong>
                  <div class="text-[10px] text-iot-muted font-sans mt-0.5">${m.trap}</div>
                </li>
              `).join('')}
            </ul>
          </div>
        `}

        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <button onclick="openOfficialReadingScorecardModal()" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs transition-all shadow-2xs">
            Mở Bảng Điểm IDP/BC
          </button>
          <button onclick="restartReadingTest()" class="text-xs text-iot-muted hover:underline font-mono">
            Làm lại bài thi
          </button>
        </div>
      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ==========================================
  // 7. PROFESSIONAL OFFICIAL SCORECARD MODAL (CD-IELTS)
  // ==========================================
  function openOfficialReadingScorecardModal(results) {
    results = results || readingGradingResults;
    if (!results) return;

    const studentName = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.name : 'Học viên';
    const studentTarget = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.targetBand : '8.0';

    let modal = document.getElementById('officialReadingScorecardModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'officialReadingScorecardModal';
      document.body.appendChild(modal);
    }
    modal.className = 'fixed inset-0 z-[99999] bg-slate-900/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto';

    const { totalScore, estBand, passageScores, mistakes } = results;
    const accuracy = ((totalScore / 40) * 100).toFixed(1);

    let cefrLevel = 'B2 - Independent User';
    let badgeColor = 'from-emerald-600 to-teal-700';
    let statusEvaluation = 'Đang tiến bộ vững chắc trên lộ trình học thuật';
    if (totalScore >= 35) {
      cefrLevel = 'C2 - Mastery / Proficient';
      badgeColor = 'from-amber-500 via-amber-600 to-yellow-500';
      statusEvaluation = '🏆 XUẤT SẮC: VƯỢT MỤC TIÊU BAND ĐỀ RA (BAND 8.0 - 9.0)';
    } else if (totalScore >= 30) {
      cefrLevel = 'C1 - Effective Operational Proficiency';
      badgeColor = 'from-emerald-500 to-teal-600';
      statusEvaluation = '🎯 RẤT TỐT: KỸ NĂNG ĐỌC QUÉT (SKIMMING/SCANNING) VÀ PHÂN TÍCH HỌC THUẬT VỮNG VÀNG';
    } else if (totalScore >= 23) {
      cefrLevel = 'B2+ - Strong Independent';
      badgeColor = 'from-blue-500 to-indigo-600';
      statusEvaluation = '📈 KHÁ: CẦN TỐI ƯU HÓA CHIẾN THUẬT QUẢN LÝ THỜI GIAN PASSAGE 3';
    } else {
      statusEvaluation = '📚 CẦN BỒI DƯỠNG: TẬP TRUNG TỪ VỰNG HỌC THUẬT VÀ DẠNG TRUE/FALSE/NOT GIVEN';
    }

    const todayStr = new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const trfNumber = `IDP-READING-${Math.floor(100000 + Math.random() * 900000)}`;

    modal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-white dark:bg-[#071326] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 font-sans">
        
        <!-- Top Banner (IDP / Cambridge Assessment Aesthetic) -->
        <div class="bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#0D9488] text-white p-5 sm:p-6 border-b border-emerald-900/60 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 pointer-events-none"></div>
          <div class="absolute right-32 -top-12 w-28 h-28 rounded-full bg-amber-400/10 pointer-events-none"></div>

          <div class="flex items-start justify-between gap-4 relative z-10">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-md">
                <i data-lucide="award" class="w-6 h-6"></i>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-[11px] font-mono uppercase tracking-widest text-emerald-200 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-300/30">
                    IELTS ACADEMIC LAB • OFFICIAL TEST REPORT
                  </span>
                  <span class="text-[10px] font-mono text-emerald-100 hidden sm:inline">TRF: ${trfNumber}</span>
                </div>
                <h2 class="text-base sm:text-lg font-bold text-white mt-1 leading-tight">
                  BẢNG ĐIỂM ĐÁNH GIÁ NĂNG LỰC ĐỌC CHUẨN IDP / BRITISH COUNCIL
                </h2>
                <p class="text-xs text-emerald-100/80 mt-0.5 font-mono">
                  ${READING_TEST_DATA.title} • 40 Questions (Passages 1 to 3)
                </p>
              </div>
            </div>

            <!-- Close Button -->
            <button onclick="closeOfficialReadingScorecardModal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all active:scale-95 shrink-0" title="Đóng bảng điểm">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Candidate Info Strip -->
          <div class="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div>
              <span class="text-emerald-200 text-[10px] block uppercase">Thí Sinh</span>
              <span class="font-bold text-white text-xs truncate">${studentName}</span>
            </div>
            <div>
              <span class="text-emerald-200 text-[10px] block uppercase">Mục Tiêu</span>
              <span class="font-bold text-amber-300 text-xs">Band ${studentTarget}</span>
            </div>
            <div>
              <span class="text-emerald-200 text-[10px] block uppercase">Thời Gian Thi</span>
              <span class="font-bold text-white text-xs">60 Phút (Chuẩn IELTS)</span>
            </div>
            <div>
              <span class="text-emerald-200 text-[10px] block uppercase">Hình Thức Thi</span>
              <span class="font-bold text-white text-xs">CD-IELTS (Computer)</span>
            </div>
          </div>
        </div>

        <!-- Modal Body (Scrollable) -->
        <div class="p-5 sm:p-7 space-y-6 max-h-[calc(85vh-200px)] overflow-y-auto">
          
          <!-- HERO OVERALL BAND BADGE & SUMMARY -->
          <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-[#06241a] dark:to-[#09352e] border border-emerald-200 dark:border-emerald-900 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            
            <!-- Large Band Score Emblem -->
            <div class="flex items-center gap-5 text-center sm:text-left shrink-0">
              <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${badgeColor} text-white shadow-xl flex flex-col items-center justify-center p-2 border-2 border-white/40 ring-4 ring-emerald-200/50 dark:ring-emerald-900/50">
                <span class="text-[10px] font-mono font-bold tracking-widest uppercase opacity-90">OVERALL</span>
                <span class="text-3xl sm:text-4xl font-black font-mono tracking-tight">${estBand.replace('Band ', '')}</span>
                <span class="text-[9px] font-mono font-bold uppercase opacity-90">IELTS BAND</span>
              </div>

              <div class="space-y-1">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wide bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 inline-block">
                  ${cefrLevel}
                </span>
                <div class="text-xl sm:text-2xl font-black text-iot-dark dark:text-white font-mono">
                  ${totalScore} / 40 <span class="text-sm font-normal text-iot-muted">câu chính xác</span>
                </div>
                <div class="text-xs text-iot-muted dark:text-slate-400 font-mono">
                  Độ chính xác: <strong class="text-iot-green">${accuracy}%</strong> • Thời gian quy định: 60 phút
                </div>
              </div>
            </div>

            <!-- Evaluation Pill -->
            <div class="flex-1 w-full md:w-auto p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div class="font-bold text-iot-dark dark:text-white flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-4 h-4 text-amber-500"></i>
                <span class="font-mono uppercase text-[11px] text-emerald-700 dark:text-emerald-400">Đánh giá chuyên gia khảo thí:</span>
              </div>
              <p class="leading-relaxed text-slate-700 dark:text-slate-300 text-[11px]">
                ${statusEvaluation}
              </p>
              <div class="text-[10px] font-mono text-iot-muted">
                Dữ liệu được chuẩn hóa theo thang điểm khảo thí Cambridge English và lưu trữ vào Hồ Sơ Nhận Thức Socratic AI.
              </div>
            </div>

          </div>

          <!-- 3-PASSAGE DETAILED PERFORMANCE BREAKDOWN -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xs uppercase font-mono tracking-wider text-iot-dark dark:text-white flex items-center gap-2">
                <i data-lucide="bar-chart-3" class="w-4 h-4 text-emerald-600"></i>
                <span>Chi Tiết Điểm Số 3 Đoạn Văn (Passage 1 – Passage 3)</span>
              </h3>
              <span class="text-[11px] font-mono text-iot-muted">Tổng cộng 40 câu</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[1, 2, 3].map(pId => {
      const totalInP = pId === 3 ? 14 : 13;
      const sc = passageScores[pId] || 0;
      const pct = ((sc / totalInP) * 100).toFixed(0);
      const pData = READING_TEST_DATA.passages.find(p => p.id === pId);

      let color = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300';
      let barColor = 'bg-emerald-600';
      let badgeText = 'Xuất sắc';
      if (sc < (totalInP * 0.6)) {
        color = 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300';
        barColor = 'bg-amber-500';
        badgeText = 'Cần luyện thêm';
      } else if (sc < (totalInP * 0.8)) {
        color = 'bg-blue-100 text-iot-primary dark:bg-blue-950/60 dark:text-blue-300';
        barColor = 'bg-iot-primary';
        badgeText = 'Tốt';
      }

      return `
                  <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between font-mono">
                      <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400">PASSAGE ${pId}</span>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${color}">${sc}/${totalInP} (${pct}%)</span>
                    </div>

                    <div class="text-[11px] font-semibold text-iot-dark dark:text-slate-200 line-clamp-1" title="${pData.title}">
                      ${pData.title}
                    </div>

                    <!-- Progress Bar -->
                    <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div class="h-full ${barColor} rounded-full" style="width: ${pct}%"></div>
                    </div>

                    <div class="flex items-center justify-between text-[10px] font-mono text-iot-muted">
                      <span>Questions ${pData.qRange}</span>
                      <span class="font-bold">${badgeText}</span>
                    </div>
                  </div>
                `;
    }).join('')}
            </div>
          </div>

          <!-- DIAGNOSTIC MISTAKES & EVIDENCE ANALYSIS -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xs uppercase font-mono tracking-wider text-iot-dark dark:text-white flex items-center gap-2">
                <i data-lucide="alert-triangle" class="w-4 h-4 text-red-500"></i>
                <span>Giải Mã Dẫn Chứng & Câu Sai (${mistakes.length} câu cần khắc phục)</span>
              </h3>
              <span class="text-[11px] font-mono text-iot-muted">Chuẩn đề thi Cambridge</span>
            </div>

            ${mistakes.length === 0 ? `
              <div class="p-4 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-300 dark:border-green-800 text-xs text-green-900 dark:text-green-200 flex items-center gap-3">
                <i data-lucide="check-circle-2" class="w-5 h-5 text-iot-green shrink-0"></i>
                <div>
                  <strong>Tuyệt đối 40/40!</strong> Bạn đã làm chủ 100% năng lực đọc hiểu học thuật và không mắc phải bất kỳ bẫy logic nào của giám khảo.
                </div>
              </div>
            ` : `
              <div class="max-h-64 overflow-y-auto space-y-2 pr-1 font-mono text-xs">
                ${mistakes.map(m => `
                  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-red-200/80 dark:border-red-900/50 space-y-1.5 transition-all hover:border-red-400">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <span class="font-bold text-iot-dark dark:text-white flex items-center gap-2">
                        <span class="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-300 inline-flex items-center justify-center text-[10px] font-bold">#${m.qNum}</span>
                        <span>Câu ${m.qNum} (Passage ${m.passageId})</span>
                      </span>

                      <div class="flex items-center gap-2 text-xs">
                        <span class="text-red-500 line-through">Bạn chọn: "${m.userAns}"</span>
                        <span class="text-iot-muted">➔</span>
                        <span class="text-iot-green font-bold bg-green-50 dark:bg-green-950/60 px-2 py-0.5 rounded border border-green-200 dark:border-green-800">Đáp án: "${m.correctAns}"</span>
                      </div>
                    </div>

                    <p class="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed pl-7">
                      📖 <strong>Dẫn chứng:</strong> ${m.evidence}
                    </p>
                    <p class="text-[10px] text-amber-700 dark:text-amber-400 font-sans pl-7">
                      💡 <em>Bẫy đọc hiểu:</em> ${m.trap}
                    </p>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

        </div>

        <!-- Bottom Action Buttons Bar -->
        <div class="bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div class="text-[11px] font-mono text-iot-muted hidden sm:block">
            Dữ liệu đã đồng bộ vào Hồ Sơ Nhận Thức Socratic AI
          </div>

          <div class="flex items-center gap-2.5 w-full sm:w-auto ml-auto">
            <button onclick="closeOfficialReadingScorecardModal()" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-iot-dark dark:text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-2xs">
              <i data-lucide="eye" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>Xem Lại Bài Thi</span>
            </button>

            <button onclick="restartReadingTest()" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-2xs">
              <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
              <span>Làm Lại</span>
            </button>

            <button onclick="closeOfficialReadingScorecardModal(); if(window.socraticAI && window.socraticAI.openCognitiveProfileModal) window.socraticAI.openCognitiveProfileModal();" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 shadow-md active:scale-95">
              <i data-lucide="brain" class="w-3.5 h-3.5 text-amber-300"></i>
              <span>Hồ Sơ Nhận Thức</span>
            </button>
          </div>
        </div>

      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function closeOfficialReadingScorecardModal() {
    const modal = document.getElementById('officialReadingScorecardModal');
    if (modal) modal.remove();
  }

  function restartReadingTest() {
    closeOfficialReadingScorecardModal();
    readingUserAnswers = {};
    readingFlaggedQuestions = {};
    isReadingSubmitted = false;
    readingGradingResults = null;
    currentReadingPassageId = 1;
    renderReadingTestEnvironment();
    if (window.socraticAI && window.socraticAI.showLearningToast) {
      window.socraticAI.showLearningToast("🔄 Đã khởi động lại bài thi Academic Reading 40 câu.");
    }
  }

  // ==========================================
  // 8. TEXT UTILITIES: HIGHLIGHTER & FONT SIZE
  // ==========================================
  function changeReadingFontSize(delta) {
    readingFontSize = Math.max(12, Math.min(22, readingFontSize + delta));
    const viewer = document.getElementById('readingPassageViewer');
    if (viewer) {
      viewer.style.fontSize = readingFontSize + 'px';
    }
  }

  function highlightReadingSelection(bgColor) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      if (window.socraticAI && window.socraticAI.showLearningToast) {
        window.socraticAI.showLearningToast("Vui lòng bôi đen văn bản trong bài đọc trước khi bấm bút highlight.");
      }
      return;
    }
    const range = sel.getRangeAt(0);
    const span = document.createElement('span');
    span.style.backgroundColor = bgColor;
    span.className = 'reading-highlight rounded-xs px-0.5 text-slate-900';
    try {
      range.surroundContents(span);
      sel.removeAllRanges();
    } catch (e) {
      console.warn("Highlight surround error:", e);
    }
  }

  function clearReadingHighlights() {
    const viewer = document.getElementById('readingPassageViewer');
    if (!viewer) return;
    const highlights = viewer.querySelectorAll('.reading-highlight');
    highlights.forEach(h => {
      const parent = h.parentNode;
      while (h.firstChild) parent.insertBefore(h.firstChild, h);
      parent.removeChild(h);
    });
    if (window.socraticAI && window.socraticAI.showLearningToast) {
      window.socraticAI.showLearningToast("Đã xóa các vết bút highlight.");
    }
  }

  // ==========================================
  // 9. EXPORTS TO GLOBAL WINDOW OBJECT
  // ==========================================
  if (typeof window !== 'undefined') {
    window.READING_TEST_DATA = READING_TEST_DATA;
    window.renderReadingTestEnvironment = renderReadingTestEnvironment;
    window.switchReadingPassage = switchReadingPassage;
    window.handleReadingAnswer = handleReadingAnswer;
    window.toggleReadingFlag = toggleReadingFlag;
    window.jumpToReadingQuestion = jumpToReadingQuestion;
    window.handleReadingInputKeydown = handleReadingInputKeydown;
    window.checkReadingAnswers = checkReadingAnswers;
    window.calculateIeltsReadingBand = calculateIeltsReadingBand;
    window.openOfficialReadingScorecardModal = openOfficialReadingScorecardModal;
    window.closeOfficialReadingScorecardModal = closeOfficialReadingScorecardModal;
    window.restartReadingTest = restartReadingTest;
    window.changeReadingFontSize = changeReadingFontSize;
    window.highlightReadingSelection = highlightReadingSelection;
    window.clearReadingHighlights = clearReadingHighlights;
  }

})();

