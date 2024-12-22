const Banner = () => {
  return (
    <section className="relative w-full h-[500px]">
      <img
        src="src\assets\images\image-banner-home.jpg"
        alt="Banner"
        className="w-full h-full object-cover"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-4xl font-semibold mb-4">Welcome to Our Website</h2>
        <p className="text-lg mb-6">Explore the best products and services we offer</p>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-xl"
        >
          Get Started
        </a>
      </div> */}
    </section>
  );
};

export default Banner;
