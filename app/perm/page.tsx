import type { Metadata } from "next";
import { ResumePage } from "@/components/ResumePage";
import { permExperience } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Jason Chang — PERM Resume",
  description:
    "Employment resume with mm/dd/yyyy dates for a PERM / immigration packet.",
};

export default function PermResumePage() {
  return (
    <ResumePage
      variant="perm"
      documentTitle="Jason_Chang_Resume_PERM_dated"
      experience={permExperience}
    />
  );
}
