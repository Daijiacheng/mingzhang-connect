export const services = [
  { title: "数字营销战略", format: "战略蓝图与数字资产审计", problem: "明确买家决策链、预算配比与阶段路径，减少碎片化试错。", to: "/digital-marketing/strategy" },
  { title: "搜索引擎与 AI 搜索优化", format: "SEO / GEO 工程", problem: "让技术参数、实体关系与专业证据被搜索引擎和大模型理解。", to: "/digital-marketing/content-search" },
  { title: "付费媒体与效果营销", format: "工业全漏斗投放", problem: "控制无效点击，围绕销售合格线索衡量真实商机成本。", to: "/digital-marketing/paid-media" },
  { title: "工业数据与营销分析", format: "埋点、归因与 BI", problem: "连接网站、广告与销售数据，把流量转化为决策依据。", to: "/digital-marketing/analytics" },
  { title: "工业实体 AI 与 FDE", format: "现场试点与技术部署", problem: "从图纸、配单或质检任务切入，验证安全、质量与人工接管。", to: "/ai-implementation" },
  { title: "工业 B2B 社交媒体营销", format: "专业内容与决策人培育", problem: "用工程内容、技术专家与白皮书建立长期专业信任。", to: "/digital-marketing/channel-marketing" },
] as const;

export const workflow = [
  ["01", "业务访谈", "理解产品、工艺、客户、销售周期与当前约束。"],
  ["02", "现场与资料审查", "核对现有网站、内容资产、渠道数据与内部流程。"],
  ["03", "问题定义", "把模糊目标转成可验证的问题、边界与优先级。"],
  ["04", "小步方案", "确定最小可行范围、关键产物、责任人与验收方式。"],
  ["05", "工程交付", "按阶段交付内容、系统或流程，并保留评审与修订记录。"],
  ["06", "验证与交接", "检查业务结果、异常路径、维护要求与后续决策依据。"],
] as const;