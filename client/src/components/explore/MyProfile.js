import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MyProfile.css';

class MyProfile extends Component {
  render() {
    return(
        <main>
          <div id="my-profile" className="row">
            <form className="col offset-xl1 xl3">
              <div className="row">
                <div className="input-field col xl6">
                  <i className="material-icons prefix">favorite</i>
                  <input id="age" type="number" className="validate" />
                  <label htmlFor="age">Age</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">child_care</i>
                  <textarea id="about" className="materialize-textarea"></textarea>
                  <label htmlFor="about">About</label>
                </div>
              </div>
            </form>
            <div className="col offset-xl1 xl5">
              <div className="card">
                <div className="card-image">
                  <img src="/landingBackground/background1.jpg" />
                  <button className="btn-floating halfway-fab waves-effect waves-teal teal lighten-2">
                    <i className="material-icons">edit</i>
                    <input type="file" id="upload-image" />
                  </button>
                </div>
                <div className="card-content">
                  <span className="card-title">Card Title</span>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default connect(null)(MyProfile);
