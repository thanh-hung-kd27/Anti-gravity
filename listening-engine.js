

const LISTENING_TESTS = {
  'cam19-t1': {
    id: 'cam19-t1',
    title: 'Cambridge 19 - Test 1 (Full 4 Parts)',
    subtitle: 'Băng ghi âm gốc Cambridge bản xứ • Băng ghi âm 4 Parts liên tục ~30 phút',
    audioFull: 'audio/cam19-test1-full.mp3',
    audioFullType: 'audio/mpeg',
    totalDurationFormatted: '25:50',
    totalDurationSeconds: 1550,
    parts: [
      {
        partNum: 1,
        title: 'Part 1: Hinchingbrooke Country Park - School Visits',
        qRange: 'Câu 1–10',
        startSec: 0,
        startFormatted: '00:00',
        context: 'Hội thoại Ranger Sally & Teacher John Chapman • Ngữ cảnh sinh hoạt xã hội',
        audioLocal: 'audio/cam19-test1-part1.m4a',
        audioType: 'audio/mp4',
        instructions: 'Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.',
        formTitle: 'HINCHINGBROOKE COUNTRY PARK - SCHOOL VISITS',
        sections: [
          {
            type: 'notes',
            heading: 'Park Details & Educational Activities',
            questions: [
              { num: 1, label: 'Park covers:', suffix: 'hectares (former gravel extraction farmland)', placeholder: 'Số...', expected: ['69', 'sixty-nine', '69 hectares'], display: '69', trap: 'Bẫy đơn vị diện tích: 170 mẫu Anh (acres) vs 69 héc-ta (hectares)' },
              { num: 2, label: 'Features: two large lakes, ponds and a:', suffix: 'flowing through the park', placeholder: 'Từ điền...', expected: ['stream', 'a stream'], display: 'stream', trap: 'Dòng suối tự nhiên (stream) chảy xuyên qua công viên' },
              { num: 3, label: 'Science focus: help children collect and analyse:', suffix: 'about observed species', placeholder: 'Từ điền...', expected: ['data'], display: 'data', trap: 'Thu thập và phân tích dữ liệu thực nghiệm (data)' },
              { num: 4, label: 'Geography focus: learn and practice reading a:', suffix: 'and using a compass', placeholder: 'Từ điền...', expected: ['map', 'a map'], display: 'map', trap: 'Kỹ năng định vị: đọc bản đồ (map) và dùng la bàn' },
              { num: 5, label: 'Leisure and tourism: study the impact of:', suffix: '', placeholder: 'Từ điền...', expected: ['visitors', 'the visitors', 'visitor'], display: 'visitors', trap: 'Tác động môi trường từ lượng khách tham quan (visitors)' },
              { num: 6, label: 'Music: children experiment with natural materials to make:', suffix: 'and explore rhythm', placeholder: 'Từ điền...', expected: ['sounds', 'sound'], display: 'sounds', trap: 'Thực nghiệm tạo ra các âm thanh (sounds) tự nhiên' },
              { num: 7, label: 'Outdoor learning benefit: provides more:', suffix: 'than classroom environments', placeholder: 'Từ điền...', expected: ['freedom', 'more freedom'], display: 'freedom', trap: 'Môi trường thiên nhiên mang lại nhiều sự tự do (freedom)' },
              { num: 8, label: 'Social development: enhances communication and social:', suffix: '', placeholder: 'Từ điền...', expected: ['skills', 'skill'], display: 'skills', trap: 'Phát triển kỹ năng giao tiếp và xã hội (social skills)' },
              { num: 9, label: 'Cost per pupil: £', suffix: 'per visiting student', placeholder: 'Số tiền...', expected: ['4.95', '£4.95'], display: '4.95', trap: 'Bẫy số tiền: mức phí ưu đãi £4.95 mỗi học sinh' },
              { num: 10, label: 'Adult supervision: school party must have qualified:', suffix: 'at all times', placeholder: 'Từ điền...', expected: ['leaders', 'leader'], display: 'leaders', trap: 'Quy định an toàn: bắt buộc có người phụ trách (leaders)' }
            ]
          }
        ]
      },
      {
        partNum: 2,
        title: 'Part 2: Stanthorpe Twinning Association & Farley House',
        qRange: 'Câu 11–20',
        startSec: 362,
        startFormatted: '06:02',
        context: 'Thuyết trình viên cộng đồng • Chuyến đi giao lưu Malo & Sơ đồ khuôn viên Farley House',
        audioLocal: 'audio/cam19-test1-part2.m4a',
        audioType: 'audio/mp4',
        instructions: 'Questions 11–15: Choose the correct letter, A, B or C. Questions 16–20: Label the plan below.',
        sections: [
          {
            type: 'multiple-choice',
            heading: 'STANTHORPE TWINNING ASSOCIATION (VISIT TO MALO)',
            subInstructions: 'Questions 11–15: Choose the correct letter, A, B or C.',
            questions: [
              {
                num: 11,
                prompt: 'During the visit to Malo, participants will:',
                options: [
                  { key: 'A', text: 'attend a French language class' },
                  { key: 'B', text: 'stay with a local family' },
                  { key: 'C', text: 'go on a guided walk of the town' }
                ],
                expected: ['B'],
                display: 'B',
                trap: 'Lớp tiếng Pháp tổ chức ở Stanthorpe trước chuyến đi. Ở cùng gia đình bản xứ (stay with local family) là điểm cốt lõi.'
              },
              {
                num: 12,
                prompt: 'What should participants do before the trip?',
                options: [
                  { key: 'A', text: 'obtain an international travel insurance policy' },
                  { key: 'B', text: 'arrange to bring currency for all purchases' },
                  { key: 'C', text: 'buy gifts for their hosts' }
                ],
                expected: ['A'],
                display: 'A',
                trap: 'Bảo hiểm du lịch quốc tế (travel insurance) là bắt buộc. Quà cho chủ nhà đã được hội đồng chuẩn bị sẵn.'
              },
              {
                num: 13,
                prompt: 'On the second evening of the trip, there will be:',
                options: [
                  { key: 'A', text: 'a welcome dinner at a restaurant' },
                  { key: 'B', text: 'a concert in the town square' },
                  { key: 'C', text: 'a reception hosted by the mayor' }
                ],
                expected: ['B'],
                display: 'B',
                trap: 'Buổi tiếp đón của Thị trưởng diễn ra trưa Thứ Sáu. Tối thứ hai là buổi hòa nhạc ngoài trời tại quảng trường.'
              },
              {
                num: 14,
                prompt: 'Which event has been added to the itinerary on Sunday morning?',
                options: [
                  { key: 'A', text: 'a visit to a regional craft market' },
                  { key: 'B', text: 'an excursion to a nearby castle' },
                  { key: 'C', text: 'a walk along the river valley' }
                ],
                expected: ['C'],
                display: 'C',
                trap: 'Chuyến đi lâu đài bị hủy do tu sửa. Ban tổ chức đã bổ sung chuyến đi dạo thung lũng ven sông (river valley walk).'
              },
              {
                num: 15,
                prompt: 'Next year\'s reciprocal trip from Malo will focus on:',
                options: [
                  { key: 'A', text: 'environmental sustainability projects' },
                  { key: 'B', text: 'youth sporting exchanges' },
                  { key: 'C', text: 'historical preservation' }
                ],
                expected: ['A'],
                display: 'A',
                trap: 'Chủ đề giao lưu năm sau chọn các sáng kiến phát triển bền vững môi trường (environmental sustainability).'
              }
            ]
          },
          {
            type: 'map-labelling',
            heading: 'PLAN OF FARLEY HOUSE AND GROUNDS',
            subInstructions: 'Questions 16–20: Label the plan below. Choose the correct letter, A–H, for each location.',
            mapSvgType: 'farley-house',
            mapLegend: [
              { letter: 'A', label: 'Orchard (Vườn cây ăn quả tây bắc)' },
              { letter: 'B', label: 'Stable yard (Khu chuồng ngựa đông)' },
              { letter: 'C', label: 'Rose garden (Vườn hoa hồng đông nam)' },
              { letter: 'D', label: 'Coach house (Nhà xe ngựa đông bắc)' },
              { letter: 'E', label: 'Kitchen garden (Vườn rau phía tây)' },
              { letter: 'F', label: 'Lake pavilion (Chòi vọng cảnh ven hồ bắc)' },
              { letter: 'G', label: 'Aviary (Chuồng chim cảnh lối vào hồ)' },
              { letter: 'H', label: 'Glasshouse (Nhà kính thực vật tây bắc)' }
            ],
            questions: [
              { num: 16, label: 'Aviary:', expected: ['G'], display: 'G', trap: 'Nằm bên trái lối đi chính dẫn xuống hồ, đối diện vườn hoa (Vị trí G)' },
              { num: 17, label: 'Rose garden:', expected: ['C'], display: 'C', trap: 'Nằm ở bãi cỏ phía đông nam cạnh hồ cảnh quan nhỏ (Vị trí C)' },
              { num: 18, label: 'Stable yard:', expected: ['B'], display: 'B', trap: 'Phía đông sân chính sau cổng phụ dành cho xe kéo (Vị trí B)' },
              { num: 19, label: 'Coach house:', expected: ['D'], display: 'D', trap: 'Tiếp giáp ngay bên phải khu chuồng ngựa ở rìa đông bắc (Vị trí D)' },
              { num: 20, label: 'Orchard:', expected: ['A'], display: 'A', trap: 'Góc tây bắc phía sau bức tường bao quanh (Vị trí A)' }
            ]
          }
        ]
      },
      {
        partNum: 3,
        title: 'Part 3: Urban Agriculture & Sustainable Packaging',
        qRange: 'Câu 21–30',
        startSec: 769,
        startFormatted: '12:49',
        context: 'Thảo luận học thuật Kira, James & Dr. Harris • Trồng rau vi canh & bao bì sinh học',
        audioLocal: 'audio/cam19-test1-part3.m4a',
        audioType: 'audio/mp4',
        instructions: 'Questions 21–24: Choose TWO letters. Questions 25–30: What opinion do the students express about each packaging material? Choose from A–H.',
        sections: [
          {
            type: 'choose-two',
            heading: 'URBAN FARMING & MICROGREENS PROJECT',
            subInstructions: 'Questions 21–22: Choose TWO letters, A–E. Which TWO problems did the students encounter when setting up their microgreens project?',
            options: [
              { key: 'A', text: 'finding suitable growing trays' },
              { key: 'B', text: 'controlling temperature variations' },
              { key: 'C', text: 'selecting high-yield seed varieties' },
              { key: 'D', text: 'preventing mold growth on seeds' },
              { key: 'E', text: 'measuring moisture levels accurately' }
            ],
            pairQuestions: [
              { num: 21, label: 'Problem 1:', expected: ['B', 'D'], display: 'B hoặc D', trap: 'Biến động nhiệt độ ban đêm (B) và nấm mốc trên hạt (D)' },
              { num: 22, label: 'Problem 2:', expected: ['B', 'D'], display: 'B hoặc D', trap: 'Khay trồng và hạt giống có sẵn, khó khăn thật sự là nhiệt độ và nấm mốc' }
            ]
          },
          {
            type: 'choose-two',
            heading: 'CUSTOMER FEEDBACK SURPRISES',
            subInstructions: 'Questions 23–24: Choose TWO letters, A–E. Which TWO things do the students agree surprised them most about customer responses?',
            options: [
              { key: 'A', text: 'willingness to pay a premium price' },
              { key: 'B', text: 'preference for mixed seed packs' },
              { key: 'C', text: 'knowledge about nutrient density' },
              { key: 'D', text: 'interest in recyclable packaging' },
              { key: 'E', text: 'enthusiasm for growing kits at home' }
            ],
            pairQuestions: [
              { num: 23, label: 'Surprise 1:', expected: ['A', 'E'], display: 'A hoặc E', trap: 'Khách hàng sẵn sàng trả giá cao (A) và hào hứng mua bộ tự trồng tại nhà (E)' },
              { num: 24, label: 'Surprise 2:', expected: ['A', 'E'], display: 'A hoặc E', trap: 'Khách đã biết rõ về dinh dưỡng, điều bất ngờ là mức độ chịu chi và nhu cầu kit trồng' }
            ]
          },
          {
            type: 'matching',
            heading: 'SUSTAINABLE PACKAGING MATERIALS ASSESSMENT',
            subInstructions: 'Questions 25–30: What opinion do the students express about each packaging material? Choose the correct letter, A–H.',
            matchOptions: [
              { key: 'A', text: 'currently too costly to manufacture' },
              { key: 'B', text: 'lacks necessary moisture barrier' },
              { key: 'C', text: 'causes complications in standard recycling' },
              { key: 'D', text: 'requires industrial composting conditions' },
              { key: 'E', text: 'degrades too rapidly in storage' },
              { key: 'F', text: 'consumers dislike its tactile feel' },
              { key: 'G', text: 'has high carbon emissions during production' },
              { key: 'H', text: 'prone to physical damage in transit' }
            ],
            questions: [
              { num: 25, item: 'Polylactic acid (PLA):', expected: ['D'], display: 'D', trap: 'PLA chỉ phân hủy trong lò ủ công nghiệp nhiệt độ cao (industrial composting)' },
              { num: 26, item: 'Cornstarch trays:', expected: ['G'], display: 'G', trap: 'Quy trình sản xuất phân bón và vận chuyển ngô phát thải khí nhà kính cao (high carbon emissions)' },
              { num: 27, item: 'Wax-coated cardboard:', expected: ['C'], display: 'C', trap: 'Lớp sáp cản trở máy băm bột giấy tái chế đô thị (complications in recycling)' },
              { num: 28, item: 'Mushroom mycelium packaging:', expected: ['B'], display: 'B', trap: 'Không ngăn được độ ẩm làm rau héo nhanh chóng (lacks moisture barrier)' },
              { num: 29, item: 'Seaweed-based film:', expected: ['F'], display: 'F', trap: 'Bề mặt trơn nhẫy tạo cảm giác khó chịu cho khách hàng (tactile feel)' },
              { num: 30, item: 'Recycled pulp containers:', expected: ['H'], display: 'H', trap: 'Dễ bị móp méo va đập khi chở trên đường ray/xe tải (damage in transit)' }
            ]
          }
        ]
      },
      {
        partNum: 4,
        title: 'Part 4: Céide Fields - Neolithic Farming in Ireland',
        qRange: 'Câu 31–40',
        startSec: 1167,
        startFormatted: '19:27',
        context: 'Bài giảng học thuật Khảo cổ học • Định cư nông nghiệp đồ đá mới & biến đổi khí hậu',
        audioLocal: 'audio/cam19-test1-part4.m4a',
        audioType: 'audio/mp4',
        instructions: 'Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.',
        formTitle: 'THE CÉIDE FIELDS - NEOLITHIC FARMING SETTLEMENT',
        sections: [
          {
            type: 'notes',
            heading: 'Discovery & Preservation Context',
            questions: [
              { num: 31, label: 'Discovery: local turf-cutter found stone', suffix: 'buried beneath deep peat bog', placeholder: 'Từ điền...', expected: ['walls', 'wall'], display: 'walls', trap: 'Những bức tường đá cổ (stone walls) nằm dưới đầm than bùn' },
              { num: 32, label: 'Excavation: Patrick Caulfield\'s', suffix: 'studied archaeology and led research', placeholder: 'Từ điền...', expected: ['son'], display: 'son', trap: 'Người con trai (son) Seamus Caulfield trở thành nhà khảo cổ' },
              { num: 33, label: 'Peat usage: cut and dried by local villagers as domestic', suffix: 'for heating', placeholder: 'Từ điền...', expected: ['fuel'], display: 'fuel', trap: 'Than bùn dùng làm chất đốt (fuel) sưởi ấm' },
              { num: 34, label: 'Preservation: waterlogged, acidic bog excluded', suffix: 'preventing timber decay', placeholder: 'Từ điền...', expected: ['oxygen'], display: 'oxygen', trap: 'Môi trường yếm khí không có oxy (oxygen) bảo quản gỗ' }
            ]
          },
          {
            type: 'notes',
            heading: 'Neolithic Community & Daily Life',
            questions: [
              { num: 35, label: 'House construction: residential foundations were', suffix: 'rather than circular', placeholder: 'Từ điền...', expected: ['rectangular'], display: 'rectangular', trap: 'Móng nhà hình chữ nhật (rectangular), không phải hình tròn' },
              { num: 36, label: 'Lighting: traces of burnt animal fat in stone vessels indicate', suffix: '', placeholder: 'Từ điền...', expected: ['lamps', 'lamp'], display: 'lamps', trap: 'Đèn đá đốt bằng mỡ động vật (lamps)' },
              { num: 37, label: 'Social organization: each field system supported an extended', suffix: 'group', placeholder: 'Từ điền...', expected: ['family'], display: 'family', trap: 'Mỗi khu đất nuôi sống một đại gia đình (family)' }
            ]
          },
          {
            type: 'notes',
            heading: 'Environmental Climate Shift & Abandonment',
            questions: [
              { num: 38, label: 'Climate shift: pine tree rings indicate extremely severe', suffix: 'periods', placeholder: 'Từ điền...', expected: ['winter', 'winters'], display: 'winter', trap: 'Các mùa đông băng giá khắc nghiệt (severe winter)' },
              { num: 39, label: 'Soil degradation: over-farming gradually depleted the thin top', suffix: '', placeholder: 'Từ điền...', expected: ['soil'], display: 'soil', trap: 'Lớp đất mặt mỏng manh bị xói mòn cạn kiệt (top soil)' },
              { num: 40, label: 'Bog expansion: persistent and heavy', suffix: 'caused waterlogging and abandonment', placeholder: 'Từ điền...', expected: ['rain', 'rainfall'], display: 'rain', trap: 'Lượng mưa lớn kéo dài (heavy rain) làm úng ngập và mở rộng đầm lầy' }
            ]
          }
        ]
      }
    ]
  },

  'cam18-t1': {
    id: 'cam18-t1',
    title: 'Cambridge 18 - Test 1 (Full 4 Parts)',
    subtitle: 'Băng ghi âm gốc Cambridge bản xứ • Băng ghi âm 4 Parts liên tục ~30 phút',
    audioFull: 'audio/cam18-test1-full.mp3',
    audioFullType: 'audio/mpeg',
    totalDurationFormatted: '28:31',
    totalDurationSeconds: 1711,
    parts: [
      {
        partNum: 1,
        title: 'Part 1: Transport Survey - Passenger Commute Form',
        qRange: 'Câu 1–10',
        startSec: 0,
        startFormatted: '00:00',
        context: 'Phỏng vấn cư dân Sadie Jones về thói quen sử dụng xe bus',
        audioLocal: 'audio/cam18-test1-part1.mp3',
        audioType: 'audio/mpeg',
        instructions: 'Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.',
        formTitle: 'TRANSPORT SURVEY - PASSENGER COMMUTE FORM',
        sections: [
          {
            type: 'notes',
            heading: 'Passenger Details & Travel Habits',
            questions: [
              { num: 1, label: 'Postcode:', suffix: '', placeholder: 'Mã bưu chính...', expected: ['dw30 7yz', 'dw307yz', 'dw3q 7yz', 'dw3q7yz'], display: 'DW30 7YZ', trap: 'Mã bưu chính: DW30 7YZ' },
              { num: 2, label: 'Date of journey:', suffix: 'April (interviewer initially confused date)', placeholder: 'Ngày...', expected: ['24th april', '24th', '24 april', '24'], display: '24th April', trap: 'Bẫy ngày 24th vs 25th' },
              { num: 3, label: 'Primary purpose of journey: visit the:', suffix: '', placeholder: 'Mục đích...', expected: ['dentist', 'dentist check-up'], display: 'dentist', trap: 'Khám nha sĩ (dentist), không phải đi mua sắm' },
              { num: 4, label: 'Stopped driving car due to high cost and lack of:', suffix: '', placeholder: 'Lý do...', expected: ['parking', 'car parking'], display: 'parking', trap: 'Khó tìm chỗ đậu xe (parking) và chi phí cao' },
              { num: 5, label: 'Journey start location: bus stop on:', suffix: 'Street', placeholder: 'Tên đường...', expected: ['claxby', 'claxby street'], display: 'Claxby', trap: 'Đánh vần tên đường C-L-A-X-B-Y' },
              { num: 6, label: 'Complaint: morning bus was 10 minutes:', suffix: '', placeholder: 'Tình trạng...', expected: ['late', 'delayed'], display: 'late', trap: 'Xe buýt sáng nay bị trễ 10 phút (late)' },
              { num: 7, label: 'Timetable dissatisfaction: services end too early in the:', suffix: '', placeholder: 'Buổi...', expected: ['evening', 'evenings'], display: 'evening', trap: 'Chuyến xe buýt kết thúc quá sớm vào buổi tối (evening)' },
              { num: 8, label: 'Dislikes crowded buses: particularly on the route passing the:', suffix: '', placeholder: 'Địa điểm...', expected: ['supermarket', 'local supermarket'], display: 'supermarket', trap: 'Đoạn đường đông đúc qua siêu thị (supermarket)' },
              { num: 9, label: 'Environmental concern: buses cause excessive air:', suffix: 'in town centre', placeholder: 'Từ điền...', expected: ['pollution', 'air pollution'], display: 'pollution', trap: 'Ô nhiễm không khí (air pollution) từ xe bus diesel cũ' },
              { num: 10, label: 'Encouraging cycling: council should provide secure bicycle:', suffix: 'at main hubs', placeholder: 'Cơ sở...', expected: ['storage', 'parking storage', 'secure storage'], display: 'storage', trap: 'Cung cấp khu vực cất giữ xe đạp an toàn (storage)' }
            ]
          }
        ]
      },
      {
        partNum: 2,
        title: 'Part 2: ACE Volunteering Charity Projects',
        qRange: 'Câu 11–20',
        startSec: 384,
        startFormatted: '06:24',
        context: 'Giới thiệu về tổ chức tình nguyện ACE và các vị trí hỗ trợ cộng đồng',
        audioLocal: 'audio/cam18-test1-part2.mp3',
        audioType: 'audio/mpeg',
        instructions: 'Questions 11–13: Choose the correct letter, A, B or C. Questions 14–15: Choose TWO letters, A–E. Questions 16–20: Which volunteering role is available on each day? Choose from A–G.',
        sections: [
          {
            type: 'multiple-choice',
            heading: 'ACE VOLUNTEERING ORGANISATION',
            subInstructions: 'Questions 11–13: Choose the correct letter, A, B or C.',
            questions: [
              {
                num: 11,
                prompt: 'ACE was set up to help young people:',
                options: [
                  { key: 'A', text: 'gain work experience' },
                  { key: 'B', text: 'travel overseas' },
                  { key: 'C', text: 'become involved in community projects' }
                ],
                expected: ['C'],
                display: 'C',
                trap: 'Kinh nghiệm việc làm là lợi ích phụ, mục tiêu chính là tham gia các dự án cộng đồng (community projects).'
              },
              {
                num: 12,
                prompt: 'Which age group does ACE currently focus on?',
                options: [
                  { key: 'A', text: '16 to 18 year olds' },
                  { key: 'B', text: '19 to 25 year olds' },
                  { key: 'C', text: '12 to 15 year olds' }
                ],
                expected: ['A'],
                display: 'A',
                trap: 'Trước đây nhận từ 19-25, nhưng hiện tại trọng tâm dồn vào nhóm 16 đến 18 tuổi.'
              },
              {
                num: 13,
                prompt: 'How is ACE funded?',
                options: [
                  { key: 'A', text: 'through local council grants' },
                  { key: 'B', text: 'by donations from corporate sponsors' },
                  { key: 'C', text: 'by charging volunteers a registration fee' }
                ],
                expected: ['A'],
                display: 'A',
                trap: 'Tình nguyện viên miễn phí hoàn toàn. Nguồn quỹ đến từ tài trợ của hội đồng địa phương (council grants).'
              }
            ]
          },
          {
            type: 'choose-two',
            heading: 'WILDLIFE COMMUNITY GARDEN ACTIVITIES',
            subInstructions: 'Questions 14–15: Choose TWO letters, A–E. Which TWO activities are volunteers required to do in the wildlife garden?',
            options: [
              { key: 'A', text: 'planting trees along the boundary' },
              { key: 'B', text: 'clearing overgrown pathways' },
              { key: 'C', text: 'surveying insect populations' },
              { key: 'D', text: 'building wooden benches' },
              { key: 'E', text: 'maintaining the pond perimeter' }
            ],
            pairQuestions: [
              { num: 14, label: 'Activity 1:', expected: ['B', 'E'], display: 'B hoặc E', trap: 'Dọn dẹp lối đi rậm rạp (B) và bảo dưỡng khu vực quanh hồ (E)' },
              { num: 15, label: 'Activity 2:', expected: ['B', 'E'], display: 'B hoặc E', trap: 'Cây đã trồng xong, ghế đã có, trọng tâm là dọn đường và chăm sóc bờ ao' }
            ]
          },
          {
            type: 'matching',
            heading: 'COMMUNITY CENTRE VOLUNTEER ROLES',
            subInstructions: 'Questions 16–20: What volunteering role is needed on each day? Choose from A–G.',
            matchOptions: [
              { key: 'A', text: 'Kitchen assistant' },
              { key: 'B', text: 'IT mentor' },
              { key: 'C', text: 'Gardening supervisor' },
              { key: 'D', text: 'Receptionist' },
              { key: 'E', text: 'Youth coordinator' },
              { key: 'F', text: 'Event organizer' },
              { key: 'G', text: 'Library clerk' }
            ],
            questions: [
              { num: 16, item: 'Tuesday morning:', expected: ['B'], display: 'B', trap: 'Cần hỗ trợ hướng dẫn máy tính cho người cao tuổi (IT mentor)' },
              { num: 17, item: 'Wednesday afternoon:', expected: ['G'], display: 'G', trap: 'Sắp xếp và quản lý thư viện cộng đồng (Library clerk)' },
              { num: 18, item: 'Thursday all day:', expected: ['D'], display: 'D', trap: 'Trực bàn lễ tân tiếp đón khách (Receptionist)' },
              { num: 19, item: 'Friday morning:', expected: ['A'], display: 'A', trap: 'Phụ giúp chuẩn bị bữa trưa từ thiện tại bếp ăn (Kitchen assistant)' },
              { num: 20, item: 'Saturday afternoon:', expected: ['F'], display: 'F', trap: 'Tổ chức sự kiện giao lưu cuối tuần (Event organizer)' }
            ]
          }
        ]
      },
      {
        partNum: 3,
        title: 'Part 3: Fashion Design Course Careers',
        qRange: 'Câu 21–30',
        startSec: 782,
        startFormatted: '13:02',
        context: 'Thảo luận giữa sinh viên Thiết kế thời trang về bài tập học kỳ và định hướng nghề nghiệp',
        audioLocal: 'audio/cam18-test1-part3.mp3',
        audioType: 'audio/mpeg',
        instructions: 'Questions 21–24: Choose the correct letter, A, B or C. Questions 25–30: What career attribute do the students associate with each role? Choose from A–E.',
        sections: [
          {
            type: 'multiple-choice',
            heading: 'FASHION APPAREL ASSIGNMENT',
            subInstructions: 'Questions 21–24: Choose the correct letter, A, B or C.',
            questions: [
              {
                num: 21,
                prompt: 'What made the students choose the sports apparel project?',
                options: [
                  { key: 'A', text: 'personal interest in sustainable athletic wear' },
                  { key: 'B', text: 'availability of industry mentor advice' },
                  { key: 'C', text: 'recent growth in local market demand' }
                ],
                expected: ['A'],
                display: 'A',
                trap: 'Đam mê cá nhân về trang phục thể thao bền vững (sustainable athletic wear).'
              },
              {
                num: 22,
                prompt: 'What challenge did they face when researching recycled polyester?',
                options: [
                  { key: 'A', text: 'lack of reliable laboratory testing data' },
                  { key: 'B', text: 'conflicting claims from fabric manufacturers' },
                  { key: 'C', text: 'high cost of sample procurement' }
                ],
                expected: ['B'],
                display: 'B',
                trap: 'Các nhà sản xuất đưa ra số liệu mâu thuẫn nhau (conflicting claims).'
              },
              {
                num: 23,
                prompt: 'Why did they decide against including natural dyes?',
                options: [
                  { key: 'A', text: 'poor colorfastness when exposed to UV light' },
                  { key: 'B', text: 'difficulty in sourcing consistent dye shades' },
                  { key: 'C', text: 'negative impact of mordants on fabric strength' }
                ],
                expected: ['A'],
                display: 'A',
                trap: 'Độ bền màu kém khi tiếp xúc ánh nắng mặt trời (poor colorfastness to UV).'
              },
              {
                num: 24,
                prompt: 'What advice did their tutor give regarding the digital portfolio?',
                options: [
                  { key: 'A', text: 'emphasize technical flat sketches' },
                  { key: 'B', text: 'include video walkthroughs of sewing techniques' },
                  { key: 'C', text: 'showcase mood boards and fabric swatches' }
                ],
                expected: ['C'],
                display: 'C',
                trap: 'Giảng viên khuyên nên làm nổi bật mood board và mẫu vải thực tế (mood boards & fabric swatches).'
              }
            ]
          },
          {
            type: 'matching',
            heading: 'FASHION CAREER ATTRIBUTES MATCHING',
            subInstructions: 'Questions 25–30: What career attribute do the students associate with each role? Choose from A–E.',
            matchOptions: [
              { key: 'A', text: 'offers rapid international relocation' },
              { key: 'B', text: 'provides greatest creative independence' },
              { key: 'C', text: 'has lowest barrier to entry for graduates' },
              { key: 'D', text: 'entails highest initial salary compensation' },
              { key: 'E', text: 'requires extensive multidisciplinary teamwork' }
            ],
            questions: [
              { num: 25, item: 'Textile pattern designer:', expected: ['B'], display: 'B', trap: 'Tự do sáng tạo lớn nhất (greatest creative independence)' },
              { num: 26, item: 'Merchandising assistant:', expected: ['A'], display: 'A', trap: 'Cơ hội điều chuyển công tác quốc tế nhanh chóng (international relocation)' },
              { num: 27, item: 'Sustainable sourcing manager:', expected: ['B'], display: 'B', trap: 'Tự chủ ra quyết định chiến lược nhà cung ứng (creative independence)' },
              { num: 28, item: 'Garment technologist:', expected: ['E'], display: 'E', trap: 'Phối hợp đa ngành liên tục giữa thiết kế, may và kiểm định (multidisciplinary teamwork)' },
              { num: 29, item: 'Trend forecaster:', expected: ['A'], display: 'A', trap: 'Thường xuyên di chuyển đến các kinh đô thời trang toàn cầu (international relocation)' },
              { num: 30, item: 'Retail buyer trainee:', expected: ['C'], display: 'C', trap: 'Rào cản gia nhập thấp, phù hợp nhất với sinh viên mới tốt nghiệp (lowest barrier to entry)' }
            ]
          }
        ]
      },
      {
        partNum: 4,
        title: 'Part 4: Elephant Translocation in Malawi',
        qRange: 'Câu 31–40',
        startSec: 1182,
        startFormatted: '19:42',
        context: 'Bài giảng khoa học bảo tồn động vật hoang dã về chiến dịch di dời đàn voi lớn nhất châu Phi',
        audioLocal: 'audio/cam18-test1-part4.mp3',
        audioType: 'audio/mpeg',
        instructions: 'Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.',
        formTitle: 'ELEPHANT TRANSLOCATION PROJECT - MALAWI CONSERVATION',
        sections: [
          {
            type: 'notes',
            heading: 'Ecological Rationale & Herd Selection',
            questions: [
              { num: 31, label: 'Human-wildlife conflict: elephants broke agricultural', suffix: 'destroying subsistence crops', placeholder: 'Từ điền...', expected: ['fences', 'fence'], display: 'fences', trap: 'Voi phá vỡ hàng rào nông nghiệp (fences) tràn vào ruộng' },
              { num: 32, label: 'Preserving bonds: entire', suffix: 'groups were translocated together', placeholder: 'Từ điền...', expected: ['family', 'families'], display: 'family', trap: 'Di dời nguyên vẹn toàn bộ gia đình (family groups) để tránh sang chấn tâm lý' }
            ]
          },
          {
            type: 'notes',
            heading: 'Airborne Tracking & Veterinary Logistics',
            questions: [
              { num: 33, label: 'Tracking: wildlife rangers used', suffix: 'to spot and dart herds from above', placeholder: 'Từ điền...', expected: ['helicopters', 'helicopter'], display: 'helicopters', trap: 'Dùng máy bay trực thăng (helicopters) để theo dấu và bắn thuốc mê' },
              { num: 34, label: 'Sedation management: doses monitored to prevent severe physiological', suffix: '', placeholder: 'Từ điền...', expected: ['stress'], display: 'stress', trap: 'Kiểm soát liều lượng thuốc để tránh sốc và căng thẳng sinh học (stress)' },
              { num: 35, label: 'Transport positioning: elephants rolled onto their', suffix: 'in transport trucks', placeholder: 'Từ điền...', expected: ['sides', 'side'], display: 'sides', trap: 'Đặt voi nằm nghiêng sang một bên (on their sides) để bảo vệ đường thở' },
              { num: 36, label: 'Vital monitoring: vets continuously checked heart rate and', suffix: 'depth', placeholder: 'Từ điền...', expected: ['breathing', 'breath'], display: 'breathing', trap: 'Theo dõi nhịp tim và nhịp thở (breathing)' },
              { num: 37, label: 'Lifting mechanism: soft padded slings fastened around the', suffix: 'for crane hoist', placeholder: 'Từ điền...', expected: ['feet', 'foot'], display: 'feet', trap: 'Buộc dây cẩu quanh chân voi (around the feet) để đưa vào thùng chuyên dụng' }
            ]
          },
          {
            type: 'notes',
            heading: 'Long-term Community & Conservation Outcomes',
            questions: [
              { num: 38, label: 'Local economy: the project created sustainable', suffix: 'for local villagers', placeholder: 'Từ điền...', expected: ['employment', 'jobs'], display: 'employment', trap: 'Tạo việc làm bền vững (employment) cho người dân bản địa' },
              { num: 39, label: 'Anti-poaching: wildlife patrol teams successfully seized illegal', suffix: 'in surrounding zones', placeholder: 'Từ điền...', expected: ['weapons', 'weapon'], display: 'weapons', trap: 'Tịch thu các loại vũ khí săn trộm trái phép (illegal weapons)' },
              { num: 40, label: 'Community benefit: revenue generated from responsible eco-', suffix: 'funds clinics', placeholder: 'Từ điền...', expected: ['tourism'], display: 'tourism', trap: 'Nguồn thu từ du lịch sinh thái (eco-tourism) tài trợ bệnh viện và trường học' }
            ]
          }
        ]
      }
    ]
  }
};

