import banner from '../../assets/Image/tech-planet.jpg';

const BGHome = () => {
  return (
    <div
    className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70"
    style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      opacity: 0.9,
      filter: "blur(8px)",
    }}
  ></div>
  );
};

export default BGHome;
