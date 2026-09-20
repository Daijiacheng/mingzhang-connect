import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageIntro({ code, title, lead, children }: { code: string; title: string; lead: string; children?: React.ReactNode }) {
  return <section className="grid-paper border-b border-border"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><p className="font-mono text-xs text-brand-accent">{code}</p><h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">{lead}</p>{children}</div></section>;
}

export function SectionHeading({ code, title, answer }: { code: string; title: string; answer: string }) {
  return <div className="mb-10 grid gap-5 border-t border-border pt-5 lg:grid-cols-[180px_1fr]"><p className="font-mono text-xs text-brand-accent">{code}</p><div><h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2><p className="mt-4 max-w-3xl text-muted-foreground">{answer}</p></div></div>;
}

export function FeatureGrid({ items }: { items: { title: string; text: string; tag?: string }[] }) {
  return <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">{items.map((item, index) => <article key={item.title} className="min-h-56 border-b border-r border-border bg-card/60 p-7"><p className="font-mono text-xs text-brand-accent">{item.tag ?? String(index + 1).padStart(2, "0")}</p><h3 className="mt-8 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div>;
}

export function BulletList({ items }: { items: string[] }) {
  return <ul className="grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-accent"/><span>{item}</span></li>)}</ul>;
}

export function ConsultationBand({ title = "先把真实问题说清楚，再决定做什么。", text = "告诉我们你的产品、市场与当前卡点。我们会先做人工判断，不用固定套餐套你的业务。" }: { title?: string; text?: string }) {
  return <section className="bg-brand-accent text-brand-accent-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><h2 className="text-3xl font-semibold">{title}</h2><p className="mt-3 max-w-2xl text-sm text-brand-accent-foreground/80">{text}</p></div><Button asChild variant="secondary" size="lg"><Link to="/contact">提交业务背景 <ArrowRight /></Link></Button></div></section>;
}

export const PageContainer = ({ children }: { children: React.ReactNode }) => <div className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-24">{children}</div>;

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}