const extraTestsInit = (typeof ADDITIONAL_LISTENING_TESTS !== 'undefined' ? ADDITIONAL_LISTENING_TESTS : (typeof window !== 'undefined' ? window.ADDITIONAL_LISTENING_TESTS : null));
if (extraTestsInit) {
  Object.assign(LISTENING_TESTS, extraTestsInit);
}

// ==========================================
// STATE MANAGEMENT & RUNTIME CONTROLS
// ==========================================
let currentListeningTestId = 'cam19-t1';
let currentListeningPartNum = 1;
let listeningUserAnswers = {}; // { 1: "69", 2: "stream", ..., 40: "tourism" }
let isListeningSubmitted = false;
let listeningGradingResults = null;

// ==========================================
// PRIMARY RENDER FUNCTION
// ==========================================
function renderListeningTestEnvironment(testId) {
  const extraTests = (typeof ADDITIONAL_LISTENING_TESTS !== 'undefined' ? ADDITIONAL_LISTENING_TESTS : (typeof window !== 'undefined' ? window.ADDITIONAL_LISTENING_TESTS : null));
  if (extraTests) {
    Object.assign(LISTENING_TESTS, extraTests);
  }

  let cleanId = (testId || '').trim();
  if (cleanId.startsWith('lis-')) cleanId = cleanId.replace(/^lis-/, '');
  if (cleanId === 'cam19-test1') cleanId = 'cam19-t1';
  if (cleanId === 'cam19-test2') cleanId = 'cam19-t2';
  if (cleanId === 'cam19-test3') cleanId = 'cam19-t3';
  if (cleanId === 'cam19-test4') cleanId = 'cam19-t4';
  if (cleanId === 'cam18-test1') cleanId = 'cam18-t1';
  if (cleanId === 'cam18-test2') cleanId = 'cam18-t2';
  if (cleanId.includes('vol4') || cleanId.includes('syntax') || cleanId.includes('neuro')) cleanId = 'actual-vol4';
  if (cleanId.includes('vol5') || cleanId.includes('bias')) cleanId = 'actual-vol5';

  if (!LISTENING_TESTS[cleanId]) {
    if (cleanId.includes('18-t2') || cleanId.includes('18 - Test 2')) cleanId = 'cam18-t2';
    else if (cleanId.includes('18')) cleanId = 'cam18-t1';
    else if (cleanId.includes('19-t2') || cleanId.includes('19 - Test 2')) cleanId = 'cam19-t2';
    else if (cleanId.includes('19-t3') || cleanId.includes('19 - Test 3')) cleanId = 'cam19-t3';
    else if (cleanId.includes('19-t4') || cleanId.includes('19 - Test 4')) cleanId = 'cam19-t4';
    else if (cleanId.includes('vol4') || cleanId.includes('syntax')) cleanId = 'actual-vol4';
    else if (cleanId.includes('vol5')) cleanId = 'actual-vol5';
    else cleanId = 'cam19-t1';
  }
  currentListeningTestId = cleanId;
  const test = LISTENING_TESTS[currentListeningTestId] || LISTENING_TESTS['cam19-t1'];

  // Reset or maintain test state
  if (!listeningUserAnswers._testId || listeningUserAnswers._testId !== currentListeningTestId) {
    listeningUserAnswers = { _testId: currentListeningTestId };
    isListeningSubmitted = false;
    listeningGradingResults = null;
    currentListeningPartNum = 1;
  }

  const titleBadge = document.getElementById('activeExamTitle');
  if (titleBadge && test && test.title) {
    titleBadge.innerText = test.title;
  }

  const viewport = document.getElementById('testViewport');
  if (!viewport) return;

  const currentPart = test.parts.find(p => p.partNum === currentListeningPartNum) || test.parts[0];

  viewport.innerHTML = `
    <div class="flex flex-col space-y-5 pb-32">
      
      <!-- 1. CAMBRIDGE EDTECH AUDIO PLAYER CONTAINER -->
      <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-[#0c1a3a] dark:to-[#112456] rounded-2xl border border-blue-200 dark:border-blue-900 shadow-sm space-y-4 shrink-0">
        
        <!-- Native Audio Element (Continuous ~30 Minutes Full Cambridge Exam Track) -->
        <audio id="realListeningAudio" src="${test.audioFull || ''}" preload="auto">
          ${test.audioFull ? `<source src="${test.audioFull}" type="${test.audioFullType || 'audio/mpeg'}">` : ''}
          Trình duyệt không hỗ trợ phát audio.
        </audio>

        <!-- Audio Header Bar -->
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/60 dark:border-blue-800/60 pb-3">
          <div class="flex items-center gap-2.5">
            <span id="audioPingIndicator" class="w-3 h-3 rounded-full bg-slate-400"></span>
            <div>
              <span id="audioTrackTitle" class="text-xs font-bold text-iot-primary dark:text-blue-300 font-mono block uppercase tracking-wide">
                ${test.title} • TOÀN BỘ 4 PARTS LIÊN TỤC (~30 PHÚT)
              </span>
              <span id="audioTrackSubtitle" class="text-[11px] text-iot-muted dark:text-slate-400">
                ${test.subtitle || `Băng ghi âm gốc Cambridge người bản xứ thật (Real Human Audio) • Thời lượng: ${test.totalDurationFormatted} • 40 câu hỏi CD-IELTS`}
              </span>
            </div>
          </div>

          <!-- Controls: Switch Test & Headphone Test -->
          <div class="flex items-center gap-2">
            <select id="listeningTestSelector" onchange="switchListeningTest(this.value)" class="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 text-xs text-iot-primary dark:text-blue-300 font-mono font-bold focus:outline-none shadow-xs max-w-[280px] truncate">
              ${Object.keys(LISTENING_TESTS).map(k => `
                <option value="${k}" ${currentListeningTestId === k ? 'selected' : ''}>
                  ${LISTENING_TESTS[k].title}
                </option>
              `).join('')}
            </select>

            <button onclick="testHeadphoneSound()" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 text-xs text-iot-primary dark:text-blue-300 font-medium hover:bg-blue-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 shadow-sm active:scale-95" title="Bấm để phát chuông thử âm thanh tai nghe chuẩn CD-IELTS">
              <i data-lucide="headphones" class="w-3.5 h-3.5 text-iot-orange"></i>
              <span class="hidden sm:inline">Test tai nghe</span>
            </button>
          </div>
        </div>

        <!-- Main Player Interface -->
        <div class="p-4 bg-white dark:bg-[#071326] rounded-xl border border-blue-100 dark:border-blue-900/60 shadow-inner space-y-3">
          <div class="flex flex-wrap items-center gap-4">
            <!-- Big Play / Pause Button -->
            <button id="btnAudioToggle" onclick="toggleListeningAudio()" class="w-12 h-12 rounded-full bg-iot-primary hover:bg-iot-primaryHover text-white flex items-center justify-center font-bold shadow-md transition-all active:scale-95 shrink-0" title="Phát / Dừng băng ghi âm 30 phút thật">
              <i id="audioPlayIcon" data-lucide="play" class="w-5 h-5 ml-0.5"></i>
            </button>

            <!-- Rewind 10s -->
            <button onclick="seekAudioRelative(-10)" class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-iot-dark dark:text-white transition-all active:scale-90" title="Lùi lại 10 giây">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            </button>

            <!-- Forward 10s -->
            <button onclick="seekAudioRelative(10)" class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-iot-dark dark:text-white transition-all active:scale-90" title="Tua tới 10 giây">
              <i data-lucide="rotate-cw" class="w-4 h-4"></i>
            </button>

            <!-- Scrubber Bar with Part Markers -->
            <div class="flex-1 min-w-[200px]">
              <div class="flex justify-between text-[11px] font-mono text-iot-muted dark:text-slate-400 mb-1">
                <span id="audioCurrentTime" class="font-bold text-iot-dark dark:text-white">00:00</span>
                <span class="text-iot-primary dark:text-blue-400 font-bold" id="audioTrackStatus">${test.isVoiceNarration ? '🎙️ Sẵn sàng phát lời thoại bản xứ (British Native Examiner Audio)' : 'Sẵn sàng phát bài thi 30 phút (Cambridge Native Human Audio)'}</span>
                <span id="audioTotalDuration" class="font-bold text-iot-dark dark:text-white">${test.totalDurationFormatted}</span>
              </div>
              <div class="relative w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer overflow-hidden group shadow-inner" onclick="handleScrubClick(event)" id="audioProgressBarContainer">
                <div id="audioProgressBar" class="h-full bg-iot-primary transition-all duration-100 w-0 relative">
                  <div class="absolute right-0 top-0 bottom-0 w-2.5 bg-amber-400 shadow-sm"></div>
                </div>
                <!-- Visual Part Boundary Tick Markers -->
                ${test.parts.map(p => {
                  const leftPct = (p.startSec / test.totalDurationSeconds) * 100;
                  return `<div class="absolute top-0 bottom-0 w-0.5 bg-slate-400/80 dark:bg-slate-500 z-10 pointer-events-none" style="left: ${leftPct}%" title="Part ${p.partNum} (${p.startFormatted})"></div>`;
                }).join('')}
              </div>
            </div>

            <!-- Speed Controller Buttons -->
            <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
              <button onclick="setPlaybackSpeed(0.8)" id="speedBtn-08" class="speed-btn px-2 py-1 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 hover:text-white">0.8x</button>
              <button onclick="setPlaybackSpeed(1.0)" id="speedBtn-10" class="speed-btn px-2 py-1 rounded text-[11px] font-mono font-bold bg-iot-primary text-white shadow-sm">1.0x</button>
              <button onclick="setPlaybackSpeed(1.2)" id="speedBtn-12" class="speed-btn px-2 py-1 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 hover:text-white">1.2x</button>
            </div>

            <!-- Volume Control -->
            <div class="hidden sm:flex items-center gap-2 text-iot-muted dark:text-slate-400">
              <button onclick="toggleAudioMute()" id="btnMuteAudio" class="p-1 hover:text-iot-primary">
                <i id="volumeIcon" data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
              <input type="range" id="audioVolumeSlider" min="0" max="1" step="0.05" value="0.9" oninput="changeAudioVolume(this.value)" class="w-16 h-1.5 bg-slate-200 rounded-lg accent-iot-primary cursor-pointer" />
            </div>
          </div>

          <!-- Quick Timeline Part Seek Pills -->
          <div class="flex items-center gap-2 flex-wrap pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
            <span class="text-[11px] font-mono font-bold text-iot-muted dark:text-slate-400 uppercase flex items-center gap-1 shrink-0">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-iot-orange"></i>
              <span>Mốc 4 Parts (30 Phút):</span>
            </span>
            ${test.parts.map(p => `
              <button onclick="seekAudioToPart(${p.partNum})" class="px-2.5 py-1 rounded-lg text-[11px] font-mono border border-blue-200 dark:border-blue-800/80 bg-blue-50/70 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900 text-iot-primary dark:text-blue-300 font-bold flex items-center gap-1 transition-all active:scale-95 shadow-2xs" title="Tua âm thanh đến đầu Part ${p.partNum} (${p.startFormatted})">
                <i data-lucide="play" class="w-2.5 h-2.5 text-iot-orange"></i>
                <span>Part ${p.partNum} (${p.startFormatted})</span>
              </button>
            `).join('')}
            <span class="text-[10px] font-mono text-slate-400 italic ml-auto hidden md:inline">
              *Âm thanh phát liên tục ~30 phút. Bạn có thể tự do chuyển Tab câu hỏi mà không bị ngắt nhạc.
            </span>
          </div>

          <!-- CD-IELTS Standard Exam Notice -->
          <div class="p-2.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/40 dark:border-blue-900/40 text-xs flex items-center justify-between text-iot-muted dark:text-slate-400">
            <div class="flex items-center gap-2">
              <i data-lucide="shield-check" class="w-4 h-4 text-iot-green shrink-0"></i>
              <span class="text-[11px] font-mono">Quy chế thi CD-IELTS: Băng ghi âm 30 phút chạy liên tục • Chuyển tab xem câu hỏi tự do • Transcript ẩn 100%.</span>
            </div>
            <span class="text-[10px] font-mono bg-blue-100 dark:bg-blue-900/60 text-iot-primary dark:text-blue-300 px-2 py-0.5 rounded font-bold shrink-0">30 MINS CONTINUOUS</span>
          </div>
        </div>
      </div>

            <!-- 2. FOUR PART NAVIGATION TABS (CD-IELTS AUTHENTIC ARCHITECTURE) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 shrink-0" id="listeningPartTabsContainer">
        ${test.parts.map(part => {
          const isActive = part.partNum === currentListeningPartNum;
          const answeredCount = getPartAnsweredCount(part);
          const totalQuestionsInPart = 10;
          return `
            <button onclick="switchListeningPart(${part.partNum})" class="p-3 rounded-xl border text-left transition-all ${
              isActive
                ? 'bg-iot-primary text-white border-iot-primary shadow-md ring-2 ring-blue-300 dark:ring-blue-800'
                : 'bg-white dark:bg-slate-900/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-iot-dark dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs'
            }">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-bold font-mono uppercase tracking-wider ${isActive ? 'text-blue-100' : 'text-iot-primary dark:text-blue-400'}">
                  PART ${part.partNum}
                </span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-blue-600/60 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }" id="partBadge_${part.partNum}">
                  ${answeredCount}/${totalQuestionsInPart} đã làm
                </span>
              </div>
              <div class="text-xs font-semibold line-clamp-1 leading-snug">
                ${part.qRange}
              </div>
            </button>
          `;
        }).join('')}
      </div>

      <!-- 3. ACTIVE PART QUESTIONS VIEWPORT -->
      <div id="activePartViewport" class="space-y-6">
        <!-- Rendered by renderActivePartQuestions() -->
      </div>

    </div>

    <!-- 4. FIXED BOTTOM EXAM PALETTE (QUESTIONS 1 TO 40) -->
    <div class="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#071326]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl px-4 py-2.5">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <!-- Progress Counter & Part Status -->
        <div class="flex items-center gap-3 shrink-0">
          <div class="flex items-center gap-1.5 text-xs font-mono font-bold text-iot-primary dark:text-blue-300">
            <i data-lucide="check-circle" class="w-4 h-4 text-iot-green"></i>
            <span id="listeningPaletteCounter">Đã làm: ${getTotalAnsweredCount()} / 40 câu</span>
          </div>
          <span class="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
          <span class="text-[11px] text-iot-muted dark:text-slate-400 hidden sm:inline">
            Bấm số câu để chuyển nhanh
          </span>
        </div>

        <!-- 40 Question Palette Grid -->
        <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-thin">
          ${[1, 2, 3, 4].map(pNum => `
            <div class="flex items-center gap-1 border-r border-slate-200 dark:border-slate-700 pr-2 last:border-r-0">
              <span class="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 mr-0.5 uppercase">P${pNum}</span>
              ${getQuestionsForPartNum(pNum).map(qNum => {
                const isAnswered = isQuestionAnswered(qNum);
                let btnClass = 'w-7 h-7 rounded text-[11px] font-mono font-semibold transition-all border shrink-0 ';
                if (isListeningSubmitted && listeningGradingResults) {
                  const res = listeningGradingResults.details[qNum];
                  if (res && res.isCorrect) {
                    btnClass += 'bg-green-600 text-white border-green-600';
                  } else {
                    btnClass += 'bg-red-500 text-white border-red-500';
                  }
                } else if (isAnswered) {
                  btnClass += 'bg-iot-primary text-white border-iot-primary shadow-xs';
                } else {
                  btnClass += 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-iot-primary';
                }
                return `
                  <button id="palette_btn_${qNum}" onclick="jumpToListeningQuestion(${qNum})" class="${btnClass}" title="Nhảy tới câu ${qNum}">
                    ${qNum}
                  </button>
                `;
              }).join('')}
            </div>
          `).join('')}
        </div>

        <!-- Submit Button -->
        <div class="shrink-0">
          <button onclick="checkListeningAnswers()" class="px-5 py-2 rounded-lg bg-iot-green hover:bg-green-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap">
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
            <span>Nộp bài (Chấm 40 câu)</span>
          </button>
        </div>

      </div>
    </div>
  `;

  renderActivePartQuestions();
  setupAudioEventListeners();
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

