/**
 * This signup function can be used by
 * either the Health Institution or the individual
 */

const { Web5 } = require("@web5/api");
const { webcrypto } = require("node:crypto");

/**
 * //this creates the instance of web5(this is the class that houses the apis) and the 
 * did(identifier) when the button is clicked

 */
const signUpWeb5 = async () => {
  const { web5, did } = await Web5.connect();

  //did and web5 should be persisted across all components
  //save the did value to a copy button

  //install/configure the shared protocol
  const healthProtocolDefinition = {
    protocol: "https://HealthRecord.com",
    published: true,
    types: {
      medical: {
        schema: "https://HealthRecord.com/medical",
        dataFormats: ["application/json"],
      },
      personal: {
        schema: "https://HealthRecord.com/personal",
        dataFormats: ["application/json"],
      },
    },
    structure: {
      medical: {
        $actions: [
          {
            who: "recipient",
            of: "medical",
            can: "write",
          },
          {
            who: "author",
            of: "medical",
            can: "read",
          },
        ],
      },
    },
  };
  const { protocol } = await web5.dwn.protocols.configure({
    message: {
      definition: healthProtocolDefinition,
    },
  });
  const { status } = await protocol.send(did);
  //if protocol installed successfully? set DID and return success
  setMyDid(did); //saving the state using useState, persist accross components
  setWeb5(web5); //saving the state using useState hook, persist across components
  //return account created successfully


};
signUpWeb5();
