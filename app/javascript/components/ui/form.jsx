'use client';

import { Form as InertiaForm } from '@inertiajs/react';

import { cn } from '@/lib/utils';

function Form({ children, className, options, ...props }) {
  return (
    <InertiaForm
      className={cn('flex flex-col gap-7 my-7', className)}
      disableWhileProcessing
      method="post"
      options={{ only: ['flash'], ...options }}
      {...props}
    >
      {children}
    </InertiaForm>
  );
}

export { Form };
