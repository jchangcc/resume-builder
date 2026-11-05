import { ResumePage } from "@/components/ResumePage";
import { publicExperience } from "@/lib/resume";

export default function Page() {
  return (
    <ResumePage
      variant="public"
      documentTitle="resume"
      experience={publicExperience}
    />
  );
}
