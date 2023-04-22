const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if(!animal) return [];
  
    const apiResponse = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
  
    if (!apiResponse.ok) {
      throw new Error(`unable to fetch with animal: ${animal}`);
    }
  
    return apiResponse.json();
  };
  
  export default fetchBreedList;
  