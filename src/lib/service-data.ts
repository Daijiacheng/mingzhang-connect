export type ServiceMetric = { label: string; value: string };
export type ServicePain = { title: string; description: string };
export type ServiceSolution = { title: string; description: string; schema: string };
export type ServiceDeliverable = { item: string; carrier: string; acceptance: string; impact: string };
export type ServiceChannel = "channel_a" | "channel_b";

export type CoreService = {
  slug: string;
  to: "/digital-marketing/strategy" | "/digital-marketing/content-search" | "/digital-marketing/paid-media" | "/digital-marketing/analytics" | "/ai-implementation" | "/digital-marketing/channel-marketing";
  category: "出海增长" | "实体 AI";
  code: string;
  title: string;
  enTitle: string;
  summary: string;
  target: string;
  metrics: ServiceMetric[];
  pains: ServicePain[];
  solutions: ServiceSolution[];
  deliverables: ServiceDeliverable[];
  channel: ServiceChannel;
};

export const coreServices: CoreService[] = [
  {
    slug: "strategy", to: "/digital-marketing/strategy", category: "出海增长", code: "SVC_01_STRATEGY", title: "数字营销战略", enTitle: "Digital Marketing Strategy",
    summary: "告别盲目出海与碎片化试错，定制以业务成果为导向的工业数字化出海蓝图。",
    target: "面临出海转型壁垒、询盘成本畸高、亟需建立全球直销渠道的工业装备与零部件制造企业。",
    metrics: [{ label: "DELIVERY CYCLE", value: "3–4 周，阶段性交付" }, { label: "METHODOLOGY", value: "决策链触点反推法 / 全链路数字资产审计" }, { label: "CORE FOCUS", value: "降低试错成本 / 确定性增长路径" }],
    pains: [{ title: "盲目铺渠道与预算浪费", description: "缺乏顶层设计，盲目开通多平台、粗放投流，预算耗尽却仅换来低质量散客。" }, { title: "不匹配工业采购决策链", description: "工业品采购涉及工程师、采购与高层等多重角色，现有内容无法击中各阶段关切。" }, { title: "数字资产不可沉淀", description: "依赖单次展会或零星询盘，缺乏长期可复利的数字化客户资产与品牌信任基石。" }],
    solutions: [{ title: "工业买家画像与决策旅程拆解", description: "对标目标市场，细分技术人员、采购总监与 EPC 决策链，重构精准触达与信任建立模型。", schema: "ICP / BUYER JOURNEY / EPC" }, { title: "出海数字资产全面审计", description: "从网站性能、SEO 架构、GEO 引用到海外社媒声誉，完成量化摸底与竞品对标。", schema: "DIGITAL AUDIT / BENCHMARK" }, { title: "全渠道协同增长蓝图", description: "制定 1–3 年可落地规划，明确阶段里程碑、预算配比与关键指标。", schema: "ROADMAP / KPI / BUDGET" }],
    deliverables: [{ item: "年度/季度工业出海全渠道营销蓝图", carrier: "PDF / 交互看板", acceptance: "具备清晰实施排期与分工", impact: "目标：降低试错预算 40%" }, { item: "全球竞品数字资产与搜索占位审计报告", carrier: "分析报告", acceptance: "覆盖前 5 大直接海外竞品", impact: "明确战略破局点" }, { item: "B2B 采购决策者全链路接触点矩阵", carrier: "SOP 文档", acceptance: "覆盖 3 级以上决策角色", impact: "目标：提升线索转化意向度" }], channel: "channel_a"
  },
  {
    slug: "seo-geo", to: "/digital-marketing/content-search", category: "出海增长", code: "SVC_02_SEOGEO", title: "搜索引擎与 AI 搜索优化", enTitle: "Technical SEO & Generative Engine Optimization",
    summary: "从 Google 关键词占位到 AI 引擎信源锚定，让全球采购商与大模型同时看见中国制造。",
    target: "产品技术参数高、规格复杂，急需从 Google 及生成式 AI 获取海外技术选型线索的制造企业。",
    metrics: [{ label: "SEARCH COVERAGE", value: "300+ 工业长尾精准词库" }, { label: "AI ANCHORING", value: "Top 5 主流大模型信源监测" }, { label: "CODE STANDARD", value: "Schema.org 工业语义结构化" }],
    pains: [{ title: "传统 SEO 大词无效", description: "宽泛词竞争激烈且转化弱，真正带来订单机会的长尾参数词长期缺位。" }, { title: "AI 时代检索隐身", description: "海外工程师使用 AI 工具做选型调研，缺少实体与证据关系的企业难以被识别。" }, { title: "技术底座不合格", description: "传统外贸建站代码臃肿、抓取困难，也缺乏 B2B 工业元数据支持。" }],
    solutions: [{ title: "工业长尾技术意图网络", description: "围绕工程图号、材质牌号、耐温与压力参数等深度长尾词组织全站内容。", schema: "SEARCH INTENT / TOPICAL MAP" }, { title: "GEO 实体关系与知识图谱工程", description: "将企业技术规范转换为结构化实体与证据关系，提升生成式引擎理解和引用机会。", schema: "ENTITY / KNOWLEDGE GRAPH" }, { title: "技术 SEO 调优", description: "优化性能、代码与抓取路径，部署 Google 可验证的工业 Schema 语义标签。", schema: "CORE WEB VITALS / SCHEMA.ORG" }],
    deliverables: [{ item: "300+ 工业高意图技术关键词布局矩阵", carrier: "词库矩阵库", acceptance: "聚焦工程师真实选型意图", impact: "目标：长尾覆盖率提升 300%" }, { item: "全站 GEO / Schema 知识图谱部署工程", carrier: "代码与数据接口", acceptance: "通过结构化数据验证", impact: "提升 AI 抓取效率" }, { item: "主流 AI 搜索品牌信源可见度月报", carrier: "监控看板", acceptance: "月度追踪多模型推荐率", impact: "持续评估推荐曝光" }], channel: "channel_a"
  },
  {
    slug: "paid-media", to: "/digital-marketing/paid-media", category: "出海增长", code: "SVC_03_MEDIA", title: "付费媒体与效果营销", enTitle: "B2B Paid Media & Performance Marketing",
    summary: "精细化管理预算，通过全漏斗工业投放驱动高价值工程询盘。",
    target: "具备出海预算、客单价高、希望缩短海外获客周期的机械装备、高新材料及精密配件企业。",
    metrics: [{ label: "MANAGEMENT STYLE", value: "零无效点击目标 / 严格负词控制" }, { label: "PLATFORMS", value: "Google Search、Display、LinkedIn" }, { label: "FOCUS", value: "SQL 与真实商机成本" }],
    pains: [{ title: "预算沦为学费", description: "投放策略粗糙，点击多来自个人消费者、求职者或无效中介。" }, { title: "触达不到决策层", description: "普通渠道难以直达企业内部具有技术裁决权的关键岗位。" }, { title: "缺乏长期转化培育", description: "B2B 周期长，潜在买家初次点击后流失，缺少多波次再营销机制。" }],
    solutions: [{ title: "工业级 Google Ads 结构", description: "建立严密否定词库，以选型、定制、B2B 供应和技术规范构建投放漏斗。", schema: "SEARCH ADS / NEGATIVE KEYWORDS" }, { title: "LinkedIn 决策链精准定投", description: "基于企业库、职位职能与行业细分，定向触达采购经理与技术负责人。", schema: "ABM / LINKEDIN CAMPAIGN" }, { title: "全生命周期再营销与 CRO", description: "围绕关键参数页访问者，持续提供技术合规与案例证据。", schema: "RETARGETING / CRO" }],
    deliverables: [{ item: "广告账户结构与工业负词库", carrier: "投放系统工程", acceptance: "排除非 B2B 流量", impact: "目标：有效线索率提升 50%" }, { item: "高转化工业落地页交互工程", carrier: "定制页面模板", acceptance: "符合工程信息体验规范", impact: "目标：提升转化率" }, { item: "全渠道 ROAS / CPA 与商机归因报告", carrier: "数据可视化分析", acceptance: "追踪至商机跟进阶段", impact: "获客成本透明可控" }], channel: "channel_a"
  },
  {
    slug: "analytics", to: "/digital-marketing/analytics", category: "出海增长", code: "SVC_04_DATA", title: "工业数据与营销分析", enTitle: "Industrial Data & Marketing Analytics",
    summary: "打破数据孤岛，将模糊的海外流量转化为清晰的商业决策资产。",
    target: "海外多渠道并进、缺乏归因评估机制、希望让每一次营销决策都有据可查的成熟出海企业。",
    metrics: [{ label: "TRACKING", value: "GA4 / GTM 工业交互深度埋点" }, { label: "VISUALIZATION", value: "Looker Studio 动态管理看板" }, { label: "ATTRIBUTION", value: "长周期多触点业务归因" }],
    pains: [{ title: "渠道效果黑盒", description: "无法判断最终订单究竟源于展会、SEO 还是 LinkedIn 触达。" }, { title: "只看表层流量指标", description: "PV、UV 繁杂，但图纸下载、参数查阅等高意向行为无人跟进。" }, { title: "跨系统数据断裂", description: "官网、广告与企业内部邮件或 CRM 数据各自为政。" }],
    solutions: [{ title: "深度交互事件埋点", description: "追踪 3D 展厅、选型计算器、白皮书下载等工业强意图事件。", schema: "GA4 / GTM / EVENT MODEL" }, { title: "多触点全周期归因模型", description: "还原长达数月的 B2B 采购链路，量化不同触点的贡献。", schema: "MULTI-TOUCH ATTRIBUTION" }, { title: "高管专属 BI 仪表盘", description: "剔除虚荣指标，展示商机分布、获客成本与重点区域热度。", schema: "LOOKER STUDIO / CRM" }],
    deliverables: [{ item: "全域用户行为追踪与事件埋点规范", carrier: "技术规范文档", acceptance: "覆盖关键工业转化路径", impact: "目标：关键行为完整记录" }, { item: "高管级工业出海数据动态看板", carrier: "实时交互式 BI", acceptance: "多源数据自动聚合", impact: "缩短决策响应周期" }, { item: "季度渠道能效与线索生命周期归因报告", carrier: "分析报告", acceptance: "揭示渠道真实 ROI", impact: "形成预算优化依据" }], channel: "channel_a"
  },
  {
    slug: "industrial-ai", to: "/ai-implementation", category: "实体 AI", code: "SVC_05_FDE", title: "工业实体 AI 与 FDE 技术部署", enTitle: "Industrial AI & FDE Implementation",
    summary: "前向部署工程师深入工厂现场，以端侧智能与垂直 Agent 助力企业减熵增效。",
    target: "面临非标设计审核缓慢、报价配单繁琐、质检依赖人工经验，亟需通过智能化降本的先进制造企业。",
    metrics: [{ label: "DEPLOYMENT", value: "本地私有化集群 / 边缘工控机 / 工业隔离网络" }, { label: "SECURITY", value: "核心图纸与配方数据物理隔离" }, { label: "INTEGRATION", value: "兼容主流 CAD / ERP / MES" }],
    pains: [{ title: "内部熵增严重", description: "图纸、BOM 表与质检数据标准不一，沉睡在文件服务器中无法复用。" }, { title: "高技能人才被低价值事务占用", description: "资深工程师大量时间用于核对图纸尺寸和手算配单。" }, { title: "通用模型不适配工业现场", description: "公有云 AI 不理解特定工艺公差与非标要求，也可能带来机密泄漏风险。" }],
    solutions: [{ title: "L1 数据治理与工业知识中枢", description: "清洗非标 CAD、PDF 图纸与工艺文档，搭建企业私有检索增强知识引擎。", schema: "RAG / CAD / DOCUMENT AI" }, { title: "L2 垂直 Agent 与端侧计算", description: "部署图纸审核、复杂配单 Agent，并按场景接入边缘视觉质检单元。", schema: "AGENT / EDGE AI / COMPUTER VISION" }, { title: "L3 人机协同减熵流", description: "建立 AI 初筛、专家签字与异常接管流程，按需接入现场能源监测。", schema: "HUMAN-IN-THE-LOOP / MES" }],
    deliverables: [{ item: "企业非标图纸与工艺知识资产数据库", carrier: "本地私有化知识库", acceptance: "检索准确度验证与权限隔离", impact: "目标：知识检索秒级响应" }, { item: "定制化图纸 / 配单 Agent 系统及模型", carrier: "本地软件 / API", acceptance: "以真实任务验证准确率", impact: "目标：配单效率提升 80%" }, { item: "边缘计算环境与人机协同 SOP", carrier: "工控设备 + 规范", acceptance: "现场连续运行与异常接管测试", impact: "目标：持续降低质检漏检" }], channel: "channel_b"
  },
  {
    slug: "social-media", to: "/digital-marketing/channel-marketing", category: "出海增长", code: "SVC_06_SOCIAL", title: "工业 B2B 社交媒体营销", enTitle: "Industrial B2B Social Media Marketing",
    summary: "拒绝娱乐化无效狂欢，以硬核工业内容构建全球工程师与采购决策链的深度信任。",
    target: "希望在海外细分工业赛道树立技术权威、建立长期大客户商务关系的品牌型制造企业。",
    metrics: [{ label: "CORE MEDIA", value: "LinkedIn / YouTube" }, { label: "TARGETING", value: "海外工程师、设备主管、采购决策层" }, { label: "CONVERSION", value: "白皮书 / 技术样品索取" }],
    pains: [{ title: "内容假大空", description: "内容偏向日常自嗨或空洞口号，海外工程师群体直接划走。" }, { title: "缺乏专业视觉表达", description: "视频画质与叙事不足，反而降低海外客商对制造品质的预期。" }, { title: "线索断流", description: "社媒曝光后无法把潜在互动者转化为具备商业价值的商机管道。" }],
    solutions: [{ title: "高管与技术专家 IP 矩阵", description: "建立懂行业、有深度的技术领袖形象，持续进入产业链关键人的专业视野。", schema: "LINKEDIN / EXPERT POSITIONING" }, { title: "硬核工艺与极限测试视频工程", description: "用工业纪实镜头记录设备构造、高速加工与精密组装，以事实说服专业买家。", schema: "YOUTUBE / INDUSTRIAL VIDEO" }, { title: "白皮书沉淀与线索转化", description: "以高价值技术资料为抓手，完成公域互动向许可式邮件培育的过渡。", schema: "LEAD MAGNET / NURTURE" }],
    deliverables: [{ item: "工业品牌社交媒体定位与内容日历", carrier: "运营规划表", acceptance: "锁定精准海外行业标签", impact: "提升互动精准度" }, { item: "工艺展示 / 产品工况视频成片库", carrier: "4K 工业视频库", acceptance: "符合专业工业视觉标准", impact: "提升品牌专业认知" }, { item: "LinkedIn 决策人互动与线索转化工作流", carrier: "SOP 规范", acceptance: "与销售漏斗顺畅衔接", impact: "目标：稳定形成高意向询盘" }], channel: "channel_a"
  }
];

export const getCoreService = (slug: string) => coreServices.find((service) => service.slug === slug);
