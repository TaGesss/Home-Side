import { redirect } from "next/navigation";

export default function SampleContactPage() {
  redirect("/request-info");
  return null;
}
