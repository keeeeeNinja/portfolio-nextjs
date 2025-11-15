## ブレイクポイント定義（モバイルファースト）
- **SP版**: ~767px (Figmaフレーム: 375px)
- **TB版**: 768px~1279px (Figmaフレーム: 800px)
- **PC版**: 1280px~ (Figmaフレーム: 1280px)

**実装方針**: モバイルファーストでベーススタイルを記述し、`@media (min-width: 768px)`と`@media (min-width: 1280px)`でスタイルを上書き

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

Figma の幅 1280px フレーム（node-id: 1:32, Link:https://www.figma.com/design/IFD2MhN7xzc5xo6DFzcurB/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?node-id=1-32&m=dev）内のすべての要素について、レイヤー名（name）、node-id、リストでまとめました。

## PC版 コンポーネント一覧（コーディング時に使用）
- **Navigation**: 1:61
- **Header**: 1:33
- **Main (Images)**: 1:38
- **Explore More**: 1:59
- **Footer**: 1:60

#PC版　node-idとフレーム名（詳細）
"1:32": "Desktop",
"1:33": "Header",
"1:34": "Title",
"1:35": "Photography",
"1:36": "Echos of Italy",
"1:37": "'Echoes of Italy' is my lens on the country’s timeless charm — candid moments, architectural details, and sun-kissed scenes.",
"1:38": "Main",
"1:39": "Image 01",
"1:40": "Image",
"1:41": "Wandering and wondering, lost in the rhythm of the city.",
"1:42": "Image 02",
"1:43": "Image",
"1:44": "A symphony of motion and architecture, framed by history.",
"1:45": "Image 03",
"1:46": "Image",
"1:47": "A study in contrasts: light, shadow, and the rhythm of the game.",
"1:48": "Text",
"1:49": "From sun-drenched piazzas to intimate still-lives, I aimed to capture the soul of the country through light and composition.",
"1:50": "Image 04",
"1:51": "Image",
"1:52": "Dockside perspective, capturing the soul of the water.",
"1:59": "Explore More",
"I1:59;1:423": "From graphic design to interior spaces, see the breadth of my creative explorations.",
"I1:59;1:424": "More projects",
"I1:59;1:425": "Projects",
"I1:59;1:426": "Projects 01",
"I1:59;1:427": "Info",
"I1:59;1:428": "Artwork",
"I1:59;1:429": "Illustrationsketches",
"I1:59;1:430": "button",
"I1:59;1:430;1:399": "Explore",
"I1:59;1:431": "Image",
"I1:59;1:432": "Projects 02",
"I1:59;1:433": "Info",
"I1:59;1:434": "Editorial",
"I1:59;1:435": "Magazinestudy",
"I1:59;1:436": "button",
"I1:59;1:436;1:399": "Explore",
"I1:59;1:437": "Image",
"I1:59;1:438": "Projects 03",
"I1:59;1:439": "Info",
"I1:59;1:440": "Design",
"I1:59;1:441": "Castro Capital branding",
"I1:59;1:442": "button",
"I1:59;1:442;1:399": "Explore",
"I1:59;1:443": "Image",
"1:60": "Footer",
"I1:60;1:404": "Links",
"I1:60;1:405": "Email",
"I1:60;1:406": "Behance",
"I1:60;1:407": "LinkedIn",
"I1:60;1:408": "© Sarah Chen 2025 All Rights Reserved",
"1:61": "Navigation",
"I1:61;1:374": "Name",
"I1:61;1:375": "Image",
"I1:61;1:376": "Sarah Chen",
"I1:61;1:377": "Links",
"I1:61;1:378": "Home",
"I1:61;1:379": "About",
"I1:61;1:380": "Contact"

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

Figma の幅 800px フレーム（node-id: 1:62, Link:https://www.figma.com/design/IFD2MhN7xzc5xo6DFzcurB/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?node-id=1-62&m=dev）内のすべての要素について、レイヤー名（name）、node-id、リストでまとめました。

## TB版 コンポーネント一覧（コーディング時に使用）
- **Navigation**: 1:91
- **Header**: 1:63
- **Main (Images)**: 1:68
- **Explore More**: 1:89
- **Footer**: 1:90

