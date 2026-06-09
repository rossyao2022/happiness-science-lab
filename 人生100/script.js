const ageQuotes = [
  { age: 0, quote: "来到世界，就是被爱点亮的第一盏灯。" },
  { age: 1, quote: "学会站起，天地就开始向你展开。" },
  { age: 2, quote: "每一次跌倒，都是身体在练习勇敢。" },
  { age: 3, quote: "好奇心，是人生最早的翅膀。" },
  { age: 4, quote: "把世界问一遍，童年就有了光。" },
  { age: 5, quote: "成长的蜕变，永恒的童真。" },
  { age: 6, quote: "第一次离家一点点，心也开始长大一点点。" },
  { age: 7, quote: "人生如圆，终点亦是起点。" },
  { age: 8, quote: "认真玩耍，也是在认真认识世界。" },
  { age: 9, quote: "努力像奔马，只管奋力向前冲刺。" },
  { age: 10, quote: "你的答案，正在一本本书里发芽。" },
  { age: 11, quote: "不积跬步，无以至千里。" },
  { age: 12, quote: "少年的肩上，已经有风和方向。" },
  { age: 13, quote: "千里之行，始于足下。" },
  { age: 14, quote: "认真生活，世界也会认真回应你。" },
  { age: 15, quote: "不放弃，才能赢到最后。" },
  { age: 16, quote: "青春不是等来的，是一步步走出来的。" },
  { age: 17, quote: "别怕慢，只怕心里没有要去的地方。" },
  { age: 18, quote: "成年不是突然长大，是开始为选择负责。" },
  { age: 19, quote: "世界很大，先把自己的路走稳。" },
  { age: 20, quote: "最好的年纪，是敢试、敢错、敢再来。" },
  { age: 21, quote: "你开始拥有远方，也开始学习承担。" },
  { age: 22, quote: "毕业不是告别学校，是进入更辽阔的课堂。" },
  { age: 23, quote: "不必急着被定义，先把自己活清楚。" },
  { age: 24, quote: "年轻的底气，来自每一天认真蓄力。" },
  { age: 25, quote: "别让比较，偷走你的节奏。" },
  { age: 26, quote: "你可以迷茫，但别停在迷茫里。" },
  { age: 27, quote: "向内扎根，向外生长。" },
  { age: 28, quote: "一边试错，一边靠近真正想要的人生。" },
  { age: 29, quote: "成熟不是没有眼泪，是哭过以后还肯出发。" },
  { age: 30, quote: "你的未来，藏在你现在的努力里。" },
  { age: 31, quote: "回首身后的足迹，直面更高的阶梯。" },
  { age: 32, quote: "人在旅途，感悟人生，享受脚下的每一步。" },
  { age: 33, quote: "前方无绝路，希望在下个阶梯。" },
  { age: 34, quote: "行走中，你可以停歇、疾步，但不得后退。" },
  { age: 35, quote: "世界上最美不过的景致，是那些脚下路过的风景。" },
  { age: 36, quote: "别回头，别四顾，坚定地往前走。" },
  { age: 37, quote: "走自己的路，让别人打车去吧。" },
  { age: 38, quote: "看似寻常最奇崛，成如容易却艰辛。" },
  { age: 39, quote: "不必把所有答案，都交给别人。" },
  { age: 40, quote: "四十不是中场休息，是重新校准方向。" },
  { age: 41, quote: "见过风浪以后，更要保持心里的清明。" },
  { age: 42, quote: "把力气用在值得的人和事上。" },
  { age: 43, quote: "稳住心，也稳住自己的生活秩序。" },
  { age: 44, quote: "山不解释高度，人不炫耀深度。" },
  { age: 45, quote: "人生的宽度，藏在你愿意理解多少不同。" },
  { age: 46, quote: "该放下的放下，该热爱的继续热爱。" },
  { age: 47, quote: "见天地，也要见自己。" },
  { age: 48, quote: "越懂取舍，越接近自由。" },
  { age: 49, quote: "把日子过稳，把心气养长。" },
  { age: 50, quote: "半生已过，真正的丰盛才刚开始。" },
  { age: 51, quote: "别被年龄催促，生命有自己的花期。" },
  { age: 52, quote: "经验不是包袱，是照亮下一步的灯。" },
  { age: 53, quote: "慢下来，不是退后，是听见生活更深处。" },
  { age: 54, quote: "真正的富足，是心里有余地。" },
  { age: 55, quote: "走过越多，越要珍惜简单。" },
  { age: 56, quote: "把健康放在前面，把牵挂放在心上。" },
  { age: 57, quote: "温柔不是软弱，是看透以后仍愿意善待。" },
  { age: 58, quote: "日子越往后，越要把自己活成答案。" },
  { age: 59, quote: "路远不慌，心定则安。" },
  { age: 60, quote: "甲子一轮，愿你把时间活成礼物。" },
  { age: 61, quote: "余生不是剩下的时间，是重新拥有的时间。" },
  { age: 62, quote: "放慢脚步，仍可抵达辽阔。" },
  { age: 63, quote: "眼睛看过风景，心也要学会晴朗。" },
  { age: 64, quote: "岁月不只留下皱纹，也留下从容。" },
  { age: 65, quote: "把平安过好，就是很大的福气。" },
  { age: 66, quote: "顺遂不是没有坎坷，是走过以后仍笑得开阔。" },
  { age: 67, quote: "最好的风景，还未到来。" },
  { age: 68, quote: "人生一段一段，爱也一程一程。" },
  { age: 69, quote: "你以为拥有的，可能在去施予时更多。" },
  { age: 70, quote: "古稀不是老去，是把日子过得更通透。" },
  { age: 71, quote: "人生是踏上了就回不了头的路。" },
  { age: 72, quote: "许多事看轻了，心就亮了。" },
  { age: 73, quote: "漫长的路，一步步也能走完。" },
  { age: 74, quote: "家人围坐，就是人间最好的光。" },
  { age: 75, quote: "平凡的脚步，也能走出光亮的征程。" },
  { age: 76, quote: "该热闹时热闹，该安静时安静。" },
  { age: 77, quote: "生命的福气，是仍愿意相信明天。" },
  { age: 78, quote: "把旧时光讲成故事，把新日子过成欢喜。" },
  { age: 79, quote: "一生走来，最珍贵的是心还柔软。" },
  { age: 80, quote: "八十见山河，愿你心有晴空。" },
  { age: 81, quote: "年岁越高，越要把快乐放低门槛。" },
  { age: 82, quote: "活到通透，是知道什么值得挂念。" },
  { age: 83, quote: "不必赶路了，处处都可安住。" },
  { age: 84, quote: "清晨的一碗热茶，也有岁月的厚味。" },
  { age: 85, quote: "身边有人惦记，就是长寿的福分。" },
  { age: 86, quote: "把烦恼看淡，把笑意留长。" },
  { age: 87, quote: "老去不是失去，是把人生酿得更香。" },
  { age: 88, quote: "米寿添福，愿你笑看云起。" },
  { age: 89, quote: "一颗安稳的心，胜过万里晴空。" },
  { age: 90, quote: "九十春秋，愿岁月温厚如初。" },
  { age: 91, quote: "慢慢走，慢慢看，人间仍有好风光。" },
  { age: 92, quote: "记得来路，也把今天过成礼物。" },
  { age: 93, quote: "长寿不是数字，是被爱记得的年月。" },
  { age: 94, quote: "一生的故事，越讲越有光。" },
  { age: 95, quote: "愿你每个醒来的早晨，都有值得期待的小事。" },
  { age: 96, quote: "心中有喜，白发也生光。" },
  { age: 97, quote: "走过百转千回，仍把善意留在人间。" },
  { age: 98, quote: "岁月很长，福气也很长。" },
  { age: 99, quote: "百岁之前，仍有新的风景可遇见。" },
  { age: 100, quote: "百岁不是终点，是一生光阴向你致敬。" },
];

