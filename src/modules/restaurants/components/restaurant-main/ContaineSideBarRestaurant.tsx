import { Sidebar } from "../../../categories/components/sidebar-home/SideBar";
import OptionSelector from "./OptionSelector";
import { RestaurantList } from "./RestuarantList";

export const ContaineSideBarRestaurant = () => {
  const restaurants = [
    {
      image: "https://via.placeholder.com/300x200",
      name: "C.TAO - Chinese Restaurant",
      address: "476 Thống Nhất, P. 8, Tp. Vũng Tàu",
      likes: 48,
      comments: 67,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "C.TAO - Chinese Restaurant",
      address: "476 Thống Nhất, P. 8, Tp. Vũng Tàu",
      likes: 48,
      comments: 67,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "C.TAO - Chinese Restaurant",
      address: "476 Thống Nhất, P. 8, Tp. Vũng Tàu",
      likes: 48,
      comments: 67,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "C.TAO - Chinese Restaurant",
      address: "476 Thống Nhất, P. 8, Tp. Vũng Tàu",
      likes: 48,
      comments: 67,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "C.TAO - Chinese Restaurant",
      address: "476 Thống Nhất, P. 8, Tp. Vũng Tàu",
      likes: 48,
      comments: 67,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "C.TAO - Chinese Restaurant",
      address: "476 Thống Nhất, P. 8, Tp. Vũng Tàu",
      likes: 48,
      comments: 67,
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Mặt Cuốn Bún Mắm",
      address: "243 Nguyễn Hữu Cần, Tp. Vũng Tàu",
      likes: 40,
      comments: 10,
    },
    // Add more restaurant objects here
  ];

  const sidebarItems = [
    { label: "Ở đâu", icon: <svg className="h-6 w-6">...</svg> },
    { label: "Ăn gì", icon: <svg className="h-6 w-6">...</svg> },
    { label: "Sưu tập", icon: <svg className="h-6 w-6">...</svg> },
    { label: "TV", icon: <svg className="h-6 w-6">...</svg> },
    { label: "Bình luận", icon: <svg className="h-6 w-6">...</svg> },
    { label: "Blogs", icon: <svg className="h-6 w-6">...</svg> },
    { label: "Khuyến mãi", icon: <svg className="h-6 w-6">...</svg> },
    // Add more items as needed
  ];

  return (
    <div className="ml-[190px] mr-[190px] mt-9 flex space-x-4">
      <div className="">
        <Sidebar items={sidebarItems} />
      </div>
      <div className="flex-1">
        <OptionSelector />
        <RestaurantList restaurants={restaurants} />
        <div>
          <a
            href="#"
            className="mt-2 flex justify-center rounded-sm bg-slate-600 p-2 font-medium text-white"
          >
            Xem Thêm
          </a>
        </div>
      </div>
    </div>
  );
};
