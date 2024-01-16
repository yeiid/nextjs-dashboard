import '@/app/ui/global.css';
import { montserrat } from './ui/font';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${montserrat.className} antialiased`}>
        esto es parte del layaout
        {children}
        </body>
    </html>
  );
}