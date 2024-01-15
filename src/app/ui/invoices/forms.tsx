"use client";
import { InvoiceForm } from "@/app/lib/definitions";
import { fetchCustomers } from "@/app/lib/data";
import { createInvoice, updateInvoice, deleteInvoice } from "@/app/lib/actions";
import {CreateInvoice, UpdateInvoice, DeleteButton} from "./buttons";
import { useFormState } from "react-dom";

export  function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <DeleteButton />
    </form>
  );
}

export function CreateInvoiceForm() {
  const initialState = {
    messsage: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(createInvoice, initialState);
  return (
    <form action={dispatch} className="flex flex-col">
      <FormFields />
      <CreateInvoice />
    </form>
  );
}

export function EditInvoiceForm({ invoice }: { invoice: InvoiceForm }) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  return (
    <form action={updateInvoiceWithId} className="flex flex-col">
      <FormFields invoice={invoice} />
      <UpdateInvoice />
    </form>
  );
}

async function FormFields({ invoice }: { invoice?: InvoiceForm }) {
  const customers = await fetchCustomers();
  const { customer_id, amount, status } = invoice || {
    customer_id: "",
    amount: undefined,
    status: undefined,
  };

  return (
    <>
      <label htmlFor="customer" className="flex flex-col">
        Customer
        <select className="dark:bg-slate-900" name="customerId" id="customer" defaultValue={customer_id}>
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="amount">
        Amount
        <input
          className="dark:bg-slate-900"
          name="amount"
          id="amount"
          type="number"
          defaultValue={amount}
        />
      </label>
      <label htmlFor="invoice-status">
        Status
        <input
          type="radio"
          name="status"
          id="pending"
          value="pending"
          defaultChecked={status === "pending"}
        />
        <label htmlFor="pending">Pending</label>
        <input
          type="radio"
          name="status"
          id="paid"
          value="paid"
          defaultChecked={status === "paid"}
        />
        <label htmlFor="paid">Paid</label>
      </label>
    </>
  );
}
