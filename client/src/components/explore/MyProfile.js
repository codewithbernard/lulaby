import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions'

import './MyProfile.css';

class MyProfile extends Component {
  state = { image: null };

  renderAge(field) {
    return(
      <div className="input-field col xl6">
        <i className="material-icons prefix">favorite</i>
        <input id="age" type="text" {...field.input} />
        <label className="active" htmlFor="age">Age</label>
      </div>
    );
  }

  renderAbout(field) {
    return(
      <div className="input-field col s12">
        <i className="material-icons prefix">child_care</i>
        <textarea id="about" className="materialize-textarea" {...field.input}></textarea>
        <label className="active" htmlFor="about">About</label>
      </div>
    );
  }

  renderUploadImage(field) {
    return(
      <button className="file-field btn-floating halfway-fab waves-effect waves-teal teal lighten-2">
        <i className="material-icons">edit</i>
        <input id="image" type="file" onDrop={field.input.onDrop} onChange={event => this.onImageChange(event, field)} onFocus={field.input.onFocus} />
      </button>
    );
  }

  renderLoading() {
    if (this.props.load) {
      return(
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
      );
    }
  }

  onSubmit(values) {
    this.props.updateUser(this.props.auth.spotifyId, values);
  }

  onImageChange(event, field) {
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        image: reader.result
      });
    }
    reader.readAsDataURL(event.target.files[0]);
    field.input.onChange(event);
  }

  render() {
    if (this.props.auth) {
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
                    <button id="submit-profile-changes" type="submit" className="waves-effect waves-light btn">Save changes</button>
                  </div>
                </div>
                <div className="col offset-xl1 xl5">
                  <div className="card">
                    <div className="card-image">
                      <img src={this.state.image ? this.state.image : this.props.auth.image} alt=""/>
                      <Field
                        label="image"
                        name="image"
                        component={this.renderUploadImage.bind(this)}
                      />
                    </div>
                    {this.renderLoading()}
                    <div className="card-content">
                      <span className="card-title">{this.props.auth.spotifyId}</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      );
    }
    return null;
  }
}

function mapStateToProps({ auth, load }) {
  return {
    auth,
    load,
    initialValues: auth,
  }
}

MyProfile = reduxForm({
	form: 'MyProfileForm'
})(MyProfile)

MyProfile = connect(mapStateToProps,actions)(MyProfile)

export default MyProfile;
