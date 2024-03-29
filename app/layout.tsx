import { Toaster } from 'react-hot-toast';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noah Han',
  description: "Noah Han's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Toaster position='bottom-center' reverseOrder={true} />
        {children}
      </body>
    </html>
  );
}
