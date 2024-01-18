import '@/app/ui/globals.css';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard App',
  },
  description: 'Dashboard App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
