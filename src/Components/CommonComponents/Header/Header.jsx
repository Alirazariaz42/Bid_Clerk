import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { Call, Facebook, Instagram, LinkedIn, Mail } from "@mui/icons-material";
import { MyContext } from "../../Store/MyContext";
import { Dropdown } from "bootstrap";
export const Header = () => {
  const contextvalue = useContext(MyContext);
  const ChangeFunction = contextvalue.changefunction;

  return (
    <>
      <div className=" header">
        <div className="textelementCenter ">
          <a
            href="tel:+1 917 300 1079"
            className=" text-light text-decoration-none"
          >
            {" "}
            <Call /> +1 917 300 1079{" "}
          </a>
          <a
            href="mailto:Davidson@bidclerkestimating.com"
            className=" text-light text-decoration-none"
          >
            {" "}
            <Mail /> Davidson@bidclerkestimating.com
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={ChangeFunction}
            className=" Off40 text-decoration-none text-uppercase border border-light p-1 text-light"
          >
            {" "}
            Click Here to Get 40% Off
          </a>
        </div>
        <div className=" text-light">
          <a
            className=" text-light text-decoration-none"
            href="https://www.instagram.com/bidclerkestimating/"
            target="blank"
          >
            {" "}
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/people/BidClerk-Estimating/100093576548323/"
            className=" text-light ps-3 pe-3 text-decoration-none"
            target="blank"
          >
            {" "}
            <Facebook />
          </a>

          <a
            href="https://www.linkedin.com/company/bidclerk-estimating/"
            className=" text-light text-decoration-none"
            target="blank"
          >
            {" "}
            <LinkedIn />
          </a>
        </div>
      </div>
      <div class="sticky">
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className=" mb-3 Navbar-Custom"

            //   className=""
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  className="LogoSize"
                  src={require("../../../Images/BidClerklogo.png")}
                  alt=""
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end align-items-center flex-grow-1 pe-md-3 pe-0">
                    <Nav.Link href="#action1">
                      <NavLink to="/">Home</NavLink>
                    </Nav.Link>

                    <Nav.Link
                      className="  position-relative ServicesDropDownContainer"
                      href="#action143"
                    >
                      <NavLink to="/services/">
                        Services <span style={{ fontSize: "13px" }}>▼</span>
                      </NavLink>
                      <div className="ServicesDropDown ">
                        <ul className=" p-2 m-0 ">
                          <li>
                            {" "}
                            <Link to="/cost-estimating-services/">
                              Cost Estimating Services
                            </Link>
                          </li>
                          <li className=" position-relative ServicesSubDropDownContainer">
                            <Link to="/construction-takeoff-services/">
                              Construction Takeoff Services{" "}
                            </Link>
                            <span
                              style={{
                                fontSize: "11px",
                                position: "absolute",
                                right: "15px",
                                top: "8px",
                              }}
                            >
                              {" "}
                              ▼
                            </span>{" "}
                            <ul className="ServicesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/quantity-takeoff-services/">
                                  Quantity Takeoff Services{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/material-takeoff-services/">
                                  Material Takeoff Services{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/cpm-scheduling/">CPM Scheduling </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/planning/">Planning </Link>
                          </li>
                        </ul>
                      </div>
                    </Nav.Link>

                    <Nav.Link
                      className="TradeDropDwonContainer"
                      href="#action68"
                    >
                      <NavLink to="/our-trades/">
                        Trades<span style={{ fontSize: "13px" }}> ▼</span>
                      </NavLink>

                      <div className=" TradeDropDwon">
                        <ul className=" m-0 p-2">
                          <li>
                            {" "}
                            <Link to="/general-requirements/">
                              {" "}
                              General Requirements{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/lumber-takeoff-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Lumber Takeoff{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0  TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/wood-plastic-estimating-services/">
                                  {" "}
                                  Wood and Plastic Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/thermal-moisture-protection-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Thermal & Moisture Protection{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0 TradesSubDropDown ">
                              <li>
                                {" "}
                                <Link to="/roofing-estimating-services/">
                                  {" "}
                                  Roofing Estimating Services{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/insulation-estimating-services/">
                                  {" "}
                                  Insulation Estimating Services{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/framing-estimating-services/">
                              {" "}
                              Framing Estimating{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/interior-exterior-finishes/"
                              className=" position-relative"
                            >
                              {" "}
                              Interior & Exterior Finishes{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0  TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/flooring-estimating-services/">
                                  {" "}
                                  Flooring Estimating & Takeoff{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/drywall-estimating-services/">
                                  {" "}
                                  Drywall Takeoff Services
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/furnishing-estimating-services/">
                              {" "}
                              Furnishings{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/masonry-estimating-services/">
                              {" "}
                              Masonry{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/concrete-estimating-services/">
                              {" "}
                              Concrete{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/sitework-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Site Works{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>
                            </Link>
                            <ul className=" m-0 TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/landscaping-estimating-services/">
                                  {" "}
                                  Landscape Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/metals-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Metals{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>
                            </Link>
                            <ul className=" m-0 TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/rebar-estimating-services/">
                                  {" "}
                                  Rebar Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="TradesSubDropDown">
                            {" "}
                            <Link to="/metals-estimating-services/">
                              {" "}
                              Metals{" "}
                            </Link>
                            <ul className=" m-0  ">
                              <li>
                                {" "}
                                <Link to="/rebar-estimating-services/">
                                  {" "}
                                  Rebar Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/equipment-estimating-services/">
                              {" "}
                              Equipment{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/conveying-system-estimating-services/">
                              {" "}
                              Conveying Systems{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/commercial-estimating-services/">
                              {" "}
                              Commercial Estimating{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/industrial-estimating-services/">
                              {" "}
                              Industrial Estimating{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/residential-estimating-services/">
                              {" "}
                              Residential Estimating{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/mep-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              MEP Estimating{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0  TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/mechanical-estimating-services/">
                                  {" "}
                                  Mechanical Estimating Services{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/electrical-estimating-services/">
                                  {" "}
                                  Electrical Estimating Services
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/plumbing-estimating-services/">
                                  {" "}
                                  Plumbing Estimating Services
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/gutter-estimating-services/">
                                  {" "}
                                  Gutter Estimating Services
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/special-construction-estimating-services/">
                              {" "}
                              Special Construction{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/hvac-estimating-services/">
                              {" "}
                              HVAC Estimating{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Nav.Link>

                    {/* <NavDropdown
                      title="Trades"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      onClick={handleClick}
                    >
                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            width: "100%",
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/GeneralRequirements"
                        >
                          General Requirements
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown
                        title="Nested Dropdown"
                        id="nested-nav-dropdown"
                      >
                        <NavDropdown.Item href="#nested/1">
                          <NavLink
                            style={{
                              display: "inline-block",
                              width: "100%",
                              textDecoration: "none",
                              color: "black",
                              fontWeight: "600",
                            }}
                            to="/GeneralRequirements"
                          >
                            General Requirements
                          </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#nested/2">
                          Nested Action 2
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            width: "100%",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/LumberTakeOff"
                        >
                          Lumber TakeOff
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/ThermalAndMostiure"
                        >
                          Thermal And Mostiure Protection
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            width: "100%",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/FramingEstimating"
                        >
                          Framing Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            width: "100%",
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/FurnishingEstimating"
                        >
                          Furnishing Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            width: "100%",
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/Masonry"
                        >
                          Masonry Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/Concrete"
                        >
                          Concrete Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            width: "100%",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/Metals"
                        >
                          Metals Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            width: "100%",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/SiteWork"
                        >
                          SiteWork Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "600",
                            width: "100%",
                          }}
                          to="/CommericalEstimating"
                        >
                          Commerical Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            width: "100%",
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/IndustrialEstimating"
                        >
                          Industrial Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/ResidentialEstimating"
                        >
                          Residential Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action13">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/MEP_Estimating"
                        >
                          MEP Estimating
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action16">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/ElectricalEstimation"
                        >
                          Electrical Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action14">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            width: "100%",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/MechanicalEstimating"
                        >
                          Mechanical Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action15">
                        <NavLink
                          style={{
                            display: "inline-block",
                            width: "100%",
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/ConveyingSystem"
                        >
                          Conveying System Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action15">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/HVAC"
                        >
                          HVAC Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action15">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            width: "100%",
                            color: "black",
                            fontWeight: "600",
                          }}
                          to="/SpecialConstruction"
                        >
                          Special Construction Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action15">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/Equipment"
                        >
                          Equipment Estimating
                        </NavLink>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action15">
                        <NavLink
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            color: "black",
                            width: "100%",
                            fontWeight: "600",
                          }}
                          to="/InterionExterior"
                        >
                          Interion Exterior Estimating
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown> */}

                    <Nav.Link href="#action6">
                      <NavLink to="/about-us/">About Us</NavLink>
                    </Nav.Link>

                    <Nav.Link href="#action7">
                      <NavLink to="/payment/">Payments </NavLink>
                    </Nav.Link>

                    <Nav.Link href="#action8">
                      <NavLink to="/estimating-fee/">Estimating Fee</NavLink>
                    </Nav.Link>

                    <Nav.Link href="#action9">
                      <NavLink to="/contact-us/">Contact Us</NavLink>
                    </Nav.Link>
                  </Nav>

                  <Nav className=" justify-content-end">
                    <Button
                      onClick={ChangeFunction}
                      className=" fw-semibold GetEstimation-Btn"
                      varient=""
                    >
                      {" "}
                      Get Estimation
                    </Button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};
