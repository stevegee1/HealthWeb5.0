/**
 * This signup function can be used by
 * either the Health Institution or the individual
 */
import { Web5 } from '@web5/api/browser';
import { webcrypto } from 'crypto';
import { healthProtocolDefinition, issuerProtocol } from './protocolDefinitions';

/**
 * //this creates the instance of web5(this is the class that houses the apis) and the
 * did(identifier) when the button is clicked
 */
export const signUpWeb5 = async (type: string) => {
  if (!globalThis.crypto) globalThis.crypto = webcrypto;
  const { web5, did } = await Web5.connect();
  let genStatus, specificStatus;
  //did and web5 should be persisted across all components
  //save the did value to a copy button
  //install/configure the shared protocol

  const { protocol: generalProtocol } = await web5.dwn.protocols.configure({
    message: {
      definition: healthProtocolDefinition
    }
  });

  genStatus = await generalProtocol?.send(did);

  if (type === 'institution') {
    const { protocol: institutionalProtocol } = await web5.dwn.protocols.configure({
      message: {
        definition: issuerProtocol
      }
    });
    specificStatus = await institutionalProtocol?.send(did);

    if (specificStatus?.status.code === 202 && genStatus?.status.code === 202) {
      return { web5, did, genStatus, specificStatus };
    }
  }

  if (genStatus?.status.code === 202) {
    return { web5, did, genStatus };
  }

  // //if protocol installed successfully? set DID and return success
  // setMyDid(did); //saving the state using useState, persist accross components
  // setWeb5(web5); //saving the state using useState hook, persist across components
  // //return account created successfully
};
