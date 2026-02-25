import { Head } from '@inertiajs/react';

import MinimalLayout from '@/components/minimal-layout';
import SignInForm from '@/components/sign-in-form';

function New({ sessionPath }) {
  return (
    <>
      <Head title="Sign In" />

      <SignInForm action={sessionPath} />
    </>
  );
}

New.layout = (page) => <MinimalLayout>{page}</MinimalLayout>;

export default New;
