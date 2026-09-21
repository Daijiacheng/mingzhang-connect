import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/content-blocks";
import type { CoreService } from "@/lib/service-data";

export function CoreServicePage({ service }: { service: CoreService }) {
  const channelTitle = service.channel === "channel_b" ? "申请实体 AI 落地调研" : "申请出海增长评估";
  const channelText = service.channel === "channel_b" ? "从一个真实现场任务开始，核对数据、设备、权限与人工接管边界。" : "先核对市场、数字资产和销售链路，再判断最值得投入的环节。";
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: service.title, alternateName: service.enTitle, description: service.summary, serviceType: service.title, provider: { "@type": "Organization", name: "温州明章数字科技有限公司" }, audience: { "@type": "Audience", audienceType: service.target } }} />
    <section className="grid-paper border-b border-border"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.45fr_.75fr] lg:px-8 lg:py-28">
      <div><p className="font-mono text-xs text-brand-accent">{service.code} · {service.category}</p><p className="mt-5 font-mono text-xs uppercase text-muted-foreground">{service.enTitle}</p><h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{service.title}</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">{service.summary}</p><div className="mt-8 border-l-2 border-brand-accent pl-5"><p className="font-mono text-xs text-muted-foreground">适用客群</p><p className="mt-2 text-sm leading-relaxed">{service.target}</p></div></div>
      <aside className="self-end border-t border-border bg-card/70"><p className="border-b border-border px-5 py-4 font-mono text-xs text-brand-accent">SERVICE PARAMETERS</p>{service.metrics.map((metric) => <div key={metric.label} className="border-b border-border px-5 py-5"><p className="font-mono text-[11px] text-muted-foreground">{metric.label}</p><p className="mt-2 text-sm font-medium leading-relaxed">{metric.value}</p></div>)}</aside>
    </div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><SectionIntro code="01 / HIGH-ENTROPY STATE" title="这些问题不是单点故障，而是系统正在持续增熵。" text="先识别真实断点，才能避免用更多渠道、内容或工具掩盖原有问题。" /><div className="grid border-l border-t border-border lg:grid-cols-3">{service.pains.map((pain, index) => <article key={pain.title} className="min-h-64 border-b border-r border-border p-7"><span className="font-mono text-xs text-brand-accent">0{index + 1}</span><h3 className="mt-9 text-xl font-semibold">{pain.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pain.description}</p></article>)}</div></section>

    <section className="border-y border-border bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><SectionIntro code="02 / ENGINEERING RESPONSE" title="明章工程解法" text="每项动作都对应明确问题、方法与技术边界，不用概念包装替代现场验证。" inverse /> <div className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">{service.solutions.map((solution, index) => <article key={solution.title} className="grid gap-5 py-7 md:grid-cols-[72px_1fr_1.2fr]"><span className="font-mono text-xs text-brand-accent">0{index + 1}</span><div><h3 className="text-xl font-semibold">{solution.title}</h3><p className="mt-3 font-mono text-[11px] text-brand-accent">{solution.schema}</p></div><p className="text-sm leading-relaxed text-primary-foreground/70">{solution.description}</p></article>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><SectionIntro code="03 / DELIVERABLES" title="交付物以载体、验收与预期影响共同定义。" text="所有指标均作为项目目标，最终基线与验收口径会在诊断阶段根据真实数据确认。" /><div className="overflow-x-auto border border-border"><table className="w-full min-w-[820px] border-collapse text-left text-sm"><thead className="bg-muted font-mono text-xs text-muted-foreground"><tr><th className="p-4 font-medium">交付物</th><th className="p-4 font-medium">载体</th><th className="p-4 font-medium">验收标准</th><th className="p-4 font-medium">预期影响</th></tr></thead><tbody>{service.deliverables.map((item) => <tr key={item.item} className="border-t border-border"><td className="p-4 font-medium">{item.item}</td><td className="p-4 text-muted-foreground">{item.carrier}</td><td className="p-4 text-muted-foreground">{item.acceptance}</td><td className="p-4 text-muted-foreground">{item.impact}</td></tr>)}</tbody></table></div><p className="mt-5 flex gap-2 text-xs text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-accent" />不承诺脱离企业基础、预算与执行条件的绝对结果。</p></section>

    <section className="bg-brand-accent text-brand-accent-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p className="font-mono text-xs text-brand-accent-foreground/65">{service.channel === "channel_b" ? "CHANNEL B" : "CHANNEL A"}</p><h2 className="mt-3 text-3xl font-semibold">{channelTitle}</h2><p className="mt-3 max-w-2xl text-sm text-brand-accent-foreground/80">{channelText}</p></div><Button asChild variant="secondary" size="lg"><Link to="/contact">提交业务背景 <ArrowRight /></Link></Button></div></section>
  </>;
}

function SectionIntro({ code, title, text, inverse = false }: { code: string; title: string; text: string; inverse?: boolean }) {
  return <div className={`mb-10 grid gap-5 border-t pt-5 lg:grid-cols-[180px_1fr] ${inverse ? "border-primary-foreground/20" : "border-border"}`}><p className="font-mono text-xs text-brand-accent">{code}</p><div><h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2><p className={`mt-4 max-w-3xl ${inverse ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{text}</p></div></div>;
}
