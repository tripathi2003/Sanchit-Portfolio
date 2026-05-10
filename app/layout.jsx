export const metadata = {
  title: "Sanchit Portfolio",
  description: "Converted from HTML to Next.js",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
