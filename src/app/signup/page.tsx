import Link from "next/link";
import SignUpForm from "@/app/ui/signup/sign-up-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function SignUpPage() {
    return (
        <>
            <Link href="/" className="px-4 py-2 hover:bg-gray-900 rounded-md mt-2 block w-full text-center">Cancel</Link>
            <h1>Sign Up</h1>
            <p>Sign up to access your dashboard</p>
            <SignUpForm />
        </>
    )
}