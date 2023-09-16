import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv container">
      <form onSubmit={handleFormSubmit}>
        <label className="form-label text-center">
          What are you looking for?
        </label>
        <input
          className="form-control m-auto w-75"
          value={valueInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;
