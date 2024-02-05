import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigations";
export default createMiddleware({
  defaultLocale: "fa",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fa|en)/:path*"],
};
