import React, { Component } from "react";
import Newsitems from "./Newsitems.js";

export default class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4">
              <Newsitems
                title="Main News"
                description="Ths is Main Description"
              />
            </div>
            <div className="col-md-4">
              <Newsitems
                title="Main News"
                description="Ths is Main Description"
              />
            </div>
            <div className="col-md-4">
              <Newsitems
                title="Main News"
                description="Ths is Main Description"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
