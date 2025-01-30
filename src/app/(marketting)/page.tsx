import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ClerkLoaded, SignedIn, SignedOut } from "@clerk/nextjs";
import { CustomUserButton } from '@/components/user-button'
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-bold text-center">
          {'مشروع التسويق بالذكاء الصناعي '}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <ClerkLoaded>
            <SignedIn>
              <CustomUserButton />
              <h2>{`مرحبا فيك ${user?.fullName || 'زائر جديد'}.`}</h2>
            </SignedIn>
            <SignedOut>
              <Link href={'/sign-in'} className={buttonVariants({})}>
                {'سجل دخول'}
              </Link>
              <Link className={buttonVariants({ variant: 'outline' })} href={'/sign-up'}>
                {'انشاء حساب'}
              </Link>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </main>
  );
}
