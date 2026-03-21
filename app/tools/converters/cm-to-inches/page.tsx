import type { Metadata } from "next";
import CmToInchesClient from "./CmToInchesClient";
import { tools } from "@/data/tools";

const tool = tools.find((t) => t.slug === "cm-to-inches");

export const metadata: Metadata = {
  title: `${tool?.name} | T4 Atlas`,
  description: `Convert ${tool?.unitFrom} to ${tool?.unitTo} instantly.`,
};

export default function Page() {
  return <CmToInchesClient tool={tool} />;
}