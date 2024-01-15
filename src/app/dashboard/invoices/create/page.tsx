import Link from "next/link";

import { CreateInvoiceForm } from "@/app/ui/invoices/forms";


export default async function CreatePage() {
  return (
    <>
      <h1 className="text-lg">Create Invoice</h1>
      <p>Create invoice page</p>
      <Link href="/dashboard/invoices">Back</Link>
      <CreateInvoiceForm />
    </>
  );
}
