"use client";
import { useFormStatus } from "react-dom";

export function CreateInvoice() {
  const { pending } = useFormStatus(); 
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {pending ? "Creating..." : "Create"}
    </button>

  );
}

export function UpdateInvoice() {
  const { pending } = useFormStatus(); 
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {pending ? "Updating..." : "Update"}
    </button>

  );
}

