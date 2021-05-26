import React, { Dispatch, SetStateAction, useState } from "react";

interface INavbarProps {
  setNewsRef: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [selected, setSelected] = useState<string>("us");

  const setClassName = (name: string) => {
    return selected === name ? "active" : "";
  };

  const clickHandler = (name: string) => {
    setSelected(name);
    props.setNewsRef(name);
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={setClassName("bitcoin")}
          onClick={() => clickHandler("bitcoin")}
        >
          <div>Bitcoin</div>
        </li>
        <li className={setClassName("us")} onClick={() => clickHandler("us")}>
          <div>usa</div>
        </li>
        <li
          className={setClassName("apple")}
          onClick={() => clickHandler("apple")}
        >
          <div>apple</div>
        </li>
        <li
          className={setClassName("tech")}
          onClick={() => clickHandler("tech")}
        >
          <div>techcrunch</div>
        </li>
        <li
          className={setClassName("wall street journal")}
          onClick={() => clickHandler("wall street journal")}
        >
          <div>wall street journal</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
