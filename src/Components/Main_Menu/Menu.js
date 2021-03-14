import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ selectedItem, mainMenuItems }) => {
  return (
    <div className="main-menu-box">
      <div className="app-name">
        <h3>
          <i>MUSIC POD</i>
        </h3>
      </div>
      <MenuItems mainMenuItems={mainMenuItems} selectedItem={selectedItem} />
    </div>
  );
};

export default Menu;
