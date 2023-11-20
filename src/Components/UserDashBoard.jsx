import React from "react";
import { BiHelpCircle, BiMenu, BiPowerOff, BiStore } from "react-icons/bi";
import {
  BsFillPuzzleFill,
  BsFlower1,
  BsMailbox,
  BsPerson,
  BsQuestion,
} from "react-icons/bs";
import "./UserDashBoard.css";
import Avatar from "./AdobeStock_635528044_Preview.jpeg";

export default function UserDashBoard() {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-sm-3">
          <div class="card mb-3">
            <div class="card-body d-flex justify-content-center">
              <div
                class="col-sm-6 gradient-custom text-center "
                style={{
                  borderTopLeftRadius: ".5rem",
                  borderBottomLeftRadius: ".5rem",
                }}
              >
                <img
                  src={Avatar}
                  alt="Avatar"
                  class="img-fluid my-3"
                  width="100px"
                />
                <h4 className="card-title">Your name </h4>
                <p className="card-text">youremail@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12 sideNav ">
                  <BiMenu /> <span className="me-2 mb-0"> Dashboard</span>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12 sideNav ">
                  <BsFlower1 /> <span className=" mb-0">Perks</span>
                </div>
              </div>
              <hr />
              <div class="row ">
                <div class="col-sm-12 sideNav ">
                  <BsFillPuzzleFill /> <span className=" mb-0">Addons</span>
                </div>
              </div>
              <hr />
              <div class="row ">
                <div class="col-sm-12 sideNav ">
                  <BiHelpCircle /> <span className=" mb-0">FAQ</span>
                </div>
              </div>
              <hr />
              <div class="row ">
                <div class="col-sm-12 sideNav ">
                  <BsQuestion /> <span className="mb-0">Support</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-primary" style={{ cursor: "pointer" }}>
                  Logout <BiPowerOff />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div
            class="card mb-4"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
          >
            <div class="card-body">
              <h2 className="card-title">
                Choose a plan that's just right for you !
              </h2>
              <div class="container">
                <div class="row py-5 d-flex mb-5">
                  <div class="col-sm-4 text-center mt-3">
                    <div
                      className="card"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <div className="card-body">
                        <h3>Basic</h3>
                        <h5>$9.99/month</h5>
                        <p>For all</p>
                        <button className="btn btn-danger btn-sm">
                          Get started
                        </button>
                        <hr />
                        <small>What you'll get</small>
                        <div className="cardFooter">
                          <div>
                            <BsPerson /> <span>Upto 25 Users</span>
                          </div>
                          <div>
                            <BiStore /> <span>Upto 25gb Storage</span>
                          </div>
                          <div>
                            <BsMailbox /> <span>Email support</span>
                          </div>
                        </div>
                        <a href="/features">Explore more Features</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4 text-center mt-3">
                    <div
                      className="card mb-3"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <div className="card-body">
                        <h3>Standard</h3>
                        <h5>$99.99/month</h5>
                        <p>For Students</p>
                        <button className="btn btn-warning btn-sm">
                          Get started
                        </button>
                        <hr />
                        <small>What you'll get</small>
                        <div className="cardFooter">
                          <div>
                            <BsPerson /> <span>Upto 50 Users</span>
                          </div>
                          <div>
                            <BiStore /> <span>Upto 60gb Storage</span>
                          </div>
                          <div>
                            <BsMailbox /> <span>Email chat Support</span>
                          </div>
                        </div>
                        <a href="/features">Explore more Features</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4 text-center mt-3">
                    <div
                      className="card"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <div className="card-body">
                        <h3>Premium</h3>
                        <h5>$199.99/month</h5>
                        <p>For Business</p>
                        <button className="btn btn-success btn-sm">
                          Get started
                        </button>
                        <hr />
                        <small>What you'll get</small>
                        <div className="cardFooter">
                          <div>
                            <BsPerson /> <span>Upto 75 Users</span>
                          </div>
                          <div>
                            <BiStore /> <span>Upto 100gb Storage</span>
                          </div>
                          <div>
                            <BsMailbox />{" "}
                            <span>Email chat + Whatsapp support</span>
                          </div>
                        </div>
                        <a href="/features">Explore more Features</a>
                      </div>
                    </div>
                  </div>

                  <div class="col col-xl-10 mt-4">
                    <div class="card mb-4" style={{ borderRadius: "10px" }}>
                      <div class="card-body p-4">
                        <div
                          style={{
                            background: "green",
                            padding: "5px",
                            borderRadius: "50%",
                            width: "100px",
                          }}
                        >
                          <small>Free foreEver</small>
                        </div>

                        <h3>
                          <strong>Free Starter</strong>
                        </h3>
                        <small className="me-2 text-sm">
                          Something Beautyful for God
                        </small>
                        <button className="btn btn-success btn-sm">
                          Get Started
                        </button>

                        <div className="cardFooter">
                          <small className="mb-2">What you'll get</small>
                          <div>
                            <BsPerson /> <span>Upto 50 Users</span>
                          </div>
                          <div>
                            <BiStore /> <span>Upto 60gb Storage</span>
                          </div>
                          <div>
                            <BsMailbox /> <span>Email chat Support</span>
                          </div>
                        </div>
                        <hr class="my-3" />
                        <div class="d-flex justify-content-end"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
