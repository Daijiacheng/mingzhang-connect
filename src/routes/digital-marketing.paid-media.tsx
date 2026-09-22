import { createFileRoute } from "@tanstack/react-router";
import { CoreServicePage } from "@/components/core-service-page";
import { getCoreService } from "@/lib/service-data";

const service = getCoreService("paid-media");

export const Route = createFileRoute("/digital-marketing/paid-media")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "工业 B2B 付费媒体与效果营销 | 明章" },
      { name: "description", content: "通过工业搜索广告、LinkedIn 决策链定向、再营销与商机归因，帮助制造企业控制无效点击与真实线索成本。" },
      { property: "og:title", content: "工业 B2B 付费媒体与效果营销 | 明章" },
      { property: "og:description", content: "围绕销售合格线索管理预算，而非只看点击与曝光。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mingzhang-connect.lovable.app/digital-marketing/paid-media" }],
  }),
  component: Page,
});

function Page() {
  if (!service) return null;
  return <CoreServicePage service={service} />;
}