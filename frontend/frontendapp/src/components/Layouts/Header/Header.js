import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img
            src="https://cdn.dribbble.com/userupload/3166340/file/original-7c0949addb967b19d37ee942722c1fc0.png?compress=1&resize=1024x768"
            alt=""
          />
        </div>

        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand">
              <span>BM</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mx-auto ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tour
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Company
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Delivery route
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <a href="/login" className="user_link">
                  <i className="fa fa-user" aria-hidden="true" />
                </a>
                <a className="cart_link" href="#">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 456.029 456.029"
                    style={{ enableBackground: "new 0 0 456.029 456.029" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
             c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
             C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
             c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
             C457.728,97.71,450.56,86.958,439.296,84.91z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
             c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <form className="form-inline">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <i class="fa fa-search-plus" aria-hidden="true" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#" style={{ margin: "0px" }}>
                        <i class="fa fa-search" aria-hidden="true">
                          {"  "}
                           Company
                        </i>
                      </Dropdown.Item>
                      <Dropdown.Item href="#" style={{ margin: "0px" }}>
                        <i class="fa fa-search" aria-hidden="true">
                          {" "}
                           Route
                        </i>
                      </Dropdown.Item>
                      <Dropdown.Item href="#" style={{ margin: "0px" }}>
                        <i class="fa fa-search" aria-hidden="true">
                          {" "}
                           Trip
                        </i>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </form>
                <a
                  className="order_online"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Book tickets
                </a>
              </div>
            </div>
          </nav>
        </div>
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>BusManagement</h1>
                        <p>Your satisfaction is our motivation to improve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
