import { useForm, Head, Link } from '@inertiajs/react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function Show({ site, sitesPath, reportsPath }) {
  const { data, errors, setData, setErrors, processing } = useForm({
    content: '',
  });

  const handleChange = ({ target: { name, value } }) => setData(name, value);

  return (
    <>
      <Head title={site.name} />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={sitesPath}>Sites</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{site.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Form action={reportsPath} onError={setErrors}>
        <FieldGroup>
          <Field data-invalid={errors.content && true}>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <Input
              id="content"
              name="content"
              onChange={handleChange}
              value={data.content}
            />
            <p>{errors.content}</p>
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <Button disabled={processing} type="submit">
              Save
            </Button>
          </Field>
        </FieldGroup>
      </Form>
    </>
  );
}
