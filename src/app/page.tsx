import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Welcome to Acme</h1>
      <p>This is the public homepage</p>
      <Link href="/login">Log in</Link>
    </main>
  )
}
