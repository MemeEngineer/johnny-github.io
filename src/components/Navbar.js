import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Github from "../assets/github.svg.png";
import Linkedin from "../assets/linkedin.png";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";
import JohnnyWu from "../assets/JohnnyWu.gif";
import JWLOGO from "../assets/JWLOGO.png";

export default function Navbar() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <nav>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>
                {menuCollapse ? (
                  <img src={JWLOGO} alt="JW Logo" />
                ) : (
                  <img src={JohnnyWu} alt="JohnnyWu" />
                )}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem active={false} icon={<FaRegHeart />}>
                <Link to="/">About</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                <Link to="/gallery">Gallery</Link>
              </MenuItem>
              <MenuItem active={false} icon={<RiPencilLine />}>
                <Link to="/contact">Contacts</Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/labs">Labs</Link>
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                <Link to="/memes">Memes</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="sidebarfoot">
            <Menu className="navfoot">
              <MenuItem>
                <a href="https://github.com/MemeEngineer" target="blank">
                  <img
                    src={Github}
                    atl="github"
                    style={{ height: "3em", width: "3em" }}
                  />
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://www.linkedin.com/in/johnnywu5/"
                  alt="Linkedin"
                  target="blank"
                >
                  <img src={Linkedin} style={{ height: "3em", width: "3em" }} />
                </a>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </nav>
  );
}
