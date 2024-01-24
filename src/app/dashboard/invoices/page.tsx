import { Suspense } from "react";
import Link from "next/link";
import Search from "@/app/ui/search";
import InvoiceList from "@/app/ui/invoices/invoice-list";
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
  const searchTerm = searchParams.search || "";
  const currentPage = Number(searchParams.page) || 1; // If page zero or null, default to 1

  return (
    <>
      <h1 className="text-3xl my-4">Invoices</h1>
      <Controls />
      <Suspense
        key={`${searchTerm}-${currentPage}`}
        fallback={<p>Loading...</p>}
      >
        <InvoiceList searchTerm={searchTerm} currentPage={currentPage} />
      </Suspense>
    </>
  );
}

function Controls() {
  return (
    <div className="flex gap-8 justify-between items-center mb-4">
      <Search />
      <Link href="/dashboard/invoices/create" className="px-4 py-2">
        Create invoice
      </Link>
    </div>
  );
}
