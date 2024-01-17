import Link from "next/link";
import SignUpForm from "@/app/ui/signup/sign-up-form";

export default function SignUpPage() {
    return (
        <>
            <h1>Sign Up</h1>
            <p>Sign up to access your dashboard</p>
            <SignUpForm />
            <Link href="/" className="px-4 py-2 hover:bg-gray-900 rounded-md mt-2 block w-full text-center">Cancel</Link>
        </>
    )
}