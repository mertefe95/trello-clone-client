import React, { FunctionComponent } from 'react';
import LoggedOutHeader from './layouts/LoggedOutHeader';
import LoggedOutFooter from './layouts/LoggedOutFooter';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LoggedOut: FunctionComponent = function () {
  return (
    <div className="logged-out-outer-container">
      <LoggedOutHeader />
      <main className="logged-out-main-container">
        <div className="mt-md-5 d-flex flex-column align-items-center justify-content-center">
          <div className="col-xl-12 col-lg-6 col-md-12 mt-md-5 ml-xl-0 ml-lg-3 pl-lg-5 pl-md-5 d-flex flex-column align-items-center justify-content-center logged-out-thanks-div">
            <h2 className="mb-3 font-weight-bolder">Thanks for using Trello.</h2>
            <p>You&apos;re all logged out. So now what?</p>
          </div>
        </div>

        <div className="mt-xl-5 mt-md-5 shared-comp-row d-flex flex-column align-items-center justify-content-center">
          <div className="mt-md-3 ml-xl-0 ml-lg-5 pl-lg-0 pl-md-5 logged-out-shared-comp-div col-xl-12 col-lg-10 col-md-10 d-flex flex-column align-items-center justify-content-center">
            <h2 className="mb-3 font-weight-bolder">Using a Shared Computer?</h2>
            <p className="px-md-5">
              We&apos;ve saved some of your preferences for the next time you log in, but if you&apos;d like you can
              clear those now.
            </p>
            <button className="btn btn-light font-weight-bold">Remove Saved Preferences</button>
          </div>
        </div>
        <div className="py-md-5 px-md-5 app-row d-flex flex-row align-items-center justify-content-center">
          <div className="mt-md-5 logged-out-app-img-div col-md-5 col-xl-5 col-6">
            <img
              className="app-row-img img-fluid"
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/b001cabdefbd6c7968ee9d1ad40124b0/home-devices.png"
              alt="Trello on devices."
            />
          </div>
          <div className="d-flex flex-column col-md-5">
            <p className="text-left">
              <strong className="font-weight-bolder">Do you have the apps?</strong> We’ve got apps for iPhone, iPad,
              Android phones, tablets, and watches. You probably have one of those.
            </p>
            <button className="btn">Download the Apps</button>
          </div>
        </div>
        <div className="pl-xl-5 pl-lg-5 pl-md-5 d-flex flex-column align-items-center justify-content-center py-5 logged-out-follow-row">
          <h2 className="font-weight-bolder">Follow us</h2>
          <p className="text-center px-lg-0 px-md-5 mx-lg-0 mx-md-5 ">
            <span>
              ...on the <Link to="#">Trello Blog</Link>, <Link to="#">Twitter</Link>, and <Link to="#">Facebook</Link>.
            </span>
            <br />
            We post all kinds of tips and updates, but not an annoying amount.
          </p>
        </div>
        <div className="logged-out-gold-row d-flex justify-content-center align-items-center flex-column">
          <div className="col-xl-6 col-lg-8 col-md-9 mt-lg-0 mt-md-3 ml-xl-0 ml-lg-5 ml-md-4 pl-xl-0 px-md-5 text-center d-flex justify-content-center align-items-center flex-column">
            <h2 className="font-weight-bold mb-md-4">Share Trello to get free Trello Gold.</h2>
            <p className="logged-out-gold-first-p">
              That&apos;s right. For every member you get to sign up, you&apos;ll get a free month of Trello Gold, up to
              12 months. With Trello Gold you get three Power-Ups per board, custom backgrounds, stickers and emoji,
              250MB attachments, and saved searches.
            </p>
            <p>Help us spread the word and get some free Gold.</p>
            <button className="btn btn-light py-md-2">Share Trello</button>
            <p className="logged-out-gold-last-p mt-md-4">You&apos;ll have to log in again.</p>
          </div>
        </div>
        <div className="logged-out-blue-row d-flex justify-content-center align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-8 pt-xl-0 pt-lg-5 pl-xl-0 pl-lg-5 ml-lg-0 ml-md-5 d-flex justify-content-center align-items-center flex-column">
            <h2 className="font-weight-bold text-md-center">&quot;Thanks, Trello, but I’m done for the day.&quot;</h2>
            <a className="my-md-4 text-md-center">Here&apos;s a game we made featuring Taco, our spokes-husky.</a>
            <div>
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/23d8d991ae99511497ef8f51a12acca5/pixel-taco.png"
                alt="Pixel Taco"
              />
            </div>
          </div>
        </div>
      </main>
      <LoggedOutFooter />
    </div>
  );
}

export default LoggedOut;
