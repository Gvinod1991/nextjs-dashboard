import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content='Dashbaord App'></meta>
        <meta name='author' content='Satyanarayan Godti'></meta>
        <meta title='' content='Satyanarayan Godti'></meta>
        <meta name="robots" content="index, follow"></meta>
        <title>Dashboard App</title>
      </head>

      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
