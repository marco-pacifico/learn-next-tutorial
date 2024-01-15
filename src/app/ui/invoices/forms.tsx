"use client";
import { InvoiceForm, CustomerField } from "@/app/lib/definitions";
import {
  createInvoice,
  updateInvoice,
  deleteInvoice,
  State,
} from "@/app/lib/actions";
import { CreateInvoice, UpdateInvoice, DeleteButton } from "./buttons";
import { useFormState } from "react-dom";

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <DeleteButton />
    </form>
  );
}

export function CreateInvoiceForm({ customers }: { customers: CustomerField[]}) {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState)
  return (
    <form action={dispatch} className="flex flex-col">
      <FormFields state={state} customers={customers}/>
      <CreateInvoice />
    </form>
  );
}

export function EditInvoiceForm({ invoice, customers }: { invoice: InvoiceForm, customers: CustomerField[] }) {
  
  const initialState = { message: "", errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);
  return (
    <form action={dispatch} className="flex flex-col">
      <FormFields invoice={invoice} customers={customers} state={state}/>
      <UpdateInvoice />
    </form>
  );
}

function FormFields({
  state,
  invoice,
  customers,
}: {
  state?: State;
  invoice?: InvoiceForm;
  customers: CustomerField[];
}) {
  const { customer_id, amount, status } = invoice || {
    customer_id: "",
    amount: undefined,
    status: undefined,
  };

  return (
    <>
      <label htmlFor="customer" className="flex flex-col">
        Customer
        <select
          className="dark:bg-slate-900"
          name="customerId"
          id="customer"
          defaultValue={customer_id}
          aria-describedby="customer-error"
        >
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
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state?.errors?.customerId &&
          state.errors.customerId.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <label htmlFor="amount">
        Amount
        <input
          className="dark:bg-slate-900"
          name="amount"
          id="amount"
          type="number"
          defaultValue={amount}
          aria-describedby="amount-error"
        />
      </label>
      <div id="amount-error" aria-live="polite" aria-atomic="true">
        {state?.errors?.amount &&
          state.errors.amount.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <label htmlFor="invoice-status">
        Status
        <input
          type="radio"
          name="status"
          id="pending"
          value="pending"
          defaultChecked={status === "pending"}
          aria-describedby="status-error"
        />
        <label htmlFor="pending">Pending</label>
        <input
          type="radio"
          name="status"
          id="paid"
          value="paid"
          defaultChecked={status === "paid"}
          aria-describedby="status-error"
        />
        <label htmlFor="paid">Paid</label>
        <div id="status-error" aria-live="polite" aria-atomic="true">
        {state?.errors?.status &&
          state.errors.status.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      </label>
    </>
  );
}
