import { useForm, Head, Link } from '@inertiajs/react';

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
            <Link href={sitePath}>{site.name}</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <H1>Edit Report</H1>

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
          <Field orientation="horizontal">
            <Button disabled={processing} type="submit">
              Update Report
            </Button>
            <Button asChild type="submit" variant="link">
              <Link href={reportPath}>
                Cancel
              </Link>
            </Button>
          </Field>
        </FieldGroup>
      </Form>
    </>
  );
}
