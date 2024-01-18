import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Welcome to Acme</h1>
      <p>This is the public homepage</p>
      <div className="flex flex-col gap-1 pt-4">
        <Link href="/login">Log in</Link>
        <Link href="/signup">Sign up</Link>
      </div>
    </main>
  );
}
