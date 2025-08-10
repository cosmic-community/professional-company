import { createBucketClient } from '@cosmicjs/sdk';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { CaseStudy } from '@/types';

const bucket = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
});

export default async function CaseStudiesPage() {
  const { objects: caseStudies } = await bucket.objects.find({
    type: 'case-studies',
    props: 'id,title,slug,metadata',
    depth: 1,
  });

  return (
    <div>
      <CaseStudiesSection caseStudies={caseStudies as CaseStudy[]} />
    </div>
  );
}