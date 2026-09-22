import { createFileRoute } from "@tanstack/react-router";
import { ConsultationBand, JsonLd, PageContainer, PageIntro, SectionHeading } from "@/components/content-blocks";

const teamResponsibilities = [
  {
    code: "01",
    title: "业务理解与项目判断",
    text: "从产品、工艺、客户类型、销售周期和内部资源开始访谈，把“想做营销”或“想上 AI”转成边界清楚、能够验证的问题。",
  },
  {
    code: "02",
    title: "内容、渠道与数字工程",
    text: "围绕技术资料、采购决策与海外买家路径组织网站、搜索、内容和触达工作，确保对外表达有事实依据，渠道之间能够衔接。",
  },
  {
    code: "03",
    title: "数据分析与 AI 实施",
    text: "先核对数据来源、工作流程和人工接管要求，再设计分析或自动化方案；从小范围试点开始，不用演示效果替代真实业务验证。",
  },
] as const;

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "关于明章、创始人与团队 | 明章" },
      { name: "description", content: "了解明章源于制造业一线与机械自动化背景的实践基础，以及团队如何围绕业务判断、数字营销与 AI 实施协同工作。" },
      { property: "og:title", content: "关于明章、创始人与团队 | 明章" },
      { property: "og:description", content: "从制造业现场出发，由创始人牵头，把业务理解、数字工程与交付验证放在同一套工作流程中。" },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [{ "@type": "AboutPage", name: "关于明章" }, { "@type": "Person", name: "Jiacheng Dai", jobTitle: "创始人", worksFor: { "@type": "Organization", name: "温州明章数字科技有限公司" }, knowsAbout: ["工业制造", "机械自动化", "B2B 出海数字营销", "企业 AI 落地"] }] }} />
      <PageIntro code="ABOUT / MINGZHANG" title="从制造业现场出发，做有业务依据的数字化工作。" lead="明章由 Jiacheng Dai 创办。他具备制造一线经历与机械自动化技术背景，并在家族制造企业的出海实践中跑通数字营销闭环。" />
      <PageContainer>
        <SectionHeading code="01 / ORIGIN" title="为什么成立明章？" answer="因为工业企业的真实能力，经常被空洞网站、泛行业营销与概念化 AI 掩盖。明章希望把技术事实、买家需求和数字工程放在同一张桌上讨论。" />
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-base text-muted-foreground">
            <p>创始人的工作背景来自制造现场，而非单纯的广告代理行业。这意味着项目讨论会自然进入产品结构、加工流程、质量要求、交付风险和客户决策，而不只停留在页面风格或流量指标。</p>
            <p>在家族制造企业的出海实践中，他逐步验证了从专业表达、网站承接、内容搜索到线索反馈的闭环。明章由此形成：不复制消费品打法，不用搜索排名话术替代经营判断，也不把通用聊天界面包装成企业 AI。</p>
            <p>现阶段公开资料仅陈述以上事实。成立年份、办公地址、资质、团队规模和客户案例将在取得可公开资料后补充，不做推断或包装。</p>
          </div>
          <aside className="rounded-lg border border-border bg-card p-7">
            <p className="font-mono text-xs text-brand-accent">WORKING PRINCIPLES</p>
            <ul className="mt-6 grid gap-5 text-sm">
              <li><strong className="block">事实先于表达</strong><span className="text-muted-foreground">先确认工艺、参数与边界，再做内容。</span></li>
              <li><strong className="block">问题先于方案</strong><span className="text-muted-foreground">先定义业务卡点，再选择渠道和技术。</span></li>
              <li><strong className="block">交付必须可接管</strong><span className="text-muted-foreground">客户最终能理解、使用与维护产物。</span></li>
            </ul>
          </aside>
        </div>

        <section className="mt-20 border-t border-border pt-16 lg:mt-28 lg:pt-20" aria-labelledby="team-heading">
          <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs text-brand-accent">02 / OUR TEAM</p>
            <div>
              <h2 id="team-heading" className="text-3xl font-semibold leading-tight sm:text-4xl">我们的团队</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">明章采用创始人直接负责、按项目问题组织专业协作的工作方式。客户面对的不是层层转述的销售团队，而是参与判断与交付的人。</p>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-border lg:grid-cols-[1.15fr_1.85fr]">
            <article className="border-b border-r border-border bg-primary p-8 text-primary-foreground lg:p-10">
              <p className="font-mono text-xs text-brand-accent">FOUNDER &amp; PROJECT LEAD</p>
              <h3 className="mt-8 text-2xl font-semibold">Jiacheng Dai</h3>
              <p className="mt-2 text-sm text-primary-foreground/60">创始人 / 项目负责人</p>
              <p className="mt-8 text-sm leading-relaxed text-primary-foreground/75">具备制造一线与机械自动化技术背景，负责前期业务访谈、问题定义、方案边界和关键交付评审。其职责不是替客户做概念包装，而是确保每项工作能够回到产品事实、买家决策和实际流程。</p>
            </article>
            <div className="grid md:grid-cols-3">
              {teamResponsibilities.map((item) => (
                <article key={item.code} className="min-h-72 border-b border-r border-border bg-card/60 p-7">
                  <p className="font-mono text-xs text-brand-accent">{item.code}</p>
                  <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6 border-b border-l border-r border-border px-7 py-8 md:grid-cols-[180px_1fr] lg:px-10">
            <p className="font-mono text-xs text-brand-accent">HOW WE WORK</p>
            <div>
              <h3 className="text-lg font-semibold">谁负责判断，谁参与沟通，谁对交付负责。</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">项目根据实际范围配置协作角色，并在启动时明确负责人、阶段产物、评审节点与验收标准。当前未公开的成员姓名、团队人数和个人履历不会在官网中推断或包装；待资料确认后再补充。</p>
            </div>
          </div>
        </section>
      </PageContainer>
      <ConsultationBand />
    </>
  );
}