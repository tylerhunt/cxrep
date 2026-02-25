import { useState } from 'react';
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

export default function Edit({ site, sitePath, report, reportPath }) {
  const { data, errors, setData, setErrors, processing } = useForm({
    content: report.content,
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
            <Link href={sitePath}>{site.name}</Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{report.id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Form action={reportPath} method="patch" onError={setErrors}>
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
