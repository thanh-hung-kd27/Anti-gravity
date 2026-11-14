/**
 * IELTS ACADEMIC LAB - AUTHENTIC WRITING TESTS DATA REPOSITORY
 * 8 COMPLETELY UNIQUE & NON-OVERLAPPING TEST SUITES
 * 
 * TASK 1 DIVERSE VISUAL FORMATS (100% Unique Across All 8 Tests):
 * 1. Line Graph (Biểu đồ đường xu hướng qua 20 năm)
 * 2. Map / Plan Comparison (Bản đồ quy hoạch hạ tầng Cảng biển 2000 vs Nay)
 * 3. Linear Manufacturing Process (Sơ đồ kỹ thuật sản xuất nhiên liệu sinh học Ethanol)
 * 4. Mixed Chart (Biểu đồ kết hợp: Tròn tỷ lệ địa điểm + Cột lứa tuổi khiêu vũ)
 * 5. Multiple Pie Charts (3 biểu đồ tròn cơ cấu chi tiêu tiêu dùng 1990 - 2010 - 2025)
 * 6. Academic Data Matrix Table (Bảng số liệu ma trận an ninh giám sát 6 siêu đô thị)
 * 7. Grouped Bar Chart (Biểu đồ cột nhóm so sánh năng lượng tái tạo 5 quốc gia)
 * 8. Closed-Loop Bio-Cycle Diagram (Chu trình sinh học khép kín Polyme tảo biển & Phân hủy)
 * 
 * TASK 2 DIVERSE ESSAY PROMPT FORMATS (100% Unique Across All 8 Tests):
 * 1. Discuss Both Views and Give Your Own Opinion (Cooperation vs Competition)
 * 2. Causes and Solutions / Problems and Measures (Terrestrial Poverty vs Space Spend)
 * 3. Do Advantages Outweigh Disadvantages? (Remote Teleworking vs Alienation)
 * 4. To What Extent Do You Agree or Disagree? (UBI & Human Agency)
 * 5. Positive or Negative Development? (Baudrillard - Symbolic Commodity Fetishism)
 * 6. Direct / Two-Part Question (Digital Surveillance Expansion & Right to Privacy)
 * 7. Policy Evaluation / Strict Stance (Fossil Fuel Carbon Tax & Green Transition)
 * 8. Problems and Alternative Solutions (5-Year Plastic Ban Challenges & Alternatives)
 */

