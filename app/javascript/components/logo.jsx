import { Link } from '@inertiajs/react';

import Icon from '@/images/logo.svg?react';

function Logo() {
  return (
    <Link href="/" className="flex flex-1 font-[1000] gap-2 items-center text-[2.5rem] text-primary">
      <Icon className="size-[3.2rem]" />
      <span>CX<span className="text-black">Rep</span></span>
    </Link>
  );
}

export { Logo };
