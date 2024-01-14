import { EditInvoiceForm } from "@/app/ui/invoices/invoice-form";
import { fetchInvoiceById } from "@/app/lib/data";

export default async function EditInvoice({ params }: { params: { id: string } }) {
    const invoice = await fetchInvoiceById(params.id);
    console.log({invoice});
  return (
    <>
      <h1>Edit Invoice {params.id} </h1>
      <p>Edit invoice page</p>
      <EditInvoiceForm invoice={invoice} />
    </>
  );
}
