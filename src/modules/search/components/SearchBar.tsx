
const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow bg-transparent outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
