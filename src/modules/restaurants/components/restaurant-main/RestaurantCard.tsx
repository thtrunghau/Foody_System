interface RestaurantCardProps {
  image: string;
  name: string;
  address: string;
  likes: number;
  comments: number;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  image,
  name,
  address,
  likes,
  comments,
}) => {
    return (
      <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-md transition">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="h-40 w-full object-cover"
        />
  
        {/* Details */}
        <div className="p-4">
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-800 truncate" title={name}>
            {name}
          </h3>
          {/* Address */}
          <p className="text-sm text-gray-500 truncate" title={address}>
            {address}
          </p>
          {/* Meta Info */}
          <div className="flex items-center justify-between mt-2 text-gray-500 text-sm">
            <span>{likes} ❤️</span>
            <span>{comments} 🗨️</span>
            <button className="text-blue-500 hover:underline">Lưu</button>
          </div>
        </div>
      </div>
    );
  };