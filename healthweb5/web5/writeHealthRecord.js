/**
 * This is for the health institution after:
 * 1. created a DID and Web5 instance
 * 2. install the protocol definition
 * 3. Copied the recipient DID
 * 4. Then, they can write to the recipient DWN
 */

async function writeHealthRecord() {
  healthFormFilled = {};

  const { record } = await web5.dwn.records.write({
    data: healthFormFilled,
    message: {
      protocol: "https://HealthRecord.com",
      protocolPath: "medical",
      schema: "https://HealthRecord.com/medical",
      recipient: `${recipientDIDCopied}`,
    },
  });

  //send the record to the recipient DID
  return await record.send(recipientDid);
}

writeHealthRecord();