const milestoneAges = [0, 1, 6, 12, 18, 22, 30, 40, 50, 60, 66, 70, 80, 88, 90, 100];
const byAge = new Map(ageQuotes.map((item) => [item.age, item]));

const commerceChannels = {
  jd: {
    label: "京东",
    note: "实物/健康/家居",
    buildUrl: (keyword) => `https://search.jd.com/Search?keyword=${encodeURIComponent(keyword)}&enc=utf-8`,
  },
  taobao: {
    label: "淘宝",
    note: "定制/礼品/服务",
    buildUrl: (keyword) => `https://s.taobao.com/search?q=${encodeURIComponent(keyword)}`,
  },
  dangdang: {
    label: "当当",
    note: "图书/绘本",
    buildUrl: (keyword) => `https://search.dangdang.com/?key=${encodeURIComponent(keyword)}&act=input`,
  },
  ctrip: {
    label: "携程",
    note: "旅行/酒店",
    buildUrl: (keyword) => `https://you.ctrip.com/searchsite/?query=${encodeURIComponent(keyword)}`,
  },
  meituan: {
    label: "美团",
    note: "本地生活",
    buildUrl: (keyword) => `https://www.meituan.com/s/${encodeURIComponent(keyword)}/`,
  },
};

const giftKeywordHints = {
  成长纪念册: "宝宝成长纪念册礼盒",
  柔软安抚物: "婴儿安抚巾 安抚玩偶",
  亲子摄影: "亲子摄影 套餐",
  早教布书: "婴儿早教布书",
  绘本套装: "儿童绘本套装 3-6岁",
  积木拼搭: "儿童积木拼搭玩具",
  自然体验课: "儿童自然体验 亲子活动",
  儿童小背包: "儿童小背包",
  经典少儿读物: "经典少儿读物 小学生",
  科学实验盒: "儿童科学实验套装",
  运动装备: "儿童运动装备",
  书桌小台灯: "儿童学习台灯 护眼",
  兴趣课程: "青少年兴趣课程",
  青春成长书: "青少年成长书籍",
  一日旅行: "城市一日游 亲子",
  高品质文具: "学生文具礼盒",
  人生第一本工具书: "成年礼 成长书籍",
  旅行基金: "旅行礼品卡",
  学习或工作设备: "学生电脑配件 工作背包",
  定制纪念物: "成人礼 定制纪念品",
  职业成长书: "职业成长书籍",
  通勤好物: "通勤礼物 降噪耳机 背包",
  短途放空旅行: "周末短途旅行",
  居家升级: "居家礼物 香薰床品灯具",
  年度体检: "体检套餐 30岁",
  年度体检套餐: "体检套餐 30岁",
  深度阅读书单: "长期主义 经典书单",
  独处体验: "独处旅行 酒店套餐 茶席",
  独处小旅行: "周末独处旅行 酒店",
  效率装备: "人体工学椅 机械键盘 手账",
  健康管理礼: "健康管理礼物 体检 运动",
  茶器或咖啡器具: "茶器 咖啡器具 礼盒",
  家庭影像册: "家庭相册 定制",
  兴趣重启课: "成人兴趣课程 摄影 书法",
  轻户外装备: "轻户外装备 登山杖 防晒帽",
  养生但不夸张的好物: "按摩仪 睡眠枕 护腰靠垫",
  双人旅行: "双人旅行套餐",
  人生访谈录: "口述史 访谈录 定制",
  定制家族相册: "家族相册 定制",
  舒适旅行: "老人舒适旅行",
  舒适慢旅行: "老人舒适慢旅行",
  兴趣班年卡: "老年兴趣班 年卡",
  智能健康设备: "血压计 智能手环 老人",
  健康监测套装: "血压计 智能手环 老人",
  陪伴型旅行: "老人陪伴旅行",
  适老家居: "适老家居 防滑扶手 感应灯",
  家庭团圆宴: "家庭团圆宴 餐厅",
  老照片修复: "老照片修复 放大 装框",
  暖心照护礼: "老人保暖毯 护膝 睡衣",
  大字版读物: "大字版 老年读物",
  家人视频祝福: "祝福视频 制作",
  定期陪伴服务: "陪诊 上门理发 家政",
  家族口述史: "家族口述史 定制",
  寿宴影像: "寿宴摄影摄像",
  安全舒适用品: "老人坐垫 靠枕 助行器",
  每日问候计划: "老人陪伴服务",
  出生纪念盒: "出生纪念盒 手脚印",
  新生儿摄影: "新生儿摄影 套餐",
  亲肤包被: "新生儿包被 纯棉",
  父母手写信: "手写信纸 礼盒",
  成年礼书信: "成年礼 手写信 礼盒",
  第一段独立旅行: "毕业旅行 自由行",
  经典腕表或饰品: "成年礼 腕表 饰品",
  人生工具书: "人生工具书 成长",
  甲子纪念册: "甲子纪念册 定制",
  米寿家宴: "米寿宴 寿宴餐厅",
  全家福摄影: "全家福摄影 套餐",
  祝福视频: "祝福视频 制作",
  舒适保暖礼: "老人保暖礼物 羊毛毯 护膝",
  百岁口述史: "百岁口述史 定制",
  百岁寿宴影像: "百岁寿宴 摄影摄像",
  家族树画卷: "家族树 画卷 定制",
  长期陪伴计划: "老人长期陪伴服务",
};

