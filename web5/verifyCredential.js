/**
 * Verify a credential is valid and read it
 */

async function verifyCredential(credentialID){

     try {
       await x.VerifiableCredential.verify(
         "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDprZXk6ejZNa201VXhrdGc0dUV6b3NpeW1Vc2p2czNRdFhFdHZ4cTlxcWtUZmJXOGZoV25CI3o2TWttNVV4a3RnNHVFem9zaXltVXNqdnMzUXRYRXR2eHE5cXFrVGZiVzhmaFduQiJ9.eyJpc3MiOiJkaWQ6a2V5Ono2TWttNVV4a3RnNHVFem9zaXltVXNqdnMzUXRYRXR2eHE5cXFrVGZiVzhmaFduQiIsInN1YiI6ImRpZDprZXk6ejZNa21lNzFoNEhROTFHZk1GbWY2V2Q3SDRIMVBvY1lObjlWelhwVVNwUnkxTEVjIiwidmMiOnsidHlwZSI6Ikhvc3BpdGFsIEFjY3JlZGl0YXRpb24iLCJpc3N1ZXIiOiJkaWQ6a2V5Ono2TWttNVV4a3RnNHVFem9zaXltVXNqdnMzUXRYRXR2eHE5cXFrVGZiVzhmaFduQiIsInN1YmplY3QiOiJkaWQ6a2V5Ono2TWttZTcxaDRIUTkxR2ZNRm1mNldkN0g0SDFQb2NZTm45VnpYcFVTcFJ5MUxFYyIsImRhdGEiOnsibmFtZSI6InBsYWNlSG9sZGVyIGZvciB0aGUgbmFtZSBvZiB0aGUgaG9zcGl0YWwiLCJzdGF0ZUNvZGUiOiIjIn19fQ.5Xc4a8SFaQdc7ac4idUiewgIorY181dLQI1aA7svuFYV0uRC14zZDQUOBLYTOvhaPvtlesuuBoGdcG8wFWtSAg"
       );
      
     } catch (error) {
       console.log("credential not valid");
     }

      const parsedVC = x.VerifiableCredential.parseJwt(signedVcJwt);

      //parsedVC is in json format, destructure and simulate a unique code issued by COHSASA

      if (parsedVC.uniqueCode !== uniqueCode){
        return "Institution not verified"
      }
      return "Intitution is Verified!"

}
verifyCredential(credentialID)