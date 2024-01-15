import Link from "next/link";
import { fetchCustomers } from "@/app/lib/data";
import { CreateInvoiceForm } from "@/app/ui/invoices/forms";

export default async function CreatePage() {
  const customers = await fetchCustomers();
  return (
    <>
      <h1 className="text-lg">Create Invoice</h1>
      <p>Create invoice page</p>
      <Link href="/dashboard/invoices">Back</Link>
      <CreateInvoiceForm customers={customers}/>
    </>
  );
}
