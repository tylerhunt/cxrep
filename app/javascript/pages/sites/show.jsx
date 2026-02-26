import { useForm, Head, Link } from '@inertiajs/react';
import { sitesPath, siteReportsPath } from '@/routes';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { H1 } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';

export default function Show({ site }) {
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
            <Link href={sitesPath()}>Sites</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <H1>{site.name}</H1>

      <Form action={siteReportsPath(site.id)} onError={setErrors}>
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
