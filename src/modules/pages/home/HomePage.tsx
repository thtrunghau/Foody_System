import Header from "../../core/components/header/Header";
import { DeliveryFood } from './../../core/components/delivery-food/DeliveryFood';

export const HomePage = () => {
  return (
    <div className="absolute w-full h-full">
      <Header />
      <DeliveryFood/>
    </div>
  );
};