#TB版　node-idとフレーム名（詳細）
"1:62": "Tablet",
"1:63": "Header",
"1:64": "Title",
"1:65": "Photography",
"1:66": "Echos of Italy",
"1:67": "'Echoes of Italy' is my lens on the country’s timeless charm — candid moments, architectural details, and sun-kissed scenes.",
"1:68": "Main",
"1:69": "Image 01",
"1:70": "Image",
"1:71": "Wandering and wondering, lost in the rhythm of the city.",
"1:72": "Image 02",
"1:73": "Image",
"1:74": "A symphony of motion and architecture, framed by history.",
"1:75": "Image 03",
"1:76": "Image",
"1:77": "A study in contrasts: light, shadow, and the rhythm of the game.",
"1:78": "Text",
"1:79": "From sun-drenched piazzas to intimate still-lives, I aimed to capture the soul of the country through light and composition.",
"1:80": "Image 04",
"1:81": "Image",
"1:82": "Dockside perspective, capturing the soul of the water.",
"1:89": "Explore More",
"I1:89;1:445": "From graphic design to interior spaces, see the breadth of my creative explorations.",
"I1:89;1:446": "More projects",
"I1:89;1:447": "Projects",
"I1:89;1:448": "Projects 01",
"I1:89;1:449": "Info",
"I1:89;1:450": "Artwork",
"I1:89;1:451": "Illustrationsketches",
"I1:89;1:452": "button",
"I1:89;1:452;4001:1316": "Explore",
"I1:89;1:453": "Image",
"I1:89;1:454": "Projects 02",
"I1:89;1:455": "Info",
"I1:89;1:456": "Editorial",
"I1:89;1:457": "Magazinestudy",
"I1:89;1:458": "button",
"I1:89;1:458;4001:1316": "Explore",
"I1:89;1:459": "Image",
"I1:89;1:460": "Projects 03",
"I1:89;1:461": "Info",
"I1:89;1:462": "Design",
"I1:89;1:463": "Castro Capital branding",
"I1:89;1:464": "button",
"I1:89;1:464;4001:1316": "Explore",
"I1:89;1:465": "Image",
"1:90": "Footer",
"I1:90;1:410": "Links",
"I1:90;1:411": "Email",
"I1:90;1:412": "Behance",
"I1:90;1:413": "LinkedIn",
"I1:90;1:414": "© Sarah Chen 2025 All Rights Reserved",
"1:91": "Navigation",
"I1:91;1:382": "Name",
"I1:91;1:383": "Image",
"I1:91;1:384": "Sarah Chen",
"I1:91;1:385": "Links",
"I1:91;1:386": "Home",
"I1:91;1:387": "About",
"I1:91;1:388": "Contact"

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

Figma の幅 375px フレーム（node-id: 1:92, Link:https://www.figma.com/design/IFD2MhN7xzc5xo6DFzcurB/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?node-id=1-92&m=dev）内のすべての要素について、レイヤー名（name）、node-id、リストでまとめました。

## SP版 コンポーネント一覧（コーディング時に使用）
- **Navigation**: 1:93
- **Header**: 1:94
- **Main (Images)**: 1:99
- **Explore More**: 1:120
- **Footer**: 1:121

#SP版　node-idとフレーム名（詳細）
"1:92": "Mobile",
"1:93": "Navigation",
"I1:93;1:390": "Name",
"I1:93;1:391": "Sarah Chen",
"I1:93;1:392": "Image",
"I1:93;1:393": "Links",
"I1:93;1:394": "Home",
"I1:93;1:395": "About",
"I1:93;1:396": "Contact",
"1:94": "Header",
"1:95": "Title",
"1:96": "Photography",
"1:97": "Echos of Italy",
"1:98": "'Echoes of Italy' is my lens on the country’s timeless charm — candid moments, architectural details, and sun-kissed scenes.",
"1:99": "Main",
"1:100": "Image 01",
"1:101": "Image",
"1:102": "Wandering and wondering, lost in the rhythm of the city.",
"1:103": "Image 02",
"1:104": "Image",
"1:105": "A symphony of motion and architecture, framed by history.",
"1:106": "Image 03",
"1:107": "Image",
"1:108": "A study in contrasts: light, shadow, and the rhythm of the game.",
"1:109": "Text",
"1:110": "From sun-drenched piazzas to intimate still-lives, I aimed to capture the soul of the country through light and composition.",
"1:111": "Image 04",
"1:112": "Image",
"1:113": "Dockside perspective, capturing the soul of the water.",
"1:120": "Explore More",
"I1:120;1:467": "From graphic design to interior spaces, see the breadth of my creative explorations.",
"I1:120;1:468": "More projects",
"I1:120;1:469": "Projects",
"I1:120;1:470": "Projects 01",
"I1:120;1:471": "Info",
"I1:120;1:472": "Artwork",
"I1:120;1:473": "Illustrationsketches",
"I1:120;1:474": "button",
"I1:120;1:474;4001:1316": "Explore",
"I1:120;1:475": "Image",
"I1:120;1:476": "Projects 02",
"I1:120;1:477": "Info",
"I1:120;1:478": "Editorial",
"I1:120;1:479": "Magazinestudy",
"I1:120;1:480": "button",
"I1:120;1:480;4001:1316": "Explore",
"I1:120;1:481": "Image",
"I1:120;1:482": "Projects 03",
"I1:120;1:483": "Info",
"I1:120;1:484": "Design",
"I1:120;1:485": "Castro Capitalbranding",
"I1:120;1:486": "button",
"I1:120;1:486;4001:1316": "Explore",
"I1:120;1:487": "Image",
"1:121": "Footer",
"I1:121;1:416": "Links",
"I1:121;1:417": "Email",
"I1:121;1:418": "Behance",
"I1:121;1:419": "LinkedIn",
"I1:121;1:420": "© Sarah Chen 2025 All Rights Reserved"