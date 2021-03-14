import React from "react";

const MenuItems = ({ mainMenuItems, selectedItem }) => {
  return (
    <React.Fragment>
      {mainMenuItems.map((item, index) => {
        return (
          <div key={index}>
            <p className={selectedItem === index ? "selected-div" : ""}>
              {item}{" "}
            </p>
          </div>
        );
      })}
      {mainMenuItems.length === 3 ? (
        <div style={{ color: "indigo" }}>
          <p style={{ fontSize: 13 }}>
            Click "<i className="fas fa-backward"></i>" for Main Menu
          </p>
        </div>
      ) : (
        ""
      )}
      {mainMenuItems.length === 4 || mainMenuItems.length === 3 ? (
        <div style={{ color: "black" }}>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>
            <i class="far fa-copyright"></i>
            <span style={{ padding: 5 }}>Made By Utkarsh</span>
          </p>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
export default MenuItems;
