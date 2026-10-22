"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProfile(formData) {
  const name = formData.get("username");
  const email = formData.get("email");
  const bio = formData.get("bio");

  //   check if name and email exists
  if (!name || !email) return { error: "username and email are required" };

  //   check name length
  if (name.trim().length < 3) {
    return { error: "username must be atleast 3 characters" };
  }
  //  check email length

  if (email.trim().length < 3) {
    return { error: "invalid email" };
  }
  //   store name, email and bio data in the database
  try {
    await prisma.profile.create({
      data: {
        name,
        email,
        bio: bio || null,
      },
    });

    // return {
    //   success: true,
    //   message: "Profile created Successfully",
    // };
  } catch (error) {
    return {
      error: "Something went wrong. Please try again",
    };
  }
  revalidatePath("/profile");
  redirect("/profile");
}
