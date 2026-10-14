import type { Metadata } from "next";
import WorldStudy from "@/study/WorldStudy";

export const metadata: Metadata = {
  title: "World study | Trimmy",
  robots: { index: false },
};

export default function WorldStudyPage() {
  return <WorldStudy />;
}
