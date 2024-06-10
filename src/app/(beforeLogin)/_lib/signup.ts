"use server";

import { redirect } from "next/navigation";

export default async function onSubmit(prevState: any, formData: FormData) {
  if (!formData.get("id")) {
    return { message: "no_id" };
  }

  if (!formData.get("name")) {
    return { message: "no_name" };
  }

  if (!formData.get("password")) {
    return { message: "no_password" };
  }

  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (response.status === 403) {
      return { message: "already_exist" };
    }

    shouldRedirect = true;
  } catch (error) {
    console.error(error);
    return;
  }
  if (shouldRedirect) {
    redirect("/home");
  }
}
