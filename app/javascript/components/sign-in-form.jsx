import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function SignInForm(props) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>Login with your email and password.</CardDescription>
        </CardHeader>

        <CardContent>
          <Form disableWhileProcessing {...props}>
            {({ errors, processing }) => (
              <FieldGroup>
                {errors.base && <div>{errors.base}</div>}

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="member@example.com"
                    required
                  />
                </Field>

                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    {/*
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 whitespace-nowrap hover:underline"
                    >
                      Forgot your password?
                    </a>
                    */}
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </Field>

                <Field>
                  <Button disabled={processing} type="submit">
                    Sign in
                  </Button>
                  {/*
                  <FieldDescription className="text-center">
                    Don’t have an account?{" "}
                    <a className="whitespace-nowrap" href="#">Sign up</a>
                  </FieldDescription>
                  */}
                </Field>
              </FieldGroup>
            )}
          </Form>
        </CardContent>
      </Card>

      {/*
      <FieldDescription className="px-6 text-balance text-center">
        By continuing, you agree to our{" "}
        <a className="whitespace-nowrap" href="#">Terms of Service</a>{" "}
        and <a className="whitespace-nowrap" href="#">Privacy Policy</a>.
      </FieldDescription>
      */}
    </div>
  );
}
