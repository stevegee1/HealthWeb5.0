/**
 * Verify a credential is valid and read it
 */
import * as x from '@web5/credentials';

export async function verifyCredential(credentialID: string) {
  try {
    await x.VerifiableCredential.verify(credentialID);
    return true;
  } catch (error) {
    return false;
  }
}
