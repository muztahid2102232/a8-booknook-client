import Image from "next/image";

const Navbar = () => {
  const navLinks = ["Home", "All Books", "Add Books", "My Books", "My Borrows"];
  return (
    <div className="flex items-center justify-between gap-3.5">
      <Image
        alt="image"
        width={150}
        height={150}
        src="/booknook-logo-playfair.svg"
      />
      <div className="flex gap-2.5 px-auto">
        {navLinks.map((nav, ind) => (
          <li className="list-none font-dmsans cursor-pointer" key={ind}>
            {nav}
          </li>
        ))}
      </div>
      <div className="font-dmsans flex gap-1.5">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
