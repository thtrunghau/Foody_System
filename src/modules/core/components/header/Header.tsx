import TopBar from './TopBar';
import HeaderToolbar from './HeaderToolBar';
import ImageBannerHome from './ImageBannerHome';

const Header = () => {
  return (
    <header className="bg-white items-center justify-between">
      <TopBar/>
      <HeaderToolbar/>
      {/* <ImageBannerHome/> */}
    </header>
  );
};

export default Header;