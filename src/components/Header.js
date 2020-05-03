import React from "react";
import styled from "styled-components";

const Head = styled.header`
  a {
    font-family: "Lato", Sans-serif;
    color: grey;
    font-size: 0.9rem;
    margin: 0 0.5em;
    font-weight: bold;
    
  }
  .card:hover{
      background-color: lightgray;
    color: black;
    text-decoration: none;
    }

  #nav {
    background-color: purple;
  }
  #button {
    border: 0;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: black;
    background-color: white;
  }
  .dropdown-item a {
    color: rgba(0, 0, 0, 0.5) !important;
  }
  .nav-link {
    text-align: center;
  }
  #button:focus {
    outline: none;
    border: none;
  }
  .active {
    background-color: lightgray;
    color: black;
    text-decoration: none;
  }
  .card {
    border-radius: 0;
  }

  @media (max-width: 767.98px) {
    .nav-item {
      text-align: center;
      padding: 1em 0;
    }
  }
`;

const Header = () => {
  return (
      <Head>
        <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
          <a className="navbar-brand font-weight-bold" href="#">
            Appruve
          </a>
          <button
            className="navbar-toggler"
            id="button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse pb-4 pb-md-0"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ml-auto" id="links">
              <a className="nav-item nav-link" href="#">
                Login
              </a>
              <a className="nav-item nav-link my-auto sign-up" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
        {/* <div className="row mx-auto text-center mt-4">
          <div className="col-md-4 w-75 mx-auto">
            <NavLink exact to="/bronze" className="card py-2">
              Bronze
            </NavLink>{" "}
          </div>
          <div className="col-md-4  w-75 mx-auto">
            <NavLink to="/silver" className="card py-2">
              Silver
            </NavLink>
          </div>
          <div className="col-md-4  w-75 mx-auto">
            <NavLink to="/gold" className="card py-2">
              Gold
            </NavLink>
          </div>
        </div> */}
      </Head>
  );
};

export default Header;
