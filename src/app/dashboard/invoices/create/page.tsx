import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function CreatePage() {
  const customers = (await sql`SELECT * FROM customers`).rows;
  return (
    <>
      <h1 className="text-lg">Create Invoice</h1>
      <p>Create invoice page</p>
      <Link href="/dashboard/invoices">Back</Link>
      <form className="flex flex-col">
        <label htmlFor="customer" className="flex flex-col">
          Customer
          <select name="customer" id="customer">
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="amount">
          Amount
          <input id="amount" type="number" />
        </label>
        <label htmlFor="invoice-status">
          Status
          <input
            type="radio"
            name="invoice-status"
            id="pending"
            value="pending"
          />
          <label htmlFor="pending">Pending</label>
          <input type="radio" name="invoice-status" id="paid" value="paid" />
          <label htmlFor="paid">Paid</label>
        </label>
      </form>
    </>
  );
}
