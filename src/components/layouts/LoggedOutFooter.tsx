import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const LoggedOutFooter: FunctionComponent = function () {
  return (
    <footer className="logged-out-footer d-flex justify-content-center align-items-center col-md-12">
      <div className="logged-out-div d-flex pb-xl-0 pb-lg-5 pl-3 mb-xl-0 mb-lg-4 justify-content-center align-items-center flex-column">
        <div className="logged-out-footer-select-div ml-xl-0 ml-lg-5">
          <i className="fas fa-chevron-down logged-out-footer-select-icon"></i>
          <select
            name="logged-out-language-picker"
            id="logged-out-language-picker"
            className="logged-out-footer-select form-control rounded-0 mb-md-4"
          >
            <option value="choose-one" id="choose" disabled>
              Select your language…
            </option>
            <option value="cs" data-url="https://trello.com/cs/logged-out">
              Čeština
            </option>
            <option value="de" data-url="https://trello.com/de/logged-out">
              Deutsch
            </option>
            <option value="en" data-url="https://trello.com/en/logged-out">
              English
            </option>
            <option value="en-AU" data-url="https://trello.com/en-AU/logged-out">
              English (AU)
            </option>
            <option value="en-GB" data-url="https://trello.com/en-GB/logged-out">
              English (UK)
            </option>
            <option value="en-US" data-url="https://trello.com/en-US/logged-out">
              English (US)
            </option>
            <option value="es" data-url="https://trello.com/es/logged-out">
              Español
            </option>
            <option value="fr" data-url="https://trello.com/fr/logged-out">
              Français
            </option>
            <option value="it" data-url="https://trello.com/it/logged-out">
              Italiano
            </option>
            <option value="hu" data-url="https://trello.com/hu/logged-out">
              Magyar
            </option>
            <option value="nl" data-url="https://trello.com/nl/logged-out">
              Nederlands
            </option>
            <option value="nb" data-url="https://trello.com/nb/logged-out">
              Norsk (bokmål)
            </option>
            <option value="pl" data-url="https://trello.com/pl/logged-out">
              Polski
            </option>
            <option value="pt-BR" data-url="https://trello.com/pt-BR/logged-out">
              Português (Brasil)
            </option>
            <option value="fi" data-url="https://trello.com/fi/logged-out">
              Suomi
            </option>
            <option value="sv" data-url="https://trello.com/sv/logged-out">
              Svenska
            </option>
            <option value="vi" data-url="https://trello.com/vi/logged-out">
              Tiếng Việt
            </option>
            <option value="tr" data-url="https://trello.com/tr/logged-out">
              Türkçe
            </option>
            <option value="ru" data-url="https://trello.com/ru/logged-out">
              Русский
            </option>
            <option value="uk" data-url="https://trello.com/uk/logged-out">
              Українська
            </option>
            <option value="th" data-url="https://trello.com/th/logged-out">
              ภาษาไทย
            </option>
            <option value="zh-Hans" data-url="https://trello.com/zh-Hans/logged-out">
              中文 (简体)
            </option>
            <option value="zh-Hant" data-url="https://trello.com/zh-Hant/logged-out">
              中文 (繁體)
            </option>
            <option value="ja" data-url="https://trello.com/ja/logged-out">
              日本語
            </option>
          </select>
        </div>
        <div className="logged-out-footer-link-div position-relative text-md-center">
          <Link to="#">Templates</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">Apps</Link>
          <Link to="#">Jobs</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Developers</Link>
          <Link to="#">About</Link>
          <Link to="#">Help</Link>
          <Link to="#">Legal</Link>
          <Link to="#">Cookie Settings</Link>
          <Link to="#">Privacy</Link>
        </div>
        <div className="logged-out-footer-logo-div d-flex align-items-center mt-md-3">
          <div className="logged-out-footer-logo-div">
            <img
              className="atlassian-logo-small logged-out-footer-logo-img img-fluid"
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg"
              width="150"
            />
          </div>
          <p className="logged-out-footer-copyright">&copy; Copyright 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LoggedOutFooter;
