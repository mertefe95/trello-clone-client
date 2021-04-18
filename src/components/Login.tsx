import React, { FunctionComponent } from 'react';
import SignupLoginFooter from './layouts/SignupLoginFooter';
import AppleLogo from '../images/apple-logo-black.svg';
import MicrosoftLogo from '../images/microsoft-logo.svg';
import GoogleLogo from '../images/sign-in-with-google.svg';

const Login: FunctionComponent = function () {
  return (
    <div id="sign-up" className="d-flex flex-column" style={{ maxHeight: '170vh' }}>
      <div
        className="sign-up-container container d-flex flex-column justify-content-center align-items-center"
        style={{ height: '90vh' }}
      >
        <div className="sign-up-row row d-flex flex-column justify-content-center align-items-center">
          <div className="sign-up-col col-12 sign-up-logo-div">
            <img
              alt="Trello"
              className="trello-main-logo"
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
            />
          </div>
          <div className="sign-up-col col-lg-8 col-xl-12 sign-up-form-div">
            <form className="sign-up-form d-flex flex-column">
              <h4 className="sign-up-form-title text-center">Log in to Trello</h4>
              <div className="col-lg-12 px-0 pb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="sign-up-form-email col-lg-12"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-lg-12 px-0 pb-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="sign-up-form-email col-lg-12"
                  placeholder="Enter password"
                />
              </div>
              <button className="sign-up-login-btn  btn-success">Log in</button>
              <span className="sign-up-if-span">OR</span>
              <button className="sign-up-google-btn d-flex justify-content-center align-items-center">
                <img src={GoogleLogo} />
                <span className="ml-2">Continue with Google</span>
              </button>
              <button className="sign-up-microsoft-btn d-flex justify-content-center align-items-center">
                <img src={MicrosoftLogo} />
                <span className="ml-2">Continue with Microsoft</span>
              </button>
              <button className="sign-up-apple-btn d-flex justify-content-center align-items-center">
                <img className="apple-logo" style={{ width: '9%', paddingBottom: '2px' }} src={AppleLogo} />
                <span className="ml-2">Continue with Apple</span>
              </button>
              <a className="text-center login-link login-sso-link mt-3">Log in with SSO</a>
              <div className="login-link-div d-flex align-content-center justify-content-center mt-3 mb-4">
                <a className="login-link">Can&apos;t log in?</a>
                <a className="login-link login-signup-account">Sign up for an account</a>
              </div>
            </form>

            <div className="login-link-div d-flex align-content-center justify-content-center mt-3 mb-4">
              <a className="login-link">Privacy Policy</a>
              <a className="login-link login-signup-account">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <SignupLoginFooter />
    </div>
  );
};

export default Login;
