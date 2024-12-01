
/**
 * This credential will be issued by the issuer
 * Issuer: COHSASA
 * 
 * issuer >> Holder>> Verifier
 */
async function getAccredited(){

    const accreditedDetails={
        Institution: `${InstitutionName}`,
        Holder: `${HolderDID}`
    }
     const issuer = await DidIonMethod.create();
     const keys = issuer.keySet.verificationMethodKeys[0].privateKeyJwk;
     const issuing = `${issuer.did}#${issuer.did.split(":")[2]}`;

     const vc = new x.VerifiableCredential({
       type: "Hospital Accreditation",
       issuer: `${issuer.did}`,
       subject: `${HolderDID}`,
       data: new HealthCredibility(
         `${InstitutionName}`,
         "#stateCode"
       ),
     });
     //sign the VC
     const signOptions = {
       issuerDid: issuer.did,
       subjectDid: subject.did,
       kid: `${issuer.did}#${issuer.did.split(":")[2]}`,
       signer: async (data) =>
         await Ed25519.sign({
           data,
           key: keys,
         }),
     };

     const signedVcJwt = await vc.sign(signOptions);


     //Write to the Holder DWN through shared protocol
     const { record } = await web5.dwn.records.create({
       data: signedVcJwt,
       message: {
         schema: "Institution Accreditaion",
         dataFormat: "application/vc+jwt",
       },
     });



}
getAccredited()
