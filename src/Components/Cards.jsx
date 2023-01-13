import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../CSS/Cards.css";

const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await (await fetch("http://localhost:5050/products")).json();
    // console.log(response);
    setProducts(response);
  };
  return (
    <div>
      <h2>Top Sellings</h2>
      <div className="main-cards">
        {products.map((data, i) => {
          if (i <= 5) {
            return (
              <div
                className="card card-list"
                key={i}
                style={{ width: "12rem" }}
              >
                <img
                  src={data.thumbnail}
                  className="card-img-top"
                  alt="Image"
                ></img>
                <div className="card-body">
                  <h6 className="card-title">{data.title}</h6>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>
        <h2>the Second Categery</h2>
        <div className="main-cards">
          {products.map((data, i) => {
            if (i > 5 && i <= 11) {
              return (
                <div
                  className="card card-list"
                  key={i}
                  style={{ width: "12rem" }}
                >
                  <img
                    src={data.thumbnail}
                    className="card-img-top"
                    alt="Image"
                  ></img>
                  <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h2>the third Categery</h2>
        <div className="main-cards">
          {products.map((data, i) => {
            if (i > 11 && i <= 17) {
              return (
                <div
                  className="card card-list"
                  key={i}
                  style={{ width: "12rem" }}
                >
                  <img
                    src={data.thumbnail}
                    className="card-img-top"
                    alt="Image"
                  ></img>
                  <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div>
        <h2>the Fourth Categery</h2>

        <div className="main-cards">
          {products.map((data, i) => {
            if (i > 17 && i <= 23) {
              return (
                <div
                  className="card card-list"
                  key={i}
                  style={{ width: "12rem" }}
                >
                  <img
                    src={data.thumbnail}
                    className="card-img-top"
                    alt="Image"
                  ></img>
                  <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

{
  /* <div className="price rating details">
                                <div className="price-details">Price : {data.price}</div>
                                <div className="rating-details">Rating : {data.rating}</div>
                            </div> */
}