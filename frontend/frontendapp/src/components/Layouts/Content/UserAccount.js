import React, { Component } from "react";

class UserAccount extends Component {
  render() {
    return (
      <>
        <section className="about_section layout_padding">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="img-box">
                  <img
                    src="/theme/images/1.jpg"
                    class="rounded-circle"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div id="wrapper">
                  <form className="form-login">
                    <h1 className="form-heading">User Information</h1>
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        className="form-user"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="lastName"
                        className="form-user"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="username"
                        className="form-user"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-user"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        className="form-user"
                        placeholder="Username"
                      />
                    </div>

                    <div
                      className="book_section layout_padding"
                      style={{ padding: "0px" }}
                    >
                      <div className="form_container">
                        <div className="btn_box">
                          <div className="form-submit">
                            <button>Change</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default UserAccount;
