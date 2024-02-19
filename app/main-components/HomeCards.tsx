"use client";
import { Smartphone, Watch } from "@mui/icons-material";
import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShirt, faMobile } from "@fortawesome/free-solid-svg-icons";

// Configure the library (one-time setup)
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCoffee, faShirt, faMobile);

export default function HomeCards() {
  return (
    <div className="HomeCards row">
      <Card
        className="col-lg-3 col-md-4 col-sm-6 mb-4  mx-3 popular-categories"
        
      >
        <Card.Body>
          <Card.Title>Most Popular Categories</Card.Title>

          <div className="icons-main">
            <Link href={`/categories/${"smartphones"}`} className="icons">
              <span className="homecards-icons">
                <FontAwesomeIcon
                  icon={faMobile}
                  className="font-awesome"
                />
              </span>
              <p>Phones</p>
            </Link>
            <Link href={`/categories/${"tops"}`} className="icons">
              <span className="homecards-icons">
                {" "}
                <FontAwesomeIcon
                  icon={faShirt}
                  className="font-awesome"
                />{" "}
              </span>
              <p>Tops</p>
            </Link>
            <Link href={`/categories/${"mens-watches"}`} className=" align-items-center justify-content-center icons ">
              <span className="mui-icons">
                <Watch />
              </span>
              <p>Men's Watches</p>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3 popular-items"
        
      >
        <Card.Body>
          <Card.Title>Most Popular Items</Card.Title>

          <div className="icons-main">
            <Link href={`/categories/${"smartphones"}`} className="icons">
              <span className="homecards-icons">
                <Smartphone />
              </span>
              <p>Phones</p>
            </Link>
            
            <Link href={`/categories/${"womens-watches"}`} className="align-items-center justify-content-center icons">
              <span className="homecards-icons">
                <Watch />
              </span>
              <p>Women's Watches</p>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3 d-flex align-items-center justify-content-center best-deals-card"
        
      >
        <Card.Body className="best-deals-body">
          <Card.Title>
            BEST{" "}
            <span
              style={{
                backgroundColor: "yellow",
                width: "88px",
                display: "inline-block",
              }}
            >
              DEALS
            </span>
          </Card.Title>

          <div className="best-deals">
            <p>
              {" "}
              <span
                style={{
                  backgroundColor: "red",
                  borderRadius: "10px",
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  color: "white",
                }}
              >
                {" "}
                2{" "}
              </span>{" "}
              for 1{" "}
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
