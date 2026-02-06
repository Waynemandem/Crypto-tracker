/**
 * SearchBar Component
 * Renders a search input field for filtering cryptocurrencies
 * Accepts search value and onChange callback as props
 */
function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search Cryptocurrency"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-input"
      aria-label="Search cryptocurrencies"
    />
  );
}

export default SearchBar;
