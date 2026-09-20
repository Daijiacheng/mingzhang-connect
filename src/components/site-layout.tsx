import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/digital-marketing", label: "出海营销" },
  { to: "/ai-implementation", label: "AI 落地" },
  { to: "/approach", label: "合作方式" },
  { to: "/readiness-checker", label: "准备度自测" },
  { to: "/insights", label: "洞察" },
  { to: "/about", label: "关于" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="明章首页">
            <span className="grid size-9 place-items-center bg-primary font-mono text-sm font-bold text-primary-foreground">明</span>
            <span><strong className="block text-lg leading-none">明章</strong><small className="font-mono text-[10px] text-muted-foreground">MINGZHANG DIGITAL</small></span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="主导航">
            {nav.map((item) => <Link key={item.to} to={item.to} className={`text-sm transition-colors hover:text-brand-accent ${pathname.startsWith(item.to) ? "text-brand-accent" : "text-foreground"}`}>{item.label}</Link>)}
          </nav>
          <div className="hidden lg:block"><Button asChild><Link to="/contact">业务咨询 <ArrowRight /></Link></Button></div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "关闭菜单" : "打开菜单"}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="移动端导航"><div className="grid gap-1">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-base">{item.label}</Link>)}<Button asChild className="mt-4"><Link to="/contact" onClick={() => setOpen(false)}>业务咨询</Link></Button></div></nav>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
          <div><p className="text-2xl font-semibold">明晰表达，信息成章。</p><p className="mt-4 max-w-lg text-sm text-primary-foreground/65">让中国工业企业的专业价值，连接海外市场。我们从真实业务、产品技术与工作流程出发。</p></div>
          <div><p className="font-mono text-xs text-primary-foreground/50">EXPLORE</p><div className="mt-4 grid gap-2 text-sm"><Link to="/digital-marketing">出海数字营销</Link><Link to="/ai-implementation">企业 AI 落地</Link><Link to="/approach">合作方式</Link><Link to="/insights">洞察栏目</Link></div></div>
          <div><p className="font-mono text-xs text-primary-foreground/50">CONTACT</p><div className="mt-4 grid gap-2 text-sm"><Link to="/contact">提交业务需求</Link><Link to="/privacy">隐私与商业保密</Link><span className="text-primary-foreground/50">联系方式待正式资料补充</span></div></div>
        </div>
        <div className="border-t border-primary-foreground/15"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between lg:px-8"><span>© 2026 温州明章数字科技有限公司</span><span>备案信息待补充</span></div></div>
      </footer>
    </div>
  );
}