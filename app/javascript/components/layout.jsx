import { LogOutIcon as SignOutIcon, UserIcon } from 'lucide-react';
import { usePage, Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Logo } from '@/components/logo';

export default function Layout({ children }) {
  const { currentUser, newSessionPath, sessionPath } = usePage().props;

  return (
    <main className="flex flex-col justify-center gap-6 sm:max-w-xl mx-auto p-6 md:p-10">
      <header className="flex w-full gap-6">
        <nav className="mx-auto max-w-7xl w-full">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 justify-start">
              <div className="flex shrink-0 items-center">
                <Logo />
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className="size-6" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-60">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>
                        Signed in as {currentUser.email}
                      </DropdownMenuLabel>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem asChild variant="destructive">
                        <Link
                          className="w-full"
                          href={sessionPath}
                          method="delete"
                        >
                          <SignOutIcon />
                          Sign out
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={newSessionPath} as="button">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>

      <article>{children}</article>
    </main>
  );
}
