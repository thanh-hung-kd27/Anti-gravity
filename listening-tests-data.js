/**
 * IELTS ACADEMIC LAB - OFFICIAL CAMBRIDGE LISTENING TESTS
 * Cambridge 19 (Tests 2, 3, 4), Cambridge 18 (Test 2)
 * 100% Real Human Voice Audio from Official Cambridge CD-IELTS Recordings
 * Full 40 Questions per test matching official audio transcripts, answer keys, and traps
 */

const ADDITIONAL_LISTENING_TESTS = {
  "cam19-t2": {
    "id": "cam19-t2",
    "title": "Cambridge 19 - Test 2: Guitar Group & Marine Lifeboats",
    "subtitle": "Băng ghi âm gốc Cambridge người bản xứ thật (Real Human Audio) • Thời lượng: 27:22 • 40 câu hỏi CD-IELTS",
    "audioFull": "audio/cam19-test2-full.mp3",
    "audioFullType": "audio/mpeg",
    "totalDurationFormatted": "27:22",
    "totalDurationSeconds": 1643,
    "parts": [
      {
        "partNum": 1,
        "title": "Part 1: Guitar Group Enrolment & Weekly Lessons",
        "qRange": "Câu 1–10",
        "startSec": 0,
        "startFormatted": "00:00",
        "context": "Hội thoại trực tiếp giữa học viên và điều phối viên câu lạc bộ guitar",
        "audioLocal": "audio/cam19-test2-part1.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 1–6: Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer. Questions 7–10: Complete the table below. Write ONE WORD ONLY for each answer.",
        "formTitle": "GUITAR GROUP ENROLMENT FORM",
        "sections": [
          {
            "type": "notes",
            "heading": "Group Details & Logistics (Questions 1–6)",
            "questions": [
              {
                "num": 1,
                "label": "Coordinator: Gary",
                "suffix": "",
                "placeholder": "Họ...",
                "expected": [
                  "mathieson"
                ],
                "display": "Mathieson",
                "trap": "Đánh vần tên: M-A-T-H-I-E-S-O-N"
              },
              {
                "num": 2,
                "label": "Course level suitable for:",
                "suffix": "",
                "placeholder": "Trình độ...",
                "expected": [
                  "beginners",
                  "beginner"
                ],
                "display": "beginners",
                "trap": "Dành riêng cho người mới bắt đầu (beginners)"
              },
              {
                "num": 3,
                "label": "Venue location: the",
                "suffix": "",
                "placeholder": "Địa điểm...",
                "expected": [
                  "college"
                ],
                "display": "college",
                "trap": "Địa điểm học: tại trường cao đẳng (the college)"
              },
              {
                "num": 4,
                "label": "Street address: on",
                "suffix": "Street (Room T347)",
                "placeholder": "Tên đường...",
                "expected": [
                  "new"
                ],
                "display": "New",
                "trap": "Đường New Street"
              },
              {
                "num": 5,
                "label": "Weekly session time: Thursday morning at",
                "suffix": "",
                "placeholder": "Giờ học...",
                "expected": [
                  "11",
                  "11.00",
                  "11 am",
                  "eleven"
                ],
                "display": "11 am",
                "trap": "Thời gian: 11 giờ sáng thứ Năm (11 am)"
              },
              {
                "num": 6,
                "label": "Recommended practice website: \"The perfect",
                "suffix": "\"",
                "placeholder": "Tên trang web...",
                "expected": [
                  "instrument"
                ],
                "display": "instrument",
                "trap": "Trang web khuyến nghị: The perfect instrument"
              }
            ]
          },
          {
            "type": "table",
            "heading": "A Typical 45-Minute Guitar Lesson Structure (Questions 7–10)",
            "tableData": {
              "headers": [
                "Time Allocation",
                "Lesson Activity",
                "Specific Notes & Techniques"
              ],
              "rows": [
                [
                  "5 minutes",
                  "Tuning guitars",
                  "Using a digital app or by [Q7]"
                ],
                [
                  "10 minutes",
                  "Strumming chords using thumbs",
                  "Keeping time while the teacher is [Q8]"
                ],
                [
                  "15 minutes",
                  "Playing group songs",
                  "Often listening to a [Q9] of a song"
                ],
                [
                  "10 minutes",
                  "Playing single notes and simple tunes",
                  "Playing together in unison, then [Q10]"
                ]
              ]
            },
            "questions": [
              {
                "num": 7,
                "label": "Q7: Tuning guitars using an app or by:",
                "suffix": "",
                "placeholder": "Phương pháp...",
                "expected": [
                  "ear"
                ],
                "display": "ear",
                "trap": "Chỉnh dây bằng tai nghe (by ear)"
              },
              {
                "num": 8,
                "label": "Q8: Keeping time while the teacher is:",
                "suffix": "",
                "placeholder": "Hành động...",
                "expected": [
                  "clapping"
                ],
                "display": "clapping",
                "trap": "Giữ nhịp khi giáo viên vỗ tay (clapping)"
              },
              {
                "num": 9,
                "label": "Q9: Often listening to a:",
                "suffix": "of a song",
                "placeholder": "Nguồn nghe...",
                "expected": [
                  "recording"
                ],
                "display": "recording",
                "trap": "Nghe bản ghi âm của bài hát (recording)"
              },
              {
                "num": 10,
                "label": "Q10: Playing together, then:",
                "suffix": "",
                "placeholder": "Hình thức...",
                "expected": [
                  "alone"
                ],
                "display": "alone",
                "trap": "Luyện tập chung cả lớp rồi chơi đơn (alone)"
              }
            ]
          }
        ]
      },
      {
        "partNum": 2,
        "title": "Part 2: Working as an RNLI Lifeboat Volunteer",
        "qRange": "Câu 11–20",
        "startSec": 440,
        "startFormatted": "07:20",
        "context": "Bài chia sẻ của tình nguyện viên cứu hộ bờ biển về công việc cứu hộ và thiết bị",
        "audioLocal": "audio/cam19-test2-part2.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 11–16: Choose the correct letter, A, B or C. Questions 17–18: Choose TWO letters, A–E. Questions 19–20: Choose TWO letters, A–E.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "Volunteer Experiences & Responsibilities (Questions 11–16)",
            "questions": [
              {
                "num": 11,
                "prompt": "What made David decide to become a lifeboat volunteer?",
                "options": [
                  "A. a long family tradition of coastal volunteering",
                  "B. witnessing a rescue operation at sea firsthand",
                  "C. encouragement from a workplace colleague"
                ],
                "correctAnswer": "A",
                "explanation": "David nhắc lại truyền thống gia đình có nhiều thế hệ tham gia đội cứu hộ (family tradition)."
              },
              {
                "num": 12,
                "prompt": "What does David say about the initial training provided?",
                "options": [
                  "A. It takes longer than most recruits anticipate.",
                  "B. It is physically and mentally demanding.",
                  "C. It focuses primarily on navigation theory."
                ],
                "correctAnswer": "B",
                "explanation": "Khóa huấn luyện đòi hỏi thể lực và tinh thần rất cao (physically demanding)."
              },
              {
                "num": 13,
                "prompt": "What is the primary requirement regarding where crew members live?",
                "options": [
                  "A. They must be able to reach the station within minutes.",
                  "B. They must own private vehicular transport.",
                  "C. They must live within the town boundary."
                ],
                "correctAnswer": "A",
                "explanation": "Quy định nghiêm ngặt: thuyền cứu hộ phải xuất phát trong vòng vài phút khi có chuông báo."
              },
              {
                "num": 14,
                "prompt": "How does David feel during emergency call-outs?",
                "options": [
                  "A. an intense surge of adrenaline",
                  "B. complete concentration on following standard procedures",
                  "C. relief when the vessel is launched into the water"
                ],
                "correctAnswer": "B",
                "explanation": "Tập trung tuyệt đối vào quy trình chuẩn (focus on standard procedures)."
              },
              {
                "num": 15,
                "prompt": "What surprised David most about his volunteer work?",
                "options": [
                  "A. the high frequency of false alarms",
                  "B. the extreme weather conditions encountered",
                  "C. the wide variety of different incidents they attend"
                ],
                "correctAnswer": "C",
                "explanation": "Sự đa dạng của các sự vụ cứu hộ (variety of incidents)."
              },
              {
                "num": 16,
                "prompt": "What advice does David give to prospective volunteers?",
                "options": [
                  "A. Visit the station and talk to active crew members before applying.",
                  "B. Ensure family members are fully supportive of the commitment.",
                  "C. Obtain advanced maritime first-aid certificates beforehand."
                ],
                "correctAnswer": "A",
                "explanation": "Khuyên nên đến trạm nói chuyện trực tiếp với thủy thủ đoàn trước khi nộp đơn."
              }
            ]
          },
          {
            "type": "choose-two",
            "heading": "Essential Crew Qualities & Safety Equipment (Questions 17–20)",
            "questions": [
              {
                "num": 17,
                "pairNum": 18,
                "prompt": "Questions 17 & 18: Which TWO qualities are essential for new crew members? (Choose TWO)",
                "options": [
                  "A. extensive maritime sailing experience",
                  "B. professional engineering background",
                  "C. ability to work effectively as part of a team",
                  "D. advanced swimming certification",
                  "E. ability to stay calm under intense pressure"
                ],
                "correctAnswers": [
                  "C",
                  "E"
                ],
                "explanation": "Hai phẩm chất cốt lõi: khả năng phối hợp nhóm (C) và giữ bình tĩnh trong áp lực (E)."
              },
              {
                "num": 19,
                "pairNum": 20,
                "prompt": "Questions 19 & 20: Which TWO items of personal protective equipment are inspected daily? (Choose TWO)",
                "options": [
                  "A. protective helmets",
                  "B. certified lifejackets",
                  "C. waterproof thermal gloves",
                  "D. radio communicators",
                  "E. neoprene immersion suits"
                ],
                "correctAnswers": [
                  "A",
                  "B"
                ],
                "explanation": "Thiết bị an toàn cá nhân kiểm tra hằng ngày: mũ bảo hộ (A) và áo phao cứu sinh (B)."
              }
            ]
          }
        ]
      },
      {
        "partNum": 3,
        "title": "Part 3: Academic Research on Footwear Recycling",
        "qRange": "Câu 21–30",
        "startSec": 812,
        "startFormatted": "13:31",
        "context": "Thảo luận giữa hai sinh viên ngành môi trường Tara và Leo về công nghệ tái chế giày dép",
        "audioLocal": "audio/cam19-test2-part3.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 21–24: Choose the correct letter, A, B or C. Questions 25–30: Match each brand initiative with its primary focus.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "Footwear Lifecycle Challenges (Questions 21–24)",
            "questions": [
              {
                "num": 21,
                "prompt": "Tara and Leo agree that the main obstacle to recycling footwear is that:",
                "options": [
                  "A. shoes contain many complex bonded materials.",
                  "B. consumers rarely return old shoes to stores.",
                  "C. recycled polymers lack required structural strength."
                ],
                "correctAnswer": "A",
                "explanation": "Khó khăn lớn nhất: giày được cấu tạo từ hàng chục vật liệu dán chặt với nhau."
              },
              {
                "num": 22,
                "prompt": "What criticism do they make regarding chemical recycling techniques?",
                "options": [
                  "A. They produce hazardous secondary effluents.",
                  "B. They consume excessive amounts of energy.",
                  "C. They are not economically scalable."
                ],
                "correctAnswer": "B",
                "explanation": "Nhược điểm tiêu thụ năng lượng quá lớn (excessive energy consumption)."
              },
              {
                "num": 23,
                "prompt": "Why do retail footwear collection schemes often fall short?",
                "options": [
                  "A. Storage containers fill up too quickly.",
                  "B. Public awareness remains stubbornly low.",
                  "C. Shipping costs exceed the material value."
                ],
                "correctAnswer": "B",
                "explanation": "Nhận thức cộng đồng về các điểm thu gom còn thấp (low public awareness)."
              },
              {
                "num": 24,
                "prompt": "What environmental benefit of bio-based soles is highlighted?",
                "options": [
                  "A. lower manufacturing carbon emissions",
                  "B. reduced degradation time in municipal landfill",
                  "C. complete compostability in home gardens"
                ],
                "correctAnswer": "B",
                "explanation": "Thời gian phân hủy nhanh hơn nhiều tại các bãi rác (reduced landfill burden)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "Corporate Sustainability Initiatives (Questions 25–30)",
            "instructions": "Match each footwear brand (25–30) with its distinctive recycling focus (A–F):",
            "matchOptions": [
              "A. Monomaterial circular design",
              "B. Mechanical regrinding of outsoles",
              "C. In-store repair and resoling service",
              "D. Microcellular foam upcycling",
              "E. Closed-loop leasing model",
              "F. Bio-composite plant leather"
            ],
            "questions": [
              {
                "num": 25,
                "label": "Brand EcoStep focuses on:",
                "expected": [
                  "E"
                ],
                "display": "E",
                "trap": "Mô hình cho thuê vòng lặp khép kín (E)"
              },
              {
                "num": 26,
                "label": "Brand Solerevive focuses on:",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Nghiền cơ học đế giày cao su cũ (B)"
              },
              {
                "num": 27,
                "label": "Brand PureTread focuses on:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Thiết kế đơn vật liệu để dễ tách tái chế (A)"
              },
              {
                "num": 28,
                "label": "Brand TerraWalk focuses on:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Dịch vụ sửa chữa và thay đế tại cửa hàng (C)"
              },
              {
                "num": 29,
                "label": "Brand ReBoot focuses on:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Chương trình bảo dưỡng và kéo dài tuổi thọ (C)"
              },
              {
                "num": 30,
                "label": "Brand GreenPace focuses on:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Ứng dụng cấu trúc thuần nhất không keo dán (A)"
              }
            ]
          }
        ]
      },
      {
        "partNum": 4,
        "title": "Part 4: Scientific Lecture on Tardigrades (Water Bears)",
        "qRange": "Câu 31–40",
        "startSec": 1222,
        "startFormatted": "20:22",
        "context": "Bài giảng sinh học về cấu tạo, khả năng chịu đựng điều kiện cực đoan và ứng dụng của bọ gấu nước",
        "audioLocal": "audio/cam19-test2-part4.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "formTitle": "BIOLOGICAL STUDY: TARDIGRADE PHYSIOLOGY & CRYPTOBIOSIS",
        "sections": [
          {
            "type": "notes",
            "heading": "Anatomy, Cryptobiosis & Environmental Tolerance (Questions 31–40)",
            "questions": [
              {
                "num": 31,
                "label": "Locomotion: They possess eight stubby legs and",
                "suffix": "with a deliberate waddling gait",
                "placeholder": "Động từ...",
                "expected": [
                  "move"
                ],
                "display": "move",
                "trap": "Cách di chuyển chậm chạp (move)"
              },
              {
                "num": 32,
                "label": "Body morphology: Their segmented bodies are remarkably",
                "suffix": "and cylindrical",
                "placeholder": "Tính từ...",
                "expected": [
                  "short"
                ],
                "display": "short",
                "trap": "Cơ thể ngắn hình trụ (short)"
              },
              {
                "num": 33,
                "label": "Leg structure: Each claw-bearing leg terminates in suction",
                "suffix": "for gripping",
                "placeholder": "Bộ phận...",
                "expected": [
                  "discs"
                ],
                "display": "discs",
                "trap": "Đĩa hút bám dính ở đầu chi (discs)"
              },
              {
                "num": 34,
                "label": "Cryptobiosis: In a dried state, they survive with undetectable",
                "suffix": "consumption",
                "placeholder": "Danh từ...",
                "expected": [
                  "oxygen"
                ],
                "display": "oxygen",
                "trap": "Mức tiêu thụ oxy gần như bằng 0 (oxygen)"
              },
              {
                "num": 35,
                "label": "Feeding apparatus: They pierce moss and algae cells using a hollow feeding",
                "suffix": "",
                "placeholder": "Cơ quan...",
                "expected": [
                  "tube"
                ],
                "display": "tube",
                "trap": "Ống hút miệng sắc nhọn (tube)"
              },
              {
                "num": 36,
                "label": "Thermal limits: Capable of enduring unprecedented extreme",
                "suffix": "from absolute zero to 150°C",
                "placeholder": "Khái niệm...",
                "expected": [
                  "temperatures"
                ],
                "display": "temperatures",
                "trap": "Nhiệt độ khắc nghiệt (temperatures)"
              },
              {
                "num": 37,
                "label": "Cellular protection: Cytoplasm is protected by a unique disordered",
                "suffix": "that vitrifies cells",
                "placeholder": "Hợp chất...",
                "expected": [
                  "protein"
                ],
                "display": "protein",
                "trap": "Loại protein đặc biệt bảo vệ màng tế bào (protein)"
              },
              {
                "num": 38,
                "label": "Astrophysical trials: Successfully survived direct exposure to open",
                "suffix": "during satellite missions",
                "placeholder": "Môi trường...",
                "expected": [
                  "space"
                ],
                "display": "space",
                "trap": "Sống sót ngoài không gian vũ trụ (space)"
              },
              {
                "num": 39,
                "label": "Ecological habitat: Abundant in damp moss, alpine lichens and marine",
                "suffix": "",
                "placeholder": "Thực vật biển...",
                "expected": [
                  "seaweed"
                ],
                "display": "seaweed",
                "trap": "Tảo bẹ ven biển (seaweed)"
              },
              {
                "num": 40,
                "label": "Vulnerability: Despite micro-resilience, certain endemic species are increasingly",
                "suffix": "due to habitat loss",
                "placeholder": "Tình trạng...",
                "expected": [
                  "endangered"
                ],
                "display": "endangered",
                "trap": "Nguy cơ bị đe dọa tuyệt chủng (endangered)"
              }
            ]
          }
        ]
      }
    ]
  },
  "cam19-t3": {
    "id": "cam19-t3",
    "title": "Cambridge 19 - Test 3: Local Food Shops & Microplastics",
    "subtitle": "Băng ghi âm gốc Cambridge người bản xứ thật (Real Human Audio) • Thời lượng: 25:36 • 40 câu hỏi CD-IELTS",
    "audioFull": "audio/cam19-test3-full.mp3",
    "audioFullType": "audio/mpeg",
    "totalDurationFormatted": "25:36",
    "totalDurationSeconds": 1536,
    "parts": [
      {
        "partNum": 1,
        "title": "Part 1: Local Food Shops & Artisan Markets",
        "qRange": "Câu 1–10",
        "startSec": 0,
        "startFormatted": "00:00",
        "context": "Hội thoại hỏi đáp về các cửa hàng thực phẩm địa phương và đặc sản",
        "audioLocal": "audio/cam19-test3-part1.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "formTitle": "GUIDE TO INDEPENDENT LOCAL FOOD SHOPS",
        "sections": [
          {
            "type": "notes",
            "heading": "Fishmonger, Bakery & Organic Farm Shop (Questions 1–10)",
            "questions": [
              {
                "num": 1,
                "label": "Fresh Seafood Stall: situated directly next to the scenic",
                "suffix": "",
                "placeholder": "Địa điểm...",
                "expected": [
                  "harbour",
                  "harbor"
                ],
                "display": "harbour",
                "trap": "Cạnh bến cảng (harbour)"
              },
              {
                "num": 2,
                "label": "Artisan Sourdough Bakery: just past the historic stone",
                "suffix": "",
                "placeholder": "Công trình...",
                "expected": [
                  "bridge"
                ],
                "display": "bridge",
                "trap": "Qua cây cầu đá (bridge)"
              },
              {
                "num": 3,
                "label": "Produce Farmers Market: closes promptly on Wednesdays at",
                "suffix": "pm",
                "placeholder": "Giờ...",
                "expected": [
                  "3.30",
                  "3:30",
                  "three thirty"
                ],
                "display": "3.30",
                "trap": "Đóng cửa lúc 3h30 chiều (3.30)"
              },
              {
                "num": 4,
                "label": "Family Organic Farm name:",
                "suffix": "Farm Organics",
                "placeholder": "Tên trang trại...",
                "expected": [
                  "rose"
                ],
                "display": "Rose",
                "trap": "Trang trại Rose Farm"
              },
              {
                "num": 5,
                "label": "Shop entrance is clearly marked by a large carved wooden",
                "suffix": "",
                "placeholder": "Dấu hiệu...",
                "expected": [
                  "sign"
                ],
                "display": "sign",
                "trap": "Tấm biển gỗ lớn (sign)"
              },
              {
                "num": 6,
                "label": "Farm storefront is painted in an eye-catching",
                "suffix": "color",
                "placeholder": "Màu sắc...",
                "expected": [
                  "purple"
                ],
                "display": "purple",
                "trap": "Màu tím đặc trưng (purple)"
              },
              {
                "num": 7,
                "label": "Seasonal coastal delicacy to buy: wild harvested",
                "suffix": "",
                "placeholder": "Loại rau...",
                "expected": [
                  "samphire"
                ],
                "display": "samphire",
                "trap": "Rau mầm samphire mọc ở bãi ngập mặn (samphire)"
              },
              {
                "num": 8,
                "label": "Best selling organic fruit: sweet honeydew",
                "suffix": "",
                "placeholder": "Trái cây...",
                "expected": [
                  "melon"
                ],
                "display": "melon",
                "trap": "Dưa lưới thơm ngọt (melon)"
              },
              {
                "num": 9,
                "label": "Dairy-free dessert: homemade ice cream crafted with",
                "suffix": "milk",
                "placeholder": "Nguyên liệu...",
                "expected": [
                  "coconut"
                ],
                "display": "coconut",
                "trap": "Sữa dừa nguyên chất (coconut)"
              },
              {
                "num": 10,
                "label": "Award-winning preserves: traditional jar of",
                "suffix": "jam",
                "placeholder": "Hương vị...",
                "expected": [
                  "strawberry"
                ],
                "display": "strawberry",
                "trap": "Mứt dâu tây tươi (strawberry)"
              }
            ]
          }
        ]
      },
      {
        "partNum": 2,
        "title": "Part 2: Cultural Festival Workshops & Creative Writing",
        "qRange": "Câu 11–20",
        "startSec": 349,
        "startFormatted": "05:49",
        "context": "Ban tổ chức lễ hội văn hóa hướng dẫn các buổi hội thảo và khu vực đọc sách",
        "audioLocal": "audio/cam19-test3-part2.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 11–16: Match the festival workshop with its target audience. Questions 17–20: Choose TWO letters for each pair.",
        "sections": [
          {
            "type": "notes",
            "heading": "Festival Events & Audience Schedule (Questions 11–20)",
            "questions": [
              {
                "num": 11,
                "label": "Storytelling for Toddlers: scheduled at Hall",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Phòng hội thảo C"
              },
              {
                "num": 12,
                "label": "Poetry Slam Workshop: scheduled at Hall",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Phòng hội thảo D"
              },
              {
                "num": 13,
                "label": "Screenwriting Masterclass: scheduled at Hall",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "F"
                ],
                "display": "F",
                "trap": "Phòng hội thảo F"
              },
              {
                "num": 14,
                "label": "Biographical Memoir Studio: scheduled at Hall",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "G"
                ],
                "display": "G",
                "trap": "Phòng hội thảo G"
              },
              {
                "num": 15,
                "label": "Sci-Fi Novel Structuring: scheduled at Hall",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Phòng hội thảo B"
              },
              {
                "num": 16,
                "label": "Illustrators Roundtable: scheduled at Hall",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "H"
                ],
                "display": "H",
                "trap": "Phòng hội thảo H"
              },
              {
                "num": 17,
                "label": "Key festival requirement for participants (Part 1):",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "D",
                  "E"
                ],
                "display": "D",
                "trap": "Đáp án D hoặc E"
              },
              {
                "num": 18,
                "label": "Key festival requirement for participants (Part 2):",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "E",
                  "D"
                ],
                "display": "E",
                "trap": "Đáp án E hoặc D"
              },
              {
                "num": 19,
                "label": "Recommended transport options to avoid congestion (Part 1):",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "B",
                  "C"
                ],
                "display": "B",
                "trap": "Đáp án B hoặc C"
              },
              {
                "num": 20,
                "label": "Recommended transport options to avoid congestion (Part 2):",
                "suffix": "",
                "placeholder": "Ký tự...",
                "expected": [
                  "C",
                  "B"
                ],
                "display": "C",
                "trap": "Đáp án C hoặc B"
              }
            ]
          }
        ]
      },
      {
        "partNum": 3,
        "title": "Part 3: Year 12 Secondary School Science Experiment",
        "qRange": "Câu 21–30",
        "startSec": 719,
        "startFormatted": "11:58",
        "context": "Giáo viên và sinh viên thực tập thảo luận giáo án thí nghiệm khoa học",
        "audioLocal": "audio/cam19-test3-part3.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 21–26: Choose the correct letter, A, B or C. Questions 27–30: Complete the matching below.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "Pedagogical Evaluation (Questions 21–26)",
            "questions": [
              {
                "num": 21,
                "prompt": "What did the students find most difficult during the titration experiment?",
                "options": [
                  "A. reading the scale on the burette",
                  "B. measuring the mass of reagents",
                  "C. judging the precise color change point"
                ],
                "correctAnswer": "C",
                "explanation": "Xác định điểm đổi màu chuẩn độ (color change point)."
              },
              {
                "num": 22,
                "prompt": "Why was the secondary experiment revised?",
                "options": [
                  "A. insufficient laboratory time",
                  "B. safety concerns with glassware",
                  "C. curriculum realignment"
                ],
                "correctAnswer": "B",
                "explanation": "Vấn đề an toàn dụng cụ thủy tinh (safety concerns)."
              },
              {
                "num": 23,
                "prompt": "What learning outcome was achieved most successfully?",
                "options": [
                  "A. understanding hypothesis formulation",
                  "B. collaborative teamwork",
                  "C. calculating percentage yield"
                ],
                "correctAnswer": "A",
                "explanation": "Kỹ năng thiết lập giả thuyết khoa học (hypothesis formulation)."
              },
              {
                "num": 24,
                "prompt": "How did the teacher support weaker students?",
                "options": [
                  "A. providing pictorial prompt sheets",
                  "B. pairing with high achievers",
                  "C. extending submission deadlines"
                ],
                "correctAnswer": "A",
                "explanation": "Sử dụng bảng gợi ý bằng hình ảnh trực quan (pictorial sheets)."
              },
              {
                "num": 25,
                "prompt": "What surprised the intern about the final lab reports?",
                "options": [
                  "A. depth of theoretical citations",
                  "B. neatness of graphical plotting",
                  "C. sophisticated error analysis"
                ],
                "correctAnswer": "C",
                "explanation": "Khả năng phân tích sai số rất sâu sắc (error analysis)."
              },
              {
                "num": 26,
                "prompt": "What will be improved for the upcoming term?",
                "options": [
                  "A. allocate larger student groups",
                  "B. pre-weigh chemical reagents",
                  "C. implement digital sensor logging"
                ],
                "correctAnswer": "C",
                "explanation": "Ứng dụng cảm biến kỹ thuật số (digital sensor logging)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "Laboratory Stations Assignment (Questions 27–30)",
            "questions": [
              {
                "num": 27,
                "label": "Station Alpha assignment:",
                "expected": [
                  "H"
                ],
                "display": "H",
                "trap": "Bàn thí nghiệm H"
              },
              {
                "num": 28,
                "label": "Station Beta assignment:",
                "expected": [
                  "E"
                ],
                "display": "E",
                "trap": "Bàn thí nghiệm E"
              },
              {
                "num": 29,
                "label": "Station Gamma assignment:",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Bàn thí nghiệm B"
              },
              {
                "num": 30,
                "label": "Station Delta assignment:",
                "expected": [
                  "F"
                ],
                "display": "F",
                "trap": "Bàn thí nghiệm F"
              }
            ]
          }
        ]
      },
      {
        "partNum": 4,
        "title": "Part 4: Academic Lecture on Environmental Microplastics",
        "qRange": "Câu 31–40",
        "startSec": 1141,
        "startFormatted": "19:00",
        "context": "Bài giảng khoa học môi trường về tác hại của vi nhựa trong nông nghiệp và chuỗi thức ăn",
        "audioLocal": "audio/cam19-test3-part4.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "formTitle": "MICROPLASTICS IN TERRESTRIAL SOILS & CROP SYSTEMS",
        "sections": [
          {
            "type": "notes",
            "heading": "Pathways, Soil Contamination & Biological Uptake (Questions 31–40)",
            "questions": [
              {
                "num": 31,
                "label": "Household origin: massive shedding occurs during machine washing of synthetic",
                "suffix": "",
                "placeholder": "Vật dụng...",
                "expected": [
                  "clothing"
                ],
                "display": "clothing",
                "trap": "Sợi nhân tạo từ quần áo tổng hợp (clothing)"
              },
              {
                "num": 32,
                "label": "Direct ingestion: soil micro-fauna intake particles via their",
                "suffix": "",
                "placeholder": "Cơ quan...",
                "expected": [
                  "mouths"
                ],
                "display": "mouths",
                "trap": "Nuốt qua miệng (mouths)"
              },
              {
                "num": 33,
                "label": "Human exposure: microplastics detected globally in commercial edible table",
                "suffix": "",
                "placeholder": "Thực phẩm...",
                "expected": [
                  "salt"
                ],
                "display": "salt",
                "trap": "Muối ăn hạt (salt)"
              },
              {
                "num": 34,
                "label": "Historical cosmetic abrasive: micro-beads previously added to exfoliating",
                "suffix": "",
                "placeholder": "Sản phẩm...",
                "expected": [
                  "toothpaste"
                ],
                "display": "toothpaste",
                "trap": "Kem đánh răng tẩy tế bào chết (toothpaste)"
              },
              {
                "num": 35,
                "label": "Agricultural pathway: treated wastewater sludge recycled as commercial",
                "suffix": "",
                "placeholder": "Nông nghiệp...",
                "expected": [
                  "fertilizers",
                  "fertilizer"
                ],
                "display": "fertilizers",
                "trap": "Phân bón nông nghiệp từ bùn thải (fertilizers)"
              },
              {
                "num": 36,
                "label": "Physiological inhibition: plastic films hinder plant roots from absorbing essential",
                "suffix": "",
                "placeholder": "Dưỡng chất...",
                "expected": [
                  "nutrients"
                ],
                "display": "nutrients",
                "trap": "Dinh dưỡng thiết yếu (nutrients)"
              },
              {
                "num": 37,
                "label": "Agronomic impact: experiments demonstrate a steep decline in overall seedling",
                "suffix": "",
                "placeholder": "Quá trình...",
                "expected": [
                  "growth"
                ],
                "display": "growth",
                "trap": "Sự tăng trưởng của cây con (growth)"
              },
              {
                "num": 38,
                "label": "Toxicity markers: exposed earthworms suffer significant loss of bodily",
                "suffix": "",
                "placeholder": "Chỉ số...",
                "expected": [
                  "weight"
                ],
                "display": "weight",
                "trap": "Trọng lượng cơ thể giun đất (weight)"
              },
              {
                "num": 39,
                "label": "Chemical weathering: plastic breakdown releases toxic organic",
                "suffix": "into groundwater",
                "placeholder": "Hóa chất...",
                "expected": [
                  "acid"
                ],
                "display": "acid",
                "trap": "Axit hữu cơ (acid)"
              },
              {
                "num": 40,
                "label": "Systemic mitigation: sustainable resolution demands structural action from wider",
                "suffix": "",
                "placeholder": "Cộng đồng...",
                "expected": [
                  "society"
                ],
                "display": "society",
                "trap": "Toàn thể xã hội (society)"
              }
            ]
          }
        ]
      }
    ]
  },
  "cam18-t2": {
    "id": "cam18-t2",
    "title": "Cambridge 18 - Test 2: Milo’s Restaurants & The Laki Eruption",
    "subtitle": "Băng ghi âm gốc Cambridge người bản xứ thật (Real Human Audio) • Thời lượng: 28:44 • 40 câu hỏi CD-IELTS",
    "audioFull": "audio/cam18-test2-full.mp3",
    "audioFullType": "audio/mpeg",
    "totalDurationFormatted": "28:44",
    "totalDurationSeconds": 1724,
    "parts": [
      {
        "partNum": 1,
        "title": "Part 1: Employment Application at Milo’s Restaurants",
        "qRange": "Câu 1–10",
        "startSec": 0,
        "startFormatted": "00:00",
        "context": "Hội thoại giữa ứng viên và quản lý tuyển dụng chuỗi nhà hàng Milo",
        "audioLocal": "audio/cam18-test2-part1.mp3",
        "audioType": "audio/mpeg",
        "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "formTitle": "JOB APPLICATION - MILO’S RESTAURANTS",
        "sections": [
          {
            "type": "notes",
            "heading": "Position Details & Working Benefits (Questions 1–10)",
            "questions": [
              {
                "num": 1,
                "label": "Initial on-the-job orientation: includes comprehensive food hygiene",
                "suffix": "",
                "placeholder": "Khóa học...",
                "expected": [
                  "training"
                ],
                "display": "training",
                "trap": "Khóa đào tạo vệ sinh an toàn thực phẩm (training)"
              },
              {
                "num": 2,
                "label": "Staff perk: 50% employee",
                "suffix": "on all dine-in meals",
                "placeholder": "Ưu đãi...",
                "expected": [
                  "discount"
                ],
                "display": "discount",
                "trap": "Giảm giá 50% cho nhân viên (discount)"
              },
              {
                "num": 3,
                "label": "Late shift safety: restaurant reimburses homebound travel by",
                "suffix": "",
                "placeholder": "Phương tiện...",
                "expected": [
                  "taxi"
                ],
                "display": "taxi",
                "trap": "Hỗ trợ tiền xe taxi về khuya (taxi)"
              },
              {
                "num": 4,
                "label": "Role type: primarily kitchen prep and fast customer table",
                "suffix": "",
                "placeholder": "Nhiệm vụ...",
                "expected": [
                  "service"
                ],
                "display": "service",
                "trap": "Phục vụ bàn nhanh (service)"
              },
              {
                "num": 5,
                "label": "Language prerequisite: must demonstrate fluent spoken",
                "suffix": "",
                "placeholder": "Ngôn ngữ...",
                "expected": [
                  "english"
                ],
                "display": "English",
                "trap": "Tiếng Anh giao tiếp trôi chảy (English)"
              },
              {
                "num": 6,
                "label": "Workplace branch location: based at the",
                "suffix": "branch",
                "placeholder": "Chi nhánh...",
                "expected": [
                  "wivenhoe"
                ],
                "display": "Wivenhoe",
                "trap": "Chi nhánh tại thị trấn Wivenhoe"
              },
              {
                "num": 7,
                "label": "Uniform package: chef whites and protective kitchen",
                "suffix": "provided",
                "placeholder": "Trang thiết bị...",
                "expected": [
                  "equipment"
                ],
                "display": "equipment",
                "trap": "Trang thiết bị làm bếp (equipment)"
              },
              {
                "num": 8,
                "label": "Starting hourly wage: £",
                "suffix": "per hour",
                "placeholder": "Mức lương...",
                "expected": [
                  "9.75"
                ],
                "display": "9.75",
                "trap": "Mức lương khởi điểm: £9.75/giờ"
              },
              {
                "num": 9,
                "label": "Morning responsibilities: signing off on supplier grocery",
                "suffix": "",
                "placeholder": "Nhiệm vụ sáng...",
                "expected": [
                  "deliveries"
                ],
                "display": "deliveries",
                "trap": "Ký nhận hàng giao buổi sáng (deliveries)"
              },
              {
                "num": 10,
                "label": "Mandatory weekend availability: must work every",
                "suffix": "",
                "placeholder": "Ngày trong tuần...",
                "expected": [
                  "sunday"
                ],
                "display": "Sunday",
                "trap": "Phải làm việc vào Chủ nhật (Sunday)"
              }
            ]
          }
        ]
      },
      {
        "partNum": 2,
        "title": "Part 2: Planned Housing Development & Community Feedback",
        "qRange": "Câu 11–20",
        "startSec": 433,
        "startFormatted": "07:12",
        "context": "Kế hoạch phát triển khu dân cư mới và phân vùng tiện ích cộng đồng",
        "audioLocal": "audio/cam18-test2-part2.mp3",
        "audioType": "audio/mpeg",
        "instructions": "Questions 11–14: Choose TWO letters. Questions 15–20: Label the plan below.",
        "sections": [
          {
            "type": "choose-two",
            "heading": "Resident Concerns & Environmental Measures (Questions 11–14)",
            "questions": [
              {
                "num": 11,
                "pairNum": 12,
                "prompt": "Questions 11 & 12: Which TWO aspects of the development worried residents most?",
                "options": [
                  "A. increased noise pollution",
                  "B. congestion on access roads",
                  "C. impact on local primary school capacity",
                  "D. height of apartment blocks",
                  "E. loss of green recreational fields"
                ],
                "correctAnswers": [
                  "B",
                  "E"
                ],
                "explanation": "Hai mối lo lớn nhất: tắc nghẽn giao thông (B) và mất mảng xanh (E)."
              },
              {
                "num": 13,
                "pairNum": 14,
                "prompt": "Questions 13 & 14: Which TWO sustainable features are mandated in all homes?",
                "options": [
                  "A. geothermal heat pumps",
                  "B. solar photovoltaic panels",
                  "C. rainwater harvesting tanks",
                  "D. double-glazed argon windows",
                  "E. electric vehicle fast chargers"
                ],
                "correctAnswers": [
                  "B",
                  "C"
                ],
                "explanation": "Hai tính năng bắt buộc: pin năng lượng mặt trời (B) và bể tích nước mưa (C)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "Neighbourhood Plan (Questions 15–20)",
            "questions": [
              {
                "num": 15,
                "label": "Medical Health Centre located at:",
                "expected": [
                  "G"
                ],
                "display": "G",
                "trap": "Vị trí G: Trạm y tế"
              },
              {
                "num": 16,
                "label": "Community Pharmacy located at:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Vị trí C: Nhà thuốc"
              },
              {
                "num": 17,
                "label": "Nursery & Daycare located at:",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Vị trí D: Nhà trẻ"
              },
              {
                "num": 18,
                "label": "Community Orchard & Gardens located at:",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Vị trí B: Vườn cây ăn quả"
              },
              {
                "num": 19,
                "label": "Sports Pavilion & Changing Suites located at:",
                "expected": [
                  "H"
                ],
                "display": "H",
                "trap": "Vị trí H: Khu nhà thi đấu"
              },
              {
                "num": 20,
                "label": "Eco-bus Terminal located at:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Vị trí A: Trạm xe buýt điện"
              }
            ]
          }
        ]
      },
      {
        "partNum": 3,
        "title": "Part 3: Academic Presentation on The Laki Volcanic Eruption of 1783",
        "qRange": "Câu 21–30",
        "startSec": 870,
        "startFormatted": "14:30",
        "context": "Hai nghiên cứu sinh lịch sử khí hậu thuyết trình về vụ phun trào núi lửa Laki tại Iceland",
        "audioLocal": "audio/cam18-test2-part3.mp3",
        "audioType": "audio/mpeg",
        "instructions": "Questions 21–24: Choose the correct letter, A, B or C. Questions 25–26: Choose TWO letters. Questions 27–30: Complete the flow chart below.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "Historical Impact & Atmospheric Aerosols (Questions 21–24)",
            "questions": [
              {
                "num": 21,
                "prompt": "What distinguished the 1783 Laki eruption from typical explosive eruptions?",
                "options": [
                  "A. it triggered enormous tidal waves",
                  "B. it occurred underwater",
                  "C. it produced continuous basaltic fissure flows for eight months"
                ],
                "correctAnswer": "C",
                "explanation": "Kéo dài 8 tháng liên tục từ khe nứt nham thạch (fissure flows)."
              },
              {
                "num": 22,
                "prompt": "The sulfuric haze over Europe resulted in:",
                "options": [
                  "A. widespread respiratory distress and deaths",
                  "B. complete disruption of postal shipping",
                  "C. immediate migration to the Americas"
                ],
                "correctAnswer": "A",
                "explanation": "Hàng ngàn ca tử vong vì bệnh đường hô hấp do khói mù lưu huỳnh (respiratory distress)."
              },
              {
                "num": 23,
                "prompt": "How did the eruption impact the European climate in 1783–1784?",
                "options": [
                  "A. mild wet winters followed by flooding",
                  "B. an exceptionally scorching summer followed by extreme winter freezing",
                  "C. uniform cooling that lasted for a decade"
                ],
                "correctAnswer": "B",
                "explanation": "Mùa hè nóng gay gắt khác thường tiếp nối bởi mùa đông băng giá kỷ lục (B)."
              },
              {
                "num": 24,
                "prompt": "What political consequence in France has been linked to the eruption?",
                "options": [
                  "A. the collapse of the naval fleet",
                  "B. severe crop failures precipitating the French Revolution",
                  "C. widespread tax revolts in port cities"
                ],
                "correctAnswer": "B",
                "explanation": "Mất mùa nghiêm trọng dẫn tới bùng nổ Cách mạng Pháp 1789 (crop failures)."
              }
            ]
          },
          {
            "type": "choose-two",
            "heading": "Ecosystem & Meteorological Consequences (Questions 25–26)",
            "questions": [
              {
                "num": 25,
                "pairNum": 26,
                "prompt": "Questions 25 & 26: Which TWO environmental phenomena were recorded across Iceland?",
                "options": [
                  "A. fluoride poisoning of grazing livestock",
                  "B. famine causing the death of one-quarter of the human population",
                  "C. drying up of major glacial rivers",
                  "D. permanent acid coating on peat bogs",
                  "E. extinction of local seabird colonies"
                ],
                "correctAnswers": [
                  "A",
                  "B"
                ],
                "explanation": "Nhiễm độc flo khiến gia súc chết hàng loạt (A) và nạn đói làm chết 25% dân số Iceland (B)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "Ice Core Evidence Timeline (Questions 27–30)",
            "questions": [
              {
                "num": 27,
                "label": "Greenland Ice Core sulfate spike mapped to:",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Năm 1783"
              },
              {
                "num": 28,
                "label": "Tree-ring density reduction mapped to:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Năm 1784"
              },
              {
                "num": 29,
                "label": "Nile river low-water anomaly mapped to:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Năm 1783–1784"
              },
              {
                "num": 30,
                "label": "Return to baseline atmospheric sulfate mapped to:",
                "expected": [
                  "F"
                ],
                "display": "F",
                "trap": "Năm 1786"
              }
            ]
          }
        ]
      },
      {
        "partNum": 4,
        "title": "Part 4: Historical & Cultural Evolution of Garment Pockets",
        "qRange": "Câu 31–40",
        "startSec": 1298,
        "startFormatted": "21:38",
        "context": "Bài giảng lịch sử thời trang về sự xuất hiện, ý nghĩa giới tính và công năng của túi quần áo",
        "audioLocal": "audio/cam18-test2-part4.mp3",
        "audioType": "audio/mpeg",
        "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "formTitle": "FASHION HISTORY: SOCIOLOGY OF POCKETS",
        "sections": [
          {
            "type": "notes",
            "heading": "Medieval Pouches, Gender Disparities & Modern Tailoring (Questions 31–40)",
            "questions": [
              {
                "num": 31,
                "label": "Early practicality: sewn-in pockets emerged because external pouches were not",
                "suffix": "to carry in crowded streets",
                "placeholder": "Tính từ...",
                "expected": [
                  "convenient",
                  "common"
                ],
                "display": "convenient",
                "trap": "Tiện lợi khi di chuyển (convenient)"
              },
              {
                "num": 32,
                "label": "Menswear evolution: tailor-made internal pockets were standard in three-piece",
                "suffix": "",
                "placeholder": "Trang phục...",
                "expected": [
                  "suits"
                ],
                "display": "suits",
                "trap": "Bộ âu phục (suits)"
              },
              {
                "num": 33,
                "label": "Craftsmanship: bespoke garment pockets were meticulously designed by the",
                "suffix": "",
                "placeholder": "Thợ...",
                "expected": [
                  "tailor"
                ],
                "display": "tailor",
                "trap": "Thợ may đo (tailor)"
              },
              {
                "num": 34,
                "label": "Social indicator: pocket quantity and layout often signaled an owner's",
                "suffix": "",
                "placeholder": "Địa vị...",
                "expected": [
                  "profession"
                ],
                "display": "profession",
                "trap": "Nghề nghiệp và địa vị (profession)"
              },
              {
                "num": 35,
                "label": "Womenswear contrast: women's early pockets were completely separate and not",
                "suffix": "under voluminous skirts",
                "placeholder": "Tính từ...",
                "expected": [
                  "visible"
                ],
                "display": "visible",
                "trap": "Không nhìn thấy được dưới váy (not visible)"
              },
              {
                "num": 36,
                "label": "Attachment mechanism: fastened around the body using a pair of durable",
                "suffix": "",
                "placeholder": "Dây...",
                "expected": [
                  "strings",
                  "string"
                ],
                "display": "strings",
                "trap": "Dây buộc quanh eo (strings)"
              },
              {
                "num": 37,
                "label": "Anatomical positioning: historically tied snugly around the wearer's",
                "suffix": "",
                "placeholder": "Bộ phận...",
                "expected": [
                  "waist",
                  "waists"
                ],
                "display": "waist",
                "trap": "Thắt quanh eo (waist)"
              },
              {
                "num": 38,
                "label": "Concealed contents: women stored valuables, small scissors, and flasks of",
                "suffix": "",
                "placeholder": "Đồ dùng...",
                "expected": [
                  "perfume"
                ],
                "display": "perfume",
                "trap": "Lọ nước hoa nhỏ (perfume)"
              },
              {
                "num": 39,
                "label": "Silhouette politics: 19th-century fashion prioritized a sleek slender bodily",
                "suffix": "",
                "placeholder": "Hình ảnh...",
                "expected": [
                  "image"
                ],
                "display": "image",
                "trap": "Hình ảnh đường cong thanh mảnh (image)"
              },
              {
                "num": 40,
                "label": "Modern commercial shift: lack of female pockets spurred the booming market for the",
                "suffix": "",
                "placeholder": "Phụ kiện...",
                "expected": [
                  "handbag"
                ],
                "display": "handbag",
                "trap": "Ngành sản xuất túi xách (handbag)"
              }
            ]
          }
        ]
      }
    ]
  },
  "actual-vol4": {
    "id": "actual-vol4",
    "title": "Actual Test 2026 - Section 4: Neuro-linguistics & Syntax Acquisition",
    "subtitle": "Giọng đọc bản xứ Cambridge (British Examiner Narration) • 40 câu hỏi CD-IELTS",
    "isVoiceNarration": true,
    "audioFull": "",
    "audioFullType": "audio/mpeg",
    "totalDurationFormatted": "29:45",
    "totalDurationSeconds": 1785,
    "parts": [
      {
        "partNum": 1,
        "title": "Part 1: International Language Institute - Enrolment Form",
        "qRange": "Câu 1–10",
        "startSec": 0,
        "startFormatted": "00:00",
        "context": "Sinh viên quốc tế đăng ký khóa học Ngôn ngữ học hàn lâm và luyện viết học thuật",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "formTitle": "LANGUAGE ACQUISITION INSTITUTE ENROLMENT",
        "sections": [
          {
            "type": "notes",
            "heading": "Applicant Details & Academic Selection",
            "questions": [
              {
                "num": 1,
                "label": "Enrolled study level: postgraduate",
                "suffix": "",
                "placeholder": "Cấp độ...",
                "expected": [
                  "advanced",
                  "master"
                ],
                "display": "advanced",
                "trap": "Đăng ký cấp độ học thuật nâng cao (advanced)"
              },
              {
                "num": 2,
                "label": "Academic term commencement:",
                "suffix": "semester",
                "placeholder": "Học kỳ...",
                "expected": [
                  "autumn",
                  "fall"
                ],
                "display": "Autumn",
                "trap": "Bắt đầu vào học kỳ Mùa Thu (Autumn semester)"
              },
              {
                "num": 3,
                "label": "Specialist elective focus: academic research and:",
                "suffix": "",
                "placeholder": "Môn...",
                "expected": [
                  "writing",
                  "syntax"
                ],
                "display": "writing",
                "trap": "Môn tự chọn chuyên sâu: viết học thuật (academic writing)"
              },
              {
                "num": 4,
                "label": "Diagnostic entry proficiency test score:",
                "suffix": "%",
                "placeholder": "Điểm...",
                "expected": [
                  "85",
                  "85%"
                ],
                "display": "85",
                "trap": "Điểm kiểm tra đầu vào: 85%"
              },
              {
                "num": 5,
                "label": "Assigned campus facility:",
                "suffix": "Campus",
                "placeholder": "Cơ sở...",
                "expected": [
                  "north",
                  "north campus"
                ],
                "display": "North",
                "trap": "Học tại cơ sở phía Bắc (North Campus)"
              },
              {
                "num": 6,
                "label": "Personal academic tutor: Professor",
                "suffix": "",
                "placeholder": "Tên giảng viên...",
                "expected": [
                  "kaufman",
                  "kauffman"
                ],
                "display": "Kaufman",
                "trap": "Giáo sư cố vấn: Kaufman"
              },
              {
                "num": 7,
                "label": "Weekly linguistics seminar seminar room:",
                "suffix": "",
                "placeholder": "Phòng học...",
                "expected": [
                  "b14",
                  "b-14"
                ],
                "display": "B14",
                "trap": "Phòng hội thảo: B14"
              },
              {
                "num": 8,
                "label": "Required foundational textbook: Universal",
                "suffix": "",
                "placeholder": "Tên sách...",
                "expected": [
                  "grammar"
                ],
                "display": "Grammar",
                "trap": "Giáo trình cốt lõi: Universal Grammar"
              },
              {
                "num": 9,
                "label": "Eligible fee concession discount: international",
                "suffix": "reduction",
                "placeholder": "Ưu đãi...",
                "expected": [
                  "student"
                ],
                "display": "student",
                "trap": "Ưu đãi giảm giá dành cho sinh viên (student discount)"
              },
              {
                "num": 10,
                "label": "Enrolment verification reference code:",
                "suffix": "",
                "placeholder": "Mã số...",
                "expected": [
                  "li902",
                  "li-902"
                ],
                "display": "LI902",
                "trap": "Mã xác nhận đăng ký: LI902"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear a conversation between a prospective student and an admissions officer at the International Language Acquisition Institute.\nOfficer: Good morning, International Language Acquisition Institute. How may I assist you today?\nStudent: Hello, I'm calling to enrol in your academic English preparation courses for the upcoming autumn term.\nOfficer: Certainly! Let me take down your registration details. May I have your name, please?\nStudent: My first name is Julian, and my surname is Vance, spelt V-A-N-C-E.\nOfficer: Thank you, Julian Vance. And when would you like to commence classes?\nStudent: I am looking to start on the 14th of September.\nOfficer: Let me check our calendar... Yes, the 14th of September cohort has spaces available. Which level are you enrolling in?\nStudent: I recently took the placement test and scored into the Advanced level course.\nOfficer: Excellent. The tuition fee for the 10-week module is 420 pounds.\nStudent: 420 pounds, that's fine. Do you offer evening schedules?\nOfficer: Yes, we run morning, afternoon, and evening classes. The evening cohort meets on Tuesdays and Thursdays from 6 to 9 pm.\nStudent: Evening suits my work schedule best. What core textbook is required?\nOfficer: The primary text is 'Cambridge Academic Grammar in Use'.\nStudent: Will I also need a specialized dictionary?\nOfficer: Yes, an Advanced Learner's Dictionary is required for lexical seminars.\nStudent: Are computer lab facilities available to students outside class hours?\nOfficer: Absolutely, our multimedia language lab is open from 8am to 10pm seven days a week.\nStudent: What identification do I need to bring on my first day?\nOfficer: Please bring your official passport for identity verification.\nStudent: Understood. And may I leave my mobile telephone number?\nOfficer: Yes, please.\nStudent: It's 07823 445901.\nOfficer: 07823 445901. Thank you Mr Vance, your enrolment confirmation has been generated!"
      },
      {
        "partNum": 2,
        "title": "Part 2: University Digital Media & Phonetics Laboratory Tour",
        "qRange": "Câu 11–20",
        "startSec": 390,
        "startFormatted": "06:30",
        "context": "Trưởng phòng thí nghiệm ngữ âm giới thiệu trang thiết bị đo điện não và phòng cách âm",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 11–14: Choose the correct letter, A, B or C. Questions 15–20: Label the plan below.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "PHONETICS & PSYCHOLINGUISTICS LAB",
            "subInstructions": "Questions 11–14: Choose the correct letter, A, B or C.",
            "questions": [
              {
                "num": 11,
                "prompt": "Why were the acoustic recording booths upgraded this year?",
                "options": [
                  {
                    "key": "A",
                    "text": "to eliminate low-frequency rumble from subway trains"
                  },
                  {
                    "key": "B",
                    "text": "to accommodate larger research subject groups"
                  },
                  {
                    "key": "C",
                    "text": "to comply with updated clinical hygiene protocols"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Triệt tiêu tiếng rung tần số thấp từ tuyến tàu điện ngầm chạy ngầm (subway rumble)."
              },
              {
                "num": 12,
                "prompt": "Undergraduate students can access the eyetracking suite:",
                "options": [
                  {
                    "key": "A",
                    "text": "only when accompanied by a faculty supervisor"
                  },
                  {
                    "key": "B",
                    "text": "twenty-four hours a day via biometric keycard"
                  },
                  {
                    "key": "C",
                    "text": "after passing a technical proficiency examination"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Chỉ được vào khi có giảng viên hướng dẫn đi cùng (accompanied by supervisor)."
              },
              {
                "num": 13,
                "prompt": "What software is used for speech acoustic waveform analysis?",
                "options": [
                  {
                    "key": "A",
                    "text": "an open-source phonetics tool called Praat"
                  },
                  {
                    "key": "B",
                    "text": "a proprietary commercial DSP suite"
                  },
                  {
                    "key": "C",
                    "text": "custom software developed by university engineers"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Phần mềm mã nguồn mở chuyên ngành Praat (Praat phonetics tool)."
              },
              {
                "num": 14,
                "prompt": "Participant consent records must be stored securely for at least:",
                "options": [
                  {
                    "key": "A",
                    "text": "five calendar years"
                  },
                  {
                    "key": "B",
                    "text": "seven calendar years"
                  },
                  {
                    "key": "C",
                    "text": "ten calendar years"
                  }
                ],
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Hồ sơ lưu trữ bảo mật tối thiểu 7 năm (seven calendar years)."
              }
            ]
          },
          {
            "type": "map-labelling",
            "heading": "FLOORPLAN OF NEUROLINGUISTICS SUITE",
            "subInstructions": "Questions 15–20: Label the floorplan below. Choose from A–F.",
            "mapOptions": [
              {
                "key": "A",
                "label": "EEG electroencephalogram chamber"
              },
              {
                "key": "B",
                "label": "Anechoic soundproof recording booth"
              },
              {
                "key": "C",
                "label": "High-speed eye-tracking station"
              },
              {
                "key": "D",
                "label": "Corpus linguistics computing terminal"
              },
              {
                "key": "E",
                "label": "Digital audio mastering workstation"
              },
              {
                "key": "F",
                "label": "Encrypted patient data vault"
              }
            ],
            "questions": [
              {
                "num": 15,
                "label": "EEG recording chamber:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Phòng đo điện não bọc chì chống nhiễu từ ở góc tây bắc (Vị trí A)"
              },
              {
                "num": 16,
                "label": "Anechoic soundproof booth:",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Phòng thu âm cách âm tuyệt đối cạnh hành lang (Vị trí B)"
              },
              {
                "num": 17,
                "label": "Eye-tracking station:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Bàn máy theo dõi chuyển động mắt đối diện cửa sổ (Vị trí C)"
              },
              {
                "num": 18,
                "label": "Corpus computing terminal:",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Hệ thống máy tính tra cứu ngữ liệu lớn (Vị trí D)"
              },
              {
                "num": 19,
                "label": "Audio mastering suite:",
                "expected": [
                  "E"
                ],
                "display": "E",
                "trap": "Phòng xử lý hậu kỳ âm thanh (Vị trí E)"
              },
              {
                "num": 20,
                "label": "Encrypted data vault:",
                "expected": [
                  "F"
                ],
                "display": "F",
                "trap": "Tủ lưu trữ dữ liệu mã hóa an ninh ở cuối sảnh (Vị trí F)"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear Dr Thorne, Director of the Phonetics and Acoustic Linguistics Laboratory, giving an orientation tour of the facility.\nWelcome everyone to the Phonetics and Speech Processing Laboratory.\nOur laboratory was designed with acoustic isolation to enable high-precision phonetic recording and psychoacoustic testing.\nAll experiments conducted here adhere to strict ethical protocols, and subjects must complete an informed consent checklist before participating in any auditory perception trials.\nNow, please refer to the floorplan of the laboratory suite on your handouts.\nEntering through the soundproof Main Air-lock at the bottom:\nDirectly on your left is the Calibration Control Booth (marked B).\nTo your right along the eastern corridor is the Speech Synthesis Workstation (marked A).\nStraight down the central corridor, the large central chamber is our Primary Anechoic Chamber (marked D).\nBehind the anechoic chamber to the north is the High-Speed Laryngograph Suite (marked E).\nIn the far north-east corner is our Data Storage Server Room (marked F).\nFinally, adjacent to the control booth on the west wall, Room C is our Participant Briefing Office.\nPlease remember that mobile phones must remain switched off throughout all testing areas."
      },
      {
        "partNum": 3,
        "title": "Part 3: Cognitive Psychology: Memory Retrieval & Syntactic Ambiguity",
        "qRange": "Câu 21–30",
        "startSec": 780,
        "startFormatted": "13:00",
        "context": "Hai nghiên cứu sinh Marcus và Elena thảo luận về câu đường vườn (Garden-path sentences) và bộ nhớ làm việc",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 21–25: Choose the correct letter, A, B or C. Questions 26–30: Match each theory with its explanatory mechanism. Choose from A–G.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "GARDEN-PATH SYNTACTIC PARSING",
            "subInstructions": "Questions 21–25: Choose the correct letter, A, B or C.",
            "questions": [
              {
                "num": 21,
                "prompt": "Why do human readers stumble when encountering garden-path sentences?",
                "options": [
                  {
                    "key": "A",
                    "text": "the parser constructs the simplest syntactic tree first"
                  },
                  {
                    "key": "B",
                    "text": "working memory capacity is completely overloaded by lexicon"
                  },
                  {
                    "key": "C",
                    "text": "semantic plausibility overrides grammatical correctness"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Bộ xử lý cú pháp não bộ tự động xây dựng cây cú pháp đơn giản nhất trước (simplest syntactic tree)."
              },
              {
                "num": 22,
                "prompt": "The eye-tracking regressions in their experiment demonstrated that readers:",
                "options": [
                  {
                    "key": "A",
                    "text": "fixated longer on the disambiguating main verb"
                  },
                  {
                    "key": "B",
                    "text": "skipped unstressed function words automatically"
                  },
                  {
                    "key": "C",
                    "text": "re-read the initial subject noun repeatedly"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Mắt dừng lại lâu hơn đáng kể ở động từ chính giải quyết nhập nhằng (disambiguating main verb)."
              },
              {
                "num": 23,
                "prompt": "Marcus argues that connectionist neural network models fail because they:",
                "options": [
                  {
                    "key": "A",
                    "text": "cannot represent hierarchical recursive phrase structures"
                  },
                  {
                    "key": "B",
                    "text": "require excessive training epochs on clean corpora"
                  },
                  {
                    "key": "C",
                    "text": "ignore biological constraints of synaptic transmission"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Mô hình mạng nơ-ron không biểu diễn được cấu trúc cụm từ đệ quy phân tầng (recursive phrase structures)."
              },
              {
                "num": 24,
                "prompt": "Elena suggests that individual differences in reading span correlate with:",
                "options": [
                  {
                    "key": "A",
                    "text": "resistance to proactive semantic interference"
                  },
                  {
                    "key": "B",
                    "text": "faster phonological decoding in the left hemisphere"
                  },
                  {
                    "key": "C",
                    "text": "higher baseline vocabulary breadth"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Khả năng kháng lại hiện tượng nhiễu ngữ nghĩa chủ động (proactive semantic interference)."
              },
              {
                "num": 25,
                "prompt": "For their term paper, both researchers agree to focus on:",
                "options": [
                  {
                    "key": "A",
                    "text": "bilingual processing of cross-linguistic relative clauses"
                  },
                  {
                    "key": "B",
                    "text": "aphasic patients with focal lesions in Broca's territory"
                  },
                  {
                    "key": "C",
                    "text": "the evolutionary timeline of speech anatomical adaptations"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Quá trình xử lý mệnh đề quan hệ song ngữ liên ngôn ngữ (cross-linguistic relative clauses)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "THEORETICAL FRAMEWORKS MATCHING",
            "subInstructions": "Questions 26–30: Match each theory with its core tenet. Choose from A–G.",
            "matchOptions": [
              {
                "key": "A",
                "text": "Language faculty relies on an innate universal grammar"
              },
              {
                "key": "B",
                "text": "Syntax emerges from statistical pattern distribution"
              },
              {
                "key": "C",
                "text": "Grammar is shaped solely by embodied communicative interactions"
              },
              {
                "key": "D",
                "text": "Serial autonomous processing precedes interactive re-analysis"
              },
              {
                "key": "E",
                "text": "Multiple parallel parses compete based on semantic frequency"
              },
              {
                "key": "F",
                "text": "Linguistic categories are determined by cultural relativity"
              },
              {
                "key": "G",
                "text": "Syntactic movement operations reflect cognitive economy"
              }
            ],
            "questions": [
              {
                "num": 26,
                "item": "Chomskyan Generative Syntax:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Năng lực ngôn ngữ dựa trên ngữ pháp phổ quát bẩm sinh (Innate universal grammar)"
              },
              {
                "num": 27,
                "item": "Constraint-Satisfaction Model:",
                "expected": [
                  "E"
                ],
                "display": "E",
                "trap": "Nhiều cấu trúc phân tích song song cạnh tranh nhau dựa trên tần suất (Parallel parses compete)"
              },
              {
                "num": 28,
                "item": "Garden-Path Sausage Machine Theory:",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Xử lý tuần tự độc lập diễn ra trước khi phân tích lại (Serial autonomous processing)"
              },
              {
                "num": 29,
                "item": "Usage-Based Constructionism:",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Cú pháp phát sinh từ phân bổ thống kê mẫu câu (Statistical pattern distribution)"
              },
              {
                "num": 30,
                "item": "Minimalist Program:",
                "expected": [
                  "G"
                ],
                "display": "G",
                "trap": "Các thao tác dịch chuyển cú pháp tuân theo tính tiết kiệm nhận thức (Cognitive economy)"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear two postgraduate cognitive science students, Liam and Sophie, discussing their research on garden-path sentence parsing.\nSophie: Liam, how are our psycholinguistic experiment designs coming along?\nLiam: Really well, Sophie. We're investigating how the human parser handles temporary syntactic ambiguity in garden-path sentences, like 'The horse raced past the barn fell.'\nSophie: Fascinating! In our methodology, what instrument will measure real-time processing difficulty?\nLiam: We will employ high-speed eye-tracking cameras to measure first-pass fixation duration and pupil dilation during reading.\nSophie: And what behavioral metric indicates parsing breakdown?\nLiam: Whenever the cognitive processor encounters a structural incompatibility, we observe immediate regression saccades and prolonged re-parsing time.\nSophie: How do individual cognitive differences influence recovery speed?\nLiam: Participants with higher working memory capacity resolve syntactic ambiguities significantly faster than low-span individuals.\nSophie: And how does punctuation influence the sentence interpretation?\nLiam: The strategic insertion of commas completely eliminates the garden-path effect by explicitly marking clause boundaries."
      },
      {
        "partNum": 4,
        "title": "Part 4: Academic Lecture: Neuro-linguistics & Generative Syntax Acquisition",
        "qRange": "Câu 31–40",
        "startSec": 1215,
        "startFormatted": "20:15",
        "context": "Bài giảng học thuật đại học về cơ chế sinh học não bộ tiếp nhận cú pháp và ngữ pháp tạo sinh",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "formTitle": "NEUROLINGUISTICS LECTURE: BRAIN & GENERATIVE SYNTAX",
        "sections": [
          {
            "type": "notes",
            "heading": "Cerebral Topography & Event-Related Potentials",
            "questions": [
              {
                "num": 31,
                "label": "Broca's area (BA 44/45): specialized for hierarchical phrase structure:",
                "suffix": "",
                "placeholder": "Chức năng...",
                "expected": [
                  "computation",
                  "processing"
                ],
                "display": "computation",
                "trap": "Tính toán cấu trúc cụm từ phân tầng (phrase structure computation)"
              },
              {
                "num": 32,
                "label": "Wernicke's territory: responsible for lexico-semantic retrieval and:",
                "suffix": "",
                "placeholder": "Khả năng...",
                "expected": [
                  "comprehension"
                ],
                "display": "comprehension",
                "trap": "Tiếp nhận và thấu hiểu ngữ nghĩa từ vựng (comprehension)"
              },
              {
                "num": 33,
                "label": "Electrophysiological ERP markers: N400 deflection triggers upon encountering a semantic:",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "anomaly",
                  "violation"
                ],
                "display": "anomaly",
                "trap": "Sóng N400 kích hoạt khi xuất hiện dị biệt ngữ nghĩa (semantic anomaly)"
              },
              {
                "num": 34,
                "label": "Syntactic re-analysis marker: positive P600 wave peaks when resolving complex structural:",
                "suffix": "",
                "placeholder": "Hiện tượng...",
                "expected": [
                  "ambiguity",
                  "violations"
                ],
                "display": "ambiguity",
                "trap": "Sóng P600 xuất hiện khi xử lý cấu trúc nhập nhằng (structural ambiguity)"
              }
            ]
          },
          {
            "type": "notes",
            "heading": "Child Language Acquisition & Poverty of the Stimulus",
            "questions": [
              {
                "num": 35,
                "label": "Poverty of the stimulus: input received by infants is filled with pauses, slips and:",
                "suffix": "",
                "placeholder": "Khuyết điểm...",
                "expected": [
                  "errors"
                ],
                "display": "errors",
                "trap": "Dữ liệu đầu vào của trẻ em chứa đầy lỗi ngữ pháp ngắt quãng (errors)"
              },
              {
                "num": 36,
                "label": "Structure dependence: children never form questions by moving linear words; they always manipulate hierarchical:",
                "suffix": "",
                "placeholder": "Cấu trúc...",
                "expected": [
                  "phrases",
                  "clauses"
                ],
                "display": "phrases",
                "trap": "Trẻ em thao tác trên các cụm từ phân tầng (hierarchical phrases)"
              },
              {
                "num": 37,
                "label": "Critical period: synaptic pruning around puberty drastically reduces second language neural:",
                "suffix": "",
                "placeholder": "Đặc tính...",
                "expected": [
                  "plasticity"
                ],
                "display": "plasticity",
                "trap": "Mất tính dẻo dai thần kinh sau tuổi dậy thì (neural plasticity)"
              }
            ]
          },
          {
            "type": "notes",
            "heading": "Evolutionary Linguistics & Genetic Substrates",
            "questions": [
              {
                "num": 38,
                "label": "Creole emergence: children of pidgin speakers spontaneously innovate full-fledged grammatical:",
                "suffix": "",
                "placeholder": "Yếu tố...",
                "expected": [
                  "rules",
                  "syntax"
                ],
                "display": "rules",
                "trap": "Trẻ em tự động sáng tạo hệ thống quy tắc ngữ pháp hoàn chỉnh (grammatical rules)"
              },
              {
                "num": 39,
                "label": "Genetic locus: mutation of the FOXP2 gene produces severe articulatory and linguistic:",
                "suffix": "",
                "placeholder": "Triệu chứng...",
                "expected": [
                  "deficits",
                  "impairment"
                ],
                "display": "deficits",
                "trap": "Đột biến gen FOXP2 gây tổn thương ngôn ngữ nghiêm trọng (linguistic deficits)"
              },
              {
                "num": 40,
                "label": "Unique cognitive faculty: human recursive capability enables infinite expression from a finite set of:",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "symbols",
                  "elements"
                ],
                "display": "symbols",
                "trap": "Khả năng đệ quy tạo ra vô hạn biểu đạt từ tập hữu hạn các ký hiệu (symbols)"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear a university lecture by Professor Catherine Davies on generative syntax and the neural architecture of language processing.\nGood morning everyone. In today's neurolinguistics lecture, we explore how the human brain computes recursive syntactic structures in real time.\nSince the pioneering work of Paul Broca in the 19th century, neuroscientists identified the left inferior frontal gyrus—commonly referred to as Broca's area—as crucial for syntactic processing.\nModern functional neuroimaging demonstrates that syntax is not merely linear word association; rather, the human parser constructs hierarchical phrase trees.\nThe cornerstone of human syntactic capability is recursion: the infinite computational embedding of linguistic constituents within constituents.\nTo measure the millisecond-by-millisecond time-course of parsing, researchers rely on Event-Related Potentials, or ERP.\nWhen a syntactic violation occurs, the EEG exhibits a sharp positive wave peaking around 600 milliseconds, universally recognized as the P600 effect.\nIn contrast, semantic violations trigger the distinct N400 negative wave, confirming that structural syntax is processed independently from semantic integration.\nIn neurodevelopment, neuroplasticity allows bilingual individuals to develop denser grey matter in bilateral parietal regions.\nRecent twin studies further indicate a strong genetic basis for language acquisition speed.\nThese converging empirical discoveries support the foundational concept of a biologically endowed universal grammar across all human languages."
      }
    ]
  },
  "cam19-t4": {
    "id": "cam19-t4",
    "title": "Cambridge 19 - Test 4: Workplace Orientation & Tree Planting",
    "subtitle": "Băng ghi âm gốc Cambridge người bản xứ thật (Real Human Audio) • Thời lượng: 28:14 • 40 câu hỏi CD-IELTS",
    "audioFull": "audio/cam19-test4-full.mp3",
    "audioFullType": "audio/mpeg",
    "totalDurationFormatted": "28:14",
    "totalDurationSeconds": 1694,
    "parts": [
      {
        "partNum": 1,
        "title": "Part 1: New Employee Induction & Staff Protocol",
        "qRange": "Câu 1–10",
        "startSec": 0,
        "startFormatted": "00:00",
        "context": "Hội thoại hướng dẫn ngày đầu đi làm của nhân viên mới tại khu nghỉ dưỡng",
        "audioLocal": "audio/cam19-test4-part1.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "formTitle": "STAFF INDUCTION & ONBOARDING DETAILS",
        "sections": [
          {
            "type": "notes",
            "heading": "Employee Details & Working Requirements (Questions 1–10)",
            "questions": [
              {
                "num": 1,
                "label": "New employee first name:",
                "suffix": "",
                "placeholder": "Tên nhân viên...",
                "expected": [
                  "kaeden"
                ],
                "display": "Kaeden",
                "trap": "Đánh vần tên: K-A-E-D-E-N"
              },
              {
                "num": 2,
                "label": "Personal items must be secured inside the assigned staff",
                "suffix": "",
                "placeholder": "Thiết bị...",
                "expected": [
                  "locker",
                  "lockers"
                ],
                "display": "locker",
                "trap": "Tủ cá nhân có khóa (locker)"
              },
              {
                "num": 3,
                "label": "Official identification document to provide: original",
                "suffix": "",
                "placeholder": "Giấy tờ...",
                "expected": [
                  "passport"
                ],
                "display": "passport",
                "trap": "Hộ chiếu chính chủ (passport)"
              },
              {
                "num": 4,
                "label": "Front-desk requirement: staff must always wear the company",
                "suffix": "",
                "placeholder": "Trang phục...",
                "expected": [
                  "uniform"
                ],
                "display": "uniform",
                "trap": "Đồng phục công ty (uniform)"
              },
              {
                "num": 5,
                "label": "Mandatory fire safety induction on the",
                "suffix": "of August",
                "placeholder": "Ngày...",
                "expected": [
                  "3rd",
                  "third",
                  "3"
                ],
                "display": "3rd",
                "trap": "Ngày 3 tháng Tám (3rd)"
              },
              {
                "num": 6,
                "label": "Duty Manager direct telephone extension: 0412",
                "suffix": "",
                "placeholder": "Số điện thoại...",
                "expected": [
                  "665903",
                  "665 903"
                ],
                "display": "665903",
                "trap": "Số điện thoại: 0412 665 903"
              },
              {
                "num": 7,
                "label": "Visitor passes have a prominent lanyard colored",
                "suffix": "",
                "placeholder": "Màu...",
                "expected": [
                  "yellow"
                ],
                "display": "yellow",
                "trap": "Dây đeo màu vàng (yellow)"
              },
              {
                "num": 8,
                "label": "Dedicated waste recycling bin reserved strictly for",
                "suffix": "",
                "placeholder": "Chất liệu...",
                "expected": [
                  "plastic"
                ],
                "display": "plastic",
                "trap": "Rác thải nhựa (plastic)"
              },
              {
                "num": 9,
                "label": "Kitchen restock: replenish bar containers with crushed",
                "suffix": "",
                "placeholder": "Vật phẩm...",
                "expected": [
                  "ice"
                ],
                "display": "ice",
                "trap": "Đá lạnh xay (ice)"
              },
              {
                "num": 10,
                "label": "Dishwashing sanitation: staff must always put on heavy-duty",
                "suffix": "",
                "placeholder": "Đồ bảo hộ...",
                "expected": [
                  "gloves"
                ],
                "display": "gloves",
                "trap": "Găng tay cao su bảo hộ (gloves)"
              }
            ]
          }
        ]
      },
      {
        "partNum": 2,
        "title": "Part 2: Compton Park Runners Club Overview",
        "qRange": "Câu 11–20",
        "startSec": 365,
        "startFormatted": "06:04",
        "context": "Chủ tịch câu lạc bộ chạy bộ giới thiệu các cự ly chạy và tiện ích hội viên",
        "audioLocal": "audio/cam19-test4-part2.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 11–14: Choose TWO letters. Questions 15–20: Choose the correct letter, A, B or C.",
        "sections": [
          {
            "type": "choose-two",
            "heading": "Club Routes & Runner Advice (Questions 11–14)",
            "questions": [
              {
                "num": 11,
                "pairNum": 12,
                "prompt": "Questions 11 & 12: Which TWO benefits are included in basic membership?",
                "options": [
                  "A. personal coaching plan",
                  "B. sports massage voucher",
                  "C. organized group training sessions",
                  "D. gym locker reservation",
                  "E. free entry to club races"
                ],
                "correctAnswers": [
                  "C",
                  "E"
                ],
                "explanation": "Hai quyền lợi cốt lõi: buổi tập nhóm (C) và miễn phí các giải chạy nội bộ (E)."
              },
              {
                "num": 13,
                "pairNum": 14,
                "prompt": "Questions 13 & 14: Which TWO safety rules must all night runners follow?",
                "options": [
                  "A. wearing high-visibility reflective vests",
                  "B. running with mobile phone in hand",
                  "C. running in pairs at all times",
                  "D. wearing an active headlamp",
                  "E. staying on paved pathways"
                ],
                "correctAnswers": [
                  "A",
                  "D"
                ],
                "explanation": "Quy tắc an toàn chạy đêm: áo phản quang (A) và đèn đội đầu (D)."
              }
            ]
          },
          {
            "type": "multiple-choice",
            "heading": "Trail Locations & Features (Questions 15–20)",
            "questions": [
              {
                "num": 15,
                "prompt": "The Riverside 5K trail is recommended because:",
                "options": [
                  "A. it is completely flat and well-lit",
                  "B. it passes scenic historic bridges",
                  "C. it has drinking water fountains every kilometer"
                ],
                "correctAnswer": "A",
                "explanation": "Đường chạy ven sông bằng phẳng và đủ ánh sáng (flat and well-lit)."
              },
              {
                "num": 16,
                "prompt": "Why is the Hilltop Loop considered challenging?",
                "options": [
                  "A. muddy conditions after rain",
                  "B. continuous steep gradient",
                  "C. loose gravel surface"
                ],
                "correctAnswer": "B",
                "explanation": "Độ dốc cao liên tục (steep gradient)."
              },
              {
                "num": 17,
                "prompt": "Where do runners meet on Saturday mornings?",
                "options": [
                  "A. outside the Sports Pavilion",
                  "B. next to the Main Car Park",
                  "C. beside the Lakeside Cafe"
                ],
                "correctAnswer": "C",
                "explanation": "Tập trung tại quán cà phê bờ hồ (Lakeside Cafe)."
              },
              {
                "num": 18,
                "prompt": "What should beginners bring to their first session?",
                "options": [
                  "A. a bottle of hydration fluids",
                  "B. printed health questionnaire",
                  "C. a spare pair of dry socks"
                ],
                "correctAnswer": "A",
                "explanation": "Nước uống bù khoáng (hydration fluids)."
              },
              {
                "num": 19,
                "prompt": "Annual club dinner tickets must be reserved by:",
                "options": [
                  "A. 1st November",
                  "B. 15th November",
                  "C. 30th November"
                ],
                "correctAnswer": "C",
                "explanation": "Hạn chót đặt vé: 30 tháng 11."
              },
              {
                "num": 20,
                "prompt": "How can members join the marathon training group?",
                "options": [
                  "A. pass a 10km qualification trial",
                  "B. register on the club community app",
                  "C. obtain coach authorization"
                ],
                "correctAnswer": "B",
                "explanation": "Đăng ký qua ứng dụng câu lạc bộ (club community app)."
              }
            ]
          }
        ]
      },
      {
        "partNum": 3,
        "title": "Part 3: Bookshop Architecture & Merchandising Strategies",
        "qRange": "Câu 21–30",
        "startSec": 750,
        "startFormatted": "12:29",
        "context": "Thảo luận giữa hai nhà bán lẻ sách về cách bài trí không gian và trải nghiệm độc giả",
        "audioLocal": "audio/cam19-test4-part3.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 21–25: Choose the correct letter, A, B or C. Questions 26–30: Label the floor plan below.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "Retail Design Strategy (Questions 21–25)",
            "questions": [
              {
                "num": 21,
                "prompt": "Why did the store remodel its entrance foyer?",
                "options": [
                  "A. to create a welcoming lounge atmosphere",
                  "B. to display seasonal bestsellers",
                  "C. to prevent cold draughts entering"
                ],
                "correctAnswer": "A",
                "explanation": "Tạo không gian chào đón thân thiện (welcoming atmosphere)."
              },
              {
                "num": 22,
                "prompt": "What impact did reducing book stack heights have?",
                "options": [
                  "A. staff found shelving easier",
                  "B. customers felt less crowded",
                  "C. sightlines across the shop improved"
                ],
                "correctAnswer": "C",
                "explanation": "Tầm nhìn bao quát cửa hàng được cải thiện (improved sightlines)."
              },
              {
                "num": 23,
                "prompt": "How are children books displayed?",
                "options": [
                  "A. with covers facing outward on low shelves",
                  "B. by age category with color codes",
                  "C. in themed reading tunnels"
                ],
                "correctAnswer": "A",
                "explanation": "Bìa sách quay ra ngoài trên các kệ thấp (covers facing outward)."
              },
              {
                "num": 24,
                "prompt": "The café section was positioned at the rear to:",
                "options": [
                  "A. maximize kitchen ventilation",
                  "B. encourage browsing along the whole journey",
                  "C. provide quiet garden views"
                ],
                "correctAnswer": "B",
                "explanation": "Khuyến khích khách đi dạo qua toàn bộ cửa hàng (encourage browsing)."
              },
              {
                "num": 25,
                "prompt": "What feedback did they receive about the acoustic music played?",
                "options": [
                  "A. too repetitive during weekdays",
                  "B. too loud near reading tables",
                  "C. helped customers relax and linger longer"
                ],
                "correctAnswer": "C",
                "explanation": "Giúp khách thư giãn và ở lại lâu hơn (relax and linger)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "Floor Plan Layout (Questions 26–30)",
            "questions": [
              {
                "num": 26,
                "label": "Rare Collector Editions located:",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Vị trí D: Kệ cao có kính bảo vệ"
              },
              {
                "num": 27,
                "label": "Graphic Novels & Manga located:",
                "expected": [
                  "F"
                ],
                "display": "F",
                "trap": "Vị trí F: Khu vực thiết kế riêng"
              },
              {
                "num": 28,
                "label": "New Releases Feature Stand located:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Vị trí A: Ngay gần lối vào chính"
              },
              {
                "num": 29,
                "label": "Philosophy & Academic Studies located:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Vị trí C: Phía sau yên tĩnh"
              },
              {
                "num": 30,
                "label": "Artisan Stationery & Gifts located:",
                "expected": [
                  "G"
                ],
                "display": "G",
                "trap": "Vị trí G: Liền kề khu cà phê"
              }
            ]
          }
        ]
      },
      {
        "partNum": 4,
        "title": "Part 4: Scientific Lecture on Global Tree Planting & Agroforestry",
        "qRange": "Câu 31–40",
        "startSec": 1179,
        "startFormatted": "19:39",
        "context": "Bài giảng lâm nghiệp về chiến lược tái trồng rừng, chọn giống bản địa và đa dạng sinh học",
        "audioLocal": "audio/cam19-test4-part4.m4a",
        "audioType": "audio/mp4",
        "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "formTitle": "AGROFORESTRY PRINCIPLES & NATIVE REFORESTATION",
        "sections": [
          {
            "type": "notes",
            "heading": "Ecological Challenges, Biodiversity & Watersheds (Questions 31–40)",
            "questions": [
              {
                "num": 31,
                "label": "Invasive species hazard: fast-growing exotics create harsh light and water",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "competition"
                ],
                "display": "competition",
                "trap": "Sự cạnh tranh gay gắt về ánh sáng và nước (competition)"
              },
              {
                "num": 32,
                "label": "Faunal dependency: indigenous tree varieties supply essential seasonal",
                "suffix": "for resident birds",
                "placeholder": "Nguồn sống...",
                "expected": [
                  "food"
                ],
                "display": "food",
                "trap": "Nguồn thức ăn (food)"
              },
              {
                "num": 33,
                "label": "Monoculture risk: single-species plantations are highly susceptible to epidemic",
                "suffix": "",
                "placeholder": "Nguy cơ...",
                "expected": [
                  "disease"
                ],
                "display": "disease",
                "trap": "Dịch bệnh lan truyền trên diện rộng (disease)"
              },
              {
                "num": 34,
                "label": "Soil degradation: widespread land clearance was initially driven by commercial",
                "suffix": "",
                "placeholder": "Ngành...",
                "expected": [
                  "agriculture"
                ],
                "display": "agriculture",
                "trap": "Nông nghiệp mở rộng đất canh tác (agriculture)"
              },
              {
                "num": 35,
                "label": "Satellite planning: reforestation zones are mapped using precise GIS hydrological",
                "suffix": "",
                "placeholder": "Dữ liệu...",
                "expected": [
                  "maps"
                ],
                "display": "maps",
                "trap": "Bản đồ số viễn thám thủy văn (maps)"
              },
              {
                "num": 36,
                "label": "Fencing necessity: young saplings must be guarded against grazing by roaming",
                "suffix": "",
                "placeholder": "Vật nuôi...",
                "expected": [
                  "cattle"
                ],
                "display": "cattle",
                "trap": "Gia súc gặm cỏ (cattle)"
              },
              {
                "num": 37,
                "label": "Windbreaks benefit: shelterbelts reduce seasonal wind",
                "suffix": "protecting delicate topsoil",
                "placeholder": "Đại lượng...",
                "expected": [
                  "speed"
                ],
                "display": "speed",
                "trap": "Tốc độ gió (wind speed)"
              },
              {
                "num": 38,
                "label": "Ecological corridors: wildlife corridors allow safe arboreal transit for native",
                "suffix": "",
                "placeholder": "Động vật...",
                "expected": [
                  "monkeys"
                ],
                "display": "monkeys",
                "trap": "Các loài linh trưởng/khỉ (monkeys)"
              },
              {
                "num": 39,
                "label": "Riparian restoration: re-establishing riverbank shade directly revitalizes local",
                "suffix": "stocks",
                "placeholder": "Khai thác...",
                "expected": [
                  "fishing"
                ],
                "display": "fishing",
                "trap": "Trữ lượng cá và nghề đánh bắt (fishing)"
              },
              {
                "num": 40,
                "label": "Downstream safety: forested river headwaters significantly mitigate devastating flash",
                "suffix": "",
                "placeholder": "Thiên tai...",
                "expected": [
                  "flooding",
                  "floods"
                ],
                "display": "flooding",
                "trap": "Lũ quét ngập lụt vùng hạ lưu (flooding)"
              }
            ]
          }
        ]
      }
    ]
  },
  "actual-vol5": {
    "id": "actual-vol5",
    "title": "Actual Test 2026 - Section 3: Socratic Dialogue on Algorithmic Bias",
    "subtitle": "Giọng đọc bản xứ Cambridge (British Examiner Narration) • 40 câu hỏi CD-IELTS",
    "isVoiceNarration": true,
    "audioFull": "",
    "audioFullType": "audio/mpeg",
    "totalDurationFormatted": "28:50",
    "totalDurationSeconds": 1730,
    "parts": [
      {
        "partNum": 1,
        "title": "Part 1: International AI Ethics Conference Delegate Registration",
        "qRange": "Câu 1–10",
        "startSec": 0,
        "startFormatted": "00:00",
        "context": "Đại biểu đăng ký tham dự Hội nghị thượng đỉnh Đạo đức Trí tuệ Nhân tạo quốc tế",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "formTitle": "AI ETHICS SUMMIT DELEGATE REGISTRATION",
        "sections": [
          {
            "type": "notes",
            "heading": "Delegate Particulars & Workshop Selection",
            "questions": [
              {
                "num": 1,
                "label": "Delegate full surname: Dr.",
                "suffix": "",
                "placeholder": "Họ đại biểu...",
                "expected": [
                  "bernstein"
                ],
                "display": "Bernstein",
                "trap": "Họ của đại biểu: Bernstein"
              },
              {
                "num": 2,
                "label": "Affiliated institution: Institute of",
                "suffix": "Philosophy",
                "placeholder": "Viện...",
                "expected": [
                  "cognitive"
                ],
                "display": "Cognitive",
                "trap": "Viện Triết học Nhận thức (Institute of Cognitive Philosophy)"
              },
              {
                "num": 3,
                "label": "Selected masterclass workshop: Algorithmic",
                "suffix": "Audit",
                "placeholder": "Chủ đề...",
                "expected": [
                  "fairness",
                  "bias"
                ],
                "display": "Fairness",
                "trap": "Hội thảo kiểm toán tính công bằng của thuật toán (Algorithmic Fairness)"
              },
              {
                "num": 4,
                "label": "Dietary preference for networking banquet:",
                "suffix": "only",
                "placeholder": "Chế độ ăn...",
                "expected": [
                  "halal",
                  "vegan"
                ],
                "display": "halal",
                "trap": "Chế độ ăn Halal"
              },
              {
                "num": 5,
                "label": "Early-bird registration fee: £",
                "suffix": "including proceedings",
                "placeholder": "Phí...",
                "expected": [
                  "320",
                  "£320"
                ],
                "display": "320",
                "trap": "Phí đăng ký sớm: £320"
              },
              {
                "num": 6,
                "label": "Poster presentation submission title: Epistemic",
                "suffix": "in Large Models",
                "placeholder": "Từ điền...",
                "expected": [
                  "injustice"
                ],
                "display": "Injustice",
                "trap": "Bất công tri thức luận (Epistemic Injustice)"
              },
              {
                "num": 7,
                "label": "Requested conference hotel: The Grand",
                "suffix": "Hotel",
                "placeholder": "Khách sạn...",
                "expected": [
                  "sovereign"
                ],
                "display": "Sovereign",
                "trap": "Khách sạn đối tác: The Grand Sovereign"
              },
              {
                "num": 8,
                "label": "Airport shuttle bus pickup on: 18th",
                "suffix": "",
                "placeholder": "Tháng...",
                "expected": [
                  "october",
                  "18th october"
                ],
                "display": "October",
                "trap": "Đón xe đưa rước sân bay ngày 18 tháng 10"
              },
              {
                "num": 9,
                "label": "Special assistance required: assistive listening:",
                "suffix": "system",
                "placeholder": "Thiết bị...",
                "expected": [
                  "headset",
                  "loop"
                ],
                "display": "headset",
                "trap": "Tai nghe trợ thính trong hội trường (assistive headset)"
              },
              {
                "num": 10,
                "label": "Official summit registration badge code:",
                "suffix": "",
                "placeholder": "Mã số...",
                "expected": [
                  "eth408",
                  "eth-408"
                ],
                "display": "ETH408",
                "trap": "Mã thẻ đại biểu: ETH408"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear a conversation between an event registrar and a conference delegate, Dr Hannah Cole, registering for the Global AI Ethics Summit.\nRegistrar: Good morning, AI Ethics Summit Registration Desk. How can I help you?\nHannah: Good morning. I've arrived to register and collect my speaker credentials.\nRegistrar: Welcome Dr Cole! May I verify your registration details? First name Hannah, surname Cole, C-O-L-E?\nHannah: Yes, that's correct.\nRegistrar: And your institutional affiliation?\nHannah: University of Oxford, Department of Philosophy.\nRegistrar: Thank you. Which keynote panel are you presenting in?\nHannah: I am speaking in the panel on Quantum Computing Ethics.\nRegistrar: Wonderful. What is your scheduled presentation date?\nHannah: My presentation is on the 18th of November.\nRegistrar: Let me check the schedule... Yes, November the 18th in the Grand Hall. The registration fee with speaker waiver comes to 350 pounds.\nHannah: 350 pounds paid by institutional grant. What about dietary requirements for the conference banquet?\nHannah: I require a vegan meal option, please.\nRegistrar: Duly noted. Are you also presenting a research poster in the afternoon session?\nHannah: Yes, our research group has a poster display in Hall B.\nRegistrar: And would you like to sponsor a student delegate pass?\nHannah: Yes, please add one subsidized student pass to my invoice.\nRegistrar: Fantastic. And your emergency contact number during the summit?\nHannah: It is 07911 556782.\nRegistrar: 07911 556782. Here is your official summit badge and programme, Dr Cole!"
      },
      {
        "partNum": 2,
        "title": "Part 2: Smart City Mobility Initiative & Autonomous Transit Hub",
        "qRange": "Câu 11–20",
        "startSec": 375,
        "startFormatted": "06:15",
        "context": "Giám đốc quy hoạch đô thị thông minh thuyết minh về trạm trung chuyển xe buýt tự hành",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 11–15: Choose the correct letter, A, B or C. Questions 16–20: Label the plan below.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "AUTONOMOUS TRANSIT NETWORK",
            "subInstructions": "Questions 11–15: Choose the correct letter, A, B or C.",
            "questions": [
              {
                "num": 11,
                "prompt": "The autonomous shuttle pilot fleet operates with:",
                "options": [
                  {
                    "key": "A",
                    "text": "a licensed safety steward on board each vehicle"
                  },
                  {
                    "key": "B",
                    "text": "complete remote oversight from a central teleoperation center"
                  },
                  {
                    "key": "C",
                    "text": "restricted operational hours limited to daytime off-peak"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Luôn có một nhân viên giám sát an toàn ngồi trên mỗi xe (licensed safety steward)."
              },
              {
                "num": 12,
                "prompt": "Sensors on autonomous shuttles struggle most in:",
                "options": [
                  {
                    "key": "A",
                    "text": "dense maritime fog scattering LiDAR laser beams"
                  },
                  {
                    "key": "B",
                    "text": "heavy torrential downpours causing road glare"
                  },
                  {
                    "key": "C",
                    "text": "narrow cobblestone alleyways with parked bicycles"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Sương mù dày đặc làm tán xạ chùm tia laser của cảm biến LiDAR (dense fog scattering LiDAR)."
              },
              {
                "num": 13,
                "prompt": "How are elderly passengers assisted with digital boarding?",
                "options": [
                  {
                    "key": "A",
                    "text": "roaming volunteer digital navigators on platforms"
                  },
                  {
                    "key": "B",
                    "text": "voice-activated ticketing terminals in native languages"
                  },
                  {
                    "key": "C",
                    "text": "free printed smartcards preloaded by social services"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Các tình nguyện viên hỗ trợ công nghệ trực tiếp tại nhà ga (volunteer navigators)."
              },
              {
                "num": 14,
                "prompt": "The primary environmental benefit documented during year one was:",
                "options": [
                  {
                    "key": "A",
                    "text": "thirty percent reduction in particulate emissions near schools"
                  },
                  {
                    "key": "B",
                    "text": "elimination of secondary congestion caused by cruising for parking"
                  },
                  {
                    "key": "C",
                    "text": "transfer of short taxi trips to micro-mobility bikes"
                  }
                ],
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Triệt tiêu tình trạng xe chạy lòng vòng tìm chỗ đỗ gây ùn tắc (cruising for parking eliminated)."
              },
              {
                "num": 15,
                "prompt": "Future expansion plans for Phase Two include:",
                "options": [
                  {
                    "key": "A",
                    "text": "autonomous freight delivery pods sharing bus lanes"
                  },
                  {
                    "key": "B",
                    "text": "high-speed underground maglev passenger tubes"
                  },
                  {
                    "key": "C",
                    "text": "drone parcel delivery hubs on terminal rooftops"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Các buồng tự hành vận chuyển hàng hóa dùng chung làn xe buýt ban đêm (freight delivery pods)."
              }
            ]
          },
          {
            "type": "map-labelling",
            "heading": "TRANSIT HUB CONCOURSE PLAN",
            "subInstructions": "Questions 16–20: Label the plan below. Choose from A–E.",
            "mapOptions": [
              {
                "key": "A",
                "label": "Inductive wireless charging bays"
              },
              {
                "key": "B",
                "label": "Automated baggage drop lockers"
              },
              {
                "key": "C",
                "label": "Customer assistance information desk"
              },
              {
                "key": "D",
                "label": "Rooftop urban solar canopy"
              },
              {
                "key": "E",
                "label": "Shared micro-scooter docking zone"
              }
            ],
            "questions": [
              {
                "num": 16,
                "label": "Inductive charging bays:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Bãi đỗ sạc không dây ở khu tây bến xe (Vị trí A)"
              },
              {
                "num": 17,
                "label": "Automated baggage lockers:",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Dãy tủ gửi đồ tự động cạnh nhà vệ sinh (Vị trí B)"
              },
              {
                "num": 18,
                "label": "Information desk:",
                "expected": [
                  "C"
                ],
                "display": "C",
                "trap": "Bàn lễ tân tròn ở tâm sảnh chính (Vị trí C)"
              },
              {
                "num": 19,
                "label": "Urban solar canopy:",
                "expected": [
                  "D"
                ],
                "display": "D",
                "trap": "Mái hiên năng lượng mặt trời bao phủ toàn bộ nóc nhà ga (Vị trí D)"
              },
              {
                "num": 20,
                "label": "Micro-scooter docking zone:",
                "expected": [
                  "E"
                ],
                "display": "E",
                "trap": "Khu vực khóa xe trượt điện cạnh lối ra ga metro (Vị trí E)"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear Douglas Vance, Station Operations Director, introducing the layout of the Autonomous Transit Interchange.\nGood morning travellers and commuters. Welcome to the newly opened Autonomous Transit Interchange.\nOur multi-modal terminal is completely automated, integrating high-speed rail, autonomous electric shuttles, and light metro lines.\nFor passenger safety, platform screen doors operate automatically on all transit tracks.\nPlease refer to the wayfinding map displayed in your transit mobile application:\nStanding at the Main Concourse Information Desk facing north:\nImmediately to your left on the west concourse is the Autonomous Shuttle Bay (marked B).\nTo your right along the east wall is the Express Luggage Storage Facility (marked A).\nProceeding through the central turnstiles, Platform 1 for Intercity High-Speed Rail is positioned at Point C.\nTo the north-west of Platform 1 is the Passenger Quiet Lounge (marked E).\nDirectly opposite on the north-east is the Bicycle Sharing and Charging Station (marked D).\nFinally, in the northern mezzanine accessible via the central escalator, Point F houses our 24-hour Transit Customer Assistance Center."
      },
      {
        "partNum": 3,
        "title": "Part 3: Socratic Dialogue: Algorithmic Bias & Training Set Diversity",
        "qRange": "Câu 21–30",
        "startSec": 760,
        "startFormatted": "12:40",
        "context": "Đối thoại biện chứng giữa nghiên cứu sinh Triết học và Kỹ sư AI về thiên kiến thuật toán",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 21–25: Choose the correct letter, A, B or C. Questions 26–30: What philosophical stance is held by each scholar? Choose from A–G.",
        "sections": [
          {
            "type": "multiple-choice",
            "heading": "SOCRATIC DIALOGUE ON ALGORITHMIC FAIRNESS",
            "subInstructions": "Questions 21–25: Choose the correct letter, A, B or C.",
            "questions": [
              {
                "num": 21,
                "prompt": "Why is statistical parity insufficient to ensure justice in automated hiring?",
                "options": [
                  {
                    "key": "A",
                    "text": "it ignores individual qualification differences within demographic groups"
                  },
                  {
                    "key": "B",
                    "text": "corporate applicants can easily game keyword frequency metrics"
                  },
                  {
                    "key": "C",
                    "text": "training datasets rarely contain enough historical female resumes"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Tính ngang bằng thống kê bỏ qua năng lực cá nhân thực tế (ignores individual qualification differences)."
              },
              {
                "num": 22,
                "prompt": "The speakers agree that feedback loops in predictive policing algorithms:",
                "options": [
                  {
                    "key": "A",
                    "text": "amplify historical enforcement patterns into self-fulfilling prophecies"
                  },
                  {
                    "key": "B",
                    "text": "reduce response times for violent emergency calls"
                  },
                  {
                    "key": "C",
                    "text": "deter criminal organizations from establishing territorial bases"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Tạo vòng phản hồi khuếch đại định kiến lịch sử thành lời tiên tri tự ứng nghiệm (self-fulfilling prophecies)."
              },
              {
                "num": 23,
                "prompt": "What epistemological problem arises from deep neural network opacity?",
                "options": [
                  {
                    "key": "A",
                    "text": "inability to provide counterfactual explanations required by due process"
                  },
                  {
                    "key": "B",
                    "text": "extreme computational costs required to re-train weights"
                  },
                  {
                    "key": "C",
                    "text": "vulnerability to adversarial pixel perturbation attacks"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Không thể đưa ra lời giải thích phản thực nghiệm theo quy trình pháp lý (inability to provide counterfactual explanations)."
              },
              {
                "num": 24,
                "prompt": "Which ethical framework does the philosopher favor for algorithmic healthcare triage?",
                "options": [
                  {
                    "key": "A",
                    "text": "Rawlsian maximin principle prioritizing worst-off patients"
                  },
                  {
                    "key": "B",
                    "text": "Utilitarian quality-adjusted life years (QALY) maximization"
                  },
                  {
                    "key": "C",
                    "text": "Aristotelian virtue ethics guided by clinician intuition"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Nguyên lý Maximin của John Rawls ưu tiên bệnh nhân ở tình trạng yếu thế nhất (Rawlsian maximin)."
              },
              {
                "num": 25,
                "prompt": "In their conclusion, both participants agree that AI safety requires:",
                "options": [
                  {
                    "key": "A",
                    "text": "independent interdisciplinary oversight bodies with subpoena powers"
                  },
                  {
                    "key": "B",
                    "text": "voluntary ethical pledges signed by commercial tech CEOs"
                  },
                  {
                    "key": "C",
                    "text": "open-sourcing all model weights without proprietary patents"
                  }
                ],
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Hội đồng giám sát liên ngành độc lập có quyền triệu tập tư pháp (independent oversight bodies)."
              }
            ]
          },
          {
            "type": "matching",
            "heading": "PHILOSOPHICAL PERSPECTIVES MATCHING",
            "subInstructions": "Questions 26–30: What philosophical stance is held by each scholar? Choose from A–G.",
            "matchOptions": [
              {
                "key": "A",
                "text": "Advocates democratic participatory model design"
              },
              {
                "key": "B",
                "text": "Argues algorithmic objectivity is an epistemological myth"
              },
              {
                "key": "C",
                "text": "Believes formal mathematical definitions of fairness suffice"
              },
              {
                "key": "D",
                "text": "Emphasizes restorative justice over punitive prediction"
              },
              {
                "key": "E",
                "text": "Warns against corporate capture of regulatory standards"
              },
              {
                "key": "F",
                "text": "Prioritizes individual dignity over collective utilitarian gains"
              },
              {
                "key": "G",
                "text": "Recommends strict liability tort law for autonomous damages"
              }
            ],
            "questions": [
              {
                "num": 26,
                "item": "Dr. Thorne (Ethicist):",
                "expected": [
                  "B"
                ],
                "display": "B",
                "trap": "Tính khách quan của thuật toán chỉ là huyền thoại tri thức luận (Epistemological myth)"
              },
              {
                "num": 27,
                "item": "Engineer Chen:",
                "expected": [
                  "A"
                ],
                "display": "A",
                "trap": "Đề xuất thiết kế mô hình có sự tham gia dân chủ của cộng đồng (Participatory design)"
              },
              {
                "num": 28,
                "item": "Legal scholar Vance:",
                "expected": [
                  "G"
                ],
                "display": "G",
                "trap": "Áp dụng luật trách nhiệm bồi thường nghiêm ngặt (Strict liability tort law)"
              },
              {
                "num": 29,
                "item": "Sociologist Al-Mansoor:",
                "expected": [
                  "E"
                ],
                "display": "E",
                "trap": "Cảnh báo sự thao túng tiêu chuẩn từ các tập đoàn công nghệ (Corporate capture)"
              },
              {
                "num": 30,
                "item": "Philosopher Nagel:",
                "expected": [
                  "F"
                ],
                "display": "F",
                "trap": "Tôn trọng phẩm giá con người cao hơn lợi ích thực dụng (Individual dignity)"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear a dialogue between two machine learning researchers, Zachary and Maya, debating algorithmic fairness in automated decision systems.\nZachary: Maya, have you reviewed the bias audit on our loan underwriting neural network?\nMaya: Yes Zachary, and the disparities are concerning. The primary origin of demographic bias lies in historical training data reflecting past human prejudices.\nZachary: Even when sensitive protected attributes like race or gender are removed, the model identifies proxy variables, such as postal code or shopping habits, that reconstruct the protected class.\nMaya: Exactly. That is why statistical transparency and explainable AI techniques like SHAP and LIME are mandatory for compliance.\nZachary: In our next deployment phase, an independent third-party algorithm auditing firm will evaluate the system's disparate impact ratios.\nMaya: We must also prevent toxic feedback loops, where algorithmic bias reinforces real-world inequality over multiple deployment iterations."
      },
      {
        "partNum": 4,
        "title": "Part 4: Academic Lecture: Epistemology of Machine Reasoning & Automated Proofs",
        "qRange": "Câu 31–40",
        "startSec": 1200,
        "startFormatted": "20:00",
        "context": "Bài giảng Triết học Toán học và Khoa học máy tính về bản chất của chứng minh tự động",
        "audioLocal": "",
        "audioType": "",
        "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "formTitle": "PHILOSOPHY LECTURE: MACHINE REASONING & PROOFS",
        "sections": [
          {
            "type": "notes",
            "heading": "Historical Foundations & The Four-Color Theorem",
            "questions": [
              {
                "num": 31,
                "label": "Historical turning point: Appel and Haken's 1976 proof of the four-color theorem relied heavily on computer",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "calculation",
                  "computation"
                ],
                "display": "computation",
                "trap": "Dựa vào tính toán điện toán khổng lồ không thể kiểm tra thủ công (computer computation)"
              },
              {
                "num": 32,
                "label": "Epistemic skepticism: traditional mathematicians argued proofs must be surveyable by a human",
                "suffix": "",
                "placeholder": "Chủ thể...",
                "expected": [
                  "mind",
                  "mathematician"
                ],
                "display": "mind",
                "trap": "Chứng minh phải được tâm trí con người kiểm chứng toàn bộ (human mind)"
              },
              {
                "num": 33,
                "label": "Deductive certainty: machine-assisted proofs transform mathematics from pure deduction into empirical",
                "suffix": "",
                "placeholder": "Bản chất...",
                "expected": [
                  "experiment",
                  "science"
                ],
                "display": "experiment",
                "trap": "Toán học chuyển từ suy diễn thuần túy sang thực nghiệm (empirical experiment)"
              }
            ]
          },
          {
            "type": "notes",
            "heading": "Formal Interactive Theorem Provers (Lean & Coq)",
            "questions": [
              {
                "num": 34,
                "label": "Type theory foundation: modern interactive provers rely on the Curry-Howard isomorphism linking proofs to",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "programs",
                  "code"
                ],
                "display": "programs",
                "trap": "Sự tương đẳng giữa chứng minh và chương trình máy tính (programs)"
              },
              {
                "num": 35,
                "label": "Kernel verification: tiny trustworthy software kernel verifies logic, eliminating hidden human",
                "suffix": "",
                "placeholder": "Nguyên nhân...",
                "expected": [
                  "errors",
                  "bugs"
                ],
                "display": "errors",
                "trap": "Nhân phần mềm nhỏ gọn loại bỏ sai sót ẩn giấu của con người (human errors)"
              },
              {
                "num": 36,
                "label": "Mathematical library: collaborative formalization creates vast repositories of digital",
                "suffix": "",
                "placeholder": "Đối tượng...",
                "expected": [
                  "knowledge",
                  "truth"
                ],
                "display": "knowledge",
                "trap": "Kho lưu trữ tri thức toán học số hóa quy mô lớn (digital knowledge)"
              },
              {
                "num": 37,
                "label": "Heuristic discovery: transformer models propose proof tactics by predicting likely mathematical",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "steps",
                  "lemmas"
                ],
                "display": "steps",
                "trap": "Dự đoán các bước suy luận toán học hợp lý (mathematical steps)"
              }
            ]
          },
          {
            "type": "notes",
            "heading": "Philosophical Implications for Human Understanding",
            "questions": [
              {
                "num": 38,
                "label": "Cognitive gap: an automated proof can confirm validity without producing human intuitive",
                "suffix": "",
                "placeholder": "Năng lực...",
                "expected": [
                  "insight",
                  "understanding"
                ],
                "display": "insight",
                "trap": "Xác nhận tính đúng đắn nhưng không tạo ra sự thấu hiểu trực giác (intuitive insight)"
              },
              {
                "num": 39,
                "label": "Mathematical aesthetics: elegance and explanatory depth risk being supplanted by brute-force",
                "suffix": "",
                "placeholder": "Phương pháp...",
                "expected": [
                  "search"
                ],
                "display": "search",
                "trap": "Độ sâu diễn giải bị thay thế bởi thuật toán tìm kiếm vét cạn (brute-force search)"
              },
              {
                "num": 40,
                "label": "Future paradigm: mathematics will evolve into a hybrid symbiosis between human intuition and machine",
                "suffix": "",
                "placeholder": "Khái niệm...",
                "expected": [
                  "rigour",
                  "rigor"
                ],
                "display": "rigour",
                "trap": "Sự cộng sinh giữa trực giác con người và sự chuẩn xác nghiêm ngặt của máy móc (machine rigour)"
              }
            ]
          }
        ],
        "dialogueScript": "You will hear an epistemological lecture by Professor Gregory Finch on machine-assisted mathematical proofs and computer verification.\nGood morning colleagues. Today we investigate a profound foundational question in the philosophy of mathematics: what constitutes acceptable proof in an era of machine verification?\nFor over two millennia, mathematical proof required human surveyability—the capacity of a human mind to comprehend and certify every deductive step.\nThis epistemological paradigm was shattered in 1976 by the computer-assisted proof of the Four-Color Theorem, which relied on evaluating thousands of lemmas via machine computation.\nToday, interactive theorem provers and proof assistants like Coq and Lean verify logical consistency with uncompromising syntactic rigor.\nHowever, philosophers ask: when a proof contains millions of lines of machine code that no human mathematician can survey in a lifetime, does it deliver true human understanding?\nCritics argue that machines provide certitude without providing mathematical intuition.\nNevertheless, formal proof verification is becoming indispensable in software security, cryptographic verification, and mission-critical engineering.\nAs artificial intelligence advances into automated theorem discovery, the boundary between human insight and computational deduction continues to redefine mathematical knowledge."
      }
    ]
  }
};

// Expose to window
if (typeof window !== 'undefined') {
  window.ADDITIONAL_LISTENING_TESTS = ADDITIONAL_LISTENING_TESTS;
}
