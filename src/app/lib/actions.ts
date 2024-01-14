"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// Create a schema for the form data
// validate that the data from your form aligns with the expected types in your database
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["paid", "pending"]),
  date: z.string(),
});
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  // Insert the invoice into the database
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;

    // Revalidate the invoices page
    revalidatePath("/dashboard/invoices");
    // Redirect to the invoices page
    redirect("/dashboard/invoices");
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;

  // Update the invoice in the database
  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
    `;

    // Revalidate the invoices page
    revalidatePath("/dashboard/invoices");
    // Redirect to the invoices page
    redirect("/dashboard/invoices");
}

