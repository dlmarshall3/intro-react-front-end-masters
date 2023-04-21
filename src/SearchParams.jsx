import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "lizard"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

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

  return (
    <div className="search-params">
      <form action="">
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
          <select id="breed" value={animal} onChange={handleSetBreed} disabled={!breeds.length}>
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
