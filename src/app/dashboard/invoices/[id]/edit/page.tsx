import { EditInvoiceForm } from "@/app/ui/invoices/forms";
import { fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function EditInvoice({
  params,
}: {
  params: { id: string };
}) {
  const invoice = await fetchInvoiceById(params.id);
  if (!invoice) {
    return notFound();
  }
  return (
    <>
      <h1>Edit Invoice {params.id} </h1>
      <p>Edit invoice page</p>
      <EditInvoiceForm invoice={invoice} />
    </>
  );
}
