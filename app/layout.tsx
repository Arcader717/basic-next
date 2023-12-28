import './global.css';
import './index.module.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body class="body">{children}</body>
      </html>
    )
  }
