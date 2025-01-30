// components/CustomUserButton.tsx
'use client';

import { useUser, useClerk, UserButton, SignUp, SignIn } from '@clerk/nextjs';
import { Button } from '@/components/ui/button'; // shadcn-ui button
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; // shadcn-ui avatar
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'; // shadcn-ui dialog
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // shadcn-ui dropdown
import { Settings, LogOut, User, Users } from 'lucide-react'; // Icons for dropdown items

export function CustomUserButton() {
  const { user, isSignedIn } = useUser();
  const { signOut, openUserProfile, openOrganizationProfile } = useClerk();

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} alt={user?.username || 'مستخدم'} />
              <AvatarFallback>
                {user?.username?.charAt(0).toUpperCase() || 'م'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          {isSignedIn ? (
            <>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => openUserProfile()}
              >
                <User className="mr-2 h-4 w-4" />
                <span>الملف الشخصي</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => openOrganizationProfile()}
              >
                <Users className="mr-2 h-4 w-4" />
                <span>إدارة المؤسسة</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => signOut()}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>تسجيل الخروج</span>
              </DropdownMenuItem>
            </>
          ) : (
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>تسجيل الدخول</span>
              </DropdownMenuItem>
            </DialogTrigger>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isSignedIn ? 'إدارة الحساب' : 'تسجيل الدخول'}</DialogTitle>
        </DialogHeader>
        {isSignedIn ? (
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => openUserProfile()}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>إدارة الحساب</span>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => openOrganizationProfile()}
            >
              <Users className="mr-2 h-4 w-4" />
              <span>إدارة المؤسسة</span>
            </Button>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>تسجيل الخروج</span>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <SignIn
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none w-full',
                  footerActionLink: 'text-primary hover:text-primary',
                },
              }}
            />
            <SignUp
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none w-full',
                  footerActionLink: 'text-primary hover:text-primary',
                },
              }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}