const stageDetails = [
  {
    min: 0,
    max: 2,
    theme: "初来人间",
    analysis: (age, quote) =>
      `${age}岁更需要被安全感和亲密关系托住。“${quote}”适合提醒家人：这一岁的礼物不在昂贵，而在记录、守护和陪伴。`,
    wish: (age) => `愿${age}岁的你，在被抱起、被回应、被等待里，慢慢相信这个世界。`,
    gifts: [
      { title: "成长纪念册", note: "记录出生、第一次笑、第一次站起，适合做成长期家庭档案。" },
      { title: "柔软安抚物", note: "选择亲肤、安全、容易清洗的陪伴物，比复杂玩具更稳妥。" },
      { title: "亲子摄影", note: "把这一年留成影像，是给孩子和父母共同的时间礼物。" },
      { title: "早教布书", note: "色彩、触感、声音都温和，适合建立最早的感知体验。" },
    ],
  },
  {
    min: 3,
    max: 6,
    theme: "童心启蒙",
    analysis: (age, quote) =>
      `${age}岁开始用提问和模仿理解世界。“${quote}”的重点是保护好奇心，让孩子在玩耍里获得表达、秩序和自信。`,
    wish: (age) => `愿${age}岁的你，眼里有光，脚下有路，每一天都能发现新的答案。`,
    gifts: [
      { title: "绘本套装", note: "选择情绪、自然、习惯类绘本，适合睡前共读。" },
      { title: "积木拼搭", note: "训练空间感和专注力，也给亲子互动留下足够余地。" },
      { title: "自然体验课", note: "动物园、植物园、农场体验，都能把好奇心落到真实世界。" },
      { title: "儿童小背包", note: "让孩子拥有自己的小物件，建立独立感和仪式感。" },
    ],
  },
  {
    min: 7,
    max: 12,
    theme: "少年筑基",
    analysis: (age, quote) =>
      `${age}岁正在形成学习习惯和自我评价。“${quote}”适合把礼物从单纯奖励，转成鼓励探索、阅读和坚持的支持。`,
    wish: (age) => `愿${age}岁的你，既能认真努力，也能痛快玩耍，把每一步都走得明亮。`,
    gifts: [
      { title: "经典少儿读物", note: "用故事打开想象力，比直接讲道理更容易被接住。" },
      { title: "科学实验盒", note: "适合把“为什么”变成可以动手验证的答案。" },
      { title: "运动装备", note: "球拍、护具、跳绳等，让身体记住向上的力量。" },
      { title: "书桌小台灯", note: "实用、长期、带一点成长仪式感，适合入学和生日。" },
    ],
  },
  {
    min: 13,
    max: 17,
    theme: "青春成形",
    analysis: (age, quote) =>
      `${age}岁最需要的是被尊重，而不是被替他决定。“${quote}”适合送给正在寻找方向的人，让他知道坚持和自我理解同样重要。`,
    wish: (age) => `愿${age}岁的你，不急着成为别人期待的样子，先认真成为自己。`,
    gifts: [
      { title: "兴趣课程", note: "音乐、摄影、编程、运动都可以，重点是让热爱长出持续性。" },
      { title: "青春成长书", note: "选择自我认知、时间管理、人物传记类，少说教，多启发。" },
      { title: "一日旅行", note: "博物馆、城市徒步、演出现场，适合打开视野。" },
      { title: "高品质文具", note: "钢笔、笔记本、书包等，让努力有具体的陪伴物。" },
    ],
  },
  {
    min: 18,
    max: 22,
    theme: "成年起程",
    analysis: (age, quote) =>
      `${age}岁开始面对选择、边界和责任。“${quote}”适合提醒他：自由不是远离约束，而是有能力承担自己的路。`,
    wish: (age) => `愿${age}岁的你，敢选择，也敢承担；敢远行，也记得回望来处。`,
    gifts: [
      { title: "人生第一本工具书", note: "关于表达、理财、职业、心理成长，适合作为成年礼。" },
      { title: "旅行基金", note: "一段独立旅程，比单件物品更容易留下成年记忆。" },
      { title: "学习或工作设备", note: "电脑、耳机、双肩包等，帮助他进入新的生活场景。" },
      { title: "定制纪念物", note: "刻字笔、纪念牌、成人礼卡片，适合承载家人的祝福。" },
    ],
  },
  {
    min: 23,
    max: 29,
    theme: "自我扎根",
    analysis: (age, quote) =>
      `${age}岁常常在试错、工作、关系和城市生活之间寻找平衡。“${quote}”适合给他一点确定感：不必完美，但要继续靠近自己。`,
    wish: (age) => `愿${age}岁的你，在现实里站稳，在热爱里发光。`,
    gifts: [
      { title: "职业成长书", note: "沟通、行业认知、长期主义类书籍，适合初入社会后的成长。" },
      { title: "通勤好物", note: "降噪耳机、背包、保温杯，让日常消耗少一点。" },
      { title: "短途放空旅行", note: "周末山海、温泉、城市漫游，帮助从压力中抽身。" },
      { title: "居家升级", note: "床品、香薰、灯具、收纳，让一个人的生活更有秩序。" },
    ],
  },
  {
    min: 30,
    max: 39,
    theme: "坚定向前",
    analysis: (age, quote) =>
      `${age}岁常在责任、事业、家庭和自我之间重新排队。“${quote}”不是催促，而是在提醒：慢一点也可以，但方向要握在自己手里。`,
    wish: (age) => `愿${age}岁的你，不被焦虑推着走，而被真正想要的生活牵引。`,
    gifts: [
      { title: "年度体检", note: "最实际也最有分量，适合表达“我希望你好好照顾自己”。" },
      { title: "深度阅读书单", note: "商业、心理、哲学、家庭关系类，适合沉淀判断力。" },
      { title: "独处体验", note: "一晚好酒店、一次徒步、一次茶席，让他重新听见自己。" },
      { title: "效率装备", note: "人体工学椅、键盘、手账、办公灯，回应真实工作状态。" },
    ],
  },
  {
    min: 40,
    max: 49,
    theme: "中年澄明",
    analysis: (age, quote) =>
      `${age}岁的人生已经有重量，也更需要清明。“${quote}”适合把祝福放在取舍、健康、关系和长期热爱上。`,
    wish: (age) => `愿${age}岁的你，把力气留给真正重要的人和事。`,
    gifts: [
      { title: "健康管理礼", note: "体检、运动课程、筋膜放松工具，实用但不制造焦虑。" },
      { title: "茶器或咖啡器具", note: "给忙碌生活留一个安静角落。" },
      { title: "家庭影像册", note: "把阶段性记忆整理出来，适合伴侣和家人赠送。" },
      { title: "兴趣重启课", note: "书法、摄影、乐器、游泳，让生活不只剩责任。" },
    ],
  },
  {
    min: 50,
    max: 59,
    theme: "半生丰盛",
    analysis: (age, quote) =>
      `${age}岁适合从“承担很多”转向“照顾自己”。“${quote}”提醒他：半生不是句号，而是把经验变成自由的新开始。`,
    wish: (age) => `愿${age}岁的你，身心安稳，心里仍有想去的地方。`,
    gifts: [
      { title: "轻户外装备", note: "登山杖、舒适鞋、防晒帽，适合开启更健康的生活半径。" },
      { title: "养生但不夸张的好物", note: "按摩仪、睡眠枕、护腰靠垫，重在舒适和安全。" },
      { title: "双人旅行", note: "和伴侣、好友或家人的短途旅程，比物品更能制造回忆。" },
      { title: "人生访谈录", note: "把他的经历录音、成册，是很有情感价值的礼物。" },
    ],
  },
  {
    min: 60,
    max: 69,
    theme: "甲子新程",
    analysis: (age, quote) =>
      `${age}岁不是退出人生主场，而是重新拥有时间。“${quote}”适合把礼物送向健康、自由、兴趣和家族连接。`,
    wish: (age) => `愿${age}岁的你，步履从容，心有山水，日子常新。`,
    gifts: [
      { title: "定制家族相册", note: "把子女、孙辈、老照片装订成册，很适合寿礼。" },
      { title: "舒适旅行", note: "节奏慢、服务稳、行程轻的旅程更合适。" },
      { title: "兴趣班年卡", note: "书画、声乐、太极、摄影，让退休后的时间更有形状。" },
      { title: "智能健康设备", note: "血压计、手环等要选操作简单、售后清晰的产品。" },
    ],
  },
  {
    min: 70,
    max: 79,
    theme: "古稀通透",
    analysis: (age, quote) =>
      `${age}岁更重视陪伴、尊严和生活便利。“${quote}”适合提醒晚辈：最好的礼物，是让老人被看见、被倾听、被安心照顾。`,
    wish: (age) => `愿${age}岁的你，有人听你讲旧事，也有人陪你看新景。`,
    gifts: [
      { title: "陪伴型旅行", note: "不赶路、不折腾，重点是有人同行，有人照应。" },
      { title: "适老家居", note: "防滑垫、感应灯、扶手等，实用而贴心。" },
      { title: "家庭团圆宴", note: "把人聚齐，往往比礼物本身更珍贵。" },
      { title: "老照片修复", note: "把旧照片修复、放大、装框，情绪价值很强。" },
    ],
  },
  {
    min: 80,
    max: 89,
    theme: "寿岁安康",
    analysis: (age, quote) =>
      `${age}岁最珍贵的是平安、舒适和亲情的稳定抵达。“${quote}”适合把祝福落在少折腾、多陪伴、常惦记。`,
    wish: (age) => `愿${age}岁的你，晨有热茶，身边有亲人，心里有晴天。`,
    gifts: [
      { title: "暖心照护礼", note: "保暖毯、舒适睡衣、护膝护腰，选择轻便、安全、易清洗。" },
      { title: "大字版读物", note: "诗词、回忆录、地方文化书，阅读门槛更友好。" },
      { title: "家人视频祝福", note: "把远方亲友的话剪成短片，适合寿宴播放。" },
      { title: "定期陪伴服务", note: "陪诊、上门理发、家政清洁等，比一次性礼物更实际。" },
    ],
  },
  {
    min: 90,
    max: 100,
    theme: "百岁光阴",
    analysis: (age, quote) =>
      `${age}岁本身就是家族的光。“${quote}”适合把礼物从“物”转向“记得”：记得他的故事，记得他的辛苦，记得一起相处的时间。`,
    wish: (age) => `愿${age}岁的你，被岁月温柔以待，也被家人郑重珍惜。`,
    gifts: [
      { title: "家族口述史", note: "录下他的故事，整理成书或音频，是能传下去的礼物。" },
      { title: "寿宴影像", note: "请家人录祝福、拍合照、做纪念册，让团聚有留存。" },
      { title: "安全舒适用品", note: "坐垫、靠枕、助行用品等，必须重视安全和适配。" },
      { title: "每日问候计划", note: "比昂贵礼物更重要的是稳定联系和持续陪伴。" },
    ],
  },
];

