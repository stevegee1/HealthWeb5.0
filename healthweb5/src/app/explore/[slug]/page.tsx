import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Loader } from '@/components';
import { DetailedExploreView } from '@/domains/explore';
import { hospitalData } from '@/app/assets/data/explore';
import { convertString } from '@/utils/convertString';

async function getHospitalData(slug: string) {
  const data = hospitalData.find((data) => data.name === convertString(slug, 'space'));
  return data;
}

async function DetailsPage({ params }: { params: { slug: string } }) {
  const data = await getHospitalData(params.slug);

  if (!data) {
    return notFound();
  }
  return (
    <Suspense fallback={<Loader />}>
      <DetailedExploreView data={data} />
    </Suspense>
  );
}

export default DetailsPage;
