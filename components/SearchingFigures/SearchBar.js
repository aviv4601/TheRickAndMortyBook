import classes from "./SearchBar.module.css";

function SearchBar(props) {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.value;
    props.setSearchQuery(query);
    const searchList = props.figures.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    props.setFilteredList(searchList);
    if (query.trim().length === 0) {
      props.setIsFiltered(false);
    } else {
      props.setIsFiltered(true);
    }
  };

  return (
    <div className={classes["filter-container"]}>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search for figures..."
          value={props.searchQuery}
          onChange={handleSearch}
          className={classes.input}
        />
      </form>
    </div>
  );
}

export default SearchBar;
