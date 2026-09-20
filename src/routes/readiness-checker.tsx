import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PageContainer, PageIntro } from "@/components/content-blocks";

export const Route = createFileRoute("/readiness-checker")({ head: () => ({ meta: [{ title: "工业出海营销与 AI 落地准备度自测 | 明章" }, { name: "description", content: "按企业品类、现有渠道、数字化痛点与团队配置，快速判断承接能力、可发现性、触达链路和 AI 介入场景。" }, { property: "og:title", content: "工业出海营销与 AI 落地准备度自测 | 明章" }, { property: "og:description", content: "获得四维现状诊断与客观行动优先级，不推销固定套餐。" }, { property: "og:type", content: "website" }, { property: "og:url", content: "/readiness-checker" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/readiness-checker" }] }), component: Page });

const questions = [
  { key:"category", title:"企业所属工业细分品类", options:["机械设备与自动化","零部件与精密制造","材料与工业耗材","暂不确定或其他"] },
  { key:"channel", title:"现有海外获客渠道", options:["主要依赖展会或转介绍","已有阿里国际站等平台","已有官网但效果有限","官网、搜索与社媒已有协同"] },
  { key:"pain", title:"当前最明显的数字化痛点", options:["专业能力表达不清","流量少且搜索不可见","渠道有触达但转化断裂","内部重复工作希望用 AI 提效"] },
  { key:"team", title:"内部团队配置", options:["暂无专人负责","1 人兼任多个渠道","有外贸与市场人员","有跨部门负责人和技术支持"] },
] as const;

function Page() {
  const [answers,setAnswers]=useState<Record<string,number>>({});
  const complete=Object.keys(answers).length===questions.length;
  const scores=useMemo(()=>{
    const channel=answers.channel ?? 0, team=answers.team ?? 0, pain=answers.pain ?? 0;
    return [
      {name:"承接能力",score:Math.min(92,32+channel*16+team*5)},
      {name:"可发现性",score:Math.min(92,28+channel*15+(pain===1?6:0))},
      {name:"触达链路",score:Math.min(92,30+channel*14+team*6)},
      {name:"AI 介入场景",score:Math.min(92,26+team*14+(pain===3?20:4))},
    ];
  },[answers]);
  const weakest=[...scores].sort((a,b)=>a.score-b.score)[0];
  return <><PageIntro code="TOOL / READINESS CHECK" title="用四个维度，先判断该从哪里开始。" lead="这份自测根据你选择的品类、渠道、痛点与团队配置，生成方向性诊断。结果只在当前浏览器计算，不保存填写内容，也不替代正式业务访谈。" /><PageContainer>{!complete?<div className="mx-auto max-w-4xl space-y-10">{questions.map((question,index)=><fieldset key={question.key} className="border-t border-border pt-6"><legend className="text-xl font-semibold"><span className="mr-4 font-mono text-sm text-brand-accent">0{index+1}</span>{question.title}</legend><div className="mt-5 grid gap-3 sm:grid-cols-2">{question.options.map((option,optionIndex)=><Label key={option} className={`cursor-pointer rounded-xl border p-5 transition-colors ${answers[question.key]===optionIndex?"border-brand-accent bg-card":"border-border hover:border-muted-foreground"}`}><input className="sr-only" type="radio" name={question.key} checked={answers[question.key]===optionIndex} onChange={()=>setAnswers({...answers,[question.key]:optionIndex})}/><span className="text-sm font-medium">{option}</span></Label>)}</div></fieldset>)}<p className="text-sm text-muted-foreground">已完成 {Object.keys(answers).length} / {questions.length} 项。选择完成后自动生成诊断。</p></div>:<div className="mx-auto max-w-5xl reveal-up"><div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs text-brand-accent">YOUR DIAGNOSIS</p><h2 className="mt-3 text-3xl font-semibold">当前优先补齐：{weakest?.name}</h2></div><Button variant="outline" onClick={()=>setAnswers({})}><RotateCcw/>重新自测</Button></div><div className="mt-10 grid gap-5 md:grid-cols-2">{scores.map((item)=><article key={item.name} className="rounded-xl border border-border bg-card p-6"><div className="flex items-center justify-between"><h3 className="font-semibold">{item.name}</h3><span className="font-mono text-brand-accent">{item.score}/100</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-brand-accent transition-all" style={{width:`${item.score}%`}} /></div><p className="mt-4 text-sm text-muted-foreground">{item.score<55?"基础环节存在明显断点，建议先集中完成一个可验证的小范围建设。":item.score<75?"已有一定基础，需要加强环节衔接与持续执行。":"基础相对完整，适合围绕数据反馈继续优化。"}</p></article>)}</div><div className="mt-10 rounded-xl bg-primary p-8 text-primary-foreground"><h2 className="text-2xl font-semibold">建议的第一步</h2><p className="mt-4 text-primary-foreground/70">先用现有资料核对“{weakest?.name}”的真实断点，定义一个 4–8 周内可以检查的改进目标。不要同时更换所有渠道，也不要在责任人和资料尚未明确时直接采购大型系统。</p><Button asChild className="mt-7 bg-brand-accent"><Link to="/contact">带着结果咨询 <ArrowRight/></Link></Button></div></div>}</PageContainer></>;
}