import img from "../images/world-svgrepo-com.svg";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="bg-red-500 flex w-1/2 h-16 justify-center">
        <img src={img} width="40px" />
        <h3 className="text-white text-lg flex items-center px-4">
          My Travel Journal
        </h3>
      </div>
    </div>
  );
}
