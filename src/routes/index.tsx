import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationBand, JsonLd, SectionHeading } from "@/components/content-blocks";
import { services, workflow } from "@/lib/site-data";
import workshopImage from "@/assets/mingzhang-industrial-workshop.jpg";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "B2B 出海数字营销与企业 AI 落地 | 明章" },
      { name: "description", content: "明章面向中国工业制造企业，提供出海官网、工业 SEO/GEO、渠道培育与企业 AI 落地工程，先理解真实业务，再匹配严谨方案。" },
      { property: "og:title", content: "B2B 出海数字营销与企业 AI 落地 | 明章" },
      { property: "og:description", content: "让中国工业企业的专业价值，连接海外市场。" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", name: "温州明章数字科技有限公司", alternateName: "Mingzhang Digital", description: "面向中国 B2B 工业制造企业的出海数字营销与企业 AI 落地服务商。" }, { "@type": "WebSite", name: "明章数字", inLanguage: "zh-CN" }] }} />
    <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <img src={workshopImage} width={1600} height={1000} fetchPriority="high" alt="精密制造车间内，工程人员使用卡尺检验金属零件" className="absolute inset-0 size-full object-cover object-center opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/15" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-between px-5 py-12 lg:px-8 lg:py-16">
        <p className="font-mono text-xs text-primary-foreground/65">MINGZHANG DIGITAL · WENZHOU</p>
        <div className="max-w-4xl reveal-up">
          <h1 className="text-5xl font-semibold leading-[1.12] sm:text-6xl lg:text-7xl">让中国工业企业的专业价值，<span className="text-brand-accent">连接海外市场。</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">我们为中国 B2B 工业制造企业建设出海数字营销底盘，并把 AI 深入真实业务流程。先理解产品、技术与约束，再决定做什么。</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="bg-brand-accent hover:bg-primary-foreground hover:text-primary"><Link to="/contact">从业务问题开始 <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-primary/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/readiness-checker">先做准备度自测</Link></Button></div>
        </div>
        <div className="grid gap-4 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/65 sm:grid-cols-3"><p>工业制造业务理解</p><p>搜索、内容与转化一体</p><p>AI 从小型流程试点开始</p></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading code="01 / POSITION" title="不是先卖服务，而是先判断问题。" answer="工业企业的数字化问题通常彼此关联：官网承接不足、专业内容断层、渠道孤立，或 AI 没有进入可验收的工作流。明章先梳理业务，再匹配项目。" /><div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2"><div className="bg-card p-8"><p className="font-mono text-xs text-brand-accent">适合</p><h3 className="mt-5 text-2xl font-semibold">有真实制造与研发能力，希望建立长期海外认知的企业</h3><p className="mt-4 text-sm text-muted-foreground">包括创始人、外贸负责人和数字化负责人。你们重视技术表达、证据、流程与可维护交付。</p></div><div className="bg-muted p-8"><p className="font-mono text-xs text-muted-foreground">不适合</p><h3 className="mt-5 text-2xl font-semibold">追求廉价铺量、虚假排名或脱离业务的概念演示</h3><p className="mt-4 text-sm text-muted-foreground">我们不承诺搜索排名、成交数量或“万能 AI”，也不接以垃圾询盘和黑帽手段为目标的项目。</p></div></div></section>

    <section className="border-y border-border bg-card"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading code="02 / FRAMEWORKS" title="五种合作框架，对应五类真实卡点。" answer="每个合作都从业务咨询开始。以下不是固定套餐，而是便于双方识别问题范围的项目框架。" /><div className="divide-y divide-border border-y border-border">{services.map((service, index) => <Link key={service.title} to={service.to} className="group grid gap-4 py-7 transition-colors hover:text-brand-accent md:grid-cols-[80px_1fr_1.4fr_32px] md:items-center"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><div><h3 className="text-xl font-semibold">{service.title}</h3><p className="mt-1 text-xs text-muted-foreground">{service.format}</p></div><p className="text-sm leading-relaxed text-muted-foreground">{service.problem}</p><ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading code="03 / METHOD" title="六个阶段，让项目边界与交付过程可检查。" answer="从访谈到交接，每个阶段都要形成可讨论的依据。范围、假设和异常必须被写清楚，而不是藏在口头承诺里。" /><div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">{workflow.map(([code, title, text]) => <article key={code} className="min-h-52 border-b border-r border-border p-7"><p className="font-mono text-xs text-brand-accent">{code}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm text-muted-foreground">{text}</p></article>)}</div><Button asChild variant="outline" className="mt-8"><Link to="/approach">查看完整合作方式 <ArrowRight /></Link></Button></section>
    <ConsultationBand />
  </>;
}
