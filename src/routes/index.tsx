import { createFileRoute } from "@tanstack/react-router";
import { FieldBook } from "@/components/field-book";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FieldBook />;
}