const specialAgeDetails = {
  0: {
    theme: "新生之礼",
    analysis: "0岁是一个家庭被重新命名的时刻。这一句强调被爱点亮，适合把礼物放在纪念、安全和亲密陪伴上。",
    gifts: [
      { title: "出生纪念盒", note: "保存手脚印、胎毛、第一张照片，适合长期收藏。" },
      { title: "新生儿摄影", note: "记录初来人间的样子，最好选择安全、温和的拍摄方式。" },
      { title: "亲肤包被", note: "实用、安全、每天都会用到。" },
      { title: "父母手写信", note: "写给未来孩子的一封信，比很多商品更有力量。" },
    ],
  },
  18: {
    theme: "成年礼",
    analysis: "18岁最适合讲选择、自由和责任。礼物要有仪式感，也要能陪他进入更大的世界。",
    gifts: [
      { title: "成年礼书信", note: "家人写下祝福、边界和信任，是成年礼的核心。" },
      { title: "第一段独立旅行", note: "让他用自己的眼睛看世界，也练习照顾自己。" },
      { title: "经典腕表或饰品", note: "不必奢侈，重点是可长期佩戴和纪念。" },
      { title: "人生工具书", note: "表达、理财、心理成长、职业启蒙都适合。" },
    ],
  },
  30: {
    theme: "而立之年",
    analysis: "30岁常常同时面对事业、亲密关系、家庭期待和自我焦虑。这一句可以把压力转成行动：未来不是突然来的，是每天一点点累积出来的。",
    gifts: [
      { title: "年度体检套餐", note: "把关心落到身体上，是30岁以后很有分量的礼物。" },
      { title: "独处小旅行", note: "给他一段不用解释、不用迎合的时间。" },
      { title: "职业升级装备", note: "人体工学椅、电脑配件、工作包，回应真实生活压力。" },
      { title: "长期主义书单", note: "关于复利、心态、关系和选择，适合这一阶段慢慢读。" },
    ],
  },
  60: {
    theme: "甲子礼",
    analysis: "60岁不是人生收束，而是时间重新回到自己手里。礼物最好表达尊重，而不是把他只看成需要照顾的人。",
    gifts: [
      { title: "甲子纪念册", note: "把60年的照片、故事、家人祝福做成册。" },
      { title: "舒适慢旅行", note: "节奏轻、住宿好、同行人可靠，体验比打卡重要。" },
      { title: "兴趣课程年卡", note: "书画、摄影、声乐、太极，让时间有新的安排。" },
      { title: "健康监测套装", note: "血压计、手环等要简洁易用，避免复杂功能堆砌。" },
    ],
  },
  88: {
    theme: "米寿添福",
    analysis: "88岁自带吉祥意味，最适合做成全家共同参与的祝寿场景。礼物不宜太复杂，重在喜庆、安稳和团圆。",
    gifts: [
      { title: "米寿家宴", note: "把人聚齐、把祝福说出口，就是最好的主礼。" },
      { title: "全家福摄影", note: "适合装框，也适合做成纪念册。" },
      { title: "祝福视频", note: "让远方晚辈也能参与，寿宴当天播放很动人。" },
      { title: "舒适保暖礼", note: "轻暖外套、羊毛毯、护膝，实用且有温度。" },
    ],
  },
  100: {
    theme: "百岁礼",
    analysis: "100岁是家族记忆里的高山。这一句要表达敬意：一个人的百年，不只是年龄，也是一个家族走来的路。",
    gifts: [
      { title: "百岁口述史", note: "录音、文字、老照片合成一本家族书，能传给下一代。" },
      { title: "百岁寿宴影像", note: "记录亲人团聚、祝福和老人当下的状态。" },
      { title: "家族树画卷", note: "把子孙关系可视化，适合寿宴展示。" },
      { title: "长期陪伴计划", note: "固定探望、问候、陪诊，比一次性礼物更珍贵。" },
    ],
  },
};

