import { Outlet, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/digital-marketing")({ component: () => <Outlet /> });