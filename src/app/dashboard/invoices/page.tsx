import Link from "next/link";
import { sql } from "@vercel/postgres";
import { DeleteInvoice } from "@/app/ui/invoices/forms";
import Search from "@/app/ui/search";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Invoices',
};


export default async function InvoicesPage() {
    const invoices = (await sql`SELECT * FROM invoices`).rows;
    console.log({ invoices });
    return (
        <>
            <h1>Invoice</h1>
            <p>Invoice page</p>
            <div className="flex gap-8 justify-between items-center">
            <Search />
            <Link href="/dashboard/invoices/create">Create invoice</Link>
            </div>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id} className="flex justify-between border-b py-2">
                        <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                            ${invoice.amount / 100}
                        </Link>
                        <DeleteInvoice id={invoice.id} />
                    </li>
                ))}
            </ul>
        </>
    );
}