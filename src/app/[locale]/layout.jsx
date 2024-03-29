import { Inter } from "next/font/google";
import localeFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import useTextDirection from "./libs/useTextDirection";
import NavBar from "./components/Nav/NavBar";
import SessionProvider from "../context/NextAuthProvider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import FooterComponent from "./components/Footer";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });
const IranSansFont = localeFont({
  src: "../../assets/fonts/IRANSansX-Medium.ttf",
});
export const metadata = {
  title: "Questions Area",
  description: "Generated by Siavash Kaseb",
};

export default async function RootLayout({ children, params: { locale } }) {
  const direction = useTextDirection(locale);
  const session = await getServerSession();

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        // className={
        //   direction == "rtl" ? IranSansFont.className : inter.className
        // }
        className={IranSansFont.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <StoreProvider>
              <NavBar session={session} />
              {children}
              {/* <FooterComponent /> */}
              <Toaster position="top-center" reverseOrder={false} />
            </StoreProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