const growthPsychologyStages = [
  {
    min: 0,
    max: 2,
    title: "安全依恋",
    text: (age) =>
      `${age}岁最重要的心理任务，是在稳定回应里建立“世界是安全的”这一底层感受。礼物越温柔、越能陪伴照护者共同使用，越容易变成亲密关系的延伸。`,
  },
  {
    min: 3,
    max: 6,
    title: "自主与想象",
    text: (age) =>
      `${age}岁会通过游戏、提问和模仿发展自主感。好的礼物不只是让孩子安静下来，而是允许他选择、表达、尝试和把想象变成行动。`,
  },
  {
    min: 7,
    max: 12,
    title: "胜任感建立",
    text: (age) =>
      `${age}岁开始在学习、运动和同伴关系里确认“我能做到”。礼物可以帮助孩子体验持续练习后的进步，而不是只强化分数和比较。`,
  },
  {
    min: 13,
    max: 17,
    title: "身份认同",
    text: (age) =>
      `${age}岁正在回答“我是谁、我喜欢什么、我和别人有什么不同”。礼物最好给他空间和尊重，支持兴趣探索，而不是替他规定方向。`,
  },
  {
    min: 18,
    max: 22,
    title: "独立与边界",
    text: (age) =>
      `${age}岁进入更大的社会关系，心理上需要把自由、责任和边界慢慢整合起来。适合送能帮助独立生活、独立判断和独立远行的礼物。`,
  },
  {
    min: 23,
    max: 29,
    title: "自我扎根",
    text: (age) =>
      `${age}岁常在工作、亲密关系和城市生活里试错。心理上最需要的不是马上稳定，而是形成自己的节奏、价值感和恢复力。`,
  },
  {
    min: 30,
    max: 39,
    title: "责任与整合",
    text: (age) =>
      `${age}岁会把事业、家庭、健康和自我期待放在同一张桌上重新排序。礼物若能减少消耗、支持健康或给他独处空间，会比单纯热闹更贴心。`,
  },
  {
    min: 40,
    max: 49,
    title: "取舍与清明",
    text: (age) =>
      `${age}岁往往开始从“证明自己”转向“选择什么值得”。这个阶段的心理成长，是把有限的精力放回真正重要的人、事和身体上。`,
  },
  {
    min: 50,
    max: 59,
    title: "重塑与丰盛",
    text: (age) =>
      `${age}岁容易进入人生下半场的重新评估：我还想怎样生活。礼物可以帮助他重新连接兴趣、身体和关系，让经验变成新的自由。`,
  },
  {
    min: 60,
    max: 69,
    title: "新角色适应",
    text: (age) =>
      `${age}岁常伴随退休、家庭角色变化或生活节奏转换。心理上需要被尊重为仍有选择和创造力的人，而不只是被照顾的人。`,
  },
  {
    min: 70,
    max: 79,
    title: "尊严与连接",
    text: (age) =>
      `${age}岁更看重稳定陪伴、身体便利和被认真倾听。礼物的心理价值，在于让他感到自己仍被需要、被看见、被纳入家庭生活。`,
  },
  {
    min: 80,
    max: 89,
    title: "安稳与被记得",
    text: (age) =>
      `${age}岁最需要低负担的舒适感和确定的亲情连接。礼物不宜复杂，能增加安全、减少孤独、唤起美好记忆，往往更合适。`,
  },
  {
    min: 90,
    max: 100,
    title: "生命回顾",
    text: (age) =>
      `${age}岁进入很珍贵的生命回顾阶段。比起新鲜物件，更重要的是帮他整理故事、保留记忆，并让家人郑重地表达感谢。`,
  },
];

