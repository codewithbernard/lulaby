import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';

import 'materialize-css/dist/css/materialize.min.css'
import './Landing.css';

class Landing extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.context.router.history.push('/explore/users');
    }
  }

  render() {
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper container">
            <a id="logo-container" href="/" className="brand-logo">Lullaby</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/auth/spotify">Login with Spotify</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="/auth/spotify">Login with Spotify</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
            <br/>
              <h1 className="header center">Lullaby</h1>
              <div className="row center">
                <h4 className="header col s12 light">Find people with similar taste in music like YOU</h4>
              </div>
              <div className="row center">
                <a href="/auth/spotify" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
              </div>
            <br/>

            </div>
          </div>
          <div className="parallax"><img src="landingBackground/background1.jpg" alt="Unsplashed background img 1" /></div>
        </div>


        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Use your Spotify account</h5>

                  <p className="light">No boring and long registration needed. Just use your already created Spotify account. Lullaby will analyze your favorite artists and find people with similar taste in music. It is simple as that.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">Find new friends</h5>

                  <p className="light">By utilizing Spotify tools, we are able to identify users listening habits and their taste in music. Comparing these units, we are able to find people around you who listen same music as you. How cool is that?</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Then it's up to you</h5>

                  <p className="light">What you will do next is entirely up to you. You can find new friends, partner for a concert or festival. What the heck, maybe it will be you future wife/husband. Who knows? Don't waste your time and let's get started.</p>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">If music be the food of love play on</h5>
              </div>
            </div>
          </div>
          <div className="parallax"><img src="landingBackground/background2.jpg" alt="Unsplashed background img 2" /></div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Still hesitate?</h4>
                <p className="left-align light">It is simple, easy and fast. Just login using your Spotify account and find friends with same interest in music like you. It takes only 30 seconds. If you will not be satisfied you can delete your account at any time. No ads, no spams and completelz free. Just you and the people you will probably like. So don't waste your time and let's get started. It is only one click away.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">Without music, life would be a mistake</h5>
              </div>
            </div>
          </div>
          <div className="parallax"><img src="landingBackground/background3.jpg" alt="Unsplashed background img 3" /></div>
        </div>

        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About Lullaby</h5>
                <p className="grey-text text-lighten-4">I created this app as a part of learning React. Any ideas and improvements are more than welcome.</p>
              </div>
              <div className="col l3 s12">
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="https://www.linkedin.com/in/bernard-bado-416a8787/">LinkedIn</a></li>
                  <li><a className="white-text" href="https://www.facebook.com/bernard.bado">Facebook</a></li>
                  <li><a className="white-text" href="mailto:bado.bernard94@gmail.com">Mail</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Lullaby. All rights reserved. Design by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return { authenticated: auth }
}

export default connect(mapStateToProps)(Landing);
