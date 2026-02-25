import { cn } from '@/lib/utils';

function H1({ className, children, ...props }) {
  return (
    <h1
      className={cn(
        'font-extrabold scroll-m-20 text-3xl tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export { H1 };
