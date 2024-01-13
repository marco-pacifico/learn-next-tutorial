import Link from "next/link";

export default function InvoicesPage() {
    return (
        <>
            <h1>Invoice</h1>
            <p>Invoice page</p>
            <Link href="/dashboard/invoices/create">Create invoice</Link>
        </>
    );
}