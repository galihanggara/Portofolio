import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AETHELGARD - Tech Creative Portfolio',
  description: 'A modern portfolio experience built with Next.js and Tailwind CSS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
