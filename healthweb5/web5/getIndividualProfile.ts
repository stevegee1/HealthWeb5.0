import { Web5 } from '@web5/api/browser';

export async function getIndividualData(recordId: string) {
  const { web5 } = await Web5.connect();

  // Reads the indicated record from the user's DWNs
  let { record } = await web5.dwn.records.read({
    message: {
      filter: {
        recordId
      }
    }
  });

  return record;
}
