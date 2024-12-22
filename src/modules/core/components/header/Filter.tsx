import { useState } from "react";

const Filter = () => {
  const [filters, setFilters] = useState({
    khuVuc: [],
    amThuc: [],
    phanLoai: [],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    khuVuc: false,
    amThuc: false,
    phanLoai: false,
  });

  const options = {
    khuVuc: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ"],
    amThuc: ["Việt Nam", "Hàn Quốc", "Nhật Bản", "Châu Âu", "Thái Lan"],
    phanLoai: ["Nhà hàng", "Quán ăn", "Cà phê", "Tiệm bánh", "Bar"],
  };

  const handleCheckboxChange = (category, option) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(option)
        ? prevFilters[category].filter((item) => item !== option)
        : [...prevFilters[category], option],
    }));
  };

  const clearFilters = () => {
    setFilters({
      khuVuc: [],
      amThuc: [],
      phanLoai: [],
    });
  };

  const removeFilter = (category, option) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].filter((item) => item !== option),
    }));
  };

  const search = () => {
    alert(`Searching with filters: ${JSON.stringify(filters)}`);
  };

  return (
    <div className="mx-auto max-w-lg rounded-md border bg-white p-4 shadow-md">

      {/* Selected Filters Section */}
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-medium">Bộ Lọc Đã Chọn:</h3>
        {Object.keys(filters).every((key) => filters[key].length === 0) ? (
          <p className="italic text-gray-500">Chưa có bộ lọc nào được chọn.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([category, values]) =>
              values.map((value) => (
                <div
                  key={value}
                  className="flex items-center rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 shadow-sm"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => removeFilter(category, value)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    ×
                  </button>
                </div>
              )),
            )}
          </div>
        )}
      </div>

      {/* Filter Fields */}
      <div className="space-y-4">
        {["khuVuc", "amThuc", "phanLoai"].map((field) => (
          <div key={field} className="relative">
            <button
              onClick={() =>
                setIsDropdownOpen((prev) => ({
                  ...prev,
                  [field]: !prev[field],
                }))
              }
              className="flex w-full items-center justify-between rounded-md border bg-gray-50 px-4 py-2 text-left shadow-sm hover:bg-gray-100"
            >
              {field === "khuVuc"
                ? "Khu Vực"
                : field === "amThuc"
                  ? "Ẩm Thực"
                  : "Phân Loại"}
              <span className="text-gray-500">
                {isDropdownOpen[field] ? "▲" : "▼"}
              </span>
            </button>
            {isDropdownOpen[field] && (
              <div className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md border bg-white shadow-md">
                {options[field].map((option) => (
                  <label
                    key={option}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      checked={filters[field].includes(option)}
                      onChange={() => handleCheckboxChange(field, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={clearFilters}
          className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
        >
          Xóa Bộ Lọc
        </button>
        <button
          onClick={search}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Tìm Kiếm
        </button>
      </div>
    </div>
  );
};

export default Filter;
