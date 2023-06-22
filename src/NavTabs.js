import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    //conditionally renders page change and shows current page depending on which nav tab is clicked
    <div className="header">
      <h1>Drew Senour</h1>
      <p>FullStack Developer</p>
      <nav className="navbar justify-content-end">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
             <FontAwesomeIcon icon={faPerson}/> About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
               <FontAwesomeIcon icon={faFolderOpen}/>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >  <FontAwesomeIcon icon={faPhoneFlip}/>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            > <FontAwesomeIcon icon={faFile}/>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      </div>
  );
};

export default NavTabs;
