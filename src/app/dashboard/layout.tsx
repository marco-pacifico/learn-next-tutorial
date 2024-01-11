import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav>
        <p>Dashboard Nav</p>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/invoices">Invoices</Link>
        <Link href="/dashboard/customers">Customers</Link>
        <Link href="/login">Logout</Link>
      </nav>
      <section>{children}</section>
    </main>
  );
}
