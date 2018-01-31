import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions'

import './MyProfile.css';

class MyProfile extends Component {
  renderAge(field) {
    return(
      <div className="input-field col xl6">
        <i className="material-icons prefix">favorite</i>
        <input id="age" type="number" className="validate" {...field.input} />
        <label htmlFor="age">Age</label>
      </div>
    );
  }

  renderAbout(field) {
    return(
      <div className="input-field col s12">
        <i className="material-icons prefix">child_care</i>
        <textarea id="about" className="materialize-textarea" {...field.input}></textarea>
        <label htmlFor="about">About</label>
      </div>
    );
  }

  renderUploadImage(field) {
    return(
      <button className="file-field btn-floating halfway-fab waves-effect waves-teal teal lighten-2">
        <i className="material-icons">edit</i>
        <input id="image" type="file" onDrop={field.input.onDrop} onChange={field.input.onChange} onFocus={field.input.onFocus} />
      </button>
    );
  }

  async onSubmit(values) {
    this.props.updateUser(this.props.auth.spotifyId, values);
  }

  render() {
    return(
        <main>
          <div id="my-profile" className="row">
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <div className="col offset-xl1 xl3">
                  <Field
                    label="age"
                    name="age"
                    component={this.renderAge}
                  />
                  <Field
                    label="about"
                    name="about"
                    component={this.renderAbout}
                  />
                  <div className="input-field col s12">
                    <button id="submit-profile-changes" type="submit" className="waves-effect waves-light btn">save</button>
                  </div>
                </div>
                <div className="col offset-xl1 xl5">
                  <div className="card">
                    <div className="card-image">
                      <img src="/landingBackground/background1.jpg" />
                      <Field
                        label="image"
                        name="image"
                        component={this.renderUploadImage}
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title">Card Title</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
    );
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default reduxForm({
	form: 'MyProfileForm'
})(
	connect(mapStateToProps, actions)(MyProfile)
);
