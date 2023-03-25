import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  return (
    <nav className="grid">
      <div className="flex justify-between w-full">
        <div>logo</div>
        <div onClick={handleMenu} className="font-bold">
          {menu ? "X" : "Menu"}
        </div>
      </div>

      <ul
        className={` ${
          !menu ? "right-[-100%] opacity-0" : "right-0"
        } bg-mainBg animation-all ease-in-out duration-1000 `}
      >
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