const spireStages = [
  {
    min: 0,
    max: 2,
    items: [
      ["S", "身体", "稳定睡眠、亲肤照护和安全环境，是这一岁最重要的幸福底座。"],
      ["P", "情绪", "及时回应哭声和笑声，让孩子感到自己的感受会被接住。"],
      ["I", "投入", "用触摸、声音、颜色和简单游戏，温和打开感知世界的入口。"],
      ["R", "关系", "固定照护者的拥抱、眼神和陪伴，比复杂玩具更有力量。"],
      ["E", "意义", "用照片、手脚印和家人书信，为生命开端留下被珍惜的证据。"],
    ],
  },
  {
    min: 3,
    max: 6,
    items: [
      ["S", "身体", "每天有足够奔跑、攀爬和户外时间，让身体先学会快乐。"],
      ["P", "情绪", "允许提问、害怕和闹情绪，帮助孩子给感受命名。"],
      ["I", "投入", "绘本、积木、角色游戏都适合保护专注和想象力。"],
      ["R", "关系", "用共读和共同游戏替代单向说教，让亲子关系更有温度。"],
      ["E", "意义", "让孩子参与小任务，体验“我也能贡献一点点”。"],
    ],
  },
  {
    min: 7,
    max: 12,
    items: [
      ["S", "身体", "运动、睡眠和视力保护要进入日常节奏。"],
      ["P", "情绪", "把失败解释成练习的一部分，减少分数带来的自我否定。"],
      ["I", "投入", "给阅读、实验、运动或艺术一块稳定的练习时间。"],
      ["R", "关系", "鼓励同伴合作，也保留和家人聊天的安全空间。"],
      ["E", "意义", "让孩子看见努力如何帮助自己和别人，而不只是换来奖励。"],
    ],
  },
  {
    min: 13,
    max: 17,
    items: [
      ["S", "身体", "尊重青春期身体变化，支持规律运动和真实休息。"],
      ["P", "情绪", "少急着纠正，多先听懂他的压力、喜欢和不喜欢。"],
      ["I", "投入", "把兴趣当成自我探索，而不只是升学工具。"],
      ["R", "关系", "给边界，也给信任；给建议，也给选择空间。"],
      ["E", "意义", "通过榜样、旅行和真实项目，帮助他想象未来的自己。"],
    ],
  },
  {
    min: 18,
    max: 22,
    items: [
      ["S", "身体", "建立独立生活的健康习惯：作息、饮食、运动和体检。"],
      ["P", "情绪", "把迷茫视为扩展人生地图的过程，不急着定型。"],
      ["I", "投入", "选择一件能长期练习的能力，让自由有落点。"],
      ["R", "关系", "学习边界、表达和负责，是成年关系的核心课程。"],
      ["E", "意义", "用书信、旅行或成年礼，郑重确认他可以开始选择自己的路。"],
    ],
  },
  {
    min: 23,
    max: 29,
    items: [
      ["S", "身体", "给通勤、睡眠和运动减负，别让年轻变成透支的理由。"],
      ["P", "情绪", "允许试错和阶段性不稳定，建立可恢复的心理弹性。"],
      ["I", "投入", "把职业成长拆成可练习的小能力，减少无方向的焦虑。"],
      ["R", "关系", "在亲密、友情和职场关系里练习真诚表达。"],
      ["E", "意义", "先扎根自己的价值感，再决定要在哪里开花。"],
    ],
  },
  {
    min: 30,
    max: 39,
    items: [
      ["S", "身体", "年度体检、力量训练和高质量睡眠，是抵抗焦虑的现实支点。"],
      ["P", "情绪", "把压力从“我不够好”改写成“我需要重新排序”。"],
      ["I", "投入", "为深度工作、学习或独处留出不被打扰的时间。"],
      ["R", "关系", "把精力留给真正互相滋养的人，也认真经营家庭协作。"],
      ["E", "意义", "用长期主义替代同龄比较，确认自己真正想建设的生活。"],
    ],
  },
  {
    min: 40,
    max: 49,
    items: [
      ["S", "身体", "把健康管理前置，减少硬扛和长期消耗。"],
      ["P", "情绪", "清明不是冷淡，而是知道哪些事不必再证明。"],
      ["I", "投入", "重启一个非功利兴趣，让生活不只剩责任。"],
      ["R", "关系", "在伴侣、孩子、父母和朋友之间建立更诚实的连接方式。"],
      ["E", "意义", "把人生宽度放进选择里：少一点迎合，多一点真正重要。"],
    ],
  },
  {
    min: 50,
    max: 59,
    items: [
      ["S", "身体", "轻户外、拉伸和睡眠修复，帮助身体进入下半场。"],
      ["P", "情绪", "允许自己从承担者变成也需要被照顾的人。"],
      ["I", "投入", "把经验转成作品、课程、旅行或新的学习主题。"],
      ["R", "关系", "给伴侣、老友和子女更多平等交流，而不只是照料安排。"],
      ["E", "意义", "重新回答“我还想怎样生活”，让丰盛继续生长。"],
    ],
  },
  {
    min: 60,
    max: 69,
    items: [
      ["S", "身体", "选择节奏温和、可持续的运动和健康监测。"],
      ["P", "情绪", "退休或角色变化后，给自己新的日程和期待。"],
      ["I", "投入", "书画、摄影、声乐、园艺都能让时间重新有形状。"],
      ["R", "关系", "保持和家族、朋友、社区的稳定连接，不把自己边缘化。"],
      ["E", "意义", "把人生经验变成故事、传承和继续创造的力量。"],
    ],
  },
  {
    min: 70,
    max: 79,
    items: [
      ["S", "身体", "适老家居、慢旅行和安全用品，让行动更安心。"],
      ["P", "情绪", "让日子有小期待：一顿饭、一次散步、一个电话。"],
      ["I", "投入", "保留轻量兴趣，不追求成果，只保留参与感。"],
      ["R", "关系", "认真倾听旧事，也邀请他参与当下家庭生活。"],
      ["E", "意义", "让他感到自己仍被需要、被尊重、被郑重记得。"],
    ],
  },
  {
    min: 80,
    max: 89,
    items: [
      ["S", "身体", "保暖、防滑、易用和少折腾，是礼物选择的第一原则。"],
      ["P", "情绪", "把快乐门槛放低，让每天都有能完成的小欢喜。"],
      ["I", "投入", "大字书、老歌、照片整理和轻手作，都适合低负担参与。"],
      ["R", "关系", "稳定问候和家庭团聚，比热闹一次更重要。"],
      ["E", "意义", "用影像、相册和祝福视频告诉他：你的一生被我们看见。"],
    ],
  },
  {
    min: 90,
    max: 100,
    items: [
      ["S", "身体", "安全、舒适、陪诊和照护安排，比新奇更重要。"],
      ["P", "情绪", "让熟悉的人、物和节奏围绕身边，减少不安。"],
      ["I", "投入", "生命回顾、讲故事、看老照片，是这一阶段珍贵的投入。"],
      ["R", "关系", "把家人聚到他身边，也把远方祝福带到他面前。"],
      ["E", "意义", "把百年光阴整理成家族记忆，让感谢有可以传下去的形状。"],
    ],
  },
];