(function () {
  'use strict';

  const WRITING_TESTS_DATA = {
    // ==========================================
    // 1. CAMBRIDGE 19 - TEST 1
    // Task 1: LINE GRAPH | Task 2: DISCUSS BOTH VIEWS & OPINION
    // ==========================================
    'cam19-wri-t1': {
      id: 'cam19-wri-t1',
      title: 'Cambridge 19 - Test 1: Academic Writing (Tasks 1 & 2)',
      defaultActiveTask: 1,
      totalTimeMinutes: 60,
      task1: {
        id: 'cam19-t1-melbourne-social-centre',
        type: 'line_graph',
        title: 'Task 1: Participants in Social Centre Activities in Melbourne (2000–2020)',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The line graph below shows the number of participants in five different activities at a social centre in Melbourne, Australia between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        lineData: {
          title: 'Participants in Social Centre Activities: Melbourne (2000 - 2020)',
          years: [2000, 2005, 2010, 2015, 2020],
          series: [
            { name: 'Film club', color: '#3b82f6', values: [64, 65, 60, 62, 65] },
            { name: 'Table tennis', color: '#10b981', values: [18, 20, 38, 45, 53] },
            { name: 'Martial arts', color: '#ef4444', values: [37, 36, 35, 36, 35] },
            { name: 'Musical performances', color: '#f59e0b', values: [0, 12, 15, 18, 17] },
            { name: 'Amateur dramatics', color: '#8b5cf6', values: [27, 22, 13, 11, 6] }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase đề bài: The line graph illustrates the number of individuals engaging in five distinct activities at a community centre in Melbourne from 2000 to 2020.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Chỉ ra 2 đặc điểm bao quát: (1) Film club luôn giữ vị thế phổ biến nhất; (2) Table tennis có mức tăng trưởng ngoạn mục nhất, trong khi Amateur dramatics chứng kiến sự sụt giảm liên tục.' },
          { section: '3. Body 1 (Film Club, Table Tennis, Martial Arts)', tip: 'Phân tích Film club dao động từ 60-65 người; Table tennis tăng gần gấp ba từ 18 lên 53; Martial arts ổn định gần như tuyệt đối quanh mức 35-37 người.' },
          { section: '4. Body 2 (Musical Performances & Amateur Dramatics)', tip: 'Nhấn mạnh Musical performances bắt đầu từ năm 2005 (12 người) rồi ổn định ở 17 người; Amateur dramatics lao dốc từ 27 xuống vỏn vẹn 6 người năm 2020.' }
        ],
        modelSampleBand85: `The line graph delineates the number of individuals taking part in five separate activities at a community social facility in Melbourne over a two-decade span from 2000 to 2020.

Overall, it is immediately apparent that the film club remained consistently the most favored pastime throughout the entire period, despite minor fluctuations. Furthermore, while table tennis underwent a remarkable surge in participation, amateur dramatics recorded a precipitous and sustained decline.

In 2000, the film club led with 64 attendees, maintaining this elevated status with modest oscillations between 60 and 65 participants, concluding at 65 in 2020. In sharp contrast, table tennis commenced with merely 18 players in 2000, before embarking on an exponential rise after 2005 to reach 38 in 2010 and culminating at 53 by 2020, becoming the second most frequented activity.

Regarding the remaining pursuits, martial arts demonstrated remarkable stability, hovering persistently between 35 and 37 participants across the twenty years. Musical performances were non-existent in 2000 but debuted in 2005 with 12 attendees, climbing modestly to plateau around 17 in 2020. Conversely, amateur dramatics started at 27 participants, but experienced a continual downward trajectory, plummeting by more than four-fifths to finish at an inconsequential figure of just 6 participants in 2020.`,
        collocations: [
          'community social facility',
          'two-decade span',
          'favored pastime',
          'minor fluctuations',
          'remarkable surge',
          'sustained decline',
          'exponential rise',
          'continual downward trajectory'
        ],
        defaultCandidateText: `The line graph illustrates the number of participants in five different activities at a social centre in Melbourne, Australia between 2000 and 2020.

Overall, the film club was consistently the most popular activity over the period shown. Meanwhile, table tennis experienced a substantial increase in participation, whereas amateur dramatics suffered a significant decline.`
      },
      task2: {
        id: 'cam19-t1-cooperation-vs-competition',
        type: 'discursive_essay',
        essayType: 'discuss_both_views',
        title: 'Task 2: Competition vs Cooperation in Youth (Discuss Both Views & Opinion)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'Some people think that it is better for people to learn to cooperate rather than to compete with each other when they are young. Others believe that competition helps them to become successful later in life. Discuss both views and give your own opinion.',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase 2 luồng ý kiến -> Luận điểm cá nhân (Thesis Statement): Cả hai đều có giá trị, nhưng hợp tác là năng lực cốt lõi quyết định khả năng lãnh đạo và hạnh phúc.' },
          { section: '2. Body 1 (View 1: Thúc đẩy Cạnh tranh)', tip: 'Cạnh tranh rèn luyện tính kiên cường (resilience), thúc đẩy nỗ lực vượt qua giới hạn cá nhân và làm quen với áp lực thị trường lao động.' },
          { section: '3. Body 2 (View 2: Giáo dục Hợp tác)', tip: 'Hợp tác rèn luyện trí tuệ cảm xúc (EQ), kỹ năng đàm phán giải quyết xung đột và khả năng phối hợp liên ngành.' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: Hợp tác là nền tảng đạo đức và văn minh, trong khi cạnh tranh nên được hướng tới việc tự vượt lên chính mình.' }
        ],
        modelSampleBand85: `Whether children derive greater long-term benefit from mastering cooperation or engaging in competitive pursuits remains a perennial topic of educational inquiry. While advocates of competition argue that rivalry fosters individual resilience and high performance, I firmly contend that cooperative competence forms the indispensable bedrock of modern human accomplishment, upon which healthy competitiveness should be cultivated.

On the one hand, proponents of competition emphasize its efficacy in stimulating ambition and psychological fortitude. In an intensely competitive global economy, individuals inevitably encounter academic grading systems, scarce university placements, and contested corporate appointments. Early exposure to structured competition—whether in athletic tournaments or scholastic contests—teaches youth to establish rigorous benchmarks, manage high-pressure scrutiny, and perceive setbacks as constructive feedback rather than catastrophic failure. Consequently, an appetite for healthy competition can prevent complacency and propel self-directed excellence.

Nevertheless, prioritizing competition over collaboration risks instilling toxic individualism and chronic performance anxiety. In contemporary society, virtually all complex human endeavors—from scientific discovery to transnational commerce—depend fundamentally upon teamwork, interdisciplinary communication, and collective problem-solving. Learning to cooperate equips young individuals with essential interpersonal competencies, most notably empathy, active listening, and conflict resolution. When children learn to subordinate parochial self-interest to achieve a collective objective, they develop high emotional intelligence and social cohesion, traits that modern organizational psychology identifies as decisive predictors of executive leadership.

In conclusion, although competition unquestionably serves as a catalyst for personal grit and ambition, excessive emphasis on winning can erode interpersonal trust. Therefore, education should primarily ground young individuals in the art of cooperation, while channelizing their competitive instincts toward collaborative excellence and mutual elevation.`,
        collocations: [
          'perennial topic of inquiry',
          'indispensable bedrock',
          'psychological fortitude',
          'contested corporate appointments',
          'parochial self-interest',
          'interdisciplinary communication',
          'collective problem-solving',
          'subordinate self-interest'
        ],
        defaultCandidateText: `Nowadays, there is an ongoing debate about whether children should be encouraged to cooperate with others or to compete against each other to achieve success in the future.

On the one hand, competition can motivate young people to work harder and develop resilience. On the other hand, cooperation is vital for developing empathy and teamwork skills that are required in almost all modern workplaces.`
      }
    },

    // ==========================================
    // 2. CAMBRIDGE 19 - TEST 2
    // Task 1: MAP PLAN | Task 2: CAUSES AND SOLUTIONS / PROBLEMS & MEASURES
    // ==========================================
    'wri-cam19-t2': {
      id: 'wri-cam19-t2',
      title: 'Cambridge 19 - Test 2: Space Exploration vs Terrestrial Poverty',
      defaultActiveTask: 2,
      totalTimeMinutes: 60,
      task1: {
        id: 'cam19-t2-harbour-layout',
        type: 'map_plan',
        title: 'Task 1: Comparative Layout of a Coastal Harbour in 2000 and Now',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The maps below show the layout of a harbour in 2000 and the changes that have taken place since then. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        mapData: {
          title: 'Development of Coastal Harbour: 2000 vs Today',
          yearA: '2000',
          yearB: 'Today',
          featuresA: [
            { label: 'Commercial Fishing Dock', area: 'North Pier' },
            { label: 'Old Cargo Warehouse', area: 'North-East Quayside' },
            { label: 'Public Sand Beach', area: 'South-East Shore' },
            { label: 'Small Car Park (30 spaces)', area: 'South-West Gate' },
            { label: 'Gravel Access Road', area: 'West Inland Path' }
          ],
          featuresB: [
            { label: 'Marina for Private Yachts & Sailing Club', area: 'North Pier' },
            { label: 'Luxury 4-Star Hotel & Waterfront Cafes', area: 'North-East Quayside' },
            { label: 'Public Beach with Timber Boardwalk', area: 'South-East Shore' },
            { label: 'Expanded Car Park (120 spaces) + EV Chargers', area: 'South-West Gate' },
            { label: 'High-speed Passenger Ferry Terminal', area: 'Central Dock' }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase đề bài: The plans illustrate the infrastructural transformations that have occurred in a coastal harbour between 2000 and the present day.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Nêu bật xu hướng chính: Cảng đã chuyển đổi hoàn toàn từ khu vực hậu cần đánh bắt cá thương mại sang khu nghỉ dưỡng du lịch cao cấp và dịch vụ hành khách hiện đại.' },
          { section: '3. Body 1 (Khu vực Phía Bắc & Bến tàu)', tip: 'Mô tả cầu tàu phía Bắc: bến cá thương mại được chuyển thành Marina cho du thuyền; nhà kho hàng hóa cũ nhường chỗ cho khách sạn 4 sao sang trọng và dãy cafe ven nước.' },
          { section: '4. Body 2 (Khu vực Phía Nam & Cơ sở giao thông)', tip: 'Bãi biển phía đông nam được giữ lại và bổ sung lối đi bộ lát gỗ; bãi đỗ xe phía tây nam mở rộng gấp 4 lần kèm trạm sạc điện và ga tàu cao tốc chở khách mới.' }
        ],
        modelSampleBand85: `The two schematic diagrams depict the infrastructural alterations carried out in a coastal harbour between the year 2000 and the present day.

Overall, the harbour has undergone an extensive modernization, transitioning from a functional commercial fishing and industrial depot into a leisure-oriented marina complex with upgraded tourist and transport amenities.

Looking first at the northern quayside, the original commercial fishing dock has been completely repurposed into an exclusive marina accommodating private yachts and a sailing club. Adjacent to this, the former derelict cargo warehouse in the northeast quadrant has been cleared to make way for a four-star luxury hotel, flanked by a pedestrian promenade lined with waterfront cafes and dining establishments.

Turning to the southern and western precincts, significant enhancements have been introduced to accommodate higher visitor traffic. The modest 30-space parking lot in the southwest has quadrupled in size to provide 120 vehicle spaces, augmented by electric vehicle charging points. Directly connected to this, the former rough gravel roadway has been paved to serve a newly constructed high-speed passenger ferry terminal in the central dock basin. Meanwhile, the public sand beach on the southeast shore has been conserved, with the notable addition of an elevated timber boardwalk.`,
        collocations: [
          'schematic diagrams',
          'infrastructural alterations',
          'leisure-oriented marina',
          'commercial fishing dock',
          'derelict cargo warehouse',
          'pedestrian promenade',
          'waterfront cafes',
          'elevated timber boardwalk'
        ],
        defaultCandidateText: `The two maps illustrate the changes that have taken place in a harbour since the year 2000.

Overall, the harbour has been substantially transformed from a commercial and industrial fishing area into a modern leisure and tourism hub, with enhanced transport and hospitality facilities.`
      },
      task2: {
        id: 'cam19-t2-poverty-causes-solutions',
        type: 'discursive_essay',
        essayType: 'causes_and_solutions',
        title: 'Task 2: Terrestrial Deprivation & Space Budgets (Causes & Solutions)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'Despite monumental breakthroughs in aerospace and space exploration, billions of people across the globe still suffer from acute poverty, food insecurity, and substandard healthcare. What are the primary causes of this persistent disparity, and what effective measures can governments and international bodies take to resolve these urgent terrestrial crises?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Nêu nghịch lý: Khoa học vũ trụ tiến vào kỷ nguyên liên hành tinh trong khi nạn nghèo đói cùng cực vẫn tiếp diễn trên Trái Đất -> Xác định rõ bài viết sẽ phân tích các nguyên nhân cốt tử và giải pháp chính sách.' },
          { section: '2. Body 1 (Nguyên nhân - Primary Causes)', tip: 'Phân tích: (1) Bất bình đẳng phân phối tài nguyên mang tính cấu trúc (systemic resource misallocation); (2) Động lực chính trị coi trọng biểu tượng quyền lực quốc gia hơn an sinh xã hội vi mô.' },
          { section: '3. Body 2 (Giải pháp - Pragmatic Measures)', tip: 'Đề xuất: (1) Tư nhân hóa một phần lĩnh vực vũ trụ để tái phân bổ ngân sách công cho y tế, nước sạch và giáo dục; (2) Tận dụng công nghệ viễn thám vũ trụ trực tiếp phục vụ nông nghiệp và cảnh báo thiên tai.' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: Chỉ khi giải quyết được các nghĩa vụ nhân đạo cơ bản trên Trái Đất thì các thành tựu vũ trụ mới thực sự mang ý nghĩa văn minh nhân loại.' }
        ],
        modelSampleBand85: `The stark juxtaposition between monumental cosmological triumphs and the persistence of pervasive human deprivation on Earth represents one of the defining ethical paradoxes of our time. While national space agencies command staggering capital endowments to launch lunar landers and interplanetary probes, hundreds of millions continue to endure malnutrition and preventable illness. This essay will examine the systemic causes underlying this profound imbalance and articulate feasible policy remedies.

The root causes of this disparity stem primarily from geopolitical prestige competition and structural fiscal distortion. Throughout modern history, aerospace dominance has functioned as a potent surrogate for imperial power and technological supremacy, prompting superpowers to funnel monumental public funds into cosmological endeavors for national prestige. Concurrently, poverty alleviation suffers from chronic bureaucratic inertia and corrupt distribution networks in developing regions. Unlike spectacular rocket launches that generate visible patriotic pride, constructing resilient sewage systems, subsidizing clean drinking water, and financing universal primary healthcare yield dispersed, long-term outcomes that short-sighted electoral cycles frequently fail to prioritize.

To rectify this profound inequality, a two-pronged strategy involving fiscal reallocation and technological harmonization is imperative. First, governments must institutionalize a binding statutory dividend from aerospace expenditures, mandating that for every dollar invested in orbital ventures, an equivalent or higher allocation must be directed toward public health and rural welfare infrastructure. Furthermore, nation-states should transfer capital-intensive launch missions to competitive private contractors, thereby conserving public tax revenue for terrestrial social safety nets. Crucially, the technological fruits of space research—most notably meteorological telemetry, drought-monitoring satellites, and water purification membranes—must be open-sourced to impoverished agrarian nations to insulate subsistence farmers against climatic volatility.

In conclusion, the enduring persistence of earthly poverty amidst astronomical ambition is fueled by misaligned geopolitical priorities and uneven resource allocation. By rebalancing national budgets toward basic human welfare and repurposing orbital innovations for humanitarian relief, the international community can ensure that human progress is measured not merely by the distance we travel into the cosmos, but by the dignity we guarantee on Earth.`,
        collocations: [
          'ethical paradoxes',
          'pervasive human deprivation',
          'geopolitical prestige competition',
          'structural fiscal distortion',
          'cosmological endeavors',
          'statutory dividend',
          'technological telemetry',
          'two-pronged strategy'
        ],
        defaultCandidateText: `Nowadays, while billions of dollars are poured into sending rockets into outer space, millions of people still lack access to clean water, food, and basic healthcare on Earth.

This disparity is caused by political priorities and unequal resource distribution, but governments can solve it by reallocating budgets to poverty relief and using satellite technology to assist agriculture.`
      }
    },

    // ==========================================
    // 3. CAMBRIDGE 19 - TEST 3
    // Task 1: LINEAR PROCESS DIAGRAM | Task 2: ADVANTAGES OUTWEIGH DISADVANTAGES?
    // ==========================================
    'wri-cam19-t3': {
      id: 'wri-cam19-t3',
      title: 'Cambridge 19 - Test 3: Remote Work & Social Alienation',
      defaultActiveTask: 2,
      totalTimeMinutes: 60,
      task1: {
        id: 'cam19-t3-biofuel-production',
        type: 'process_diagram',
        title: 'Task 1: The Industrial Synthesis of Ethanol Biofuel from Corn Grain',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The diagram below shows the process of producing ethanol fuel from corn (maize) grains. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        processData: {
          title: 'Flowchart: Ethanol Biofuel Production from Corn Grain',
          steps: [
            { step: 1, name: 'Harvesting & Cleaning', desc: 'Mature corn harvested from agricultural farms and sieved to remove extraneous dirt and chaff.' },
            { step: 2, name: 'Milling & Pulverizing', desc: 'Kernels fed into industrial hammer mill and pulverized into fine, homogeneous corn meal.' },
            { step: 3, name: 'Cooking & Liquefaction', desc: 'Water and alpha-amylase enzymes introduced inside high-pressure cooker at 85°C to liquefy starch into soluble sugars.' },
            { step: 4, name: 'Yeast Fermentation Vat', desc: 'Selected Saccharomyces yeast added; anaerobic biological fermentation converts glucose into crude ethanol and CO2 over 48 hours.' },
            { step: 5, name: 'Fractional Distillation', desc: 'Crude mash pumped into fractional distillation column, separating alcohol from solids to reach 95% concentration.' },
            { step: 6, name: 'Molecular Sieve Dehydration', desc: 'Vapor passes through zeolite molecular sieves to strip residual moisture, yielding 99.5% anhydrous fuel-grade ethanol.' },
            { step: 7, name: 'Petroleum Blending & Dispatch', desc: 'Ethanol blended with petroleum (E10/E85) in bulk storage tanks and distributed via tanker trucks to filling stations.' }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase đề bài: The flow diagram illustrates the sequential stages involved in the commercial manufacturing of ethanol biofuel from raw maize.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Nêu số bước và tính chất: Quy trình gồm 7 giai đoạn liên hoàn, bắt đầu từ thu hoạch nghiền hạt cơ học, qua quá trình đường hóa và lên men vi sinh, và kết thúc bằng chưng cất khử nước thành nhiên liệu thương mại.' },
          { section: '3. Body 1 (Giai đoạn Cơ học & Hóa sinh ban đầu: Steps 1-3)', tip: 'Miêu tả thu hoạch, nghiền bột (hammer milling), sau đó nấu với nước và enzyme ở 85°C để chuyển hóa tinh bột thành đường hòa tan.' },
          { section: '4. Body 2 (Lên men, Chưng cất & Khử nước: Steps 4-7)', tip: 'Miêu tả lên men bằng men vi sinh trong 48 giờ, tháp chưng cất tách ethanol 95%, màng lọc phân tử tách nước tạo ethanol 99.5%, và phối trộn xăng.' }
        ],
        modelSampleBand85: `The procedural diagram delineates the multi-stage linear process through which ethanol biofuel is synthesized from raw corn grain for commercial automotive consumption.

Overall, the process encompasses seven discrete stages, commencing with the mechanical harvesting and milling of raw maize, progressing through enzymatic liquefaction and biological fermentation, and culminating in distillation and chemical dehydration to yield pure combustible fuel.

In the initial mechanical phase, mature corn crops are harvested from farms and purified to eliminate residual debris. The grains are subsequently fed into an industrial hammer mill where they are pulverized into a fine meal. Following this, the ground meal is combined with water and alpha-amylase enzymes inside a pressurized cooker maintained at 85°C, a biochemical reaction that liquefies complex starches into soluble fermentable sugars.

During the subsequent biological stage, the cooled mash is transferred into large-scale fermentation vats, where selected yeast strains are introduced. Over an incubation period of roughly 48 hours, anaerobic fermentation converts glucose into crude ethanol while emitting carbon dioxide as a byproduct. The resultant liquid then enters a fractional distillation column to concentrate the alcohol content to 95%. Finally, the mixture passes through a molecular sieve dehydration unit to strip remaining moisture, producing 99.5% pure anhydrous ethanol, which is blended with petroleum and dispatched via road tankers to service stations.`,
        collocations: [
          'procedural diagram',
          'multi-stage linear process',
          'automotive consumption',
          'enzymatic liquefaction',
          'biological fermentation',
          'pressurized cooker',
          'anaerobic fermentation',
          'fractional distillation column'
        ],
        defaultCandidateText: `The diagram illustrates the process of producing ethanol biofuel from corn crops.

Overall, the manufacturing process consists of seven main stages, starting from harvesting and milling the raw corn, followed by enzymatic cooking, yeast fermentation, distillation, and final dehydration.`
      },
      task2: {
        id: 'cam19-t3-remote-work-pros-cons',
        type: 'discursive_essay',
        essayType: 'advantages_outweigh_disadvantages',
        title: 'Task 2: Remote Work vs Workplace Camaraderie (Do Advantages Outweigh Disadvantages?)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'In many sectors today, working from home via digital platforms has become the predominant mode of employment. Do the advantages of this flexible remote working arrangement outweigh the disadvantages of social isolation and reduced workplace camaraderie?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Nêu hiện tượng làm việc từ xa trở thành chuẩn mực lao động mới -> Nêu rõ quan điểm (Thesis): Dù có những hạn chế về mặt tương tác xã hội, nhưng ưu điểm về năng suất, sức khỏe và tính tự chủ cá nhân vượt trội hơn hẳn.' },
          { section: '2. Body 1 (Nhược điểm: Sự cô lập & Xói mòn văn hóa)', tip: 'Thừa nhận nhược điểm: Thiếu tương tác trực tiếp dẫn đến cảm giác đơn độc (social isolation), ranh giới giữa công việc và nghỉ ngơi bị xóa nhòa, khó truyền lửa văn hóa công ty.' },
          { section: '3. Body 2 (Ưu điểm vượt trội: Tự chủ, Tiết kiệm thời gian, Năng suất)', tip: 'Phân tích ưu điểm: Triệt tiêu thời gian kẹt xe hằng ngày, cho phép người lao động tập trung tư duy sâu (deep work), cân bằng đời sống gia đình và tiếp cận cơ hội việc làm toàn cầu.' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: Ưu điểm của mô hình làm việc linh hoạt áp đảo nhược điểm, nhất là khi được bổ trợ bởi các buổi gặp gỡ định kỳ.' }
        ],
        modelSampleBand85: `The rapid mainstreaming of telecommuting and digital workspaces has fundamentally transformed the global employment paradigm. While critics argue that permanent remote employment induces severe psychological isolation and dissolves corporate camaraderie, I am convinced that the immense benefits—manifested in personal autonomy, time conservation, and enhanced productivity—decisively outweigh the associated drawbacks.

Admittedly, the remote labor model introduces genuine psychological and organizational challenges. Chief among these is the erosion of spontaneous interpersonal communion. Within physical offices, casual interactions around communal areas cultivate organic solidarity, informal mentorship, and empathy among colleagues. When these encounters are replaced by scheduled video calls and transactional messaging, workers often experience professional loneliness and emotional detachment. Furthermore, without physical boundaries separating occupational duties from domestic life, many professionals struggle to disconnect, precipitating chronic exhaustion and blurred work-life parameters.

Nevertheless, the tangible advantages conferred by remote employment remain substantially more compelling. Foremost among them is the eradication of grueling daily commutes. Millions of urban workers previously spent two to three hours daily navigating congested transport networks, squandering physical vitality and mental clarity. Reclaiming this wasted time directly enhances employee well-being, enabling individuals to engage in restorative physical exercise, nurture family relationships, and pursue intellectual cultivation. Moreover, the autonomy to design a tranquil, distraction-free home office environment empowers knowledge workers to attain states of profound deep-work focus, free from the incessant auditory interruptions characteristic of open-plan offices.

In conclusion, although the challenges of workplace alienation and weakened corporate culture are non-trivial, they can be effectively mitigated through structured hybrid social gatherings and intentional digital leadership. The profound advantages of remote working—namely liberated time, heightened occupational autonomy, and superior personal wellness—clearly eclipse its disadvantages, cementing its status as an indispensable pillar of modern labor.`,
        collocations: [
          'employment paradigm',
          'psychological isolation',
          'corporate camaraderie',
          'organic solidarity',
          'transactional messaging',
          'work-life parameters',
          'grueling daily commutes',
          'occupational autonomy'
        ],
        defaultCandidateText: `Nowadays, working from home has become widespread across many industries due to advances in the internet and video communication.

In my opinion, while remote work can make employees feel lonely and disconnected from colleagues, its advantages in saving commute time and improving work-life balance are far more significant.`
      }
    },

    // ==========================================
    // 4. CAMBRIDGE 19 - TEST 4
    // Task 1: MIXED CHART (PIE + BAR) | Task 2: TO WHAT EXTENT DO YOU AGREE OR DISAGREE?
    // ==========================================
    'wri-cam19-t4': {
      id: 'wri-cam19-t4',
      title: 'Cambridge 19 - Test 4: Universal Basic Income & Human Agency',
      defaultActiveTask: 2,
      totalTimeMinutes: 60,
      task1: {
        id: 'cam19-t4-dance-classes',
        type: 'mixed_chart',
        title: 'Task 1: Locations and Genres of Dance Classes Attended by Young People',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The pie chart and bar chart below show the locations where young people attended dance classes and the types of dance classes attended in an Australian town in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        mixedData: {
          title: 'Youth Dance Participation in Australia (2022)',
          pie: {
            title: 'Class Locations (%)',
            slices: [
              { label: 'Private Dance Studios', value: 48, color: '#3b82f6' },
              { label: 'School Halls', value: 24, color: '#10b981' },
              { label: 'Community Centres', value: 18, color: '#f59e0b' },
              { label: 'College Gyms', value: 10, color: '#8b5cf6' }
            ]
          },
          bar: {
            title: 'Dance Genre by Age Cohort (Participants)',
            categories: ['Ballet', 'Tap Dance', 'Modern / Hip-Hop'],
            under11: [600, 450, 320],
            age11to16: [300, 420, 540]
          }
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase đề bài: The pie chart displays the proportion of venues utilized for dance classes, while the bar chart illustrates participation in three dance styles across two age cohorts in an Australian town in 2022.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Nêu 2 đặc điểm nổi bật: (1) Private studios là địa điểm chiếm ưu thế nhất (gần 50%); (2) Ballet được lứa tuổi dưới 11 ưa chuộng vượt trội, trong khi Modern/Hip-Hop thống trị nhóm thanh thiếu niên 11-16 tuổi.' },
          { section: '3. Body 1 (Phân tích Biểu đồ Tròn - Locations)', tip: 'Private studios chiếm 48%, gấp đôi School halls (24%); Community centres chiếm 18%, và College gyms là ít nhất với 10%.' },
          { section: '4. Body 2 (Phân tích Biểu đồ Cột - Genres by Age)', tip: 'So sánh Ballet (600 em dưới 11 vs 300 em 11-16 tuổi); Tap dance cân bằng giữa 2 nhóm (~420-450 em); Modern/Hip-Hop tăng vọt ở nhóm lớn tuổi (540 em).' }
        ],
        modelSampleBand85: `The pie chart and bar chart provide an empirical analysis of dance classes undertaken by young people in a designated Australian town during 2022, detailing both venue distribution and style preferences stratified by age group.

Overall, private dance studios represented by far the most dominant venue choice, capturing nearly half of total attendance. Regarding stylistic preferences, classical ballet was overwhelmingly favored by younger children under 11, whereas modern hip-hop predominated among adolescents aged 11 to 16.

Turning first to venue allocation, private dance studios accounted for an impressive 48% of total student attendance, exactly twice the proportion recorded for school halls, which constituted the second most common venue at 24%. Community centres hosted slightly under a fifth of attendees (18%), while college gymnasiums registered the lowest proportion at merely 10%.

In terms of stylistic genres, notable divergent trends emerge between the two age demographics. Among children under 11, ballet was decidedly the most popular discipline, attracting 600 participants—double the 300 students observed in the 11–16 bracket. Conversely, modern and hip-hop dance demonstrated an inverse pattern, surging from 320 participants in the younger cohort to a peak of 540 among older youth. Finally, tap dance exhibited remarkable parity across both age categories, engaging 450 younger dancers and 420 adolescents.`,
        collocations: [
          'empirical analysis',
          'venue distribution',
          'stratified by age group',
          'overwhelmingly favored',
          'divergent trends',
          'inverse pattern',
          'remarkable parity',
          'stylistic genres'
        ],
        defaultCandidateText: `The pie chart and bar chart illustrate information about where young people took dance lessons and which types of dance they chose in an Australian town in 2022.

Overall, private studios were the most common setting for dance lessons. In addition, younger students preferred ballet, while teenagers showed a strong preference for modern hip-hop.`
      },
      task2: {
        id: 'cam19-t4-ubi-human-agency',
        type: 'discursive_essay',
        essayType: 'agree_or_disagree',
        title: 'Task 2: Universal Basic Income & Automation (To What Extent Agree/Disagree?)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'As artificial intelligence and automated robotics replace both manual and white-collar workers, some economists assert that governments should provide all adult citizens with an unconditional Universal Basic Income (UBI) regardless of their employment status. To what extent do you agree or disagree?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Dẫn nhập nguy cơ tự động hóa và AI thay thế việc làm diện rộng -> Paraphrase chính sách UBI -> Thesis Statement: Hoàn toàn đồng ý (Strongly Agree) vì UBI bảo đảm nhân phẩm cơ bản và thiết lập lưới an sinh phi điều kiện.' },
          { section: '2. Body 1 (Bảo vệ nhân quyền & Ngăn chặn phân hóa giai cấp cùng cực)', tip: 'Khác với cách mạng công nghiệp trước, AI đe dọa trực tiếp tầng lớp trí thức (lập trình, dịch thuật, phân tích tài chính); UBI ngăn ngừa sự tập trung tài sản tuyệt đối vào tay giới công nghệ.' },
          { section: '3. Body 2 (Giải phóng con người & Kích thích sáng tạo)', tip: 'Bác bỏ định kiến UBI gây lười biếng: Bằng chứng thực nghiệm ở Phần Lan cho thấy UBI giúp người dân an tâm học tập suốt đời, khởi nghiệp kinh doanh nhỏ và chăm sóc gia đình.' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: UBI không phải từ thiện mà là cơ sở hạ tầng kinh tế bắt buộc để phân phối cổ tức tự động hóa (automation dividend) cho mọi thành viên xã hội.' }
        ],
        modelSampleBand85: `The unprecedented velocity of advancements in Artificial Intelligence and generative automation has prompted grave anxieties concerning widespread structural unemployment. In response, prominent economists advocate the implementation of a Universal Basic Income (UBI)—an unconditional, regular cash stipend disbursed to every citizen irrespective of their economic standing. I unequivocally support this policy, as UBI provides an indispensable social floor and safeguards human agency in an automated epoch.

First and foremost, UBI serves as an urgent humanitarian imperative against the disruptive upheavals of technological obsolescence. Unlike previous industrial transitions that predominantly replaced manual labor, cognitive algorithms now imperil professional middle-class occupations, from legal analysis and computer programming to graphic design and financial auditing. Without structural welfare redistribution, the benefits of exponential computational productivity will concentrate exclusively among technology oligarchs, exacerbating societal inequality to untenable extremes. Guaranteeing an unconditional subsistence income insulates citizens from the existential dread of involuntary displacement, ensuring that basic sustenance and shelter remain non-negotiable human rights.

Furthermore, critics frequently assert that unconditional cash grants cultivate indolence and erode the work ethic. However, empirical trials conducted across diverse jurisdictions—including Finland and North America—decisively contradict this pessimistic hypothesis. Rather than abandoning productive endeavors, recipients utilized their financial stability to pursue higher education, launch entrepreneurial micro-enterprises, or provide vital caretaking for aging relatives and children. Far from extinguishing human initiative, UBI emancipates individuals from precarious, soul-crushing survival labor, redirecting human capital toward creative, civic, and philosophical contributions that enrich the social fabric.

In conclusion, as robotics and artificial intelligence increasingly decouple wealth creation from conventional human labor, continuing with traditional welfare structures is no longer viable. Universal Basic Income represents not a philanthropic luxury, but the foundational economic infrastructure required to distribute the collective automation dividend and preserve human dignity.`,
        collocations: [
          'structural unemployment',
          'unconditional stipend',
          'human agency',
          'automated epoch',
          'technological obsolescence',
          'cognitive algorithms',
          'existential dread',
          'automation dividend'
        ],
        defaultCandidateText: `Nowadays, rapid developments in artificial intelligence and automation are threatening to eliminate millions of traditional jobs across the global economy.

In response, many experts suggest that governments should establish a Universal Basic Income to ensure everyone has enough money to survive. I completely agree with this view because it protects human beings from poverty and enables them to pursue meaningful work.`
      }
    },

    // ==========================================
    // 5. PHILOSOPHICAL ESSAY: BAUDRILLARD & MODERN CONSUMERISM
    // Task 1: MULTIPLE PIE CHARTS (3 Eras) | Task 2: POSITIVE OR NEGATIVE DEVELOPMENT?
    // ==========================================
    'wri-philo-spec': {
      id: 'wri-philo-spec',
      title: 'Writing Task 2: Baudrillard & Modern Consumerism',
      defaultActiveTask: 2,
      totalTimeMinutes: 60,
      task1: {
        id: 'phil-baud-multi-pie',
        type: 'multi_pie',
        title: 'Task 1: Evolution of Household Expenditure Breakdown (1990, 2010, 2025)',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The three pie charts below show the proportion of household consumer spending allocated to different commodity categories in an industrialized nation in 1990, 2010, and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        pieData: {
          title: 'Household Expenditure by Category (%): 1990 vs 2010 vs 2025',
          years: [1990, 2010, 2025],
          categories: [
            { name: 'Essential Physical Needs (Food & Shelter)', color: '#10b981' },
            { name: 'Symbolic Status & Luxury Branded Goods', color: '#f43f5e' },
            { name: 'Digital Media & Lifestyle Experiences', color: '#3b82f6' }
          ],
          datasets: [
            { year: 1990, slices: [62, 16, 22] },
            { year: 2010, slices: [41, 32, 27] },
            { year: 2025, slices: [28, 44, 28] }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase: The three pie charts illustrate shifts in average domestic consumer spending across three broad merchandise categories in 1990, 2010, and 2025.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Nêu bật: (1) Chi tiêu cho nhu cầu thiết yếu giảm sâu từ vị trí thống trị xuống còn thiểu số; (2) Hàng hóa biểu tượng địa vị tăng vọt gần gấp ba để chiếm vị trí số 1; (3) Chi tiêu cho truyền thông số tăng đều.' },
          { section: '3. Body 1 (Essential Needs vs Status Goods)', tip: 'Nhu cầu thiết yếu giảm từ 62% (1990) xuống 41% (2010) và 28% (2025); trong khi hàng hóa biểu tượng xa xỉ tăng từ 16% lên 32% và đạt 44% năm 2025.' },
          { section: '4. Body 2 (Digital Media & Lifestyle Experiences)', tip: 'Chi tiêu truyền thông số và trải nghiệm tăng từ 22% lên 27% và giữ ổn định ở mức 28% vào năm 2025.' }
        ],
        modelSampleBand85: `The three pie charts provide a comparative historical analysis of domestic consumer spending across three commodity classifications—namely Essential Physical Needs, Symbolic Status and Luxury Goods, and Digital Media and Experiences—in an industrialized country across 1990, 2010, and projected figures for 2025.

Overall, the data reveals a profound paradigm shift in consumer behavior. Over the thirty-five-year timeline, expenditure on basic physiological survival transitioned from absolute dominance to a minor fraction, while capital dedicated to luxury prestige and symbolic social standing witnessed an extraordinary near-threefold expansion to become the leading financial priority.

In 1990, essential physical goods—such as groceries, primary housing, and basic utilities—commanded an overwhelming majority of household budgets at 62%. However, this proportion contracted sharply to 41% by 2010, before undergoing a further pronounced reduction to merely 28% by 2025.

By striking contrast, spending on symbolic status goods exhibited an inverse and aggressive upward trajectory. Starting at a modest 16% in 1990, investment in prestige designer apparel, branded cosmetics, and personal luxury items doubled to 32% in 2010, and is anticipated to peak at 44% in 2025, capturing almost half of total domestic spending. Meanwhile, capital allocated to digital media and lifestyle experiences expanded steadily from 22% in 1990 to 27% in 2010, subsequently plateauing at 28% in 2025.`,
        collocations: [
          'comparative historical analysis',
          'commodity classifications',
          'profound paradigm shift',
          'physiological survival',
          'prestige and symbolic social standing',
          'contracted sharply',
          'inverse upward trajectory',
          'plateauing steadily'
        ],
        defaultCandidateText: `The three pie charts compare household expenditure across three categories of goods and services in 1990, 2010, and 2025.

Overall, money spent on essential physical needs declined significantly over the period, while spending on luxury brand products and status goods experienced substantial growth.`
      },
      task2: {
        id: 'phil-baud-hyperreality-positive-negative',
        type: 'discursive_essay',
        essayType: 'positive_or_negative_development',
        title: 'Task 2: Baudrillard & Symbolic Commodity Fetishism (Positive or Negative?)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'In contemporary consumer societies, advertising increasingly encourages people to purchase luxury branded goods and personal accessories not for their functional utility, but as symbols of social prestige and personal identity. Is this a positive or negative development?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Dẫn nhập bối cảnh lý thuyết Ký hiệu biểu tượng (Sign-value) của Jean Baudrillard -> Khẳng định dứt khoát lập trường: Đây chủ yếu là bước phát triển tiêu cực (Predominantly Negative Development) gây tổn hại tâm lý và lãng phí tài nguyên.' },
          { section: '2. Body 1 (Mặt tích cực tối thiểu - Tự do thể hiện cá tính)', tip: 'Thừa nhận: Hàng hóa giúp cá nhân khẳng định bản sắc thẩm mỹ (aesthetic curation) và thúc đẩy ngành công nghiệp thiết kế sáng tạo phát triển.' },
          { section: '3. Body 2 (Mặt tiêu cực cốt tử - Bẫy tâm lý & Tha hóa xã hội)', tip: 'Phân tích theo Baudrillard: Biểu tượng giả lập (Hyperreality) làm con người rơi vào guồng quay vô tận (Hedonic treadmill); áp lực nợ nần, so sánh vị thế xã hội và hủy hoại môi trường sinh thái.' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: Việc đánh đồng hạnh phúc với sở hữu ký hiệu vật chất là một bước lùi văn hóa cần được cảnh tỉnh bằng giáo dục tư duy phản biện.' }
        ],
        modelSampleBand85: `In contemporary late-capitalist societies, corporate marketing has systematically decoupled consumer goods from their intrinsic functional utility, rebranding them as semiotic markers of exclusivity, social status, and curated identity. Viewed through the sociological framework of French theorist Jean Baudrillard, consumption has become an obsession with hyperreal symbols rather than material necessity. I firmly argue that this cultural transformation represents a predominantly negative development, as it fosters chronic psychological anxiety, exacerbates socioeconomic segregation, and accelerates ecological degradation.

Admittedly, proponents contend that symbolic consumption facilitates personal agency and artistic self-expression. In pluralistic modern cultures, clothing, timepieces, and technological devices function as visual shorthand through which individuals signal their aesthetic values, cultural affiliations, and lifestyle aspirations. Furthermore, the relentless public desire for prestige commodities fuels massive economic dynamism, providing essential capitalization for haute couture, industrial design, and artisanal crafts, which generate substantial employment across creative sectors.

Nevertheless, the societal consequences of fetishizing symbolic goods are overwhelmingly deleterious. When personal worth becomes entangled with the ownership of branded emblems, individuals are ensnared in an endless psychological "hedonic treadmill." Because advertising continually manufactures artificial scarcity and renders previous models obsolete, consumers experience perpetual status anxiety and superficial inadequacy, which frequently leads to financial indebtedness. More critically, as Baudrillard astutely observed, prioritizing sign-value over genuine human connection creates a hollow, hyperreal simulation of fulfillment. People substitute authentic interpersonal depth with commodified prestige, while the unsustainable manufacturing of ephemeral luxury goods exerts catastrophic pressure on finite global resources.

In conclusion, although the proliferation of status-driven branding stimulates economic transactions and affords a superficial canvas for individual styling, its overarching ramifications are deeply corrosive. Subjugating human self-worth to manufactured corporate prestige is an unequivocally regressive cultural trajectory that erodes authentic well-being.`,
        collocations: [
          'semiotic markers',
          'curated identity',
          'hyperreal symbols',
          'aesthetic curation',
          'hedonic treadmill',
          'perpetual status anxiety',
          'commodified prestige',
          'regressive cultural trajectory'
        ],
        defaultCandidateText: `Nowadays, modern advertisements encourage consumers to buy high-end branded products not because they need them, but to show off their wealth and status to others.

In my view, while this trend allows people to express their personal style, it is predominantly a negative development that leads to unnecessary debt and superficial values.`
      }
    },

    // ==========================================
    // 6. PHILOSOPHICAL ESSAY: FOUCAULT & THE DIGITAL PANOPTICON
    // Task 1: DATA MATRIX TABLE | Task 2: DIRECT / TWO-PART QUESTION
    // ==========================================
    'wri-philo-fouca': {
      id: 'wri-philo-fouca',
      title: 'Writing Task 2: Foucault & The Digital Panopticon',
      defaultActiveTask: 2,
      totalTimeMinutes: 60,
      task1: {
        id: 'phil-fouca-data-table',
        type: 'data_table',
        title: 'Task 1: Digital Surveillance Infrastructure and Public Metrics across 6 Metropolises',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The table below gives statistical data regarding public surveillance cameras, annual security budgets, crime reduction rates, and citizen privacy concern indices across six global metropolises in 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        tableData: {
          title: 'Surveillance Infrastructure & Public Impact: 6 Metropolises (2024)',
          headers: [
            'Metropolis',
            'Population (Millions)',
            'CCTV Cameras / 1,000 People',
            'Annual Security Budget ($M)',
            'Street Crime Reduction (2018–2024)',
            'Citizen Privacy Concern Index (%)'
          ],
          rows: [
            { city: 'Seoul', pop: '9.7 M', cctv: '110 / 1,000', budget: '$420 M', crime: '-38%', privacy: '42%' },
            { city: 'London', pop: '8.9 M', cctv: '95 / 1,000', budget: '$385 M', crime: '-31%', privacy: '58%' },
            { city: 'Singapore', pop: '5.9 M', cctv: '82 / 1,000', budget: '$310 M', crime: '-35%', privacy: '36%' },
            { city: 'New York', pop: '8.3 M', cctv: '56 / 1,000', budget: '$540 M', crime: '-22%', privacy: '68%' },
            { city: 'Tokyo', pop: '14.0 M', cctv: '32 / 1,000', budget: '$260 M', crime: '-18%', privacy: '52%' },
            { city: 'Berlin', pop: '3.7 M', cctv: '16 / 1,000', budget: '$115 M', crime: '-12%', privacy: '84%' }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase: The table provides comparative figures on municipal surveillance camera density, operational budgets, crime reduction efficacy, and citizen privacy sentiment in six major international cities in 2024.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Chỉ ra: (1) Seoul và London dẫn đầu về mật độ camera và tỷ lệ giảm tội phạm; (2) Berlin có mật độ camera thấp nhất nhưng ghi nhận chỉ số lo ngại về quyền riêng tư cao nhất (84%); (3) New York có ngân sách chi tiêu lớn nhất ($540M).' },
          { section: '3. Body 1 (Nhóm Giám sát dày đặc: Seoul, London, Singapore)', tip: 'Seoul (110 camera/1k dân, giảm 38% tội phạm); London (95 camera/1k dân, giảm 31%); Singapore (82 camera/1k dân, lo ngại riêng tư thấp nhất 36%).' },
          { section: '4. Body 2 (Nhóm Giám sát có kiểm soát: New York, Tokyo, Berlin)', tip: 'New York ngân sách $540M nhưng giảm 22%; Tokyo có dân số lớn nhất (14M) nhưng chỉ 32 camera/1k dân; Berlin có mật độ thấp nhất (16 camera) với 84% dân số lo ngại xâm phạm tự do.' }
        ],
        modelSampleBand85: `The table delivers a detailed statistical overview of municipal closed-circuit surveillance camera saturation, fiscal expenditure, street crime deterrence, and public privacy sentiment across six major global metropolises in 2024.

Overall, it is immediately discernible that Asian and British metropolises—namely Seoul, London, and Singapore—exhibit substantially higher camera densities, which correlate positively with greater rates of street crime reduction. Conversely, European cities like Berlin maintain the most conservative surveillance footprint alongside the highest degree of citizen privacy anxiety.

Examining the most heavily monitored cities, Seoul ranks first in camera concentration, boasting 110 devices per 1,000 residents on an annual budget of $420 million, which yielded an impressive 38% drop in street crime between 2018 and 2024. London follows closely with 95 cameras per thousand citizens and a 31% crime reduction rate, accompanied by a 58% privacy concern index. In Singapore, 82 cameras per thousand residents achieved a 35% decline in offenses, while recording the lowest public privacy concern at merely 36%.

By contrast, the remaining three cities demonstrated more restrained implementation. New York recorded the highest absolute annual security expenditure at $540 million, yet maintained an intermediate density of 56 cameras per thousand people, securing a 22% crime reduction while provoking 68% privacy anxiety. Tokyo, despite its colossal population of 14 million, operated with just 32 cameras per thousand residents on a $260 million budget. Finally, Berlin exhibited the lowest camera density by a wide margin (16 per 1,000) and the lowest budget ($115 million), yet registered an overwhelming 84% privacy concern among its populace.`,
        collocations: [
          'statistical overview',
          'camera saturation',
          'fiscal expenditure',
          'correlate positively',
          'conservative surveillance footprint',
          'intermediate density',
          'colossal population',
          'restrained implementation'
        ],
        defaultCandidateText: `The table compares information about surveillance camera numbers, security budgets, crime reduction, and privacy concerns in six major cities in 2024.

Overall, Seoul and London had the highest camera densities and the highest crime reduction rates, whereas Berlin had the lowest number of cameras but the highest public concern regarding privacy.`
      },
      task2: {
        id: 'phil-fouca-two-part-surveillance',
        type: 'discursive_essay',
        essayType: 'two_part_question',
        title: 'Task 2: Foucault, Algorithmic Surveillance & Civil Privacy (Two-Part Question)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'Governments and private corporations are increasingly deploying facial-recognition cameras and algorithmic surveillance systems in public areas across major cities. Why is this occurring? Does this widespread monitoring represent a dangerous violation of civil liberties, or is it an acceptable price for public security?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Dẫn nhập hiện tượng giám sát số hóa bùng nổ theo mô hình Panopticon của Michel Foucault -> Giới thiệu ngắn gọn câu trả lời cho cả 2 vế: Xảy ra do nhu cầu quản trị đô thị thông minh và lợi ích kinh tế dữ liệu; nhưng nó là mối đe dọa nghiêm trọng đối với tự do dân sự.' },
          { section: '2. Body 1 (Trả lời câu hỏi 1: Why is this occurring?)', tip: 'Nguyên nhân: Sự tiến bộ của thị giác máy tính (computer vision), áp lực phòng chống khủng bố đô thị, và sự trỗi dậy của "Chủ nghĩa tư bản giám sát" (Surveillance Capitalism).' },
          { section: '3. Body 2 (Trả lời câu hỏi 2: Dangerous violation or acceptable price?)', tip: 'Khẳng định đây là mối nguy hiểm lớn: Hiệu ứng tự kiểm duyệt (chilling effect), mất quyền riêng tư, nguy cơ sai lệch thuật toán nhắm vào nhóm yếu thế, biến xã hội thành một nhà tù vô hình.' },
          { section: '4. Conclusion', tip: 'Tóm lược: Dù có lợi ích nhất định về an ninh, nhưng sự giám sát vô độ là cái giá quá đắt mà một xã hội dân chủ tự do không thể chấp nhận.' }
        ],
        modelSampleBand85: `The ubiquitous proliferation of automated facial-recognition networks, predictive biometric telemetry, and algorithmic urban surveillance represents a realization of philosopher Michel Foucault's dystopian "Panopticon." This essay will examine the twin drivers behind this technological expansion before arguing that ubiquitous surveillance constitutes an unacceptable peril to civil liberties rather than a justifiable compromise for security.

The rapid escalation of automated public monitoring is driven by administrative expediency and the commercialization of big data. From a municipal perspective, artificial intelligence enables under-resourced police forces to process astronomical volumes of visual feeds in real time, dramatically enhancing the detection of wanted suspects and traffic infractions without proportional labor costs. Furthermore, in the era of surveillance capitalism, corporate technology giants have commodified behavioral data, partnering with municipal governments to deploy smart-city sensory grids that extract valuable citizen movement patterns for predictive profiling and commercial monetization.

However, I firmly contend that this persistent scrutiny represents an intolerable assault on democratic freedoms. In Discipline and Punish, Foucault demonstrated that the true power of the Panopticon lies in the psychological awareness of perpetual visibility; when citizens internalize that every glance, protest, and intimate gesture is archived and algorithmically analyzed, they inevitably succumb to self-censorship and behavioral conformity. This psychological "chilling effect" fundamentally suffocates democratic dissent, political demonstration, and eccentric personal creativity. Moreover, biometric datasets are notoriously vulnerable to data breaches, algorithmic prejudice against minority populations, and despotic governmental overreach.

In conclusion, the relentless rise of surveillance architecture is propelled by administrative convenience and commercial data incentives. Nevertheless, trading absolute personal privacy for an illusion of total physical safety is an untenable Faustian bargain. A healthy democratic society requires unmonitored civic spaces to nurture genuine human freedom.`,
        collocations: [
          'biometric telemetry',
          'administrative expediency',
          'surveillance capitalism',
          'predictive profiling',
          'perpetual visibility',
          'chilling effect',
          'algorithmic prejudice',
          'Faustian bargain'
        ],
        defaultCandidateText: `Nowadays, governments and technology corporations are installing millions of digital cameras with facial recognition across cities.

This trend is caused by the demand for effective crime prevention and the rise of smart city data systems. However, in my opinion, this constant tracking violates individual freedom and creates a culture of fear.`
      }
    },

    // ==========================================
    // 7. ACTUAL WRITING TASK 1: COMPARATIVE DYNAMICS OF RENEWABLE ENERGY
    // Task 1: GROUPED BAR CHART | Task 2: POLICY EVALUATION / AGREE OR DISAGREE
    // ==========================================
    'wri-task1-dyn': {
      id: 'wri-task1-dyn',
      title: 'Writing Task 1 Academic: Comparative Dynamics of Renewable Energy',
      defaultActiveTask: 1,
      totalTimeMinutes: 60,
      task1: {
        id: 't1-energy-dynamics-actual',
        type: 'grouped_bar',
        title: 'Task 1: Renewable vs Non-Renewable Electricity Generation across 5 European Countries (2010 vs 2020)',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The chart below shows the percentage of electricity generated from renewable and non-renewable energy sources in five European countries in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        chartData: {
          title: 'Electricity Generation by Source: 2010 vs 2020 (%)',
          countries: [
            { name: 'Norway', ren2010: 95, non2010: 5, ren2020: 98, non2020: 2 },
            { name: 'Germany', ren2010: 17, non2010: 83, ren2020: 45, non2020: 55 },
            { name: 'UK', ren2010: 7, non2010: 93, ren2020: 42, non2020: 58 },
            { name: 'Spain', ren2010: 33, non2010: 67, ren2020: 44, non2020: 56 },
            { name: 'France', ren2010: 14, non2010: 86, ren2020: 25, non2020: 75 }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase: The bar chart illustrates the proportions of electricity produced from sustainable renewable resources versus non-renewable sources across five European nations in 2010 and 2020.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Chỉ ra: (1) Năng lượng tái tạo tăng ở cả 5 nước; (2) Na Uy áp đảo vượt bậc ở cả 2 năm; (3) Vương quốc Anh và Đức có tốc độ tăng trưởng phi thường nhất.' },
          { section: '3. Body 1 (Norway, Germany, UK)', tip: 'Norway từ 95% lên 98%; UK từ 7% tăng gấp 6 lần lên 42%; Germany từ 17% tăng lên 45%.' },
          { section: '4. Body 2 (Spain, France)', tip: 'Spain tăng ổn định từ 33% lên 44%; France tăng từ 14% lên 25%, vẫn phụ thuộc 75% vào năng lượng hạt nhân/hóa thạch.' }
        ],
        modelSampleBand85: `The bar chart illustrates the proportion of electricity generated from renewable and conventional non-renewable energy sources across five European nations—namely Norway, Germany, the United Kingdom, Spain, and France—in 2010 and 2020.

Overall, it is immediately apparent that all surveyed countries witnessed an expansion in green electricity generation over the decade. While Norway retained an overwhelmingly dominant position throughout the period, the United Kingdom and Germany recorded the most dramatic structural transitions toward sustainable power.

In 2010, Norway generated an extraordinary 95% of its electricity from renewable installations, leaving merely 5% to fossil sources, before edging up marginally to 98% in 2020. By stark contrast, the UK began the decade with the lowest renewable share at a negligible 7%, but experienced a sixfold surge to reach 42% by 2020, concurrently shrinking its non-renewable dependency to 58%. Similarly, Germany exhibited a substantial escalation from 17% to 45%, with clean energy almost reaching parity with traditional power supplies.

Regarding the remaining nations, Spain maintained a steady upward trajectory, elevating its renewable electricity output from 33% to 44%. France, while progressing from 14% to 25%, remained predominantly reliant on non-renewable sources, which still accounted for three-quarters (75%) of its domestic generation in 2020.`,
        collocations: [
          'witnessed an expansion',
          'overwhelmingly dominant position',
          'dramatic structural transitions',
          'negligible proportion',
          'sixfold surge',
          'substantial escalation',
          'steady upward trajectory',
          'predominantly reliant on'
        ],
        defaultCandidateText: `The bar chart illustrates the proportion of electricity generated from renewable and non-renewable energy sources across five European nations in 2010 and 2020.

Overall, all countries observed an increase in their renewable electricity production, with Norway consistently maintaining the highest proportion, while the United Kingdom and Germany saw the most significant growth over the ten-year period.`
      },
      task2: {
        id: 't2-carbon-tax-policy-evaluation',
        type: 'discursive_essay',
        essayType: 'policy_evaluation',
        title: 'Task 2: Punitive Carbon Taxes vs Household Energy Costs (To What Extent Agree/Disagree?)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'Many climate economists argue that governments should impose punitive taxes on carbon-intensive fossil fuels and divert 100% of state energy subsidies into renewable infrastructure, even if this temporarily elevates electricity prices for ordinary citizens. To what extent do you agree or disagree?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Nêu tính cấp bách của khủng hoảng khí hậu -> Paraphrase chính sách đánh thuế carbon và cắt bỏ hoàn toàn trợ cấp hóa thạch -> Thesis: Hoàn toàn đồng ý (Strongly Agree) vì chi phí ngắn hạn không đáng kể so với thảm họa sinh thái dài hạn.' },
          { section: '2. Body 1 (Tại sao cần cắt bỏ trợ giá ngầm cho hóa thạch)', tip: 'Trợ cấp hóa thạch bóp méo thị trường, che giấu chi phí hủy hoại môi trường; chuyển dòng tiền sang điện gió và mặt trời sẽ tạo hiệu ứng kinh tế quy mô (economies of scale).' },
          { section: '3. Body 2 (Giải quyết bài toán giá điện ngắn hạn cho dân)', tip: 'Chính phủ có thể áp dụng chính sách "Cổ tức khí hậu" (Climate dividend): dùng trực tiếp tiền thu từ thuế carbon để hoàn tiền cho các hộ nghèo, triệt tiêu lạm phát sinh hoạt.' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: Đánh thuế carbon mạnh tay là biện pháp bắt buộc để đạt phát thải ròng bằng 0 (Net Zero) và bảo đảm tương lai cho thế hệ mai sau.' }
        ],
        modelSampleBand85: `The escalating urgency of global climate destabilization has ignited fervent policy debate over the reallocation of state energy subsidies. While critics caution that stripping public support from hydrocarbon fuels risks inflicting severe inflationary pressure on household living standards, I firmly agree that governments must decisively redirect fiscal subsidies toward renewable infrastructure, mitigated by targeted social protections for low-income citizens.

First and foremost, continuing to subsidize fossil fuels constitutes an untenable ecological and economic contradiction. Subsidies artificially lower the market price of coal, petroleum, and natural gas, disguising their catastrophic externalized costs in atmospheric carbon and environmental degradation. By redirecting these billions into research and deployment of solar arrays, offshore wind farms, and grid-scale battery storage, governments can accelerate economies of scale, rapidly driving down the unit cost of green power to make clean electricity universally affordable.

Admittedly, an abrupt cessation of fossil fuel subsidies risks precipitating a transitional price shock, disproportionately burdening impoverished families for whom heating and electricity represent essential expenditures. However, this challenge can be effectively neutralized through progressive fiscal redistribution. Governments can utilize revenue generated from carbon taxation and redirected subsidies to establish direct "green energy dividends" for vulnerable demographics, thereby safeguarding household purchasing power during the transition.

In conclusion, although the potential for short-term cost inflation warrants compassionate fiscal buffering, maintaining fossil subsidies is an existential hazard. The state must decisively champion the clean energy transition through bold subsidy reallocation, securing both ecological stability and economic resilience for future generations.`,
        collocations: [
          'climate destabilization',
          'hydrocarbon fuels',
          'inflationary pressure',
          'reallocate subsidies',
          'externalized costs',
          'economies of scale',
          'fiscal buffering',
          'existential hazard'
        ],
        defaultCandidateText: `Nowadays, many climate researchers argue that governments should stop funding fossil fuels and invest all that money into green renewable power.

I completely agree with this view because reducing carbon emissions is an existential necessity, though governments must protect poor families from rising electricity bills.`
      }
    },

    // ==========================================
    // 8. ACTUAL WRITING TASK 1: SYNTHESIS OF BIODEGRADABLE POLYMERS
    // Task 1: CLOSED-LOOP BIO-CYCLE DIAGRAM | Task 2: PROBLEMS & ALTERNATIVE SOLUTIONS
    // ==========================================
    'wri-task1-proc': {
      id: 'wri-task1-proc',
      title: 'Writing Task 1 Process: Synthesis of Biodegradable Polymers',
      defaultActiveTask: 1,
      totalTimeMinutes: 60,
      task1: {
        id: 't1-biocycle-polymers',
        type: 'bio_cycle',
        title: 'Task 1: Closed-Loop Marine Biopolymer Synthesis and Environmental Biodegradation',
        timeGuidance: 'You should spend about 20 minutes on this task.',
        wordGuidance: 'You should write at least 150 words.',
        scoreWeight: '1/3 tổng điểm Writing',
        prompt: 'The diagram below illustrates the closed-loop ecological and industrial lifecycle of synthesizing biodegradable biopolymers from marine macroalgae (seaweed) and their subsequent natural decomposition. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        bioData: {
          title: 'Closed-Loop Lifecycle: Marine Biopolymer Synthesis & Biodegradation',
          stages: [
            { stage: 1, title: 'Marine Seaweed Cultivation & Solar Drying', icon: '🌊', note: 'Algae harvested from ocean farms; moisture reduced from 85% to 15% on open drying racks.' },
            { stage: 2, title: 'Acidic Pre-treatment & Cell Lysis', icon: '🧪', note: 'Dried biomass soaked in dilute sulfuric acid solution (pH 3.5) to dissolve rigid cellular membranes.' },
            { stage: 3, title: 'Alginate Extraction & Centrifugation', icon: '🔄', note: 'Treated with sodium carbonate; centrifugal separator yields pure sodium alginate and byproduct organic fertilizer.' },
            { stage: 4, title: 'Polymerization Reactor', icon: '⚙️', note: 'Alginate combined with non-toxic glycerol plasticizers and bio-cross-linkers at a constant 65°C.' },
            { stage: 5, title: 'Underwater Extrusion & Pelletizing', icon: '🧊', note: 'Molten resin extruded through cold-water dies, sliced into uniform bio-resin granules.' },
            { stage: 6, title: 'Molding into Eco-Products', icon: '🛍️', note: 'Pellets thermoformed into compostable food packaging, waterproof films, and surgical sutures.' },
            { stage: 7, title: 'Soil & Marine Decomposition (Loop Return)', icon: '🌱', note: 'Decomposes completely in soil or seawater within 180 days into nutrients for marine seaweed (Zero microplastics).' }
          ]
        },
        structureGuidance: [
          { section: '1. Introduction', tip: 'Paraphrase: The cyclical diagram details the sustainable closed-loop industrial and ecological lifecycle through which biodegradable bioplastics are synthesized from marine macroalgae and decomposed naturally.' },
          { section: '2. Overview (Bắt buộc)', tip: 'Nêu: Quy trình gồm 7 giai đoạn khép kín, khởi đầu từ thu hoạch tảo biển, trải qua chiết xuất alginate và trùng hợp nhiệt, và kết thúc bằng sự phân hủy sinh học 100% cung cấp dinh dưỡng trở lại cho đại dương.' },
          { section: '3. Body 1 (Nuôi trồng, Thu hoạch & Chiết xuất Hóa sinh: Stages 1-3)', tip: 'Tảo được phơi khô giảm độ ẩm; ngâm axit loãng phá vỡ màng tế bào; dùng natri cacbonat chiết xuất alginate hòa tan và máy ly tâm tách bã làm phân bón hữu cơ.' },
          { section: '4. Body 2 (Trùng hợp, Đúc khuôn & Vòng tuần hoàn phân hủy: Stages 4-7)', tip: 'Trộn alginate với glycerol ở 65°C; đùn cắt hạt bio-resin; đúc thành sản phẩm tiêu dùng; phân hủy hoàn toàn trong 180 ngày không để lại hạt vi nhựa.' }
        ],
        modelSampleBand85: `The cyclical diagram delineates the sustainable, closed-loop industrial methodology and environmental lifecycle of synthesizing biodegradable bioplastics from cultivated marine macroalgae.

Overall, the entire procedure operates as an eco-friendly regenerative loop comprising seven distinct phases. The cycle commences with the harvesting and desiccation of raw seaweed, progresses through chemical extraction and polymer cross-linking, and culminates in commercial product fabrication and total biological decomposition that returns essential nutrients to marine flora.

In the initial procurement and biochemical phase, cultivated seaweed is gathered from offshore ocean farms and dried under natural solar radiation, reducing moisture levels from 85% to 15%. The dried biomass is subsequently immersed in a dilute acidic bath at pH 3.5 to lyse the rigid plant cell walls. Following this, the softened substance is treated with sodium carbonate to extract soluble sodium alginate, before passing through a centrifugal separator that filters out insoluble fibrous sediment for agricultural compost.

In the subsequent industrial manufacturing and ecological loop phase, the purified alginate is transferred into a heated polymerization reactor, where non-toxic glycerol plasticizers are integrated at 65°C to form a flexible macromolecular resin. This molten biopolymer is extruded through underwater cooling nozzles and sliced into uniform pellets. These pellets are then injection-molded into various end products, including commercial food packaging and sterile surgical sutures. Crucially, upon disposal, these items biodegrade completely in soil or marine environments within 180 days, generating zero toxic microplastics while releasing organic minerals that nourish new seaweed colonies.`,
        collocations: [
          'cyclical diagram',
          'closed-loop methodology',
          'regenerative loop',
          'solar radiation',
          'centrifugal separator',
          'polymerization reactor',
          'sterile surgical sutures',
          'zero toxic microplastics'
        ],
        defaultCandidateText: `The diagram illustrates the closed-loop process of manufacturing biodegradable polymers from seaweed and their natural environmental breakdown.

Overall, the whole lifecycle consists of seven sequential stages, beginning with ocean seaweed harvesting, moving through biochemical processing and extrusion, and finishing with 100% natural decomposition in 180 days.`
      },
      task2: {
        id: 't2-plastic-ban-problems-solutions',
        type: 'discursive_essay',
        essayType: 'problems_and_solutions',
        title: 'Task 2: Five-Year Global Plastic Ban (Problems & Alternative Solutions)',
        timeGuidance: 'You should spend about 40 minutes on this task.',
        wordGuidance: 'Write at least 250 words.',
        scoreWeight: '2/3 tổng điểm Writing',
        prompt: 'To halt catastrophic plastic pollution in the oceans, some environmental organizations urge an immediate global ban on all non-biodegradable single-use plastics within the next five years. What difficulties would such an abrupt prohibition create for international trade and consumer industries, and what alternative solutions should be implemented instead?',
        structureGuidance: [
          { section: '1. Introduction', tip: 'Nêu cuộc khủng hoảng rác thải nhựa đại dương -> Giới thiệu đề xuất cấm hoàn toàn trong 5 năm -> Khẳng định bài viết sẽ phân tích các chướng ngại kinh tế nghiêm trọng và đề xuất các giải pháp khả thi hơn.' },
          { section: '2. Body 1 (Các khó khăn nghiêm trọng - Economic & Supply Chain Problems)', tip: 'Phân tích: (1) Chi phí sản xuất vật liệu sinh học đắt gấp 2-3 lần; (2) Cơ sở hạ tầng ủ rác hữu cơ ở các nước đang phát triển còn sơ khai; (3) Nguy cơ làm tê liệt chuỗi cung ứng thực phẩm và thiết bị y tế vô trùng.' },
          { section: '3. Body 2 (Các giải pháp thay thế khả thi - Pragmatic Alternative Solutions)', tip: 'Đề xuất: (1) Lộ trình phân kỳ 10-15 năm với các mốc mục tiêu rõ ràng; (2) Trợ cấp thuế cho các startup chế biến nhựa sinh học từ tảo; (3) Đánh thuế lũy tiến đối với nhựa nguyên sinh (virgin plastic tax).' },
          { section: '4. Conclusion', tip: 'Khẳng định lại: Thay vì cấm đột ngột gây sốc kinh tế, một lộ trình chuyển giao có tính chiến lược kết hợp đòn bẩy tài khóa sẽ đạt được mục tiêu sinh thái bền vững.' }
        ],
        modelSampleBand85: `The catastrophic accumulation of non-biodegradable plastic polymers within marine ecosystems has precipitated radical calls for legislative intervention, most notably a total global ban on single-use plastics within a five-year horizon. However, an abrupt prohibition would trigger catastrophic industrial disruptions, particularly in developing economies. This essay will examine the acute supply-chain difficulties created by such an accelerated timeline and articulate pragmatic alternative solutions.

The primary obstacles associated with an immediate five-year ban revolve around exorbitant production costs and inadequate industrial capacity. At present, advanced biopolymers synthesized from seaweed, cornstarch, or mycelium are approximately two to three times more expensive to produce than petroleum-derived plastics. Furthermore, commercial composting facilities and specialized bio-resin factories remain virtually non-existent across much of the Global South. Mandating an immediate transition would induce crippling supply-chain bottlenecks in essential sectors, most dangerously in sterile medical packaging, pharmaceutical delivery, and affordable food preservation, disproportionately penalizing impoverished populations who cannot absorb inflated packaging costs.

Rather than imposing an unfeasible shock therapy, governments and international organizations should implement phased, market-driven mechanisms. First, policymakers should establish a realistic ten-to-fifteen-year statutory roadmap, prioritizing the immediate elimination of easily replaceable items—such as beverage straws and shopping bags—while providing research grace periods for complex medical and industrial packaging. Second, governments should introduce an escalating virgin plastic tax, using the resultant tax revenues to subsidize bioplastic research facilities and ocean-seaweed farms. By lowering the marginal cost of biodegradable alternatives through state-backed economies of scale, eco-friendly materials will naturally replace traditional plastics through market forces without threatening economic stability.

In conclusion, while the urgent necessity of purging plastic debris from the biosphere is beyond dispute, an absolute five-year prohibition would provoke devastating economic turmoil. A phased regulatory timetable combined with aggressive fiscal incentives for biopolymer innovation represents the most judicious pathway to a plastic-free future.`,
        collocations: [
          'legislative intervention',
          'exorbitant production costs',
          'supply-chain bottlenecks',
          'sterile medical packaging',
          'shock therapy',
          'market-driven mechanisms',
          'virgin plastic tax',
          'economies of scale'
        ],
        defaultCandidateText: `Nowadays, there is intense discussion about whether all single-use plastics should be banned worldwide within the next five years to save the oceans.

While plastic pollution is an urgent crisis, an abrupt ban would create severe economic disruption and supply-chain shortages, so governments should adopt a phased roadmap and subsidize biodegradable alternatives instead.`
      }
    }
  };

  // Expose to window and CommonJS
  if (typeof window !== 'undefined') {
    window.WRITING_TESTS_DATA = WRITING_TESTS_DATA;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = WRITING_TESTS_DATA;
  }
})();
