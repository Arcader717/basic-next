import './global.css';
import styles from './index.module.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={styles.body}>{children}</body>
      </html>
    )
  }
