const TopBar = () => {
  return (
    <div className="flex w-full justify-between bg-gray-800 text-white">
      <div className="ml-[5.625rem] mr-[5.625rem] flex">
        <button className="honver:p-0 px-4 py-2 hover:hover:bg-gray-600">
          Khám Phá
        </button>
        <button className="px-4 py-2 hover:hover:bg-gray-600">Đặt Hàng</button>
        <button className="px-4 py-2 hover:hover:bg-gray-600">Đi Chợ</button>
      </div>
    </div>
  );
};

export default TopBar;
