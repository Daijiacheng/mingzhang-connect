export const services = [
  { title: "出海路线与首轮验证", format: "咨询与策略方案", problem: "明确目标买家、优先区域、价值表达与首轮渠道，避免资源平均分配。", to: "/digital-marketing" },
  { title: "工业企业国际站", format: "定制设计开发与内容交付", problem: "把工艺、参数、质量体系与应用能力组织成海外买家可验证的决策依据。", to: "/digital-marketing/websites" },
  { title: "工业内容与 SEO / GEO", format: "持续月度服务", problem: "让专业内容能被传统搜索与生成式搜索理解、索引、引用。", to: "/digital-marketing/content-search" },
  { title: "社媒、邮件与行业达人", format: "专项运营与触达方案", problem: "在工业长决策周期中持续触达工程师与采购角色，积累可信接触。", to: "/digital-marketing/channel-marketing" },
  { title: "企业 AI 落地工程", format: "FDE 试点与集成", problem: "从一个真实流程切入，验证任务质量、异常处理、人工接管与维护责任。", to: "/ai-implementation" },
] as const;

export const workflow = [
  ["01", "业务访谈", "理解产品、工艺、客户、销售周期与当前约束。"],
  ["02", "现场与资料审查", "核对现有网站、内容资产、渠道数据与内部流程。"],
  ["03", "问题定义", "把模糊目标转成可验证的问题、边界与优先级。"],
  ["04", "小步方案", "确定最小可行范围、关键产物、责任人与验收方式。"],
  ["05", "工程交付", "按阶段交付内容、系统或流程，并保留评审与修订记录。"],
  ["06", "验证与交接", "检查业务结果、异常路径、维护要求与后续决策依据。"],
] as const;