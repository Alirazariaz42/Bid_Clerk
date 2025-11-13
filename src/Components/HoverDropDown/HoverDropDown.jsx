import React, { useState } from "react";
import { Dropdown, NavLink } from "react-bootstrap";
import "./hoverDropDown.css";
import { Link, useNavigate } from "react-router-dom";

export const HoverDropDown = () => {
  const navigatToServices = useNavigate();
  const RedirectToServices = () => {
    navigatToServices("/Services");
  };

  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const showDropdown = () => setShow(true);
  const hideDropdown = () => setShow(false);

  const showSubDropdown = () => setShowSubMenu(true);
  const hideSubDropdown = () => setShowSubMenu(false);
  return (
    <Dropdown
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      show={show}
    >
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu   className="  m-0">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item 
          onMouseEnter={showSubDropdown}
          onMouseLeave={hideSubDropdown}
          >
          Nested Dropdown
          <Dropdown.Menu show={showSubMenu}>
            <Dropdown.Item href="#/sub-action-1">Sub Action 1</Dropdown.Item>
            <Dropdown.Item href="#/sub-action-2">Sub Action 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
