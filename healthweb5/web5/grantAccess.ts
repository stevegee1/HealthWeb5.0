import { Web5 } from '@web5/api';

export async function grantAccess(myDid: string) {
  const { web5 } = await Web5.connect();
  const { record } = await web5.dwn.records.write({
    data: 'I am granting access to you',
    message: {
      protocol: 'https://healthrecord.com/',
      protocolPath: 'grantaccess',
      schema: 'https://healthrecord.com/access',
      recipient: myDid
    }
  });
  const ResponseStatus = await record?.send(
    'did:ion:EiCmiuOXUSHQ6nsZxoC6oQc8hrFpufoqwI4lvOoOa4MTuw:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiREZadkxFX0hFOUtDOTlZa2tXc1NzNEZEVUtMWDROZnZLN2FtTlVJSVpUSSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJVQkkySkFaQkM3TUxBeDQ1TXVfcHVGVDNFcVQxTElxZlFmUko1dWVUTHg0IiwieSI6Ik40UnByOXNZN1dOdWVqYWl6dURWektJVG12MWMtUkFhWE8tdXcyNVcxMmMifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNCJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBT1JDTGtNRU96bDc4TlZ3dm9FWHZ6Zmo1UnhtYnE4cHlQSkd0MVVsY00tQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQy1wTmpBTE45b2xyczNDblo2T2dtRmdwaFdmLWZXcXFfMHFtUFYxV0RBY2ciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJHaWNORjlmdGQ5OGRZd1RXU1VydldHX1ZESDhzdnZHWUY2VS1wWjhBOGxRIn19'
  );

  return ResponseStatus;
}
