import Navbar from "./components/navbar";
import "./globals.css";
import Providers from "./providers";
import localFont from 'next/font/local';

const ptRoot = localFont({
  src: '../../public/fonts/ptroot.woff2',
  display: 'swap',
})

export const metadata = {
  title: "Seamstress",
  description: "git-chad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptRoot.className} overflow-x-hidden`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
