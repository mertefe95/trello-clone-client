import React, { FunctionComponent } from 'react';
import signupFooterLeftImg from '../../images/trello-footer-img.png';
import signupFooterRightImg from '../../images/qweqwe.png';

const SignupLoginFooter: FunctionComponent = function () {
  return (
    <footer className="sign-up-footer" style={{ minHeight: '40vh' }}>
      <div className="sign-up-footer-container container d-flex flex-column justify-content-center align-items-center">
        <div className="sign-up-footer-row row d-flex flex-row justify-content-center align-items-center">
          <div className="col-12 sign-up-footer-col sign-up-footer-select-col d-flex flex-column justify-content-center align-items-center position-relative">
            <i className="fas fa-chevron-down arrow-icon position-relative sign-up-footer-arrow"></i>
            <select className="sign-up-footer-select">
              <option value="choose-one" id="choose" disabled>
                Select your language…
              </option>
              <option value="cs" data-url="https://trello.com/cs/signup">
                Čeština
              </option>
              <option value="de" data-url="https://trello.com/de/signup">
                Deutsch
              </option>
              <option value="en" data-url="https://trello.com/en/signup">
                English
              </option>
              <option value="en-AU" data-url="https://trello.com/en-AU/signup">
                English (AU)
              </option>
              <option value="en-GB" data-url="https://trello.com/en-GB/signup">
                English (UK)
              </option>
              <option value="en-US" data-url="https://trello.com/en-US/signup">
                English (US)
              </option>
              <option value="es" data-url="https://trello.com/es/signup">
                Español
              </option>
              <option value="fr" data-url="https://trello.com/fr/signup">
                Français
              </option>
              <option value="it" data-url="https://trello.com/it/signup">
                Italiano
              </option>
              <option value="hu" data-url="https://trello.com/hu/signup">
                Magyar
              </option>
              <option value="nl" data-url="https://trello.com/nl/signup">
                Nederlands
              </option>
              <option value="nb" data-url="https://trello.com/nb/signup">
                Norsk (bokmål)
              </option>
              <option value="pl" data-url="https://trello.com/pl/signup">
                Polski
              </option>
              <option value="pt-BR" data-url="https://trello.com/pt-BR/signup">
                Português (Brasil)
              </option>
              <option value="fi" data-url="https://trello.com/fi/signup">
                Suomi
              </option>
              <option value="sv" data-url="https://trello.com/sv/signup">
                Svenska
              </option>
              <option value="vi" data-url="https://trello.com/vi/signup">
                Tiếng Việt
              </option>
              <option value="tr" data-url="https://trello.com/tr/signup">
                Türkçe
              </option>
              <option value="ru" data-url="https://trello.com/ru/signup">
                Русский
              </option>
              <option value="uk" data-url="https://trello.com/uk/signup">
                Українська
              </option>
              <option value="th" data-url="https://trello.com/th/signup">
                ภาษาไทย
              </option>
              <option value="zh-Hans" data-url="https://trello.com/zh-Hans/signup">
                中文 (简体)
              </option>
              <option value="zh-Hant" data-url="https://trello.com/zh-Hant/signup">
                中文 (繁體)
              </option>
              <option value="ja" data-url="https://trello.com/ja/signup">
                日本語
              </option>
            </select>
          </div>
          <div className="col-12 mb-md-5 pb-sm-5 pb-0 mb-5 mb-lg-3 pb-lg-3 sign-up-footer-col sign-up-footer-logo-col d-flex align-items-center justify-content-center">
            <hr />
            <img
              className="atlassian-logo-small blue"
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
              width="150"
            />
          </div>

          <div
            style={{ bottom: '100px' }}
            className="col-12 sign-up-footer-col sign-up-footer-ul-col d-flex align-items-center justify-content-center position-relative"
          >
            <div className="sign-up-left-img-div position-relative" style={{ width: '400px', bottom: '220px' }}>
              <img className="sign-up-left-img" style={{ width: '100%', height: '100%' }} src={signupFooterLeftImg} />
            </div>
            <ul className="sign-up-footer-ul d-flex list-unstyled mt-5 mx-4 mx-md-5 mx-xl-5 px-xl-5">
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Templates</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Pricing</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Apps</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Jobs</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Blog</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Developers</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">About</a>
              </li>
              <li className="sign-up-footer-li mr-2">
                <a className="sign-up-link">Help</a>
              </li>
              <li className="sign-up-footer-li sign-up-cookie-link">
                <a className="sign-up-link">Cookie Settings</a>
              </li>
            </ul>
            <div className="sign-up-right-img-div position-relative" style={{ width: '400px', bottom: '190px' }}>
              <img className="sign-up-right-img" style={{ width: '100%', height: '100%' }} src={signupFooterRightImg} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SignupLoginFooter;
