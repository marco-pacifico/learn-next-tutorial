import { sql } from '@vercel/postgres';

export default async function DashboardHomePage() {
    const users = (await sql`SELECT * FROM users`).rows;
    const invoices = (await sql`SELECT * FROM invoices`).rows;
    const customers = (await sql`SELECT * FROM customers`).rows;
  



    return (
        <>
            <h1>Dashboard Home</h1>
            <p>Dashboard home page</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id}>{invoice.amount}</li>
                ))}
            </ul>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </>
    );
};