import { deleteInvoice } from "@/app/lib/actions";

export default function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button type="submit">Delete</button>
    </form>
  );
}
