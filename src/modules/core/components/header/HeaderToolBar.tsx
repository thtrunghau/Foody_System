import Dropdown from "./LocactionAndExplorationDropDown";
import IconButton from "./IconButton";
import SearchBar from "./SearchBarHeader";
import ServiceDropdown from "./ServiceDropDown";
import Logo from "./Logo";
import ImageBannerHome from "./ImageBannerHome";

const HeaderToolbar = () => {
  const handleSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
  };

  const handleFilterApply = (filter: string) => {
    console.log("Filter applied:", filter);
  };

  const locations = [
    "Hà Nội",
    "TP Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Hải Dương",
    "Nghệ An",
    "Thanh Hóa",
    "Bình Dương",
    "Long An",
  ];

  const explorationOptions = [
    "Khám phá 1",
    "Khám phá 2",
    "Khám phá 3",
    "Khám phá 4",
  ];

  const services = [
    { title: "Ăn uống", subOptions: ["Option 1A", "Option 1B", "Option 1C"] },
    { title: "Giải trí", subOptions: ["Option 2A", "Option 2B"] },
    { title: "Mua sắm", subOptions: ["Option 3A", "Option 3B", "Option 3C"] },
  ];

  return (
    <div className="">
      <div className=" flex items-center space-x-10 bg-white px-4 py-4 ">
        <div className="flex grow">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Logo />

            {/* Location Dropdown */}
            <div>
              <Dropdown title="Tỉnh Thành" options={locations} searchable />
            </div>

            {/* Services Dropdown */}
            <div>
              <ServiceDropdown title="Nhu Cầu" services={services} />
            </div>

            {/* Search Bar */}
            <SearchBar
              onSearch={handleSearch}
              onApplyFilter={handleFilterApply}
            />

            {/* Explore Dropdown */}
            <Dropdown
              title="Khám Phá"
              options={explorationOptions}
              searchable={false}
            />

            {/* App Button */}
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              }
              title="App"
              onClick={() => console.log("App")}
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {/* Login Button */}
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
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            }
            title="Đăng Nhập"
            onClick={() => console.log("Login")}
          />

          {/* Notification Button */}
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            }
            title="Thông báo"
            onClick={() => console.log("Noti")}
          />

          {/* You Can Dropdown */}
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            }
            title="Bạn Có Thể"
            onClick={() => console.log("Noti")}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderToolbar;
