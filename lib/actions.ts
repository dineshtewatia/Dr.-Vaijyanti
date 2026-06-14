"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  country: z.string().optional(),
  treatment: z.string().optional(),
  source: z.string().optional(),
  message: z.string().optional()
});

const adminItemSchema = z.object({
  collection: z.enum(["hospitals", "doctors", "testimonials", "blog_posts"]),
  title: z.string().min(2),
  status: z.string().default("draft"),
  payload: z.string().optional()
});

export async function createLead(formData: FormData): Promise<void> {
  const parsed = leadSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return;
  }

  const supabase = await createSupabaseServerClient();

  if (supabase) {
    await supabase.from("leads").insert({
      ...parsed.data,
      status: "new"
    });
  }

  revalidatePath("/admin");
}

export async function upsertAdminItem(formData: FormData): Promise<void> {
  const parsed = adminItemSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return;
  }

  const supabase = await createSupabaseServerClient();
  let payload = {};

  try {
    payload = parsed.data.payload ? JSON.parse(parsed.data.payload) : {};
  } catch {
    payload = { raw: parsed.data.payload };
  }

  if (supabase) {
    await supabase.from(parsed.data.collection).insert({
      title: parsed.data.title,
      status: parsed.data.status,
      payload
    });
  }

  revalidatePath("/admin");
}

export async function signInAdmin(formData: FormData): Promise<void> {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return;
  }

  redirect("/admin");
}

export async function signOutAdmin() {
  const supabase = await createSupabaseServerClient();
  await supabase?.auth.signOut();
  redirect("/admin");
}
