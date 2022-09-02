import { Link } from "react-router-dom";

const links = [
  { name: "users", to: "/users" },
  { name: "todos", to: "/todos" },
];

const Navigation = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {links.map((link) => (
        <Link key={link.name} style={{ padding: "20px" }} to={link.to}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
