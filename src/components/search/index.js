const Search =() => {
    return (
      <div className="form">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Here"
            />
            <button type="submit">Search</button>
          </form>
      </div>
    );
  };
  export default Search;