const stairList = document.querySelector("#stairList");
const milestoneList = document.querySelector("#milestoneList");
const heroAgeForm = document.querySelector("#heroAgeForm");
const heroAgeInput = document.querySelector("#heroAgeInput");
const heroQuotePreview = document.querySelector("#heroQuotePreview");
const ageRange = document.querySelector("#ageRange");
const dockAge = document.querySelector("#dockAge");
const dockQuote = document.querySelector("#dockQuote");
const prevAge = document.querySelector("#prevAge");
const nextAge = document.querySelector("#nextAge");
const backTop = document.querySelector("#backTop");
const ageGuide = document.querySelector("#ageGuide");
const resultTheme = document.querySelector("#resultTheme");
const resultAge = document.querySelector("#resultAge");
const resultWish = document.querySelector("#resultWish");
const resultQuote = document.querySelector("#resultQuote");
const resultAnalysis = document.querySelector("#resultAnalysis");
const resultPsychTitle = document.querySelector("#resultPsychTitle");
const resultPsychText = document.querySelector("#resultPsychText");
const resultGifts = document.querySelector("#resultGifts");
const spireList = document.querySelector("#spireList");

let activeAge = 30;
let expandedAge = null;
let suppressObserverUntil = 0;

function recordLife100Progress(age) {
  const auth = window.HappyKuaAuth;
  if (!auth) return;

  const detail = getAgeDetail(age);
  auth.setModuleData("life100", {
    activeAge: age,
    theme: detail.theme,
    quote: getQuote(age).quote,
    updatedAt: new Date().toISOString(),
    progress: {
      completed: true,
      count: 1,
      lastActivityAt: new Date().toISOString()
    }
  });
  window.HappyKuaAuth?.awardHappinessAction("life100GuideGenerated", {
    moduleId: "life100"
  });
}

function clampAge(value) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return 0;
  return Math.min(100, Math.max(0, number));
}

