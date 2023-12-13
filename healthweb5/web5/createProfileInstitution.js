//import the instance of the web5

async function createProfileInstitution() {
  const profileData = {
    InstitutionName: `${name}`,
    Address: `${address}`, //male, female, prefer not to say
  };
  //onSubmit, do this?
  const profileForm = await web5.dwn.records.create({
    data: profileData,
    message: {
      published: true,
      dataFormat: "application/json",
    },
  });
  //read status if 200 return profile created successfully

 // setState(InstitutionName, Address, DID on profile page)
}
createProfileInstitution();
