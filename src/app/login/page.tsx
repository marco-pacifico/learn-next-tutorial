import Link from "next/link";
import LoginForm from "../ui/login/login-form";

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <Link href="/">Back home</Link>
      <p>Log in to your account</p>
      <p>form goes here...</p>
      <p>For now just go to the dashboard</p>
      <Link href="/dashboard">Go to dashboard</Link>
      <LoginForm />
    </main>
  );
}
