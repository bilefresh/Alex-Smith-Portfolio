/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="">
		  <h4>Alex Smith</h4>
            {/*theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )*/}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
			<li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
			
			<li className="nav-item">
              <Link href="#about">
                <a className="nav-link">About</a>
              </Link>
            </li>
			
            <li className="nav-item">
              <Link href="#services">
                <a className="nav-link">Services</a>
              </Link>
            </li>
			
            <li className="nav-item">
              <Link href="#works">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
			
			<li className="nav-item">
              <Link href="#testimonials">
                <a className="nav-link">Testimonials</a>
              </Link>
            </li>
			
			<li className="nav-item">
              <Link href="#contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
