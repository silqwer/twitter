import { redirect } from "next/navigation";
import Main from "./_component/Main";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";

export default async function BeforeLoginPage() {
  const session = await getServerSession(authOptions);
  if (session && session.user) {
    redirect("/home");
  }
  return <Main />;
}
