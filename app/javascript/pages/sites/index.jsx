import { newSitePath, sitePath } from '@/routes';

import { Head, Link } from '@inertiajs/react';
import { BookIcon, BookPlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { H1 } from '@/components/ui/typography';

export default function Index({ sites }) {
  return (
    <>
      <Head title="Sites" />

      <div className="flex items-center mb-4">
        <H1 className="flex-1">Sites</H1>

        <Button asChild>
          <Link href={newSitePath()}>
            <BookPlusIcon />
            Add Site
          </Link>
        </Button>
      </div>

      <ItemGroup className="gap-4">
        {sites.map((site) => (
          <Item key={site.id} variant="outline" asChild role="listitem">
            <Link href={sitePath(site.id)}>
              <ItemMedia>
                <BookIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1 text-lg">
                  {site.name}
                </ItemTitle>
                <ItemDescription className="font-mono text-xs">
                  {site.url}
                </ItemDescription>
              </ItemContent>
            </Link>
          </Item>
        ))}
      </ItemGroup>
    </>
  );
}
