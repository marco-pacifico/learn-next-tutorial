import Link from "next/link";
import { sql } from "@vercel/postgres";
import { createInvoice } from "@/app/lib/actions";

export default async function CreatePage() {
  const customers = (await sql`SELECT * FROM customers`).rows;
  return (
    <>
      <h1 className="text-lg">Create Invoice</h1>
      <p>Create invoice page</p>
      <Link href="/dashboard/invoices">Back</Link>
      <form action={createInvoice} className="flex flex-col">
        <label htmlFor="customer" className="flex flex-col">
          Customer
          <select name="customerId" id="customer" required>
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="amount">
          Amount
          <input name="amount" id="amount" type="number" required/>
        </label>
        <label htmlFor="invoice-status">
          Status
          <input
            type="radio"
            name="status"
            id="pending"
            value="pending"
            required
          />
          <label htmlFor="pending">Pending</label>
          <input type="radio" name="status" id="paid" value="paid" required/>
          <label htmlFor="paid">Paid</label>
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
