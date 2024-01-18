"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "@/app/lib/actions";

export default function SignUpForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);
  return (
    <form action={dispatch} className="flex flex-col gap-2">
      <label className="flex flex-col gap-2">
        Name
        <input
          type="text"
          name="name"
          className="text-gray-900"
          aria-describedby="name-error"
        />
      </label>

      {state?.errors?.name && (
        <ul id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors.name.map((error: string) => (
            <li key={error} className="text-red-500 text-sm">
              {error}
            </li>
          ))}
        </ul>
      )}

      <label className="flex flex-col gap-2">
        Email
        <input
          type="email"
          name="email"
          className="text-gray-900"
          aria-describedby="email-error"
        />
      </label>
      {state?.errors?.email && (
        <ul id="email-error" aria-live="polite" aria-attomic="true">
          {state.errors.email.map((error: string) => (
            <li key={error} className="text-red-500 text-sm">
              {error}
            </li>
          ))}
        </ul>
      )}
      <label className="flex flex-col gap-2">
        Password
        <input
          type="password"
          name="password"
          className="text-gray-900"
          aria-describedby="password-error"
        />
      </label>
      {state?.errors?.password && (
        <ul id="password-error" aria-live="polite" aria-atomic="true">
          {state.errors.password.map((error: string) => (
            <li key={error} className="text-red-500 text-sm">
              {error}
            </li>
          ))}
        </ul>
      )}
      <SignUpButton />
    </form>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 hover:bg-gray-900 rounded-md mt-2"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Signing up..." : "Sign up"}
    </button>
  );
}
