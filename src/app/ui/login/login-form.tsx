'use client';
 
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
 
export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
 
  return (
    <form action={dispatch} className="space-y-3">
      <div >
        <h1 >
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label

              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              
            </div>
          </div>
          <div className="mt-4">
            <label
              
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <button className="mt-4 w-full" aria-disabled={pending}>
      Log in
    </button>
  );
}