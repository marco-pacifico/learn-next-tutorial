import Link from "next/link";
import { signOut } from '../../auth';

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
        <form action={
          async () => {
            "use server";
            await signOut();
          }
        }>
          <button type="submit">Sign out</button>
        </form>
      </nav>
      <section>{children}</section>
    </main>
  );
}
