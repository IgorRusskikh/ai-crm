import './global.css';

import { HeroUIProvider } from '@heroui/react';
import Sidebar from '../widgets/common/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeroUIProvider className="flex">
          <Sidebar />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
