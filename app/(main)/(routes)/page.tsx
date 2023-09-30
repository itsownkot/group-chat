import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
      <h1 className="text-3xl font-bold text-red-500">hello</h1>
      <Button>Button</Button>
    </>
  );
}
