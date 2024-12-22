import { useState } from "react";
import IconButton from "./IconButton";
import Filter from "./Filter";

const SearchBar = ({ onSearch, onApplyFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [selectedFilter, setSelectedFilter] = useState("");
  // const [showFilter, setShowFilter] = useState(false);

  // const filters = ["Option 1", "Option 2", "Option 3"];

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
    onApplyFilter(filter); // Pass the selected filter to parent
  };

  return (
    <div className="relative flex w-[31.25rem] items-center rounded-md bg-gray-100 px-2 py-1 shadow">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Địa điểm, ăn uống, loại hình,..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow bg-transparent outline-none"
      />

      {/* Filter Button */}
      <div className="relative ml-2">
        <IconButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          }
          title="Bộ Lọc"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />

        {/* Dropdown Filter */}
        {isFilterOpen && (
          <div className="absolute mt-4 w-[31.25rem] rounded-md border bg-white p-4 shadow-md">
            <Filter />
          </div>
        )}
        {/* {isFilterOpen && (
          <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-md border bg-white shadow-lg">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => handleFilterSelect(filter)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {filter}
              </button>
            ))}
          </div>
        )} */}
      </div>

      <IconButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        }
        title="Tìm Kiếm"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
// import { useState } from "react";
// import IconButton from "./IconButton";
// import Filter from "./Filter"; // Import the Filter component

// const SearchBar = ({ onSearch, onApplyFilter }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showFilter, setShowFilter] = useState(false);

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <div className="relative flex flex-col items-center w-full">
//       {/* Search Bar */}
//       <div className="flex w-[31.25rem] items-center rounded-md bg-gray-100 px-2 py-1 shadow">
//         <input
//           type="text"
//           placeholder="Địa điểm, ăn uống, loại hình,..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-grow bg-transparent outline-none"
//         />

//         <IconButton
//           icon={
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           }
//           title="Tìm Kiếm"
//           onClick={handleSearch}
//         />

//         <IconButton
//           icon={
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 5h16.5M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
//               />
//             </svg>
//           }
//           title="Bộ Lọc"
//           onClick={() => setShowFilter(!showFilter)} // Toggle the filter
//         />
//       </div>

//       {/* Filter Component */}
//       {showFilter && (
//         <div className="w-[31.25rem] mt-4 bg-white shadow-md rounded-md p-4 border">
//           <Filter />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
