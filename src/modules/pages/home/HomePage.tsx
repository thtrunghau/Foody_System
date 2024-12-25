import Footer from "../../core/components/footer/Footer";
import Header from "../../core/components/header/Header";
import { ContaineSideBarRestaurant } from "../../restaurants/components/restaurant-main/ContaineSideBarRestaurant";
import { DeliveryFood } from "./../../core/components/delivery-food/DeliveryFood";

export const HomePage = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="">
        <Header />
      </div>
      <div className="relative z-0">
        <DeliveryFood />
      </div>
      <div className="relative z-0">
        <ContaineSideBarRestaurant />
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};
