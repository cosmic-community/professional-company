import { createBucketClient } from '@cosmicjs/sdk';
import ServicesSection from '@/components/ServicesSection';
import { Service } from '@/types';

const bucket = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
});

export default async function ServicesPage() {
  const { objects: services } = await bucket.objects.find({
    type: 'services',
    props: 'id,title,slug,metadata',
    depth: 1,
  });

  return (
    <div>
      <ServicesSection services={services as Service[]} />
    </div>
  );
}