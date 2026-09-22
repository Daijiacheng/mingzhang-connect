import { createFileRoute } from "@tanstack/react-router";
import { CoreServicePage } from "@/components/core-service-page";
import { getCoreService } from "@/lib/service-data";

const service = getCoreService("strategy");

export const Route = createFileRoute("/digital-marketing/strategy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "工业企业出海数字营销战略 | 明章" },
      { name: "description", content: "从买家决策链、数字资产审计到全渠道增长蓝图，为工业制造企业明确出海营销的投入顺序与验证路径。" },
      { property: "og:title", content: "工业企业出海数字营销战略 | 明章" },
      { property: "og:description", content: "先明确市场、买家、预算与阶段目标，再投入渠道建设。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mingzhang-connect.lovable.app/digital-marketing/strategy" }],
  }),
  component: Page,
});

function Page() {
  if (!service) return null;
  return <CoreServicePage service={service} />;
}