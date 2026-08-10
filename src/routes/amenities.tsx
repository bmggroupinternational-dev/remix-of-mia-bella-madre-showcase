import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/amenities")({
  beforeLoad: () => {
    throw redirect({ to: "/apartments", hash: "amenities" });
  },
  component: () => null,
});
