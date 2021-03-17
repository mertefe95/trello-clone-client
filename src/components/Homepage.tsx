import React, { FunctionComponent } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Homepage: FunctionComponent = function () {
  return (
    <div className="homepage-container">
      <Header />
      <section id="hero">
        <div className="container text-md-left hero-container">
          <div className="row align-items-center float-right">
            <div className="col-lg-7 col-md-10">
              <h3 className="homepage-hero-title mb-4">Trello helps teams move work forward.</h3>
              <p className="homepage-hero-text mb-4">
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the
                way your team works is unique—accomplish it all with Trello.
              </p>
              <Form className="homepage-hero-form text-left mr-2 mt-5 row" method="POST">
                <Form.Control className="homepage-email col-lg-7 col-md-7 mr-5" type="email" placeholder="Email" />
                <Link to="/" className="homepage-signup-form col-lg-5 col-md-5 py-2 ">
                  Sign up - it&apos;s free!
                </Link>
              </Form>
            </div>
            <div className="right-hero col-lg-5 col-md-5 position-relative mt-5">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
                width="931"
                height="1205"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="product">
        <div className="product-container container text-center">
          <div className="row d-flex flex-column align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-10 col-xl-12">
              <h2 className="product-title">It&apos;s more than work. It&apos;s a way of working together.</h2>
              <p className="product-p">
                Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork
                grows. Manage projects, organize tasks, and build team spirit—all in one place.
              </p>
              <Link className="start-doing-btn btn btn-outline-primary" to="/">
                Start doing →
              </Link>
            </div>
          </div>
          <div className="row d-flex flex-column align-items-center justify-content-center">
            <div className="col col-lg ml-md-5 product-img-div text-center d-flex justify-content-center">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/product/89d378b845766a8f0c48e955336266f8/board.png"
                width="1902"
                height="1334"
                className="product-image img-fluid d-block ml-md-5 ml-lg-0 ml-xl-0"
                alt="Board view"
              />
            </div>
          </div>

          <div className="row d-flex flex-column align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-10 col-xl-12">
              <p className="product-logos-text mb-4">
                Join over 1,000,000 teams worldwide that are using Trello to get more done.
              </p>
              <div className="product-logos d-flex align-items-center justify-content-center">
                <svg
                  role="img"
                  aria-label="Google"
                  className="mx-3"
                  height="33"
                  viewBox="0 0 99 33"
                  width="99"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m24.1255 11.7859h-11.4507v3.4008h8.1208c-.4012 4.7689-4.3652 6.8026-8.1071 6.8026-4.78732 0-8.96472-3.7699-8.96472-9.054 0-5.14751 3.98216-9.11181 8.97532-9.11181 3.8522 0 6.1222 2.45792 6.1222 2.45792l2.3791-2.46586s-3.0537-3.402464-8.6229-3.402464c-7.09115 0-12.5775 5.990774-12.5775 12.461614 0 6.3406 5.16087 12.5237 12.7585 12.5237 6.6826 0 11.5743-4.5819 11.5743-11.357 0-1.4294-.2073-2.2555-.2073-2.2555z"></path>
                  <path d="m33.5056 9.32324c-4.6985 0-8.0656 3.67646-8.0656 7.96436 0 4.3513 3.2659 8.0961 8.1208 8.0961 4.395 0 7.9956-3.3621 7.9956-8.0026 0-5.3186-4.1883-8.05786-8.0508-8.05786zm.0467 3.15426c2.3106 0 4.5 1.8696 4.5 4.8824 0 2.9487-2.1802 4.8717-4.5106 4.8717-2.5607 0-4.5807-2.0527-4.5807-4.8951 0-2.7815 1.995-4.859 4.5913-4.859z"></path>
                  <path d="m51.0479 9.32324c-4.6985 0-8.0657 3.67646-8.0657 7.96436 0 4.3513 3.266 8.0961 8.1209 8.0961 4.395 0 7.9955-3.3621 7.9955-8.0026 0-5.3186-4.1883-8.05786-8.0507-8.05786zm.0467 3.15426c2.3106 0 4.5 1.8696 4.5 4.8824 0 2.9487-2.1802 4.8717-4.5106 4.8717-2.5607 0-4.5807-2.0527-4.5807-4.8951 0-2.7815 1.995-4.859 4.5913-4.859z"></path>
                  <path d="m68.2527 9.33179c-4.3126 0-7.7025 3.78061-7.7025 8.02381 0 4.8335 3.9301 8.0388 7.6282 8.0388 2.2867 0 3.5026-.9085 4.4002-1.9513v1.5836c0 2.7705-1.6807 4.4296-4.2176 4.4296-2.4507 0-3.68-1.8239-4.1071-2.8589l-3.0836 1.2902c1.094 2.315 3.296 4.7293 7.2162 4.7293 4.2878 0 7.556-2.7032 7.556-8.3724v-14.43021h-3.3639v1.36031c-1.0336-1.1155-2.448-1.84281-4.3259-1.84281zm.3122 3.14791c2.1144 0 4.2855 1.807 4.2855 4.893 0 3.1366-2.1665 4.8653-4.3322 4.8653-2.2992 0-4.4385-1.8685-4.4385-4.8356 0-3.083 2.2219-4.9227 4.4852-4.9227z"></path>
                  <path d="m90.8993 9.3125c-4.068 0-7.4837 3.2395-7.4837 8.0196 0 5.058 3.8073 8.0579 7.8745 8.0579 3.3946 0 5.478-1.8588 6.7213-3.5241l-2.7735-1.8471c-.7197 1.1179-1.9228 2.2105-3.9308 2.2105-2.2556 0-3.2926-1.2362-3.9352-2.4337l10.7585-4.4679-.5586-1.3093c-1.0397-2.5641-3.4643-4.7059-6.6725-4.7059zm.1402 3.0884c1.4659 0 2.5208.78 2.9689 1.7153l-7.1844 3.0055c-.3097-2.3269 1.8928-4.7208 4.2155-4.7208z"></path>
                  <path d="m78.2871 24.9131h3.5338v-23.66994h-3.5338z"></path>
                </svg>
                <svg
                  role="img"
                  aria-label="Fender"
                  className="mx-3"
                  height="39"
                  viewBox="0 0 102 39"
                  width="102"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m78.1174 20.5241c.5087-.0181 1.7596.1451 4.4707.2479 2.8367.1088 3.3993-2.1101 3.2856-3.4825-2.8906.6288-3.5789.792-6.0745.792-2.6214 0-5.8471.7376-5.907 3.0653-.0598 2.3096 2.9325 2.8295 4.4886 3.2709.4309.1027.5925.4534.3052.6832-.6643.538-2.1665 1.2454-2.346 2.509-.2514 1.7896 1.3585 3.1923 3.4053 3.1499 2.7231-.0544 5.7274-1.2273 8.618-4.7279.814-.9915 1.7296-2.6602 2.2982-3.3978.1376-.266.5267-.393.6942-.3748.5147.1148 1.2449.5078 1.1491 1.0761-.1496.8646-2.4837 3.5671-.9276 5.1935.9575.9976 3.3634 1.7231 5.2785.3144 1.7954-1.318 1.161-2.5212.4489-2.6119-.5087-.0604-1.9271 1.7413-3.0762.4535-.9516-1.0641 1.3107-3.2709 1.7655-4.0629.6523-1.1366-1.8852-1.9891-2.9505-3.3978-.6882-.925 1.0952-3.7726-1.1371-4.5223-.7301-.2479-2.9864 1.1245-2.1844 5.0664-1.0234 3.8936-8.8335 10.7074-9.8749 7.9625-.2513-.6711.419-1.7835 2.2084-2.1584 2.9565-.6227 2.7231-2.4667 1.3107-2.6541-2.2144-.2902-2.8308-.2902-5.4701-.913-1.0353-.1088-.9994-1.5054.2214-1.4812z"></path>
                  <path d="m35.4794 25.0181c-.711.7163-1.5294 1.713-1.637 2.5129-.2389 1.7369.6572 3.2709 2.8676 3.2291 2.3718-.0418 3.1544-1.7608 7.1213-4.1722 1.1112-.6745 2.4852-1.8145 3.0528-1.904.221 0 .5377.0656.5138.4834-.3346 1.5818-.705 2.6442-.2928 3.9991.2868.9491 1.5473 1.5459 2.4554.8595 1.5175-1.146 1.5354-1.7966 3.5009-4.3751.3226-.4298 1.5174-2.3875 2.0671-2.1249.46.2149.3285.8535.2449 1.349-.4122 2.4173-1.4637 6.2314 3.3157 5.6464 1.1351-.1372 2.0491-.9072 1.1888-1.719-.5197-.4894-1.1052-.1373-1.7624-.2865-1.5353-.3521 2.2583-7.3356.4481-8.6309-2.545-1.8204-4.9048 1.4087-6.6732 3.7604-.6989.9311-1.2127.5193-1.6668-.7879-.5018-1.4564-3.5307-.3939-5.2692.5014-2.772 1.4265-7.8919 6.2075-8.3638 3.826-.0837-.4119.5854-1.3311 1.8281-1.7847 1.4577-.5312 3.1125-1.0028 3.1125-1.8802 0-.6804-.4122-1.1579-.8483-1.134-2.0372.1134-4.409.6506-7.1212-.0955-.6154-.006-.8842-1.5579.9498-1.355.484.0538 1.5653.1254 5.6695.209 2.8915.0596 2.9513-2.1011 2.563-3.253-2.4016.7162-3.6264.6327-6.1714.6327-2.6704 0-6.2609.37-6.1115 2.9366.1314 2.1607 3.1663 2.7576 4.7375 2.9307.466-.0299.6034.3999.2808.6267z"></path>
                  <path
                    clipRule="evenodd"
                    d="m26.4377 19.096c.2425-.9144.7689-1.1202 1.4609-1.2837 1.0291-.3452 2.4722-.8054 3.3593-.9688 2.2357-.5632 2.8803-.43 3.1701-2.0164.2011-1.102-.2661-1.6288-.2661-1.6288s-4.8794 1.5622-5.8552 1.8407c-.8517.3754-.692-.5389-.692-.5389s-.1242.5813.4081-1.7863c1.5969-7.19345.6624-9.11293-.6092-10.20891-3.2174-2.724814-14.9515 2.91857-23.34985 9.70641-2.79749 2.4886-4.418025 3.0699-2.5964 5.0621 1.62053 1.6591 2.67328.4178 2.67328.4178 1.54365-1.2474 4.86751-4.7351 7.05587-6.3943 3.1168-2.36146 7.4165-5.7705 11.2254-6.67877 3.0222-.78111 3.933.12716 3.5249 3.27583-.2365 2.70664-2.2711 8.79814-2.2711 8.79814s-3.1227 1.429-4.0513 1.7862c-.7275.2786-1.5022.0848-1.585 1.7863-.0355 1.8226 1.0409 1.1384 1.7683.8598.5619-.218 1.8808-.8537 2.3717-1.0657.3667-.2906.7689-.0424.5678.4966-.3667 1.2049-1.0232 3.1547-2.2711 5.9764-1.5792 3.8571-4.418 9.1311-4.7847 10.4572.0414.8719.9758.993 2.2001 1.0112 1.1296-.0908 1.6501-.8901 1.6501-.8901s1.4668-3.2274 3.726-8.9192c1.6501-4.1357 2.7206-7.5508 3.1701-9.0948z"
                    fillRule="evenodd"
                  ></path>
                  <path d="m67.8775 20.6508c-1.7761-.5182-3.3309 1.6028-3.7854 3.4947-.4126 1.7233-.1973 4.0371 1.3515 4.3383 1.2379.2411 2.679-.8556 3.0498-2.8741.0957-.5423.3289-2.2716.3947-2.7114.4245-2.7476.7475-3.9467.7475-3.9467 1.483-5.7301 5.0411-16.87714 6.0098-17.52788 1.0046-.674847 3.7734-.78933 2.9063 1.53648-1.3455 3.61525-2.9123 6.82076-4.3295 11.2796-1.6624 5.23-4.8797 13.6234-2.0093 13.997 1.3395.1747 1.8837-1.0725 2.691-.4399 1.2319.9701-.1136 2.7235-2.4877 2.9585-3.265.1205-3.1933-1.8076-4.6404-.9761-4.6404 2.6572-7.4989-1.0605-6.5839-5.7121.7833-3.9888 3.8331-6.8027 7.2357-5.0794 0 0 .8731.4338.8013 1.181-.0658.5664-.4963.6808-1.3514.482z"></path>
                  <path
                    clipRule="evenodd"
                    d="m98.7766 15.7477c.3279 0 .5692.0308.7239.0925.2722.1111.4083.3395.4083.6727 0 .2345-.0866.4073-.2598.5246-.0929.0617-.2228.1049-.3837.1296.2104.0309.3589.1173.4579.2592s.1423.2777.1423.4073v.1913c0 .0617 0 .1296.0062.1975s.0124.1173.0247.1358l.0186.0309h-.4393c0-.0062-.0062-.0186-.0062-.0247 0-.0062-.0062-.0185-.0062-.0309l-.0123-.0864v-.2098c0-.3086-.0805-.5061-.2475-.6048-.099-.0556-.2723-.0864-.5197-.0864h-.3713v1.043h-.4702v-2.6476h.9343zm.5011.4196c-.1175-.0679-.3032-.0987-.563-.0987h-.396v.9566h.4207c.198 0 .3465-.0186.4455-.0618.1794-.074.2723-.2098.2723-.4134 0-.1914-.0619-.3148-.1795-.3827zm1.2563 2.6229c-.471.4752-1.0397.7097-1.7141.7097s-1.2375-.2345-1.7077-.7097c-.4702-.469-.6991-1.043-.6991-1.7095s.2351-1.2281.7053-1.7033c.4702-.4691 1.0394-.7036 1.7015-.7036.6682 0 1.2371.2345 1.7141.7036.47.469.705 1.0368.705 1.7033.006.6665-.235 1.2343-.705 1.7095zm-3.1805-3.1783c-.4021.4073-.6063.8949-.6063 1.4688 0 .5801.2042 1.0677.6001 1.475.4022.4073.8972.611 1.4726.611s1.0642-.2037 1.4721-.611c.403-.4073.607-.9011.607-1.475s-.204-1.0615-.607-1.4688c-.4079-.4073-.8967-.611-1.4721-.611-.5692 0-1.058.2037-1.4664.611z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <svg
                  role="img"
                  aria-label="Squarespace"
                  className="mx-3"
                  height="22"
                  viewBox="0 0 155 22"
                  width="155"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m55.7463 9.82409v-.03366c0-2.9625-2.2265-5.52944-5.5451-5.52944-3.3185 0-5.5707 2.59218-5.5707 5.5631v.03367c0 2.96254 2.2266 5.52944 5.5451 5.52944 1.3564 0 2.5252-.4292 3.438-1.153l1.4332 1.2877.8446-.909-1.4503-1.1867c.836-.9763 1.3052-2.2555 1.3052-3.60211zm-2.2265 2.81101-2.0048-1.8011-.8275.909 2.0218 1.7085c-.6654.5049-1.5441.8079-2.5081.8079-2.491 0-4.2996-1.9946-4.2996-4.43531v-.03366c0-2.4407 1.7744-4.41009 4.2655-4.41009 2.491 0 4.2996 1.99464 4.2996 4.43534v.03366c0 1.06046-.3583 2.02826-.9469 2.78576z"></path>
                  <path d="m65.9548 10.7069c0 2.4205-1.2474 3.6524-3.2015 3.6524-2.0374 0-3.2514-1.3447-3.2514-3.7305v-6.36781h-1.1975v6.44591c0 3.1319 1.7879 4.815 4.4156 4.815 2.6527 0 4.4322-1.6744 4.4322-4.9104v-6.35051h-1.1974z"></path>
                  <path d="m139.759 14.389c-2.551 0-4.484-1.9762-4.484-4.48906v-.03407c0-2.50431 1.915-4.46346 4.484-4.46346 1.57 0 2.668.62181 3.639 1.49066l.899-.90292c-1.162-1.03068-2.424-1.72916-4.52-1.72916-3.413 0-5.864 2.54689-5.864 5.63043v.03407c0 3.12611 2.469 5.59641 5.818 5.59641 2.106 0 3.431-.7667 4.639-1.9166l-.863-.7922c-1.116 1.0051-2.16 1.5759-3.748 1.5759z"></path>
                  <path d="m147.22 14.3667v-3.9418h6.017v-1.16398h-6.017v-3.84475h6.724v-1.15518h-7.966v11.26091h8.044v-1.1552z"></path>
                  <path d="m117.424 4.26099h-4.424v11.26091h1.333v-3.9771h2.869c2.517 0 4.646-1.2522 4.646-3.68598v-.02645c.009-2.2222-1.749-3.57138-4.424-3.57138zm3.082 3.65074c0 1.48146-1.287 2.47797-3.239 2.47797h-2.925v-4.95589h2.989c1.907 0 3.175.83773 3.175 2.44265z"></path>
                  <path d="m38.7247 9.28388c-2.3593-.51341-2.9135-1.09528-2.9135-2.12211v-.03422c0-.98405.89-1.76272 2.2838-1.76272 1.0998 0 2.099.35938 3.0981 1.1894l.7053-.94981c-1.0915-.88992-2.2082-1.34343-3.7699-1.34343-2.0402 0-3.5263 1.26642-3.5263 2.98635v.03423c0 1.79695 1.1334 2.60985 3.6019 3.15753 2.2502.4877 2.7875 1.061 2.7875 2.0793v.0342c0 1.0782-.9487 1.8569-2.3929 1.8569-1.4861 0-2.5608-.5135-3.6775-1.5403l-.7472.9071c1.2846 1.1722 2.6783 1.7456 4.3827 1.7456 2.1327 0 3.6607-1.2151 3.6607-3.0891v-.0342c0-1.6943-1.0998-2.58419-3.4927-3.11472z"></path>
                  <path d="m94.9385 10.4249h6.0155v-1.16398h-6.0155v-3.84475h6.7235v-1.15518h-7.9663v11.26091h8.0433v-1.1552h-6.8005z"></path>
                  <path d="m107.549 9.28388c-2.595-.51341-3.205-1.09528-3.205-2.12211v-.03422c0-.98405.979-1.76272 2.513-1.76272 1.209 0 2.309.35938 3.408 1.1894l.775-.94981c-1.2-.88992-2.429-1.34343-4.146-1.34343-2.245 0-3.879 1.26642-3.879 2.98635v.03423c0 1.79695 1.246 2.60985 3.962 3.15753 2.475.4877 3.066 1.061 3.066 2.0793v.0342c0 1.0782-1.044 1.8569-2.632 1.8569-1.635 0-2.817-.5135-4.045-1.5403l-.822.9071c1.413 1.1722 2.946 1.7456 4.821 1.7456 2.345 0 4.026-1.2151 4.026-3.0891v-.0342c0-1.6943-1.219-2.58419-3.842-3.11472z"></path>
                  <path d="m73.8062 4.26099-5.0453 11.26091h1.283l1.3177-2.9574h6.0249l1.2916 2.9574h1.3437l-5.0366-11.26091zm-1.9592 7.16601 2.5314-5.69606 2.5139 5.69606z"></path>
                  <path d="m126.893 4.26099-5.045 11.26091h1.283l1.309-2.9574h6.025l1.3 2.9574h1.344l-5.046-11.26091zm-1.959 7.16601 2.531-5.69606 2.514 5.69606z"></path>
                  <path d="m90.8626 7.63837v-.02646c0-.88182-.3287-1.67546-.904-2.22219-.7306-.70546-1.8812-1.12873-3.3148-1.12873h-5.0133v11.26091h1.315v-4.3739h3.333l3.3879 4.3739h1.6163l-3.5796-4.6032c1.8172-.3174 3.1595-1.41087 3.1595-3.28033zm-7.9171 2.36323v-4.56779h3.5978c1.8812 0 2.977.83773 2.977 2.22219v.03527c0 1.44619-1.2511 2.31923-3.0044 2.31923h-3.5704z"></path>
                  <path d="m17.9683 6.6018-8.34715 8.364c-.50929.5104-.50929 1.3494 0 1.8597.50925.5103 1.34655.5103 1.85585 0l8.3472-8.36407c1.0272-1.02928 2.6846-1.02928 3.7118 0 1.0272 1.02929 1.0272 2.68997 0 3.71927l-8.1832 8.1997c1.0272 1.0293 2.6846 1.0293 3.7118 0l6.3359-6.34c2.0458-2.05 2.0458-5.38003 0-7.42996-2.0631-2.05857-5.3864-2.05857-7.4322-.00864z"></path>
                  <path d="m10.2835.239258h-.31969c-.61339.03287-1.22679.279397-1.69332.723145l-6.34132 6.031687c-1.028088.96968-1.537813 2.25162-1.537813 3.53351 0 1.282.509725 2.5557 1.537813 3.5336 2.04754 1.9476 5.37371 1.9476 7.42125 0l8.35428-7.94639c.5097-.48483.5097-1.28194 0-1.76677-.5097-.48484-1.3477-.48484-1.8575 0l-8.35426 7.94636c-1.02808.9779-2.68685.9779-3.71494 0s-1.02809-2.55564 0-3.53353l8.1902-7.790249c-.4579-.451966-1.0713-.698493-1.6847-.731363z"></path>
                  <path d="m16.7775.239258h-.5207c-1.2177.060186-2.4187.567471-3.3509 1.521852l-8.12117 8.31429c-.4955.5073-.4955 1.3413 0 1.8486s1.31013.5073 1.80563 0l8.12114-8.31431c.9994-1.02316 2.6119-1.02316 3.6113 0 .4955.50729 1.3101.50729 1.8056 0 .4955-.50728.4955-1.34129 0-1.84858-.9322-.954381-2.1331-1.461666-3.3509-1.521852z"></path>
                  <path d="m23.3458 9.46735c-.4955-.50692-1.3101-.50692-1.8056 0l-8.1212 8.30835c-.9994 1.0225-2.6118 1.0225-3.61125 0-.4955-.5069-1.31013-.5069-1.80563 0-.4955.507-.4955 1.3404 0 1.8473.9826 1.0053 2.27598 1.5208 3.56928 1.5294h.084c1.2933-.0086 2.5783-.5155 3.5693-1.5294l8.1211-8.3084c.4955-.5069.4955-1.34033 0-1.84725z"></path>
                </svg>
                <svg
                  role="img"
                  aria-label="Costco"
                  className="mx-3"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 99 28"
                  width="99"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m51.1596 8.88905 3.6558-.13637-3.0683 10.10722h6.5615l3.0683-10.10722 3.5719.13637 1.4581-4.79921h-13.7892z"></path>
                  <path d="m37.5803 11.5166c-.9179 4.7416-5.9426 7.5791-11.4499 7.5791s-9.4306-2.8428-8.5179-7.5791c.8969-4.64181 5.9793-7.65771 11.4656-7.65771 5.4811 0 9.3991 3.0159 8.5022 7.65771zm-13.3748.0787c-.3252 1.6837.8392 2.8428 2.827 2.8428 1.9879 0 3.5981-1.1539 3.9233-2.8428.3042-1.5683-.7343-2.87951-2.8166-2.87951-2.0822 0-3.6295 1.31121-3.9337 2.87951z"></path>
                  <path d="m35.54 17.7479c1.8725.8444 4.4058 1.3532 6.6822 1.3532 3.9023 0 8.1665-1.7414 8.8483-5.2713.4826-2.5071-1.2902-3.7239-3.9705-4.23272l-1.4319-.27274c-.4825-.09965-1.2797-.17833-1.1748-.72382.1153-.60842.9913-.7815 1.563-.7815 1.4109 0 2.5858.48778 3.5876 1.11719l2.5019-3.78167c-1.5998-.88117-3.4146-1.29028-5.4706-1.29028-3.9233 0-8.2085 1.9564-8.8851 5.46532-.4458 2.31302 1.4686 3.54562 3.96 3.91802l1.2798.1941c.5769.0997 1.4319.1573 1.3008.8235-.1312.6661-1.2012.8811-1.8463.8811-1.5106 0-2.8008-.6084-3.8341-1.3532l-.2937-.215z"></path>
                  <path d="m79.1734 4.46218c-1.3112-.39338-2.8008-.60842-4.2852-.60842-5.2922 0-10.0967 3.44599-10.9306 7.75744-.813 4.2117 2.5753 7.4846 7.7207 7.4846 1.1749 0 3.6505-.1783 4.7834-.5874l1.2589-5.523c-1.2169.8444-2.5177 1.3689-4.023 1.3689-1.9616 0-3.4198-1.2535-3.1051-2.8795.3095-1.60498 2.161-2.87953 4.1226-2.87953 1.4844 0 2.6698.6871 3.5667 1.48963z"></path>
                  <path d="m89.674 3.85889c-5.4811 0-10.5635 3.0159-11.4657 7.65771-.9179 4.7416 3.0107 7.5791 8.518 7.5791 5.5072 0 10.532-2.8428 11.4499-7.5791.8969-4.64181-3.0212-7.65771-8.5022-7.65771zm-.9389 4.8569c2.0823 0 3.1208 1.31121 2.8166 2.87951-.3252 1.6837-1.9354 2.8428-3.9233 2.8428s-3.1523-1.1539-2.8271-2.8428c.3042-1.5683 1.8515-2.87951 3.9338-2.87951z"></path>
                  <path d="m19.3066 1.14739c-1.6365-.472051-3.4985-.734304-5.3447-.734304-6.59827 0-12.59335 4.169804-13.637109 9.378124-1.017537 5.09289 3.209959 9.04769 9.629889 9.04769 1.46332 0 4.55272-.215 5.96362-.7081l1.5735-6.6769c-1.5158 1.0175-3.1365 1.6574-5.0195 1.6574-2.4494 0-4.26422-1.5158-3.87084-3.48269.38813-1.94066 2.69594-3.4827 5.14534-3.4827 1.8515 0 3.3254.82872 4.4478 1.79905z"></path>
                  <path d="m33.5783 20.8215.2518 3.96h.063c.1311-.4038.2727-.8287.4772-1.2221l1.3638-2.7379h2.2186l.3357 3.96h.0629c.1154-.3881.2465-.792.4249-1.1696l1.3322-2.7904h3.0107l-4.0702 6.6402h-2.5281l-.2203-3.6085h-.0944c-.0944.3409-.1836.6766-.3409 1.0018l-1.3008 2.6067h-2.4599l-1.5263-6.6402z"></path>
                  <path d="m42.9093 20.8215h2.7903l-.4248 2.2397h1.7728l.4248-2.2397h2.7904l-1.2588 6.6402h-2.7904l.4354-2.3078h-1.7729l-.4405 2.3078h-2.7904z"></path>
                  <path d="m58.4346 24.1624c-.4039 2.1295-2.6226 3.4093-5.0563 3.4093-2.4284 0-4.1645-1.2745-3.7607-3.4093.3987-2.0875 2.6435-3.4407 5.0615-3.4407 2.4232-.0053 4.1488 1.3532 3.7555 3.4407zm-5.906.0315c-.1416.7553.3724 1.2746 1.2484 1.2746.8759 0 1.5892-.5193 1.7308-1.2746.1364-.7028-.3252-1.2955-1.243-1.2955-.9179.0052-1.5998.5927-1.7362 1.2955z"></path>
                  <path d="m59.0692 20.8215h2.8953l-.8602 4.5108h2.4337l-.4039 2.1294h-5.3289z"></path>
                  <path d="m70.388 25.0857.1311.0944c.4563.3357 1.028.6084 1.6941.6084.2833 0 .7606-.0944.813-.3986.0577-.299-.3199-.3252-.5769-.3672l-.5665-.0891c-1.1015-.1679-1.9459-.7239-1.7466-1.7624.299-1.5787 2.1872-2.4546 3.9233-2.4546.9074 0 1.7099.1835 2.4127.5822l-1.1067 1.6993c-.4406-.2832-.9598-.5035-1.584-.5035-.2518 0-.6399.0787-.6923.3514-.0472.2466.3042.2833.5192.3252l.6294.1207c1.1802.2307 1.9669.7762 1.7519 1.9039-.299 1.584-2.182 2.3708-3.9076 2.3708-1.0018 0-2.1242-.2308-2.9477-.6085z"></path>
                  <path d="m80.3325 25.0595-.1153-1.1696c-.0315-.2833-.0263-.5717-.0263-.855h-.1049l-.9126 2.0246zm-2.5176 2.4022h-3.0631l4.0282-6.6402h3.1995l1.5787 6.6402h-3.0631l-.1049-.8287h-2.1871z"></path>
                  <path d="m84.5811 20.8215h2.8952l-.8549 4.5108h2.4284l-.4038 2.1294h-5.3237z"></path>
                  <path d="m90.445 20.8215h5.3605l-.3462 1.8148h-2.439l-.1206.6347h2.2291l-.3304 1.7256h-2.2291l-.1259.6504h2.5281l-.3462 1.8147h-5.4391z"></path>
                  <path d="m.781128 27.4721h30.699172v-.0105h-.0262l-.3881-1.6889h-30.284872z"></path>
                  <path d="m.781128 25.0595h30.122272l-.3934-1.6994h-29.728872z"></path>
                  <path d="m.781128 22.6362h29.555772l-.1364-.6189-.2727-1.1801h-29.146672z"></path>
                  <path d="m64.9331 20.8215h5.3552l-.3409 1.8148h-2.4442l-.1206.6347h2.2291l-.3252 1.7256h-2.2291l-.1259.6504h2.5281l-.3462 1.8147h-5.4443z"></path>
                  <path d="m95.6376 18.697h-.3042l.2517-1.1959h-.4353l.0524-.257h1.1802l-.0525.257h-.4406z"></path>
                  <path d="m97.6517 18.697h-.2832l.257-1.2168h-.0053l-.5297 1.2168h-.2937l-.0105-1.2168h-.0053l-.257 1.2168h-.2832l.3094-1.4529h.4406l.021 1.1435h.0052l.5036-1.1435h.4353z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <div className="features-succeed row flex-column text-left">
            <div className="features-succeed-text-div col-xl-6 col-lg-7 col-md-12 col-12">
              <h2 className="features-succeed-title">Features to help your team succeed</h2>
              <p className="features-succeed-text mt-2">
                Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and
                projects to events and goal setting, Trello&apos;s intuitive features give any team the ability to
                quickly set up and customize workflows for just about anything.
              </p>
            </div>
          </div>

          <div className="features-board row">
            <div className="features-board-img-div col-xl-5 col-lg-5 col-md-5 col-12 mb-3 mb-md-0">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg"
                width="414.57"
                height="312.57"
                className="features-board-img img-fluid w-100"
              />
            </div>
            <div className="features-board-text col-xl-7 col-lg-7 col-md-7">
              <p className="features-text-above-title">CHOOSE A VIEW</p>
              <h2 className="features-board-title">The board is just the beginning</h2>
              <p className="features-board-p">
                List and cards are the building blocks of organizing work on a Trello board. Grow from there with task
                assignments, timelines, productivity metrics, calendars, and more.
              </p>

              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h3 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Learn more
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  <p>
                    You and your team can start up a Trello board in seconds. With the ability to view board data from
                    many different angles, the entire team stays up-to-date in the way that suits them best:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="features-cards row mt-3">
            <div className="features-cards-img-div col-xl-5 col-lg-5 col-md-5 order-md-2 mb-3 mb-md-0">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/b845022d8d738ba8fa5e8b293e434149/card-back.svg"
                width="339.13"
                height="275.31"
                className="features-cards-img img-fluid w-100"
              />
            </div>
            <div className="features-cards-text col-xl-7 col-lg-7 col-md-7">
              <p className="features-cards-text-above-title">DIVE INTO THE DETAILS</p>
              <h2 className="features-cards-title">Cards contain everything you need.</h2>
              <p className="features-cards-p">
                Trello cards are your portal to more organized work—where every single part of your task can be managed,
                tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates,
                attachments, conversations, and more.
              </p>

              <div id="accordion2">
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h3 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Learn more
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion2">
                <div className="card-body">
                  <p>
                    Spin up a Trello card with a click, then uncover everything it can hold. Break down bigger card
                    tasks into steps with file attachment previews, reminders, checklists and comments emoji reactions
                    included! Plus, gain powerful perspective by seeing all cards by list and status at the board level.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="features-butler row mt-3">
            <div className="features-butler-img-div col-xl-5 col-lg-5 col-md-5">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/35366a300daac434fa02bc3ef83d8132/automation.png"
                width="979"
                height="740"
                className="features-butler-img img-fluid w-100"
              />
            </div>
            <div className="features-butler-text col-xl-7 col-lg-7 col-md-7">
              <p className="features-butler-text-above-title">MEET YOUR NEW BUTLER</p>
              <h2 className="features-butler-title">No-code automation</h2>
              <p className="features-butler-p">
                Let the robots do the work so your team can focus on work that matters. With&apos;s built-in automation,
                Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of
                automation across your entire team.
              </p>

              <div id="accordion3">
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h3 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Learn more
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion3">
                <div className="card-body">
                  <p>Butler uses natural language commands to automate just about any task in Trello:</p>
                  <ul>
                    <li>Automate common actions like moving lists</li>
                    <li>Create custom buttons to build process quickly</li>
                    <li>Surface upcoming deadlines to the team</li> <li>Schedule teammate assignments, and more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="features-powerups row mt-3">
            <div className="features-powerups-text col-xl-7 col-lg-7 col-md-7">
              <p className="features-powerups-text-above-title">POWER-UPS</p>
              <h2 className="features-powerups-title">Integrate top work tools</h2>
              <p className="features-powerups-p">
                Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps
                fine-tune one specific need. With hundreds of Power-Ups available, your team&apos;s workflow wishes are
                covered.
              </p>
              <div id="accordion4">
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h3 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Learn more
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion4">
                <div className="card-body">
                  <p>
                    From Reporting to Custom Fields to your beloved software integrations—we&apos;ve got
                    functionalities, your favorites, and more!
                  </p>
                  <p>Such as:</p>
                  <ul>
                    <li>Confluence</li> <li>Slack</li> <li>Dropbox</li> <li>Google Drive</li> <li>Evernote</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features-powerups-img-div col-xl-5 col-lg-5 col-md-5 order-md-2 mb-3 mb-md-0">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/7a11db312701af17abefa8e691cf124a/power-ups.png"
                width="753"
                height="678"
                className="features-powerups-img img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="check-out">
        <div className="container check-out-container">
          <div className="row check-out-row d-flex justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 check-out-left-col d-flex check-out-col">
              <div className="check-out-left-img-div check-out-img-div d-none d-lg-flex col-lg-3 align-items-start">
                <img
                  src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/50d8061c0434175f65976c3afbb8209c/tag.svg"
                  width="103"
                  height="167"
                  className="check-out-left-img check-out-img img-fluid"
                  alt=""
                />
              </div>
              <div className="check-out-left-text-div check-out-text-div d-flex flex-column">
                <h4 className="checkout-left-title check-out-title">See our pricing</h4>
                <p className="checkout-left-text check-out-text">
                  Whether you&apos;re a team of 2 or 2,000, there&apos;s a Trello tailor-made for your organization.
                </p>
                <a className="px-2 check-out-left-link check-out-link btn btn-outline-primary btn-sm">Trello pricing</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 check-out-right-col check-out-col d-flex">
              <div className="check-out-right-img-div check-out-img-div d-none d-lg-flex col-lg-3 align-items-start">
                <img
                  src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/0efeb9f898969b67a9b80dca30183b9d/compass.svg"
                  width="134"
                  height="161"
                  className="check-out-img check-out-right-img img-fluid"
                  alt=""
                />
              </div>
              <div className="check-out-right-text-div check-out-text-div d-flex flex-column order-2">
                <h3 className="check-out-right-title check-out-title">Take a Trello tour</h3>
                <p className="check-out-right-text check-out-text">
                  Explore the world of boards and beyond in Trello. Dive deeper into our most popular features.
                </p>
                <a className="px-2 check-out-right-link check-out-link btn btn-outline-primary btn-sm ">Tour Trello</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sign-up">
        <div className="container sign-up-container">
          <div className="row sign-up-row d-flex flex-column justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 sign-up-col d-flex justify-content-center align-items-center">
              <form className="sign-up-form d-flex flex-column justify-content-center align-items-center">
                <h4 className="sign-up-title">
                  Sign up and get started with Trello today. A world of productive teamwork awaits!
                </h4>
                <div className="d-flex mt-4 align-items-center justify-content-center">
                  <input
                    placeholder="Email"
                    name="email"
                    className="sign-up-email-input form-control mr-2"
                    type="email"
                  />
                  <button className="sign-up-email-button btn btn-block btn-secondary" type="submit">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="apps">
        <div className="container apps-container">
          <div className="row apps-row d-flex align-items-center justify-content-center pt-3 pb-3 pb-md-3">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12 apps-text-col ">
              <p className="apps-text text-center text-sm-center text-lg-right mt-3">
                Trello also works great on your smaller screen.{' '}
              </p>
            </div>

            <div className="apple-col col-xl-2 col-lg-2 col-md-3 col-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/app/trello-organize-anything/id461504587"
              >
                <img
                  src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/apps/0b6d7bcb7ee4c84ef5e8141269925e9a/apple.svg"
                  width="217"
                  height="64"
                  alt="Available on the App Store"
                  className="w-100 img-fluid apple-img"
                />
              </a>
            </div>
            <div className="google-col col-xl-2 col-lg-2 col-md-3 col-6">
              <a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.trello">
                <img
                  src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/apps/c3a2a289499157072145f1bd73d7610d/google.svg"
                  width="217"
                  height="64"
                  alt="Get it on Google Play"
                  className="w-100 img-fluid google-img"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
