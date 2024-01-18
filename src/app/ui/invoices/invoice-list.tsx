import Link from "next/link";
import { DeleteInvoice } from "@/app/ui/invoices/forms";
import { fetchFilteredInvoices } from "@/app/lib/data";

export default async function InvoiceList({
  searchTerm,
  currentPage,
  totalPages
}: {
  searchTerm: string;
  currentPage: number;
  totalPages: number;
}) {

  // If there are no invoices, don't render the list
  if (totalPages === 0) return <p>No invoices found</p>;

  // If user manually enters a page parameter that's greater than total pages, fetch results from the last page
  // If there are zero results, still fetch the first page
  const pageToFetch =
    (currentPage > totalPages ? totalPages : currentPage) || 1;
  const invoices = await fetchFilteredInvoices(searchTerm, pageToFetch);

  return (
    <ul>
      {invoices.map((invoice) => (
        <li key={invoice.id} className="flex justify-between border-b py-2">
          <div className="flex gap-6 w-full">
            <p className="flex-1">{invoice.name}</p>
            <p className="w-20">{invoice.status}</p>
            <p className="w-10 text-right mr-4">${invoice.amount / 100}</p>
            <Link href={`/dashboard/invoices/${invoice.id}/edit`}>Edit</Link>
            <DeleteInvoice id={invoice.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
