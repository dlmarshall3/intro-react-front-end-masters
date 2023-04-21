import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  // useEffect(() => {
  //   requestPets();
  // }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  const handleSetLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSetAnimal = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };

  const handleSetBreed = (e) => {
    setBreed(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            onChange={handleSetLocation}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal:
          <select id="animal" value={animal} onChange={handleSetAnimal}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed:
          <select
            id="breed"
            value={breed}
            onChange={handleSetBreed}
            disabled={!breeds.length}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
