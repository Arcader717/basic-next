import './global.css';
import styles from './index.module.css';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={styles.body}>
            {children}
            <Analytics/>
        </body>
      </html>
    )
  }
