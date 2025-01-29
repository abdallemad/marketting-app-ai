import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-bold text-center">
          {'مشروع التسويق بالذكاء الصناعي '}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Link href={'/sign-in'} className={buttonVariants({})}>
            {'سجل دخول'}
          </Link>
          <Link className={buttonVariants({variant:'outline'})} href={'/sign-up'}>
            {'انشاء حساب'}
          </Link>
        </div>
      </div>
    </main>
  );
}
