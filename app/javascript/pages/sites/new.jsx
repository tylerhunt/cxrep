import { useForm, Head, Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { H1 } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';

function New({ sitesPath }) {
  const { data, errors, setData, setErrors, processing } = useForm({
    name: '',
    url: 'https://',
  });

  const handleChange = ({ target: { name, value } }) => setData(name, value);

  return (
    <>
      <Head title="New Site" />

      <H1>New Site</H1>

      <Form action={sitesPath} onError={setErrors}>
        <FieldGroup>
          <Field data-invalid={errors.name && true}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
            <p>{errors.name}</p>
          </Field>

          <Field data-invalid={errors.url && true}>
            <FieldLabel htmlFor="url">URL</FieldLabel>
            <Input
              id="url"
              name="url"
              onChange={handleChange}
              type="url"
              value={data.url}
            />
            <p>{errors.url}</p>
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field orientation="horizontal">
            <Button disabled={processing} type="submit">
              Create Site
            </Button>
            <Button asChild type="submit" variant="link">
              <Link href={sitesPath}>
                Cancel
              </Link>
            </Button>
          </Field>
        </FieldGroup>
      </Form>
    </>
  );
}

export default New;
