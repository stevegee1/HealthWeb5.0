import { Web5 } from '@web5/api/browser';
import { TInstitutionProfile } from '@/domains/create/views/institutionProfile/validation';

export async function createInstitutionWeb5Profile(
  profileData: TInstitutionProfile,
  myDid: string
) {
  const { web5 } = await Web5.connect();

  const { record } = await web5.dwn.records.create({
    data: profileData,
    message: {
      published: true,
      dataFormat: 'application/json'
    }
  });

  const result = await record?.send(myDid);

  return {result, record};
}
