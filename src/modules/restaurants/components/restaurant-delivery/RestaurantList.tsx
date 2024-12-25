import {RestaurantCard} from "./RestaurantCard";

export const RestaurantList = () =>{
    const restaurantData = [
        {
          image: "https://via.placeholder.com/150",
          name: "The Gourmet Kitchen",
          address: "123 Main Street, Foodville",
          type: "Fine Dining",
          link: "#"
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Burger House",
          address: "456 Burger Avenue, Snacktown",
          type: "Fast Food",
          link: "#"
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Sushi Zen",
          address: "789 Sushi Lane, Fishville",
          type: "Japanese Cuisine",
          link: "#"
        },
        {
            image: "https://via.placeholder.com/150",
            name: "The Gourmet Kitchen 1",
            address: "123 Main Street, Foodville",
            type: "Fine Dining",
            link: "#"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Burger House 1",
            address: "456 Burger Avenue, Snacktown",
            type: "Fast Food",
            link: "#"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Sushi Zen 1",
            address: "789 Sushi Lane, Fishville",
            type: "Japanese Cuisine",
            link: "#"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Sushi Zen 2",
            address: "789 Sushi Lane, Fishville",
            type: "Japanese Cuisine",
            link: "#"
          },
          {
              image: "https://via.placeholder.com/150",
              name: "The Gourmet Kitchen 2",
              address: "123 Main Street, Foodville",
              type: "Fine Dining",
              link: "#"
            },
            {
              image: "https://via.placeholder.com/150",
              name: "Burger House 2",
              address: "456 Burger Avenue, Snacktown",
              type: "Fast Food",
              link: "#"
            },
            {
              image: "https://via.placeholder.com/150",
              name: "Sushi Zen 2",
              address: "789 Sushi Lane, Fishville",
              type: "Japanese Cuisine",
              link: "#"
            },
      ];
    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {restaurantData.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              image={restaurant.image}
              name={restaurant.name}
              address={restaurant.address}
              type={restaurant.type}
              link={restaurant.link}
            />
          ))}
        </div>
      );
}