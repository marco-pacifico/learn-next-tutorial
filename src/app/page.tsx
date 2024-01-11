import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Welcome to Acme</h1>
      <p>This is the example for the <Link href="https://nextjs.org/learn/dashboard-app">Next.js Learn Course</Link></p>
      <Link href="/login">Log in</Link>
    </main>
  )
}