function getQuote(age) {
  return byAge.get(age) || byAge.get(0);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function getStageDetail(age) {
  return stageDetails.find((stage) => age >= stage.min && age <= stage.max) || stageDetails[0];
}

function getAgeDetail(age) {
  const quote = getQuote(age).quote;
  const stage = getStageDetail(age);
  const special = specialAgeDetails[age] || {};
  const psychology = getGrowthPsychology(age);

  return {
    theme: special.theme || stage.theme,
    analysis: special.analysis || stage.analysis(age, quote),
    psychology: special.psychology || psychology,
    wish: special.wish || stage.wish(age),
    gifts: special.gifts || stage.gifts,
  };
}

function getSpireGuide(age) {
  const stage = spireStages.find((item) => age >= item.min && age <= item.max) || spireStages[0];
  return stage.items;
}

function getGrowthPsychology(age) {
  const stage =
    growthPsychologyStages.find((item) => age >= item.min && age <= item.max) || growthPsychologyStages[0];

  return {
    title: stage.title,
    text: stage.text(age),
  };
}

function getGiftKeyword(gift, age) {
  return gift.keyword || giftKeywordHints[gift.title] || `${age}岁 ${gift.title}`;
}

function getGiftPrice(gift) {
  if (gift.price) return gift.price;

  const text = `${gift.title}${gift.note}`;
  if (/旅行|旅程|酒店|摄影|课程|年卡|家宴|宴|陪伴|陪诊|理发|家政|访谈|口述史|影像|视频|体检/.test(text)) {
    return "约￥300-3000";
  }
  if (/电脑|腕表|设备|按摩|人体工学|血压|手环|健康|户外|家居/.test(text)) {
    return "约￥200-3000";
  }
  if (/书|绘本|读物|文具|台灯|背包|布书|纪念册|相册|纪念盒|手写信|包被|安抚/.test(text)) {
    return "约￥50-500";
  }
  return "按平台实时价";
}

function getGiftChannels(gift) {
  if (gift.channels) return gift.channels;

  const text = `${gift.title}${gift.note}`;
  if (/书|绘本|读物|书单/.test(text)) return ["dangdang", "jd", "taobao"];
  if (/旅行|旅程|酒店|一日游|自由行|小旅行|慢旅行/.test(text)) return ["ctrip", "taobao", "jd"];
  if (/摄影|课程|体验|家宴|宴|陪诊|理发|家政|访谈|口述史|视频|影像|服务/.test(text)) {
    return ["taobao", "meituan"];
  }
  if (/体检|健康|血压|手环|智能/.test(text)) return ["jd", "taobao"];
  return ["jd", "taobao"];
}

function getGiftCommerce(gift, age) {
  const keyword = getGiftKeyword(gift, age);
  const channels = getGiftChannels(gift)
    .map((channelKey) => commerceChannels[channelKey])
    .filter(Boolean);

  return {
    keyword,
    price: getGiftPrice(gift),
    links: channels.map((channel) => ({
      label: channel.label,
      note: channel.note,
      url: channel.buildUrl(keyword),
    })),
  };
}

function renderGiftList(gifts, age) {
  return gifts
    .map((gift) => {
      const commerce = getGiftCommerce(gift, age);
      return `
        <article class="gift-item">
          <div class="gift-head">
            <strong>${escapeHtml(gift.title)}</strong>
            <em>${escapeHtml(commerce.price)}</em>
          </div>
          <span>${escapeHtml(gift.note)}</span>
          <small>搜索词：${escapeHtml(commerce.keyword)}</small>
          <div class="buy-links">
            ${commerce.links
              .map(
                (link) => `
                  <a
                    href="${escapeHtml(link.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="${escapeHtml(link.note)}"
                  >${escapeHtml(link.label)}购买</a>
                `,
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderResultGifts(gifts, age) {
  resultGifts.innerHTML = renderGiftList(gifts, age);
}

function renderSpireGuide(items) {
  spireList.innerHTML = items
    .map(
      ([letter, title, text]) => `
        <article class="spire-item">
          <strong>${escapeHtml(letter)}</strong>
          <div>
            <span>${escapeHtml(title)}</span>
            <p>${escapeHtml(text)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderAgeGuide(age) {
  const item = getQuote(age);
  const detail = getAgeDetail(age);

  resultTheme.textContent = detail.theme;
  resultAge.textContent = String(age);
  resultWish.textContent = detail.wish;
  resultQuote.textContent = item.quote;
  resultAnalysis.textContent = detail.analysis;
  resultPsychTitle.textContent = `成长心理学 / ${detail.psychology.title}`;
  resultPsychText.textContent = detail.psychology.text;

  renderSpireGuide(getSpireGuide(age));
  renderResultGifts(detail.gifts, age);
}

function renderStairs() {
  const fragment = document.createDocumentFragment();

  ageQuotes.forEach(({ age, quote }) => {
    const detail = getAgeDetail(age);
    const step = document.createElement("article");
    step.className = "stair-step";
    step.id = `age-${age}`;
    step.dataset.age = String(age);
    step.style.setProperty("--indent", String(Math.min(126, age * 1.26)));
    step.setAttribute("tabindex", "-1");
    step.innerHTML = `
      <button
        class="stair-summary"
        type="button"
        aria-expanded="false"
        aria-controls="age-detail-${age}"
      >
        <span class="age-number">${age}岁</span>
        <span class="age-quote">${escapeHtml(quote)}</span>
        <span class="expand-mark" aria-hidden="true">+</span>
      </button>
      <div class="stair-detail" id="age-detail-${age}" hidden>
        <div class="detail-grid">
          <section class="detail-panel">
            <p class="detail-kicker">${escapeHtml(detail.theme)}</p>
            <h3>这一岁的解读</h3>
            <p>${escapeHtml(detail.analysis)}</p>
            <div class="psychology-card">
              <strong>成长心理学 / ${escapeHtml(detail.psychology.title)}</strong>
              <span>${escapeHtml(detail.psychology.text)}</span>
            </div>
            <p class="detail-wish">${escapeHtml(detail.wish)}</p>
          </section>
          <section class="detail-panel">
            <p class="detail-kicker">合适送的内容</p>
            <h3>可购买礼物</h3>
            <p class="commerce-note">点击购买会跳转到第三方平台，价格、库存和支付以对方页面为准。</p>
            <div class="gift-list">
              ${renderGiftList(detail.gifts, age)}
            </div>
          </section>
        </div>
      </div>
    `;
    step.querySelector(".stair-summary").addEventListener("click", () => toggleExpandedAge(age));
    fragment.append(step);
  });

  stairList.append(fragment);
}

function renderMilestones() {
  const fragment = document.createDocumentFragment();

  milestoneAges.forEach((age) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.age = String(age);
    button.textContent = `${age}岁`;
    button.addEventListener("click", () => {
      setActiveAge(age);
      ageGuide.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    fragment.append(button);
  });

  milestoneList.append(fragment);
}

function closeExpandedAge(age) {
  const step = document.querySelector(`#age-${age}`);
  if (!step) return;

  const detail = step.querySelector(".stair-detail");
  const summary = step.querySelector(".stair-summary");

  step.classList.remove("is-expanded");
  if (detail) detail.hidden = true;
  if (summary) summary.setAttribute("aria-expanded", "false");
}

function setExpandedAge(age) {
  if (expandedAge !== null && expandedAge !== age) {
    closeExpandedAge(expandedAge);
  }

  expandedAge = age;
  const step = document.querySelector(`#age-${age}`);
  if (!step) return;

  const detail = step.querySelector(".stair-detail");
  const summary = step.querySelector(".stair-summary");

  step.classList.add("is-expanded");
  if (detail) detail.hidden = false;
  if (summary) summary.setAttribute("aria-expanded", "true");
}

function toggleExpandedAge(age) {
  syncActiveUI(age);
  suppressObserverUntil = Date.now() + 900;
  history.replaceState(null, "", `#age-${age}`);

  if (expandedAge === age) {
    closeExpandedAge(age);
    expandedAge = null;
    return;
  }

  setExpandedAge(age);
}

function scrollToAge(age, behavior = "smooth") {
  const activeStep = document.querySelector(`#age-${age}`);
  if (!activeStep) return;

  suppressObserverUntil = Date.now() + 900;
  activeStep.scrollIntoView({ behavior, block: "center" });
  activeStep.focus({ preventScroll: true });
  history.replaceState(null, "", `#age-${age}`);
}

function syncActiveUI(age) {
  const item = getQuote(age);
  activeAge = age;

  heroAgeInput.value = String(age);
  ageRange.value = String(age);
  heroQuotePreview.textContent = `${age}岁 / ${item.quote}`;
  dockAge.textContent = `${age}岁`;
  dockQuote.textContent = item.quote;
  renderAgeGuide(age);

  document.querySelectorAll(".stair-step.is-active").forEach((element) => {
    element.classList.remove("is-active");
  });

  const activeStep = document.querySelector(`#age-${age}`);
  if (activeStep) {
    activeStep.classList.add("is-active");
  }

  milestoneList.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.age) === age);
  });

  prevAge.disabled = age === 0;
  nextAge.disabled = age === 100;
}

function setActiveAge(value, shouldScroll = false, shouldExpand = shouldScroll) {
  const age = clampAge(value);
  syncActiveUI(age);
  recordLife100Progress(age);

  if (shouldExpand) {
    setExpandedAge(age);
  }

  if (shouldScroll) {
    scrollToAge(age);
  }
}

function setupObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      if (Date.now() < suppressObserverUntil) return;

      if (expandedAge !== null) {
        const expandedStep = document.querySelector(`#age-${expandedAge}`);
        const expandedRect = expandedStep?.getBoundingClientRect();
        const expandedIsVisible =
          expandedRect && expandedRect.bottom > 120 && expandedRect.top < window.innerHeight - 120;

        if (expandedIsVisible) return;
      }

      const age = clampAge(visible.target.dataset.age);
      if (age !== activeAge) {
        syncActiveUI(age);
      }
    },
    {
      root: null,
      rootMargin: "-38% 0px -48% 0px",
      threshold: [0.25, 0.5, 0.75],
    },
  );

  document.querySelectorAll(".stair-step").forEach((step) => observer.observe(step));
}

heroAgeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setActiveAge(heroAgeInput.value);
  ageGuide.scrollIntoView({ behavior: "smooth", block: "start" });
});

heroAgeInput.addEventListener("input", () => {
  const age = clampAge(heroAgeInput.value);
  heroQuotePreview.textContent = `${age}岁 / ${getQuote(age).quote}`;
});

ageRange.addEventListener("input", () => {
  setActiveAge(ageRange.value);
});

ageRange.addEventListener("change", () => {
  setActiveAge(ageRange.value);
});

prevAge.addEventListener("click", () => setActiveAge(activeAge - 1));
nextAge.addEventListener("click", () => setActiveAge(activeAge + 1));

backTop.addEventListener("click", () => {
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("happykua:user-changed", () => window.location.reload());

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 560);
});

renderStairs();
renderMilestones();
setupObserver();

const hashAge = window.location.hash.match(/^#age-(\d{1,3})$/);
if (hashAge) {
  const initialAge = clampAge(hashAge[1]);
  setActiveAge(initialAge, false, true);
  window.requestAnimationFrame(() => scrollToAge(initialAge, "auto"));
  window.setTimeout(() => scrollToAge(initialAge, "auto"), 260);
} else {
  setActiveAge(30);
}
