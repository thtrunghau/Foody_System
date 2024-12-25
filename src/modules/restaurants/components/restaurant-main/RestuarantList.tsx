import {RestaurantCard} from "./RestaurantCard";

interface Restaurant {
  image: string;
  name: string;
  address: string;
  likes: number;
  comments: number;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          image={restaurant.image}
          name={restaurant.name}
          address={restaurant.address}
          likes={restaurant.likes}
          comments={restaurant.comments}
        />
      ))}
    </div>
  );
};
