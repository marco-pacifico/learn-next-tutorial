import Link from "next/link";
import { sql } from "@vercel/postgres";
import { deleteInvoice } from "@/app/lib/actions";

export default async function InvoicesPage() {
    const invoices = (await sql`SELECT * FROM invoices`).rows;
    console.log({ invoices });
    return (
        <>
            <h1>Invoice</h1>
            <p>Invoice page</p>
            <Link href="/dashboard/invoices/create">Create invoice</Link>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id}>
                        <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                            {invoice.amount}
                        </Link>
                       
                    </li>
                ))}
            </ul>
        </>
    );
}