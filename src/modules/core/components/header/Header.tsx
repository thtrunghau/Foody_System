import TopBar from "./TopBar";
import HeaderToolbar from "./HeaderToolBar";
import ImageBannerHome from "./ImageBannerHome";

const Header = () => {
  return (
    <header className="items-center justify-between bg-white">
      <TopBar />
      <div className="relative z-10">
        <HeaderToolbar />
      </div>
      <div className="relative z-0">
        <ImageBannerHome />
      </div>
    </header>
  );
};

export default Header;