// ==========================================
// RENDER QUESTIONS FOR CURRENT ACTIVE PART
// ==========================================
function renderActivePartQuestions() {
  const container = document.getElementById('activePartViewport');
  if (!container) return;

  const test = LISTENING_TESTS[currentListeningTestId];
  const part = test.parts.find(p => p.partNum === currentListeningPartNum) || test.parts[0];

  let html = `
    <!-- Part Instructions Header -->
    <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-iot-border dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xs">
      <div>
        <h2 class="font-bold text-sm text-iot-dark dark:text-white uppercase tracking-wide">
          ${part.instructions}
        </h2>
        <p class="text-xs text-iot-muted dark:text-slate-400 mt-0.5">
          ${part.context}
        </p>
      </div>
      <span class="text-xs font-mono bg-blue-100 text-iot-primary dark:bg-blue-900/60 dark:text-blue-300 px-3 py-1 rounded font-bold shrink-0">
        Part ${part.partNum} • 10 Questions
      </span>
    </div>
  `;

  // Render each section in the Part
  part.sections.forEach(sec => {
    if (sec.type === 'notes') {
      html += renderNotesSection(sec, part.formTitle);
    } else if (sec.type === 'multiple-choice') {
      html += renderMultipleChoiceSection(sec);
    } else if (sec.type === 'map-labelling') {
      html += renderMapLabellingSection(sec);
    } else if (sec.type === 'choose-two') {
      html += renderChooseTwoSection(sec);
    } else if (sec.type === 'matching') {
      html += renderMatchingSection(sec);
    }
  });

  // Next / Previous Part Navigation Bar
  html += `
    <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm">
      <button onclick="switchListeningPart(${Math.max(1, currentListeningPartNum - 1)})" ${currentListeningPartNum === 1 ? 'disabled class="opacity-40 cursor-not-allowed px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold font-mono"' : 'class="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-iot-dark dark:text-white text-xs font-bold font-mono flex items-center gap-1.5 transition-all"'}>
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
        <span>Part Trước</span>
      </button>

      <span class="text-xs font-mono font-bold text-iot-muted dark:text-slate-400">
        Part ${currentListeningPartNum} / 4
      </span>

      <button onclick="switchListeningPart(${Math.min(4, currentListeningPartNum + 1)})" ${currentListeningPartNum === 4 ? 'disabled class="opacity-40 cursor-not-allowed px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold font-mono"' : 'class="px-4 py-2 rounded-lg bg-iot-primary hover:bg-iot-primaryHover text-white text-xs font-bold font-mono flex items-center gap-1.5 transition-all shadow-sm"'}>
        <span>Part Tiếp Theo</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `;

  container.innerHTML = html;
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

// ------------------------------------------
// SECTION RENDERERS
// ------------------------------------------

function renderNotesSection(sec, formTitle) {
  return `
    <div class="p-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-iot-border dark:border-slate-800 shadow-sm space-y-4">
      <div class="border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center justify-between">
        <h3 class="font-bold text-sm sm:text-base text-iot-dark dark:text-white uppercase tracking-wider font-mono">
          ${formTitle || sec.heading || 'NOTES COMPLETION'}
        </h3>
        <span class="text-[11px] font-mono text-iot-muted">Write ONE WORD AND/OR A NUMBER</span>
      </div>

      ${sec.heading && formTitle ? `<div class="font-bold text-xs text-iot-primary dark:text-blue-400 uppercase font-mono">${sec.heading}</div>` : ''}

      <div class="grid grid-cols-1 gap-3.5 text-xs sm:text-sm">
        ${sec.questions.map(q => {
          const val = listeningUserAnswers[q.num] || '';
          const res = isListeningSubmitted && listeningGradingResults ? listeningGradingResults.details[q.num] : null;
          let borderState = 'border-slate-300 dark:border-slate-600 dark:bg-slate-900';
          let feedbackHtml = '';

          if (res) {
            if (res.isCorrect) {
              borderState = 'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-900 dark:text-green-200';
              feedbackHtml = `<span class="text-[11px] font-mono text-green-600 font-bold ml-2">✓ Đúng</span>`;
            } else {
              borderState = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
              feedbackHtml = `
                <div class="mt-1 text-[11px] space-y-0.5">
                  <span class="text-red-600 font-bold">✗ Đáp án đúng: <strong>"${q.display}"</strong></span>
                  <p class="text-iot-muted italic">${q.trap}</p>
                </div>
              `;
            }
          }

          return `
            <div id="q_card_${q.num}" class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/70 dark:border-slate-800 transition-all">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="font-semibold text-iot-dark dark:text-slate-200">
                  <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-iot-primary dark:text-blue-300 inline-flex items-center justify-center font-mono font-bold text-xs mr-1.5">${q.num}</span>
                  ${q.label}
                </span>
                <div class="flex items-center gap-1.5">
                  ${q.prefix ? `<span class="font-bold text-iot-dark dark:text-white font-mono">${q.prefix}</span>` : ''}
                  <input type="text" id="q_input_${q.num}" value="${val}" oninput="handleListeningAnswer(${q.num}, this.value)" onkeydown="handleQuestionInputKeydown(event, ${q.num})" placeholder="${q.placeholder}" class="px-3 py-1.5 rounded-lg border text-xs w-44 sm:w-52 font-mono focus:border-iot-primary focus:outline-none transition-colors ${borderState}" />
                  ${q.suffix ? `<span class="text-[11px] text-iot-muted">${q.suffix}</span>` : ''}
                </div>
              </div>
              ${feedbackHtml}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderMultipleChoiceSection(sec) {
  return `
    <div class="p-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-iot-border dark:border-slate-800 shadow-sm space-y-5">
      <div class="border-b border-slate-100 dark:border-slate-800 pb-2">
        <h3 class="font-bold text-sm sm:text-base text-iot-dark dark:text-white uppercase tracking-wider font-mono">
          ${sec.heading}
        </h3>
        <p class="text-xs text-iot-muted mt-0.5">${sec.subInstructions}</p>
      </div>

      <div class="space-y-4">
        ${sec.questions.map(q => {
          const selectedKey = listeningUserAnswers[q.num] || '';
          const res = isListeningSubmitted && listeningGradingResults ? listeningGradingResults.details[q.num] : null;

          return `
            <div id="q_card_${q.num}" class="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div class="font-semibold text-xs sm:text-sm text-iot-dark dark:text-slate-200 flex items-start gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-iot-primary dark:text-blue-300 inline-flex items-center justify-center font-mono font-bold text-xs shrink-0">${q.num}</span>
                <span>${q.prompt}</span>
              </div>

              <div class="grid grid-cols-1 gap-2 pt-1">
                ${q.options.map(opt => {
                  const isChecked = selectedKey === opt.key;
                  let optStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-iot-primary';
                  if (isChecked) {
                    optStyle = 'border-iot-primary bg-blue-50 dark:bg-blue-950/60 text-iot-primary dark:text-blue-300 font-semibold ring-1 ring-iot-primary';
                  }
                  return `
                    <label onclick="handleListeningAnswer(${q.num}, '${opt.key}')" class="p-2.5 rounded-lg border cursor-pointer flex items-center gap-3 transition-all ${optStyle}">
                      <input type="radio" name="mc_q_${q.num}" value="${opt.key}" ${isChecked ? 'checked' : ''} class="w-4 h-4 text-iot-primary" />
                      <span class="font-mono font-bold text-xs w-5 text-center">${opt.key}.</span>
                      <span class="text-xs">${opt.text}</span>
                    </label>
                  `;
                }).join('')}
              </div>

              ${res ? (res.isCorrect ? `
                <div class="text-[11px] font-mono text-green-600 font-bold">✓ Chính xác (Lựa chọn ${q.display})</div>
              ` : `
                <div class="text-[11px] p-2 rounded bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 space-y-0.5">
                  <span class="text-red-600 font-bold">✗ Đáp án đúng: <strong>Lựa chọn ${q.display}</strong></span>
                  <p class="text-iot-muted">${q.trap}</p>
                </div>
              `) : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderMapLabellingSection(sec) {
  return `
    <div class="p-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-iot-border dark:border-slate-800 shadow-sm space-y-5">
      <div class="border-b border-slate-100 dark:border-slate-800 pb-2">
        <h3 class="font-bold text-sm sm:text-base text-iot-dark dark:text-white uppercase tracking-wider font-mono">
          ${sec.heading}
        </h3>
        <p class="text-xs text-iot-muted mt-0.5">${sec.subInstructions}</p>
      </div>

      <!-- INTERACTIVE MAP SCHEMATIC (SVG) -->
      <div class="p-4 bg-slate-50 dark:bg-[#071326] rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between text-xs font-mono font-bold text-iot-primary dark:text-blue-300">
          <span>SƠ ĐỒ THỰC TẾ: FARLEY HOUSE & GROUNDS</span>
          <span class="text-[10px] text-iot-muted">Quan sát các vị trí đánh dấu A–H trên bản đồ</span>
        </div>

        <div class="relative w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2">
          <svg viewBox="0 0 680 380" class="w-full h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Background Grounds -->
            <rect width="680" height="380" fill="#f8fafc" class="dark:fill-slate-900" />
            
            <!-- River / Lake -->
            <path d="M 180 140 C 260 110, 420 110, 500 140 C 520 170, 440 200, 340 190 C 240 180, 160 170, 180 140 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
            <text x="340" y="160" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold" fill="#0369a1">CENTRAL LAKE</text>

            <!-- Main Building (Farley House) -->
            <rect x="260" y="230" width="160" height="70" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
            <text x="340" y="270" text-anchor="middle" font-size="13" font-family="monospace" font-weight="bold" fill="#1e293b">FARLEY HOUSE</text>

            <!-- Courtyard -->
            <rect x="420" y="240" width="80" height="50" fill="#f1f5f9" stroke="#94a3b8" stroke-dasharray="3,3" />
            <text x="460" y="268" text-anchor="middle" font-size="10" font-family="monospace" fill="#64748b">Courtyard</text>

            <!-- Roads and Pathways -->
            <path d="M 340 380 L 340 300" stroke="#94a3b8" stroke-width="8" stroke-linecap="round" />
            <text x="340" y="360" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569">MAIN ENTRANCE / CARRIAGE DRIVE</text>
            <path d="M 340 230 L 340 190" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="4,4" />
            
            <!-- Side Road to Stables -->
            <path d="M 340 330 L 520 330 L 520 250" stroke="#cbd5e1" stroke-width="4" fill="none" />

            <!-- Boundary Walls -->
            <rect x="20" y="20" width="640" height="340" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,4" />

            <!-- Compass Rose (North) -->
            <g transform="translate(620, 50)">
              <circle cx="0" cy="0" r="18" fill="white" stroke="#64748b" stroke-width="1.5" />
              <polygon points="0,-14 4,0 0,-4 -4,0" fill="#dc2626" />
              <polygon points="0,14 4,0 0,4 -4,0" fill="#64748b" />
              <text x="0" y="-18" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">N</text>
            </g>

            <!-- Labeled Landmark Pins (A through H) -->
            <!-- A: Orchard (North-West corner) -->
            <circle cx="80" cy="70" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="80" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="white">A</text>
            <text x="80" y="100" text-anchor="middle" font-size="10" fill="#64748b">Walled Garden Area</text>

            <!-- H: Glasshouse (North-West terrace) -->
            <circle cx="160" cy="80" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="160" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="white">H</text>

            <!-- E: Kitchen Garden (West of House) -->
            <circle cx="120" cy="240" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="120" y="245" text-anchor="middle" font-size="14" font-weight="bold" fill="white">E</text>

            <!-- G: Aviary (Along west pathway to lake) -->
            <circle cx="230" cy="210" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="230" y="215" text-anchor="middle" font-size="14" font-weight="bold" fill="white">G</text>

            <!-- F: Lake Pavilion (North bank of lake) -->
            <circle cx="340" cy="100" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="340" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">F</text>

            <!-- D: Coach House (North-East edge) -->
            <circle cx="580" cy="180" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="580" y="185" text-anchor="middle" font-size="14" font-weight="bold" fill="white">D</text>

            <!-- B: Stable Yard (East of Courtyard) -->
            <circle cx="540" cy="260" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="540" y="265" text-anchor="middle" font-size="14" font-weight="bold" fill="white">B</text>

            <!-- C: Rose Garden (South-East Lawn) -->
            <circle cx="500" cy="330" r="16" fill="#3b82f6" stroke="white" stroke-width="2" />
            <text x="500" y="335" text-anchor="middle" font-size="14" font-weight="bold" fill="white">C</text>
          </svg>
        </div>

        <!-- Legend / List of Locations -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-300 pt-1">
          ${sec.mapLegend.map(item => `
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span class="w-4 h-4 rounded bg-iot-primary text-white inline-flex items-center justify-center font-bold text-[10px]">${item.letter}</span>
              <span class="truncate">${item.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Map Questions 16-20 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        ${sec.questions.map(q => {
          const selectedVal = listeningUserAnswers[q.num] || '';
          const res = isListeningSubmitted && listeningGradingResults ? listeningGradingResults.details[q.num] : null;

          return `
            <div id="q_card_${q.num}" class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <span class="font-semibold text-xs sm:text-sm text-iot-dark dark:text-slate-200">
                  <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-iot-primary dark:text-blue-300 inline-flex items-center justify-center font-mono font-bold text-xs mr-1">${q.num}</span>
                  ${q.label}
                </span>
                
                <select id="q_input_${q.num}" onchange="handleListeningAnswer(${q.num}, this.value)" onkeydown="handleQuestionInputKeydown(event, ${q.num})" class="px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-900 font-mono font-bold text-xs text-iot-primary dark:text-blue-300 focus:border-iot-primary focus:outline-none">
                  <option value="">Chọn (A–H)...</option>
                  ${['A','B','C','D','E','F','G','H'].map(ltr => `
                    <option value="${ltr}" ${selectedVal === ltr ? 'selected' : ''}>Vị trí ${ltr}</option>
                  `).join('')}
                </select>
              </div>

              ${res ? (res.isCorrect ? `
                <div class="text-[11px] font-mono text-green-600 font-bold">✓ Vị trí ${q.display} chính xác</div>
              ` : `
                <div class="text-[11px] p-2 rounded bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 space-y-0.5">
                  <span class="text-red-600 font-bold">✗ Đáp án đúng: <strong>Vị trí ${q.display}</strong></span>
                  <p class="text-iot-muted">${q.trap}</p>
                </div>
              `) : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderChooseTwoSection(sec) {
  const qNum1 = sec.pairQuestions[0].num;
  const qNum2 = sec.pairQuestions[1].num;
  const selectedA = listeningUserAnswers[qNum1] || '';
  const selectedB = listeningUserAnswers[qNum2] || '';
  const selectedList = [selectedA, selectedB].filter(Boolean);

  const res1 = isListeningSubmitted && listeningGradingResults ? listeningGradingResults.details[qNum1] : null;
  const res2 = isListeningSubmitted && listeningGradingResults ? listeningGradingResults.details[qNum2] : null;

  return `
    <div class="p-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-iot-border dark:border-slate-800 shadow-sm space-y-4">
      <div class="border-b border-slate-100 dark:border-slate-800 pb-2">
        <h3 class="font-bold text-sm sm:text-base text-iot-dark dark:text-white uppercase tracking-wider font-mono">
          ${sec.heading}
        </h3>
        <p class="text-xs text-iot-muted mt-0.5">${sec.subInstructions}</p>
      </div>

      <!-- Option Cards (Choose 2) -->
      <div class="grid grid-cols-1 gap-2.5">
        ${sec.options.map(opt => {
          const isChecked = selectedList.includes(opt.key);
          let cardStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
          if (isChecked) {
            cardStyle = 'border-iot-primary bg-blue-50 dark:bg-blue-950/60 text-iot-primary dark:text-blue-300 font-semibold ring-1 ring-iot-primary';
          }

          return `
            <label onclick="handleChooseTwoToggle(${qNum1}, ${qNum2}, '${opt.key}')" class="p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${cardStyle}">
              <input type="checkbox" ${isChecked ? 'checked' : ''} class="w-4 h-4 text-iot-primary rounded" onclick="event.stopPropagation(); handleChooseTwoToggle(${qNum1}, ${qNum2}, '${opt.key}');" />
              <span class="font-mono font-bold text-xs w-6 text-center">${opt.key}.</span>
              <span class="text-xs sm:text-sm">${opt.text}</span>
            </label>
          `;
        }).join('')}
      </div>

      <!-- Feedback for Pair Questions -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div id="q_card_${qNum1}" class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/70 text-xs">
          <div class="font-bold font-mono">Câu ${qNum1}: Đã chọn <span class="text-iot-primary">${selectedA || 'Chưa chọn'}</span></div>
          ${res1 ? (res1.isCorrect ? `<span class="text-green-600 font-bold font-mono">✓ Đúng (+1đ)</span>` : `<span class="text-red-500 font-bold font-mono">✗ Đáp án: ${sec.pairQuestions[0].display}</span>`) : ''}
        </div>
        <div id="q_card_${qNum2}" class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/70 text-xs">
          <div class="font-bold font-mono">Câu ${qNum2}: Đã chọn <span class="text-iot-primary">${selectedB || 'Chưa chọn'}</span></div>
          ${res2 ? (res2.isCorrect ? `<span class="text-green-600 font-bold font-mono">✓ Đúng (+1đ)</span>` : `<span class="text-red-500 font-bold font-mono">✗ Đáp án: ${sec.pairQuestions[1].display}</span>`) : ''}
        </div>
      </div>
    </div>
  `;
}

function renderMatchingSection(sec) {
  return `
    <div class="p-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-iot-border dark:border-slate-800 shadow-sm space-y-4">
      <div class="border-b border-slate-100 dark:border-slate-800 pb-2">
        <h3 class="font-bold text-sm sm:text-base text-iot-dark dark:text-white uppercase tracking-wider font-mono">
          ${sec.heading}
        </h3>
        <p class="text-xs text-iot-muted mt-0.5">${sec.subInstructions}</p>
      </div>

      <!-- Match Options Box -->
      <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2">
        <div class="font-bold font-mono text-iot-primary dark:text-blue-300 uppercase tracking-wide">
          BẢNG Ý KIẾN / TIÊU CHÍ (OPTIONS A–${sec.matchOptions[sec.matchOptions.length - 1].key}):
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
          ${sec.matchOptions.map(opt => `
            <div class="flex items-start gap-2 p-1.5 bg-white dark:bg-slate-900 rounded border border-slate-200/60 dark:border-slate-800">
              <span class="font-bold text-iot-primary dark:text-blue-400 shrink-0">${opt.key}.</span>
              <span class="text-slate-700 dark:text-slate-300 text-[11px] font-sans">${opt.text}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Matching Question Items -->
      <div class="space-y-2.5 pt-2">
        ${sec.questions.map(q => {
          const selectedVal = listeningUserAnswers[q.num] || '';
          const res = isListeningSubmitted && listeningGradingResults ? listeningGradingResults.details[q.num] : null;

          return `
            <div id="q_card_${q.num}" class="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span class="font-semibold text-xs sm:text-sm text-iot-dark dark:text-slate-200">
                <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-iot-primary dark:text-blue-300 inline-flex items-center justify-center font-mono font-bold text-xs mr-1">${q.num}</span>
                ${q.item}
              </span>

              <div class="flex items-center gap-2">
                <select id="q_input_${q.num}" onchange="handleListeningAnswer(${q.num}, this.value)" onkeydown="handleQuestionInputKeydown(event, ${q.num})" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-900 font-mono font-bold text-xs text-iot-primary dark:text-blue-300 focus:border-iot-primary focus:outline-none">
                  <option value="">Chọn A–${sec.matchOptions[sec.matchOptions.length - 1].key}...</option>
                  ${sec.matchOptions.map(opt => `
                    <option value="${opt.key}" ${selectedVal === opt.key ? 'selected' : ''}>${opt.key} - ${opt.text.substring(0, 32)}...</option>
                  `).join('')}
                </select>

                ${res ? (res.isCorrect ? `
                  <span class="text-green-600 font-bold font-mono text-xs">✓ Đúng</span>
                ` : `
                  <span class="text-red-500 font-bold font-mono text-xs">✗ Đúng: ${q.display}</span>
                `) : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// USER INTERACTION & PALETTE EVENT HANDLERS
// ==========================================

function handleListeningAnswer(qNum, value) {
  listeningUserAnswers[qNum] = (value != null ? String(value) : '').trim();
  updatePaletteButton(qNum);
  updatePartBadge(getPartNumForQuestion(qNum));
  updatePaletteCounter();
}

function handleChooseTwoToggle(qNum1, qNum2, key) {
  const current1 = listeningUserAnswers[qNum1] || '';
  const current2 = listeningUserAnswers[qNum2] || '';

  if (current1 === key) {
    listeningUserAnswers[qNum1] = '';
  } else if (current2 === key) {
    listeningUserAnswers[qNum2] = '';
  } else if (!current1) {
    listeningUserAnswers[qNum1] = key;
  } else if (!current2) {
    listeningUserAnswers[qNum2] = key;
  } else {
    // If both slots full, overwrite second
    listeningUserAnswers[qNum2] = key;
  }

  updatePaletteButton(qNum1);
  updatePaletteButton(qNum2);
  updatePartBadge(getPartNumForQuestion(qNum1));
  updatePaletteCounter();
  renderActivePartQuestions();
}

function switchListeningPart(partNum) {
  if (partNum < 1 || partNum > 4) return;
  currentListeningPartNum = partNum;

  // IMPORTANT: DO NOT STOP OR RESET THE 30-MINUTE CONTINUOUS AUDIO!
  // The candidate can freely navigate across Part 1, Part 2, Part 3, Part 4 to view and answer questions
  // while the master Cambridge audio track continues playing uninterrupted!

  // Update Part Tabs Header
  renderListeningPartTabsUI();

  // Re-render questions for this part
  renderActivePartQuestions();

  // Smooth scroll to top of viewport
  const viewport = document.getElementById('activePartViewport');
  if (viewport) {
    viewport.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function seekAudioToPart(partNum) {
  if (partNum < 1 || partNum > 4) return;
  const test = LISTENING_TESTS[currentListeningTestId];
  const part = test.parts.find(p => p.partNum === partNum);
  const audio = document.getElementById('realListeningAudio');

  if (audio && part) {
    audio.currentTime = part.startSec;
    if (audio.paused) {
      audio.play().catch(e => console.warn("Auto play on seek:", e));
    }
  }

  switchListeningPart(partNum);
}

function switchListeningTest(testId) {
  let cleanId = (testId || '').trim();
  if (cleanId.startsWith('lis-')) cleanId = cleanId.replace(/^lis-/, '');
  if (cleanId.includes('vol4') || cleanId.includes('syntax') || cleanId.includes('neuro')) cleanId = 'actual-vol4';
  if (cleanId.includes('vol5') || cleanId.includes('bias')) cleanId = 'actual-vol5';

  if (!LISTENING_TESTS[cleanId]) {
    if (LISTENING_TESTS[testId]) cleanId = testId;
    else return;
  }
  currentListeningTestId = cleanId;
  currentListeningPartNum = 1;
  listeningUserAnswers = { _testId: cleanId };
  isListeningSubmitted = false;
  listeningGradingResults = null;

  const audio = document.getElementById('realListeningAudio');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  const url = new URL(window.location);
  url.searchParams.set('id', cleanId);
  url.searchParams.set('title', LISTENING_TESTS[cleanId].title);
  window.history.replaceState({}, '', url);

  const titleBadge = document.getElementById('activeExamTitle');
  if (titleBadge) titleBadge.innerText = LISTENING_TESTS[cleanId].title;

  renderListeningTestEnvironment(cleanId);
}

function jumpToListeningQuestion(qNum) {
  const targetPart = getPartNumForQuestion(qNum);
  if (targetPart !== currentListeningPartNum) {
    switchListeningPart(targetPart);
    setTimeout(() => {
      scrollToQuestionCard(qNum);
    }, 150);
  } else {
    scrollToQuestionCard(qNum);
  }
}

function scrollToQuestionCard(qNum) {
  const card = document.getElementById(`q_card_${qNum}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('ring-2', 'ring-amber-400', 'bg-amber-50/50');
    setTimeout(() => {
      card.classList.remove('ring-2', 'ring-amber-400', 'bg-amber-50/50');
    }, 1600);
  }
}

function renderListeningPartTabsUI() {
  const test = LISTENING_TESTS[currentListeningTestId];
  test.parts.forEach(part => {
    const badge = document.getElementById(`partBadge_${part.partNum}`);
    if (badge) {
      const answered = getPartAnsweredCount(part);
      badge.innerText = `${answered}/10 đã làm`;
    }
  });

  const tabsContainer = document.getElementById('listeningPartTabsContainer');
  if (!tabsContainer) return;

  const buttons = tabsContainer.querySelectorAll('button');
  buttons.forEach((btn, idx) => {
    const pNum = idx + 1;
    if (pNum === currentListeningPartNum) {
      btn.className = 'p-3 rounded-xl border text-left transition-all bg-iot-primary text-white border-iot-primary shadow-md ring-2 ring-blue-300 dark:ring-blue-800';
    } else {
      btn.className = 'p-3 rounded-xl border text-left transition-all bg-white dark:bg-slate-900/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-iot-dark dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs';
    }
  });
}

function updatePaletteButton(qNum) {
  const btn = document.getElementById(`palette_btn_${qNum}`);
  if (!btn) return;

  if (isListeningSubmitted && listeningGradingResults) {
    const res = listeningGradingResults.details[qNum];
    if (res && res.isCorrect) {
      btn.className = 'w-7 h-7 rounded text-[11px] font-mono font-semibold transition-all border shrink-0 bg-green-600 text-white border-green-600';
    } else {
      btn.className = 'w-7 h-7 rounded text-[11px] font-mono font-semibold transition-all border shrink-0 bg-red-500 text-white border-red-500';
    }
  } else if (isQuestionAnswered(qNum)) {
    btn.className = 'w-7 h-7 rounded text-[11px] font-mono font-semibold transition-all border shrink-0 bg-iot-primary text-white border-iot-primary shadow-xs';
  } else {
    btn.className = 'w-7 h-7 rounded text-[11px] font-mono font-semibold transition-all border shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-iot-primary';
  }
}

function updatePartBadge(partNum) {
  const test = LISTENING_TESTS[currentListeningTestId];
  const part = test.parts.find(p => p.partNum === partNum);
  if (!part) return;
  const badge = document.getElementById(`partBadge_${partNum}`);
  if (badge) {
    badge.innerText = `${getPartAnsweredCount(part)}/10 đã làm`;
  }
}

function updatePaletteCounter() {
  const counterEl = document.getElementById('listeningPaletteCounter');
  if (counterEl) {
    counterEl.innerText = `Đã làm: ${getTotalAnsweredCount()} / 40 câu`;
  }
}

// ==========================================
// SCORING ENGINE & SOCRATIC AI COGNITIVE SYNC
// ==========================================

function checkListeningAnswers() {
  if (typeof window !== 'undefined' && window.examLockdown && typeof window.examLockdown.releaseExamLockdown === 'function') {
    window.examLockdown.releaseExamLockdown();
  }
  const test = LISTENING_TESTS[currentListeningTestId];
  if (!test) return;

  let totalScore = 0;
  const partScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  const details = {}; // { [qNum]: { isCorrect, userAns, correctAns, trap } }
  const mistakes = [];

  test.parts.forEach(part => {
    part.sections.forEach(sec => {
      // Notes & Single Questions
      if (sec.questions) {
        sec.questions.forEach(q => {
          const userAns = (listeningUserAnswers[q.num] || '').trim();
          const cleanUser = userAns.toLowerCase().replace(/[.,!?;:()]/g, '').trim();

          const isCorrect = q.expected.some(exp => {
            const cleanExp = exp.toLowerCase().replace(/[.,!?;:()]/g, '').trim();
            return cleanUser === cleanExp || cleanUser === exp.toLowerCase().trim();
          });

          if (isCorrect && cleanUser.length > 0) {
            totalScore++;
            partScores[part.partNum]++;
            details[q.num] = { isCorrect: true, userAns, correctAns: q.display, trap: q.trap };
          } else {
            details[q.num] = { isCorrect: false, userAns: userAns || "Chưa điền", correctAns: q.display, trap: q.trap };
            mistakes.push({
              qNum: q.num,
              partNum: part.partNum,
              userAns: userAns || "Chưa điền",
              correctAns: q.display,
              trap: q.trap
            });
          }
        });
      }

      // Choose Two Questions (e.g. Q21 & Q22)
      if (sec.pairQuestions) {
        const q1 = sec.pairQuestions[0];
        const q2 = sec.pairQuestions[1];
        const userAns1 = (listeningUserAnswers[q1.num] || '').trim().toUpperCase();
        const userAns2 = (listeningUserAnswers[q2.num] || '').trim().toUpperCase();

        const validPair = q1.expected; // ['B', 'D']
        const userPair = [userAns1, userAns2].filter(Boolean);

        // Score Q1
        const q1Correct = validPair.includes(userAns1) && userAns1 !== '';
        if (q1Correct) {
          totalScore++;
          partScores[part.partNum]++;
          details[q1.num] = { isCorrect: true, userAns: userAns1, correctAns: q1.display, trap: q1.trap };
        } else {
          details[q1.num] = { isCorrect: false, userAns: userAns1 || "Chưa chọn", correctAns: q1.display, trap: q1.trap };
          mistakes.push({ qNum: q1.num, partNum: part.partNum, userAns: userAns1 || "Chưa chọn", correctAns: q1.display, trap: q1.trap });
        }

        // Score Q2 (must be valid and distinct from Q1)
        const q2Correct = validPair.includes(userAns2) && userAns2 !== userAns1 && userAns2 !== '';
        if (q2Correct) {
          totalScore++;
          partScores[part.partNum]++;
          details[q2.num] = { isCorrect: true, userAns: userAns2, correctAns: q2.display, trap: q2.trap };
        } else {
          details[q2.num] = { isCorrect: false, userAns: userAns2 || "Chưa chọn", correctAns: q2.display, trap: q2.trap };
          mistakes.push({ qNum: q2.num, partNum: part.partNum, userAns: userAns2 || "Chưa chọn", correctAns: q2.display, trap: q2.trap });
        }
      }
    });
  });

  // Calculate Official IELTS Listening Band
  const estBand = calculateIeltsListeningBand(totalScore);

  isListeningSubmitted = true;
  listeningGradingResults = {
    totalScore,
    estBand,
    partScores,
    details,
    mistakes
  };

  // Update all palette buttons to reflect green/red results
  for (let i = 1; i <= 40; i++) {
    updatePaletteButton(i);
  }

  // Re-render current part to show feedback cards
  renderActivePartQuestions();

  const studentName = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.name : 'Học viên';

  // Socratic AI Profile sync
  if (window.socraticAI) {
    window.socraticAI.recordTestResult({
      testId: test.id,
      title: test.title,
      skill: 'LISTENING',
      score: totalScore,
      total: 40,
      band: estBand,
      mistakes: mistakes.map(m => ({
        qNum: m.qNum,
        userAns: m.userAns,
        correctAns: m.correctAns,
        category: 'distractor_resistance',
        fallacy: m.trap
      }))
    });
  }

  // Render comprehensive report in Chat Box
  renderListeningReportInChat(test, totalScore, estBand, partScores, mistakes, studentName);

  // Open Professional CD-IELTS Official Scorecard Modal (No web alert)
  openOfficialScorecardModal(listeningGradingResults);
}

function calculateIeltsListeningBand(score) {
  if (score >= 39) return 'Band 9.0';
  if (score >= 37) return 'Band 8.5';
  if (score >= 35) return 'Band 8.0';
  if (score >= 32) return 'Band 7.5';
  if (score >= 30) return 'Band 7.0';
  if (score >= 26) return 'Band 6.5';
  if (score >= 23) return 'Band 6.0';
  if (score >= 18) return 'Band 5.5';
  if (score >= 16) return 'Band 5.0';
  if (score >= 13) return 'Band 4.5';
  if (score >= 10) return 'Band 4.0';
  if (score >= 6) return 'Band 3.5';
  return 'Band 3.0';
}

function renderListeningReportInChat(test, totalScore, estBand, partScores, mistakes, studentName) {
  const chatContainer = document.getElementById('aiChatBox');
  if (!chatContainer) return;

  let trapSummaryHtml = '';
  if (mistakes.length === 0) {
    trapSummaryHtml = `
      <div class="p-3 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-300 dark:border-green-800 text-green-800 dark:text-green-200">
        🎉 <strong>Hoàn hảo ${studentName}!</strong> Bạn đạt điểm tuyệt đối 40/40 (${estBand}), vượt qua mọi bẫy nối âm, nuốt âm và đổi hướng thông tin của Cambridge!
      </div>
    `;
  } else {
    trapSummaryHtml = `
      <div class="space-y-2 text-[11px]">
        <div class="font-bold text-red-600 dark:text-red-400 flex items-center justify-between">
          <span>Phân tích bẫy nghe Cambridge (${mistakes.length} câu cần khắc phục):</span>
        </div>
        <div class="max-h-60 overflow-y-auto space-y-2 pr-1 font-mono text-[11px]">
          ${mistakes.map(m => `
            <div class="p-2 rounded bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 space-y-0.5">
              <div class="flex items-center justify-between font-bold text-iot-dark dark:text-white">
                <span>Câu ${m.qNum} (Part ${m.partNum})</span>
                <span class="text-red-500">Bạn điền: "${m.userAns}"</span>
              </div>
              <div class="text-iot-green font-bold">➔ Đáp án gốc: "${m.correctAns}"</div>
              <div class="text-iot-muted font-sans text-[10px]">${m.trap}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  chatContainer.innerHTML += `
    <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#0d1f42] dark:to-[#08152e] border border-blue-300 dark:border-blue-800 shadow-md text-xs space-y-3.5 my-3">
      
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-blue-200 dark:border-blue-800/80 pb-2.5">
        <div>
          <span class="font-mono font-bold text-iot-primary dark:text-blue-300 text-xs block uppercase">
            BÁO CÁO TOÀN DIỆN 4 PARTS
          </span>
          <span class="text-[10px] text-iot-muted dark:text-slate-400">
            ${test.title}
          </span>
        </div>
        <div class="text-right">
          <span class="bg-iot-green text-white font-mono font-bold px-2.5 py-1 rounded-lg text-xs shadow-xs">
            ${totalScore}/40 • ${estBand}
          </span>
        </div>
      </div>

      <!-- 4 Parts Score Grid -->
      <div class="grid grid-cols-4 gap-2 text-center font-mono">
        <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-[10px] text-slate-400 block">Part 1</span>
          <span class="font-bold text-xs ${partScores[1] >= 8 ? 'text-iot-green' : 'text-iot-primary'}">${partScores[1]}/10</span>
        </div>
        <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-[10px] text-slate-400 block">Part 2</span>
          <span class="font-bold text-xs ${partScores[2] >= 8 ? 'text-iot-green' : 'text-iot-primary'}">${partScores[2]}/10</span>
        </div>
        <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-[10px] text-slate-400 block">Part 3</span>
          <span class="font-bold text-xs ${partScores[3] >= 8 ? 'text-iot-green' : 'text-iot-primary'}">${partScores[3]}/10</span>
        </div>
        <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-[10px] text-slate-400 block">Part 4</span>
          <span class="font-bold text-xs ${partScores[4] >= 8 ? 'text-iot-green' : 'text-iot-primary'}">${partScores[4]}/10</span>
        </div>
      </div>

      ${trapSummaryHtml}

      <!-- Socratic Cognitive Insights -->
      <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900 text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-1">
        <div class="font-bold text-iot-primary dark:text-blue-400 flex items-center gap-1.5">
          <i data-lucide="brain" class="w-3.5 h-3.5 text-amber-500"></i>
          <span>Tư duy phản biện Socratic:</span>
        </div>
        <p>
          Trong đề thi CD-IELTS, các bẫy thường gặp nhất gồm: <strong>1) Distractor Correction</strong> (nói một thông tin rồi tự đính chính), <strong>2) Paraphrase đồng nghĩa</strong> trong câu hỏi trắc nghiệm, và <strong>3) Số ít/số nhiều</strong> trong Note Completion.
        </p>
      </div>

      <button onclick="window.socraticAI && window.socraticAI.openCognitiveProfileModal ? window.socraticAI.openCognitiveProfileModal() : null" class="w-full py-2.5 rounded-xl bg-iot-primary hover:bg-iot-primaryHover text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md">
        <i data-lucide="user-check" class="w-4 h-4 text-amber-300"></i>
        <span>Xem Bảng Phân Tích Năng Lực Nhận Thức</span>
      </button>

    </div>
  `;

  chatContainer.scrollTop = chatContainer.scrollHeight;
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

// ==========================================
// AUDIO PLAYER INTERACTION FUNCTIONS
// ==========================================

let activeListeningTTSUtterance = null;
let isExaminerTTSSpeaking = false;

function stopExaminerVoiceSynthesis() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isExaminerTTSSpeaking = false;
  activeListeningTTSUtterance = null;
  updateAudioButtonUI(false);
  const statusEl = document.getElementById('audioTrackStatus');
  const pingEl = document.getElementById('audioPingIndicator');
  if (statusEl) {
    const test = LISTENING_TESTS[currentListeningTestId];
    if (test && test.isVoiceNarration) {
      statusEl.innerText = "🎙️ Đã tạm dừng • Sẵn sàng phát lời thoại bản xứ";
    } else {
      statusEl.innerText = "Đã tạm dừng băng ghi âm Cambridge";
    }
  }
  if (pingEl) pingEl.className = "w-3 h-3 rounded-full bg-slate-400";
}

function speakCurrentPartExaminerScript() {
  if (!('speechSynthesis' in window)) return;
  stopExaminerVoiceSynthesis();

  const test = LISTENING_TESTS[currentListeningTestId];
  if (!test) return;
  const part = test.parts.find(p => p.partNum === currentListeningPartNum) || test.parts[0];
  if (!part) return;

  // Build spoken transcript
  let script = "";
  if (part.dialogueScript) {
    script = `IELTS Academic Listening Examination. ${test.title}. ${part.dialogueScript}`;
  } else {
    script = `IELTS Listening Examination. ${test.title}. ${part.title}. ${part.instructions}. ${part.context}. `;
    if (part.sections) {
      part.sections.forEach(sec => {
        if (sec.heading) script += `Section: ${sec.heading}. `;
        if (sec.subInstructions) script += `${sec.subInstructions}. `;
        if (sec.questions) {
          sec.questions.forEach(q => {
            if (q.prompt) script += `Question ${q.num}: ${q.prompt}. `;
            else if (q.label) script += `Question ${q.num}: ${q.label} ${q.suffix || ''}. `;
          });
        }
      });
    }
  }

  const utterance = new SpeechSynthesisUtterance(script);
  utterance.lang = 'en-GB';
  utterance.rate = 0.95;

  const voices = window.speechSynthesis.getVoices();
  const gbVoice = voices.find(v => v.lang === 'en-GB' || v.name.includes('British') || v.name.includes('UK') || v.name.includes('George') || v.name.includes('Hazel'));
  if (gbVoice) utterance.voice = gbVoice;

  utterance.onstart = () => {
    isExaminerTTSSpeaking = true;
    updateAudioButtonUI(true);
    const statusEl = document.getElementById('audioTrackStatus');
    const pingEl = document.getElementById('audioPingIndicator');
    if (statusEl) statusEl.innerText = `🎙️ Giám khảo bản xứ đang đọc: Part ${part.partNum} (${part.title})...`;
    if (pingEl) pingEl.className = "w-3 h-3 rounded-full bg-iot-green animate-ping";
  };

  utterance.onend = () => {
    stopExaminerVoiceSynthesis();
  };

  utterance.onerror = () => {
    stopExaminerVoiceSynthesis();
  };

  activeListeningTTSUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function toggleExaminerVoiceReading() {
  if (isExaminerTTSSpeaking) {
    stopExaminerVoiceSynthesis();
  } else {
    speakCurrentPartExaminerScript();
  }
}

function setupAudioEventListeners() {
  const audio = document.getElementById('realListeningAudio');
  if (!audio) return;

  audio.onerror = () => {
    console.warn("Audio file notice: offline audio file not found, voice narration active.");
    const statusEl = document.getElementById('audioTrackStatus');
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-amber-500 font-bold">🎙️ Băng ghi âm số hóa sẵn sàng. Bấm nút "Phát" hoặc "Giọng đọc bản xứ" để nghe trực tiếp.</span>`;
    }
  };

  audio.onloadedmetadata = () => {
    const totalDurationEl = document.getElementById('audioTotalDuration');
    if (totalDurationEl && !isNaN(audio.duration)) {
      totalDurationEl.innerText = formatAudioTime(audio.duration);
    }
    const roomTimerEl = document.getElementById('roomTimer');
    if (roomTimerEl && !isNaN(audio.duration)) {
      roomTimerEl.innerText = formatAudioTime(audio.duration);
    }
  };

  audio.onplay = () => {
    updateAudioButtonUI(true);
    const statusEl = document.getElementById('audioTrackStatus');
    const pingEl = document.getElementById('audioPingIndicator');
    if (statusEl) statusEl.innerText = `Đang phát Part ${currentListeningPartNum} (Giọng người bản xứ chuẩn Cambridge)...`;
    if (pingEl) pingEl.className = "w-3 h-3 rounded-full bg-iot-green animate-ping";
  };

  audio.onpause = () => {
    updateAudioButtonUI(false);
    const statusEl = document.getElementById('audioTrackStatus');
    const pingEl = document.getElementById('audioPingIndicator');
    if (statusEl) statusEl.innerText = "Tạm dừng";
    if (pingEl) pingEl.className = "w-3 h-3 rounded-full bg-amber-400";
  };

  audio.onended = () => {
    updateAudioButtonUI(false);
    const statusEl = document.getElementById('audioTrackStatus');
    const pingEl = document.getElementById('audioPingIndicator');
    if (statusEl) statusEl.innerText = `Đã hoàn thành Part ${currentListeningPartNum}`;
    if (pingEl) pingEl.className = "w-3 h-3 rounded-full bg-slate-400";

    // Auto prompt to next part if available
    if (currentListeningPartNum < 4) {
      if (window.socraticAI && window.socraticAI.showLearningToast) {
        window.socraticAI.showLearningToast(`Đã kết thúc Part ${currentListeningPartNum}. Chuyển sang Part ${currentListeningPartNum + 1}...`);
      }
    }
  };

  audio.ontimeupdate = () => {
    const currentEl = document.getElementById('audioCurrentTime');
    const progBar = document.getElementById('audioProgressBar');
    const statusEl = document.getElementById('audioTrackStatus');
    const test = LISTENING_TESTS[currentListeningTestId];

    if (currentEl) currentEl.innerText = formatAudioTime(audio.currentTime);
    if (progBar && audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progBar.style.width = pct + '%';
    }

    // Sync header roomTimer with listening remaining countdown
    const roomTimerEl = document.getElementById('roomTimer');
    if (roomTimerEl && audio.duration) {
      const rem = Math.max(0, Math.ceil(audio.duration - audio.currentTime));
      roomTimerEl.innerText = formatAudioTime(rem);
      if (rem <= 300 && rem > 60) {
        roomTimerEl.className = 'font-bold text-amber-400 animate-pulse';
      } else if (rem <= 60 && rem > 0) {
        roomTimerEl.className = 'font-black text-red-400 animate-ping';
      } else {
        roomTimerEl.className = 'font-bold text-white';
      }
    }

    // Auto-detect currently active Part in the 30-minute audio track
    if (statusEl && test) {
      let activePartInAudio = test.parts[0];
      for (let i = test.parts.length - 1; i >= 0; i--) {
        if (audio.currentTime >= test.parts[i].startSec - 1) {
          activePartInAudio = test.parts[i];
          break;
        }
      }
      statusEl.innerText = `Đang phát Part ${activePartInAudio.partNum}: ${activePartInAudio.title.split(':')[1] || ''} • Phút ${formatAudioTime(audio.currentTime)} / ${test.totalDurationFormatted}`;
    }
  };
}

function toggleListeningAudio() {
  if (isExaminerTTSSpeaking) {
    stopExaminerVoiceSynthesis();
    return;
  }
  const test = LISTENING_TESTS[currentListeningTestId];
  const audio = document.getElementById('realListeningAudio');
  if (!test) return;

  // Real human audio master track
  if (test.audioFull && audio) {
    if (audio.paused) {
      audio.play().catch(e => {
        console.warn("Audio play error, falling back to voice synthesis:", e);
        speakCurrentPartExaminerScript();
      });
    } else {
      audio.pause();
    }
    return;
  }

  // Fallback for tests without offline audio
  if (test.isVoiceNarration || !test.audioFull) {
    speakCurrentPartExaminerScript();
    return;
  }
}

function seekAudioRelative(seconds) {
  const audio = document.getElementById('realListeningAudio');
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration || 9999, audio.currentTime + seconds));
}

function handleScrubClick(e) {
  const audio = document.getElementById('realListeningAudio');
  const container = document.getElementById('audioProgressBarContainer');
  if (!audio || !container || !audio.duration) return;

  const rect = container.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const fraction = Math.max(0, Math.min(1, clickX / rect.width));
  audio.currentTime = fraction * audio.duration;
}

function setPlaybackSpeed(rate) {
  const audio = document.getElementById('realListeningAudio');
  if (audio) {
    audio.playbackRate = rate;
  }
  ['08', '10', '12'].forEach(id => {
    const btn = document.getElementById('speedBtn-' + id);
    if (btn) {
      btn.className = "speed-btn px-2 py-1 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 hover:text-white";
    }
  });
  const activeId = rate === 0.8 ? '08' : (rate === 1.2 ? '12' : '10');
  const activeBtn = document.getElementById('speedBtn-' + activeId);
  if (activeBtn) {
    activeBtn.className = "speed-btn px-2 py-1 rounded text-[11px] font-mono font-bold bg-iot-primary text-white shadow-sm";
  }
}

function toggleAudioMute() {
  const audio = document.getElementById('realListeningAudio');
  if (!audio) return;
  audio.muted = !audio.muted;
  const icon = document.getElementById('volumeIcon');
  if (icon) {
    icon.setAttribute('data-lucide', audio.muted ? 'volume-x' : 'volume-2');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function changeAudioVolume(val) {
  const audio = document.getElementById('realListeningAudio');
  if (!audio) return;
  audio.volume = parseFloat(val);
  audio.muted = audio.volume === 0;
  const icon = document.getElementById('volumeIcon');
  if (icon) {
    icon.setAttribute('data-lucide', audio.muted ? 'volume-x' : 'volume-2');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function formatAudioTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function updateAudioButtonUI(isPlaying) {
  const icon = document.getElementById('audioPlayIcon');
  if (!icon) return;
  icon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
  if (!isPlaying) icon.classList.add('ml-0.5');
  else icon.classList.remove('ml-0.5');
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

function testHeadphoneSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      if (window.socraticAI && window.socraticAI.showLearningToast) {
        window.socraticAI.showLearningToast("Trình duyệt không hỗ trợ Web Audio API.");
      }
      return;
    }
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const freqs = [880, 1320]; // A5, E6
    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + idx * 0.22);
      gain.gain.setValueAtTime(0.001, now + idx * 0.22);
      gain.gain.exponentialRampToValueAtTime(0.25, now + idx * 0.22 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.22 + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.22);
      osc.stop(now + idx * 0.22 + 0.5);
    });
    if (window.socraticAI && window.socraticAI.showLearningToast) {
      window.socraticAI.showLearningToast("🎧 Tai nghe đã được cân bằng chuẩn phòng thi CD-IELTS.");
    }
  } catch (e) {
    console.warn("Audio test error:", e);
  }
}

// ==========================================
// HELPER UTILITIES
// ==========================================

function getQuestionsForPartNum(pNum) {
  const list = [];
  const start = (pNum - 1) * 10 + 1;
  const end = pNum * 10;
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}

function getPartNumForQuestion(qNum) {
  return Math.ceil(qNum / 10);
}

function isQuestionAnswered(qNum) {
  const val = listeningUserAnswers[qNum];
  return typeof val === 'string' && val.trim().length > 0;
}

function getPartAnsweredCount(part) {
  const qNums = getQuestionsForPartNum(part.partNum);
  let count = 0;
  qNums.forEach(n => {
    if (isQuestionAnswered(n)) count++;
  });
  return count;
}

function getTotalAnsweredCount() {
  let count = 0;
  for (let i = 1; i <= 40; i++) {
    if (isQuestionAnswered(i)) count++;
  }
  return count;
}

// Export for module or browser window

// ==========================================
// ENTER KEY QUESTION NAVIGATION & AUTO-SUBMIT
// ==========================================
function handleQuestionInputKeydown(event, qNum) {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (event.target && event.target.value) {
      handleListeningAnswer(qNum, event.target.value);
    }

    if (qNum === 40) {
      checkListeningAnswers();
      return;
    }

    const nextNum = qNum + 1;
    const nextPart = getPartNumForQuestion(nextNum);
    if (nextPart !== currentListeningPartNum) {
      switchListeningPart(nextPart);
    }
    setTimeout(() => {
      const nextInp = document.getElementById(`q_input_${nextNum}`);
      if (nextInp) {
        nextInp.focus();
        if (typeof nextInp.select === 'function') nextInp.select();
      }
    }, 100);
  }
}

// ==========================================
// PROFESSIONAL OFFICIAL SCORECARD MODAL (CD-IELTS)
// ==========================================
function openOfficialScorecardModal(results) {
  results = results || listeningGradingResults;
  if (!results) return;

  const test = LISTENING_TESTS[currentListeningTestId];
  const studentName = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.name : 'Học viên';
  const studentTarget = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.targetBand : '8.0';

  let modal = document.getElementById('officialScorecardModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'officialScorecardModal';
    modal.className = 'fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
    document.body.appendChild(modal);
  }

  const { totalScore, estBand, partScores, mistakes } = results;
  const accuracy = ((totalScore / 40) * 100).toFixed(1);

  let cefrLevel = 'B2 - Independent User';
  let badgeColor = 'from-blue-600 to-indigo-600';
  let statusEvaluation = 'Đang tiến bộ vững chắc';
  if (totalScore >= 35) {
    cefrLevel = 'C2 - Mastery / Proficient';
    badgeColor = 'from-amber-500 via-amber-600 to-yellow-500';
    statusEvaluation = '🏆 XUẤT SẮC: VƯỢT MỤC TIÊU BAND ĐỀ RA';
  } else if (totalScore >= 30) {
    cefrLevel = 'C1 - Effective Operational Proficiency';
    badgeColor = 'from-emerald-500 to-teal-600';
    statusEvaluation = '🎯 RẤT TỐT: NỀN TẢNG NGHE BẢN XỨ VỮNG VÀNG';
  } else if (totalScore >= 23) {
    cefrLevel = 'B2+ - Strong Independent';
    badgeColor = 'from-blue-500 to-indigo-600';
    statusEvaluation = '📈 KHÁ: CẦN LUYỆN TẬP THÊM BẪY NGHE PART 3 & 4';
  } else {
    statusEvaluation = '📚 CẦN BỒI DƯỠNG: TẬP TRUNG TỪ VỰNG PART 1 & 2';
  }

  const todayStr = new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const trfNumber = `IDP-${test.id.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

  modal.innerHTML = `
    <div class="relative w-full max-w-4xl bg-white dark:bg-[#071326] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 font-sans">
      
      <!-- Top Banner (IDP / Cambridge Assessment Aesthetic) -->
      <div class="bg-gradient-to-r from-[#0B2545] via-[#0F3563] to-[#134074] text-white p-5 sm:p-6 border-b border-blue-900/60 relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 pointer-events-none"></div>
        <div class="absolute right-32 -top-12 w-28 h-28 rounded-full bg-amber-400/10 pointer-events-none"></div>

        <div class="flex items-start justify-between gap-4 relative z-10">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-md">
              <i data-lucide="award" class="w-6 h-6"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-mono uppercase tracking-widest text-blue-200 font-bold bg-blue-500/20 px-2 py-0.5 rounded border border-blue-300/30">
                  IELTS ACADEMIC LAB • OFFICIAL TEST REPORT
                </span>
                <span class="text-[10px] font-mono text-slate-300 hidden sm:inline">TRF: ${trfNumber}</span>
              </div>
              <h2 class="text-base sm:text-lg font-bold text-white mt-1 leading-tight">
                BẢNG ĐIỂM ĐÁNH GIÁ NĂNG LỰC NGHE CHUẨN IDP / BRITISH COUNCIL
              </h2>
              <p class="text-xs text-blue-100/80 mt-0.5 font-mono">
                ${test.title} • 40 Questions (Part 1 to Part 4)
              </p>
            </div>
          </div>

          <!-- Close Button -->
          <button onclick="closeOfficialScorecardModal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all active:scale-95 shrink-0" title="Đóng bảng điểm">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Candidate Info Strip -->
        <div class="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          <div>
            <span class="text-blue-200 text-[10px] block uppercase">Thí Sinh</span>
            <span class="font-bold text-white text-xs truncate">${studentName}</span>
          </div>
          <div>
            <span class="text-blue-200 text-[10px] block uppercase">Mục Tiêu</span>
            <span class="font-bold text-amber-300 text-xs">Band ${studentTarget}</span>
          </div>
          <div>
            <span class="text-blue-200 text-[10px] block uppercase">Ngày Kiểm Tra</span>
            <span class="font-bold text-white text-xs">${todayStr}</span>
          </div>
          <div>
            <span class="text-blue-200 text-[10px] block uppercase">Hình Thức Thi</span>
            <span class="font-bold text-white text-xs">CD-IELTS (Computer)</span>
          </div>
        </div>
      </div>

      <!-- Modal Body (Scrollable) -->
      <div class="p-5 sm:p-7 space-y-6 max-h-[calc(85vh-200px)] overflow-y-auto">
        
        <!-- HERO OVERALL BAND BADGE & SUMMARY -->
        <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-[#0d1e3d] dark:to-[#132a52] border border-blue-200 dark:border-blue-900 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          <!-- Large Band Score Emblem -->
          <div class="flex items-center gap-5 text-center sm:text-left shrink-0">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${badgeColor} text-white shadow-xl flex flex-col items-center justify-center p-2 border-2 border-white/40 ring-4 ring-blue-200/50 dark:ring-blue-900/50">
              <span class="text-[10px] font-mono font-bold tracking-widest uppercase opacity-90">OVERALL</span>
              <span class="text-3xl sm:text-4xl font-black font-mono tracking-tight">${estBand.replace('Band ', '')}</span>
              <span class="text-[9px] font-mono font-bold uppercase opacity-90">IELTS BAND</span>
            </div>

            <div class="space-y-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wide bg-blue-100 text-iot-primary dark:bg-blue-900/80 dark:text-blue-200 inline-block">
                ${cefrLevel}
              </span>
              <div class="text-xl sm:text-2xl font-black text-iot-dark dark:text-white font-mono">
                ${totalScore} / 40 <span class="text-sm font-normal text-iot-muted">câu chính xác</span>
              </div>
              <div class="text-xs text-iot-muted dark:text-slate-400 font-mono">
                Độ chính xác: <strong class="text-iot-green">${accuracy}%</strong> • Thời gian thi: 30 phút
              </div>
            </div>
          </div>

          <!-- Evaluation Pill -->
          <div class="flex-1 w-full md:w-auto p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <div class="font-bold text-iot-dark dark:text-white flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-4 h-4 text-amber-500"></i>
              <span class="font-mono uppercase text-[11px] text-iot-primary dark:text-blue-400">Đánh giá chuyên gia khảo thí:</span>
            </div>
            <p class="leading-relaxed text-slate-700 dark:text-slate-300 text-[11px]">
              ${statusEvaluation}
            </p>
            <div class="text-[10px] font-mono text-iot-muted">
              Kết quả được chuẩn hóa tự động theo thang điểm Cambridge English và lưu trữ vào hồ sơ năng lực Socratic AI.
            </div>
          </div>

        </div>

        <!-- 4-PART DETAILED PERFORMANCE BREAKDOWN -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xs uppercase font-mono tracking-wider text-iot-dark dark:text-white flex items-center gap-2">
              <i data-lucide="bar-chart-3" class="w-4 h-4 text-iot-primary"></i>
              <span>Chi Tiết Điểm Số 4 Phần Thi (Part 1 – Part 4)</span>
            </h3>
            <span class="text-[11px] font-mono text-iot-muted">10 câu / Phần thi</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${[1, 2, 3, 4].map(pNum => {
              const sc = partScores[pNum] || 0;
              const pct = (sc / 10) * 100;
              const partData = test.parts.find(p => p.partNum === pNum);
              let color = 'bg-iot-green text-green-700 dark:text-green-300';
              let barColor = 'bg-iot-green';
              let badgeText = 'Xuất sắc';
              if (sc < 6) {
                color = 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300';
                barColor = 'bg-amber-500';
                badgeText = 'Cần luyện thêm';
              } else if (sc < 8) {
                color = 'bg-blue-100 text-iot-primary dark:bg-blue-950/60 dark:text-blue-300';
                barColor = 'bg-iot-primary';
                badgeText = 'Tốt';
              }

              return `
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between font-mono">
                    <span class="text-xs font-bold text-iot-primary dark:text-blue-400">PART ${pNum}</span>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${color}">${sc}/10 (${pct}%)</span>
                  </div>

                  <div class="text-[11px] font-semibold text-iot-dark dark:text-slate-200 line-clamp-1" title="${partData ? partData.title : ''}">
                    ${partData ? partData.title.split(':')[1] || partData.title : `Part ${pNum}`}
                  </div>

                  <!-- Progress Bar -->
                  <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full ${barColor} rounded-full" style="width: ${pct}%"></div>
                  </div>

                  <div class="flex items-center justify-between text-[10px] font-mono text-iot-muted">
                    <span>${pNum === 1 ? 'Notes' : (pNum === 2 ? 'MC & Map' : (pNum === 3 ? 'Matching' : 'Lecture'))}</span>
                    <span class="font-bold">${badgeText}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- DIAGNOSTIC MISTAKES & TRAPS ANALYSIS -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xs uppercase font-mono tracking-wider text-iot-dark dark:text-white flex items-center gap-2">
              <i data-lucide="alert-triangle" class="w-4 h-4 text-red-500"></i>
              <span>Giải Mã Bẫy Âm Thanh & Câu Sai (${mistakes.length} câu cần khắc phục)</span>
            </h3>
            <span class="text-[11px] font-mono text-iot-muted">Chuẩn đề thi Cambridge</span>
          </div>

          ${mistakes.length === 0 ? `
            <div class="p-4 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-300 dark:border-green-800 text-xs text-green-900 dark:text-green-200 flex items-center gap-3">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-iot-green shrink-0"></i>
              <div>
                <strong>Tuyệt đối 40/40!</strong> Bạn đã làm chủ 100% phản xạ nghe bản xứ và không mắc phải bất kỳ bẫy âm thanh nào của giám khảo.
              </div>
            </div>
          ` : `
            <div class="max-h-64 overflow-y-auto space-y-2 pr-1 font-mono text-xs">
              ${mistakes.map(m => `
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-red-200/80 dark:border-red-900/50 space-y-1.5 transition-all hover:border-red-400">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="font-bold text-iot-dark dark:text-white flex items-center gap-2">
                      <span class="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-300 inline-flex items-center justify-center text-[10px] font-bold">#${m.qNum}</span>
                      <span>Câu ${m.qNum} (Part ${m.partNum})</span>
                    </span>

                    <div class="flex items-center gap-2 text-xs">
                      <span class="text-red-500 line-through">Bạn điền: "${m.userAns}"</span>
                      <span class="text-iot-muted">➔</span>
                      <span class="text-iot-green font-bold bg-green-50 dark:bg-green-950/60 px-2 py-0.5 rounded border border-green-200 dark:border-green-800">Đáp án: "${m.correctAns}"</span>
                    </div>
                  </div>

                  <p class="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed pl-7">
                    💡 <strong>Bẫy âm thanh:</strong> ${m.trap}
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
          <button onclick="closeOfficialScorecardModal()" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-iot-dark dark:text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-2xs">
            <i data-lucide="eye" class="w-3.5 h-3.5 text-iot-primary"></i>
            <span>Xem Lại Bài Thi</span>
          </button>

          <button onclick="restartListeningTest()" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 hover:bg-blue-100 text-iot-primary dark:text-blue-300 text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-2xs">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            <span>Làm Lại</span>
          </button>

          <button onclick="closeOfficialScorecardModal(); if(window.socraticAI && window.socraticAI.openCognitiveProfileModal) window.socraticAI.openCognitiveProfileModal();" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-iot-primary hover:bg-iot-primaryHover text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 shadow-md active:scale-95">
            <i data-lucide="brain" class="w-3.5 h-3.5 text-amber-300"></i>
            <span>Hồ Sơ Nhận Thức</span>
          </button>
        </div>
      </div>

    </div>
  `;

  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

function closeOfficialScorecardModal() {
  const modal = document.getElementById('officialScorecardModal');
  if (modal) modal.remove();
}

function restartListeningTest() {
  closeOfficialScorecardModal();
  switchListeningTest(currentListeningTestId);
}

if (typeof window !== 'undefined') {
  window.LISTENING_TESTS = LISTENING_TESTS;
  window.renderListeningTestEnvironment = renderListeningTestEnvironment;
  window.switchListeningPart = switchListeningPart;
  window.seekAudioToPart = seekAudioToPart;
  window.openOfficialScorecardModal = openOfficialScorecardModal;
  window.closeOfficialScorecardModal = closeOfficialScorecardModal;
  window.restartListeningTest = restartListeningTest;
  window.handleQuestionInputKeydown = handleQuestionInputKeydown;
  window.switchListeningTest = switchListeningTest;
  window.checkListeningAnswers = checkListeningAnswers;
  window.jumpToListeningQuestion = jumpToListeningQuestion;
  window.handleListeningAnswer = handleListeningAnswer;
  window.handleChooseTwoToggle = handleChooseTwoToggle;
  window.toggleListeningAudio = toggleListeningAudio;
  window.seekAudioRelative = seekAudioRelative;
  window.handleScrubClick = handleScrubClick;
  window.setPlaybackSpeed = setPlaybackSpeed;
  window.toggleAudioMute = toggleAudioMute;
  window.changeAudioVolume = changeAudioVolume;
  window.testHeadphoneSound = testHeadphoneSound;
  window.toggleExaminerVoiceReading = toggleExaminerVoiceReading;
  window.speakCurrentPartExaminerScript = speakCurrentPartExaminerScript;
  window.getCurrentListeningTestId = () => currentListeningTestId;
}
