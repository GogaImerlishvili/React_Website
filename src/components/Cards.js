import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import adventure from "../imgs/img-9.jpg";
import bali from "../imgs/img-2.jpg";
import img3 from "../imgs/img-3.jpg";
import img4 from "../imgs/img-4.jpg";
import img8 from "../imgs/img-8.jpg";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {
              <CardItem
                src={adventure}
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
            }
            <CardItem
              src={bali}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            {
              <CardItem
                src={img3}
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Adventure"
                path="/services"
              />
            }
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert on a guided"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
