import type { Metadata } from "next";
import CmToInchesClient from "./CmToInchesClient";

export const metadata: Metadata = {
  title: "CM to Inches Converter | T4 Atlas",
  description:
    "Convert centimeters to inches instantly with this free online CM to Inches Converter. Includes formula, examples, and common conversions.",
};

export default function Page() {
  return <CmToInchesClient />;
}