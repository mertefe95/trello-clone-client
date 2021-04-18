import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const LoggedOutHeader: FunctionComponent = function () {
  return (
    <nav className="logged-out-nav d-md-flex align-items-center justify-content-between px-md-5">
      <div className="logged-out-nav-logo">
        <g fill="none" fillRule="evenodd">
          <path
            d="m55.59.05h-47.59c-4.09404706.00551759-7.41002701 3.32594922-7.41002701 7.42v47.53c-.00528378 1.9696377.77274622 3.8605688 2.16267899 5.2561289 1.38993277 1.39556 3.27770494 2.1812238 5.24734802 2.1838711h47.59c1.9696431-.0026473 3.8574153-.7883111 5.247348-2.1838711 1.3899328-1.3955601 2.1679628-3.2864912 2.162679-5.2561289v-47.53c0-4.09405078-3.3159799-7.41448241-7.410027-7.42zm-28.1 44.95c-.0026176.6559285-.2670837 1.2836487-.7346392 1.7436933-.4675554.4600445-1.0994759.7143111-1.7553608.7064901h-10.4c-1.3563709 0-2.4590172-1.093857-2.47-2.4501834v-31c.0055071-1.3602365 1.1097524-2.4601832 2.47-2.4601832h10.4c.6576149-.0078371 1.2910602.2477958 1.7589086.7100074s.7310914 1.092512.7310914 1.7501758zm24-14.21c-.0052829.6550915-.2705946 1.281251-.7375649 1.7407198-.4669702.4594687-1.097344.7146061-1.7524351.7093619h-10.41c-1.3586205 0-2.46-1.1014612-2.46-2.4600817v-16.78c0-1.3586205 1.1013795-2.4600812 2.46-2.4600812h10.41c.6568135-.0052426 1.2886978.2512642 1.7559566.7128934s.7314057 1.090358.7340434 1.7471878z"
            fill="url(#trello-logo-neutral)"
          ></path>
          <g fill="#505f79" fillRule="nonzero">
            <path d="m129.92 4.63v12h-14.3v45.76h-13.77v-45.71h-14.29v-12z"></path>
            <path d="m147.46 62.44h-12.74v-45h12.74v8.66c2.41-6.08 6.28-9.68 13.17-9.24v13.29c-8.95-.71-13.17 1.49-13.17 8.71z"></path>
            <path d="m230.24 62.79c-8.35 0-13.61-4.05-13.61-13.46v-49.28h12.83v47.52c0 2.72 1.81 3.69 4 3.69.631039.0116399 1.262202-.015076 1.89-.08v11.08c-1.669541.4183272-3.390144.5967851-5.11.53z"></path>
            <path d="m257 62.79c-8.35 0-13.6-4.05-13.6-13.46v-49.28h12.83v47.52c0 2.72 1.81 3.69 4.05 3.69.631034.0112254 1.262172-.0154894 1.89-.08v11.08c-1.689034.4234864-3.430173.6019785-5.17.53z"></path>
            <path d="m268.31 39.91c0-13.9 8-23.4 21.78-23.4s21.61 9.49 21.61 23.4-7.92 23.58-21.61 23.58-21.78-9.76-21.78-23.58zm12.48 0c0 6.78 2.84 12.15 9.3 12.15s9.13-5.37 9.13-12.15-2.76-12-9.13-12-9.3 5.22-9.3 12z"></path>
            <path d="m177.83 44c3.569687.4010421 7.157945.6146686 10.75.64 9.75 0 18-2.63 18-12.07 0-9.17-8.47-16.06-18.66-16.06-13.72 0-22.5 9.94-22.5 23.84 0 14.43 7.58 23 24.71 23 5.079264.0387918 10.121517-.8665756 14.87-2.67v-10.78c-4.39 1.41-9.35 2.8-14.43 2.8-6.83 0-11.57-2.24-12.74-8.7zm9.83-17.67c3.61 0 6.51 2.44 6.51 5.8 0 4.31-4.56 5.66-9.79 5.66-2.230114-.0102442-4.456334-.1874058-6.66-.53.161904-2.1008381.761405-4.1445914 1.76-6 1.632917-3.0031917 4.761829-4.888954 8.18-4.93z"></path>
          </g>
        </g>
      </div>

      <div className="logged-out-nav-right-div btn-group-lg mr-lg-5 mr-xl-0">
        <Link to="/login" className="btn btn-light logged-out-nav-btn logged-out-login-btn px-md-4 border-0">
          Log In
        </Link>
        <Link
          to="/signup"
          className="btn btn-success logged-out-nav-btn logged-out-success-btn font-weight-bold ml-md-3 px-md-4 border-0"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default LoggedOutHeader;