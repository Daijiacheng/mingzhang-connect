import { createFileRoute } from "@tanstack/react-router";
import { CoreServicePage } from "@/components/core-service-page";
import { getCoreService } from "@/lib/service-data";

const service = getCoreService("analytics");

export const Route = createFileRoute("/digital-marketing/analytics")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "工业数据与营销分析 | 明章" },
      { name: "description", content: "连接网站、广告与销售数据，通过工业行为埋点、多触点归因和管理看板，把海外流量转化为可用的决策依据。" },
      { property: "og:title", content: "工业数据与营销分析 | 明章" },
      { property: "og:description", content: "打破数据孤岛，让每一次营销决策有据可查。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mingzhang-connect.lovable.app/digital-marketing/analytics" }],
  }),
  component: Page,
});

function Page() {
  if (!service) return null;
  return <CoreServicePage service={service} />;
}