import { Web5 } from '@web5/api/browser';
import { TIndividualProfile } from '@/domains/create/views/individualProfile/validation';

export async function createIndividualWeb5Profile(profileData: TIndividualProfile, myDid: string) {
  const { web5 } = await Web5.connect();

  const { record } = await web5.dwn.records.create({
    data: profileData,
    message: {
      published: true,
      dataFormat: 'application/json'
    }
  });

  const result = await record?.send(myDid);

  return { result, record };
}
