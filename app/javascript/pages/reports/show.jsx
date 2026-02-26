import { editSiteReportPath, sitePath } from '@/routes';

import { Head, Link } from '@inertiajs/react';
import { PencilIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { H1 } from '@/components/ui/typography';

export default function Show({ site, report }) {
  return (
    <>
      <Head title={`${site.name} Reports`} />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={sitePath(site.id)}>{site.name}</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center mb-4">
        <H1 className="flex-1">Report</H1>

        <Button asChild>
          <Link href={editSiteReportPath(site.id, report.id)}>
            <PencilIcon />
            Edit Report
          </Link>
        </Button>
      </div>

      <div className="my-7">{report.content}</div>
    </>
  );
}
