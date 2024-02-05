import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/navigations";
import { useTranslations } from "next-intl";

const SideNav = () => {
  const t = useTranslations("Index");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Question Area</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link href={"/auth/signin"}>{t("signIn")}</Link>
          <Link href={"/signup"}>{t("signUp")}</Link>
          <Link href={"/questions"}>{t("questions")}</Link>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
