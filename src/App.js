import React from "react";
import "./styles.css";

export default function App() {
  const menuItems = ["Home", "Work", "About", "Contact"];
  const customersList = [
    { name: "Customer 1", url: "https://www.google.co.uk" },
    { name: "Customer 2", url: "https://www.google.co.uk" },
    { name: "Customer 3", url: "https://www.google.co.uk" }
  ];
  return (
    <div className="App">
      <div className="header">
        {menuItems.map((item, index) => (
          <span className="headerItem">
            <a href>{item}</a>
          </span>
        ))}
      </div>

      <div id="home" className="homeContainer">
        <h1>This is where we started...</h1>
        <div className="slides">
          <span>
            <img
              className="sliderImage"
              alt="SliderImage"
              src="https://picsum.photos/seed/picsum/300/200"
            />
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            quis auctor elit sed.
          </span>
        </div>
      </div>
      <div id="work" className="customersContainer">
        <h1>My Work</h1>
        <div className="customers">
          {customersList.map((customer, ind) => (
            <a href={customer.url}>
              <span className="customerItem">{customer.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div id="about" className="aboutContainer">
        <h1>About Us</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          donec massa sapien faucibus et molestie ac feugiat. Proin gravida
          hendrerit lectus a. Vestibulum lorem sed risus ultricies tristique
          nulla aliquet enim. Auctor neque vitae tempus quam pellentesque nec
          nam aliquam sem.
        </div>
      </div>

      <div id="contact" className="contactContainer">
        <h1>Contact Us here!</h1>
        <div>
          <div className="inputSpacing">
            <input />
          </div>
          <div className="inputSpacing">
            <input />
          </div>
          <div className="inputSpacing">
            <input />
          </div>
          <button>Submit</button>
        </div>
      </div>

      <div className="footer">
        <div>IFK Consultants Ltd</div>
      </div>
    </div>
  );
}
