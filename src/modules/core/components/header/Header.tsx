import TopBar from "./TopBar";
import HeaderToolbar from "./HeaderToolBar";
import ImageBannerHome from "./ImageBannerHome";

const Header = () => {
  return (
    <header className="items-center w-full justify-between bg-white pb-10">
      <TopBar />
      <div className="sticky top-0 z-50 ml-[190px] mr-[190px]">
        <HeaderToolbar />
      </div>
      <div className="relative z-0">
        <ImageBannerHome />
      </div>
    </header>
  );
};

export default Header;
