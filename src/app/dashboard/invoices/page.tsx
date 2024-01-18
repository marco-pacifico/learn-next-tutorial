import Link from "next/link";
import { DeleteInvoice } from "@/app/ui/invoices/forms";
import Search from "@/app/ui/search";
import { fetchFilteredInvoices } from "@/app/lib/data";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Invoices",
};

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
    page?: string;
  };
}) {
  const search = searchParams.search || "";
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const invoices = await fetchFilteredInvoices(search, currentPage);

  return (
    <>
      <h1 className="text-3xl my-4">Invoices</h1>

      <div className="flex gap-8 justify-between items-center mb-4">
        <Search />
        <Link href="/dashboard/invoices/create" className="px-4 py-2">Create invoice</Link>
      </div>

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
    </>
  );
}
