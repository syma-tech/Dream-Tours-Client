import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className="text-5xl font-bold text-primary">
        <h2 className="text-center ">---*--- Dream Tour ---*---</h2>
      </Link>
    </div>
  );
};

export default Header;
