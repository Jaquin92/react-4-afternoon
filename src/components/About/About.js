import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link className="subnav_links" to="/about">
            <h3>About</h3>
          </Link>
          <Link className="subnav_links" to="/about/history">
            <h3>History</h3>
          </Link>
          <Link className="subnav_links" to="/about/contact">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          {" "}
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>West Side U.</h1>
                  <p>
                    © DevMountain LLC, 2017. Unauthorized use and/or duplication
                    of this material without express and written permission from
                    DevMountain, LLC is strictly prohibited. Excerpts and links
                    may be used, provided that full and clear credit is given to
                    DevMountain with appropriate and specific direction to the
                    original content.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
