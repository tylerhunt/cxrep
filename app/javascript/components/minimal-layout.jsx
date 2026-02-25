import { Logo } from '@/components/logo';

export default function MinimalLayout({ children }) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <header className="flex w-full max-w-sm flex-col gap-6">
          <nav className="flex items-center gap-2 self-center">
            <Logo />
          </nav>
        </header>

        <article>{children}</article>
      </div>
    </main>
  );
}
