import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Retour from "@/components/Retour";
import PageTitle from "@/components/PageTitle";
import Charge from "@/components/Charge";
import { useState, useRef } from "react";

export default function Home() {
  // ----------------partie des states--------------
  const [sortie, setSortie] = useState("Veillez cliquez sur le bouton REDIGER");
  const [Loader, setLoader] = useState(false);
  // -------------------fin des states-----------------

  let theme = useRef();
  let type = useRef();

  const FormSub = (e) => {
    e.preventDefault();
    setSortie("");
    setLoader(true);
    console.log(theme.current.value);

    fetch("https://alissabackendfluidbysamnk.onrender.com/ecole", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        theme: `
         Comportes toi comme un professeur de philosophie et explique moi ce texte:  ${theme.current.value}.
         Soit pertinent et aborde tous les points possibles.
        ${type.current.value}
        
            
        `,
      }),
    })
      .then(async (data) => {
        return data.json();
      })
      .then(async (resp) => {
        setSortie(resp);
        setLoader(false);
      })
      .catch((e) => {
        setTimeout(() => {
          setSortie(
            '<b style="color: red;">Il y a un problème de connexion😣 📶<i>veuillez réessayer</i></b> . Veuillez appuyer sur le bouton de génération \n '
          );
          setLoader(false);
        }, 3000);
      });
  };

  return (
    <>
      <Head>
        <title>Résumé de cours</title>
        <meta name="description" content="Résumé de cours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         
      </Head>

      <>
        <div id="wrapper">
          <div id="content">
            <Retour lien="../philo" />

            <div className="space-sticky" />

            <section className="un-page-components">
              <PageTitle title="Philosophie / Résumé" description="Explications" />
              <div className="content-comp p-0">
                <div className="space-items" />

                <div className="space-items" />
                <div className="padding-20 form-edit-profile bg-white">
                  <form className="form-group" onSubmit={FormSub}>
                    <label>Sujet</label>

                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="La seconde guerre mondiale"
                      require
                      ref={theme}
                    ></textarea>
                    <br />
                    <div className="content">
                      <select
                        className="form-select custom-select"
                        aria-label="Default select example"
                        ref={type}
                      >
                        <option value={""}>Normalement</option>
                        <option
                          value={
                            "Pouvez-vous m'expliquer cela de manière claire et facile à comprendre, comme si vous vous adressiez à un élève très intelligent ?"
                          }
                        >
                          Comme un élève surdoué
                        </option>
                        <option
                          value={"Explique moi cela comme un enfant de 5 ans"}
                        >
                          Comme un enfant de 5 ans
                        </option>
                      </select>
                    </div>
                    <br />

                    {Loader ? (
                      <button
                        type="submit"
                        className="btn btn-primary "
                        disabled
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          style={{
                            margin: "auto",
                            background: "",
                            display: "block",
                            shapeRendering: "auto",
                          }}
                          width="60px"
                          height="25px"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid"
                          className="img-fluid"
                        >
                          <circle cx={84} cy={50} r={10} fill="#29a0e4">
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="0.25s"
                              calcMode="spline"
                              keyTimes="0;1"
                              values="10;0"
                              keySplines="0 0.5 0.5 1"
                              begin="0s"
                            />
                            <animate
                              attributeName="fill"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="discrete"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="#29a0e4;#f3ff83;#6a86f8;#eff460;#29a0e4"
                              begin="0s"
                            />
                          </circle>
                          <circle cx={16} cy={50} r={10} fill="#29a0e4">
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="0;0;10;10;10"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="0s"
                            />
                            <animate
                              attributeName="cx"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="16;16;16;50;84"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="0s"
                            />
                          </circle>
                          <circle cx={50} cy={50} r={10} fill="#eff460">
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="0;0;10;10;10"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="-0.25s"
                            />
                            <animate
                              attributeName="cx"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="16;16;16;50;84"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="-0.25s"
                            />
                          </circle>
                          <circle cx={84} cy={50} r={10} fill="#6a86f8">
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="0;0;10;10;10"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="-0.5s"
                            />
                            <animate
                              attributeName="cx"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="16;16;16;50;84"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="-0.5s"
                            />
                          </circle>
                          <circle cx={16} cy={50} r={10} fill="#f3ff83">
                            <animate
                              attributeName="r"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="0;0;10;10;10"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="-0.75s"
                            />
                            <animate
                              attributeName="cx"
                              repeatCount="indefinite"
                              dur="1s"
                              calcMode="spline"
                              keyTimes="0;0.25;0.5;0.75;1"
                              values="16;16;16;50;84"
                              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                              begin="-0.75s"
                            />
                          </circle>
                          {/* [ldio] generated by https://loading.io/ */}
                        </svg>
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Expliquer
                      </button>
                    )}
                    <br />
                  </form>
                </div>
                <div className="space-items" />
              </div>
              {/* End.content-comp */}
            </section>
            <section className="un-page-components">
              <div className="un-title-default">
                <div className="text">
                  <h2>Résultat:</h2>
                </div>
              </div>
              <div className="content-comp p-0">
                <div className="bg-white padding-20">
                  <pre
                    id="samnk"
                    dangerouslySetInnerHTML={{ __html: sortie }}
                  ></pre>

                  {Loader && (
                    <>
                      <Charge />
                    </>
                  )}
                </div>
              </div>
              {/* End.content-comp */}
            </section>
          </div>
        </div>

        <div
          className="modal -left --fullScreen modal-collectibles fade"
          id="mdllCollectibles"
          tabIndex={-1}
          aria-labelledby="modalFilterLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <div className="">
                  <h1>Dark Side of Me</h1>
                  <p>12 Editions Minted</p>
                </div>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="un-details-collectibles">
                  {/* head */}
                  <div className="head">
                    <div className="cover-main-img mt-0">
                      <picture>
                        <source
                          srcSet="images/other/11.webp"
                          type="image/webp"
                        />
                        <img
                          className="img-full"
                          src="images/other/11.jpg"
                          alt=""
                        />
                      </picture>
                      <span className="btn-xs-size bg-dark text-white rounded-pill item-category">
                        Digital Art
                      </span>
                      <div className="action-sticky">
                        <button type="button" className="btn btn-fullScreen">
                          <i className="ri-fullscreen-fill" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-share"
                          data-bs-dismiss="model"
                          data-bs-toggle="modal"
                          data-bs-target="#mdllShareCollectibles"
                        >
                          <i className="ri-share-forward-line" />
                        </button>
                      </div>
                    </div>
                    <div className="title-card-text d-flex align-items-center justify-content-between">
                      <a
                        href="page-creator-profile.html"
                        className="item-profile-creator visited"
                      >
                        <div className="wrapper-image">
                          <picture>
                            <source
                              srcSet="images/avatar/14.webp"
                              type="image/webp"
                            />
                            <img
                              className="avt-img"
                              src="images/avatar/14.jpg"
                              alt="image"
                            />
                          </picture>
                          <div className="icon">
                            <i className="ri-checkbox-circle-fill" />
                          </div>
                        </div>
                        <div className="txt-user">
                          <h5>Creator</h5>
                          <p>Shelly Villa</p>
                        </div>
                      </a>
                      <div className="btn-like-click shape-box">
                        <div className="btnLike">
                          <input type="checkbox" />
                          <span className="count-likes">3,62 K</span>
                          <div className="icon-inside">
                            <i className="ri-heart-3-line" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <di className="txt-price-coundown d-flex justify-content-between">
                      <div className="price">
                        <h2>Starting Bid</h2>
                        <p>
                          2.3 <span className="size-16">ETH</span>{" "}
                          <span className="dollar">($8,350)</span>
                        </p>
                      </div>
                      {/* <div class="coundown">
                          <h3>Auction Ends In</h3>
                          <span>08H 38M 16S</span>
                      </div> */}
                    </di>
                  </div>
                  {/* body */}
                  <div className="body">
                    <div className="description">
                      <p>
                        Focus on your breath as this soothing opens and closes
                        endlessly.
                      </p>
                    </div>
                    <ul
                      className="nav nav-pills nav-pilled-tab"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-Owner-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Owner"
                          type="button"
                          role="tab"
                          aria-controls="pills-Owner"
                          aria-selected="true"
                        >
                          Owner
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-History-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-History"
                          type="button"
                          role="tab"
                          aria-controls="pills-History"
                          aria-selected="false"
                        >
                          History
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-Bids-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Bids"
                          type="button"
                          role="tab"
                          aria-controls="pills-Bids"
                          aria-selected="false"
                        >
                          Bids
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content content-custome-data"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-Info"
                        role="tabpanel"
                        aria-labelledby="pills-Info-tab"
                      >
                        <ul className="nav flex-column nav-users-profile margin-t-20">
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/14.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/14.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  <div className="icon">
                                    <i className="ri-checkbox-circle-fill" />
                                  </div>
                                </div>
                                <div className="txt-user">
                                  <h5>Creator</h5>
                                  <p>Shelly Villa</p>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/13.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/13.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  <div className="icon">
                                    <i className="ri-checkbox-circle-fill" />
                                  </div>
                                </div>
                                <div className="txt-user">
                                  <h5>Owner</h5>
                                  <p>Ausonio_Loi</p>
                                </div>
                              </a>
                              <div className="other-option">
                                <button
                                  type="button"
                                  className="btn btn-copy-address"
                                >
                                  <input type="checkbox" />
                                  <span>0xe388...e162</span>
                                  <div className="icon-box">
                                    <i className="ri-file-copy-2-line" />
                                  </div>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-Owner"
                        role="tabpanel"
                        aria-labelledby="pills-Owner-tab"
                      >
                        <ul className="nav flex-column nav-users-profile margin-t-20">
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/13.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/13.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  <div className="icon">
                                    <i className="ri-checkbox-circle-fill" />
                                  </div>
                                </div>
                                <div className="txt-user">
                                  <h5>Owner</h5>
                                  <p>Ausonio_Loi</p>
                                </div>
                              </a>
                              <div className="other-option">
                                <button
                                  type="button"
                                  className="btn btn-copy-address"
                                >
                                  <input type="checkbox" />
                                  <span>0xe388...e162</span>
                                  <div className="icon-box">
                                    <i className="ri-file-copy-2-line" />
                                  </div>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-History"
                        role="tabpanel"
                        aria-labelledby="pills-History-tab"
                      >
                        <ul className="nav flex-column nav-users-profile margin-t-20">
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/8.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/8.png"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                                <div className="txt-user">
                                  <h5>16 days ago</h5>
                                  <p className="weight-400 size-14">
                                    <span className="color-text">
                                      Bought by
                                    </span>
                                    smally{" "}
                                    <span className="color-text">for</span>{" "}
                                    <span className="color-green">$300.00</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/17.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/17.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                                <div className="txt-user">
                                  <h5>24 days ago</h5>
                                  <p className="weight-400 size-14">
                                    <span className="color-text">
                                      Bid placed by{" "}
                                    </span>{" "}
                                    Pingu
                                    <span className="color-text">for</span>{" "}
                                    <span className="color-green">$150.00</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/18.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/18.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                                <div className="txt-user">
                                  <h5>26 days ago</h5>
                                  <p className="weight-400 size-14">
                                    <span className="color-text">
                                      Bid placed by{" "}
                                    </span>{" "}
                                    Vinicius
                                    <span className="color-text">for</span>{" "}
                                    <span className="color-green">$250.00</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-Bids"
                        role="tabpanel"
                        aria-labelledby="pills-Bids-tab"
                      >
                        <ul className="nav flex-column nav-users-profile margin-t-20">
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/12.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/12.png"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                                <div className="txt-user">
                                  <h5>24 days ago</h5>
                                  <p className="weight-400 size-14">
                                    Pingu
                                    <span className="color-text">bid for</span>
                                    <span className="color-green">$300.00</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="nav-item">
                            <div className="nav-link">
                              <a
                                href="page-creator-profile.html"
                                className="item-user-img visited"
                              >
                                <div className="wrapper-image">
                                  <picture>
                                    <source
                                      srcSet="images/avatar/7.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      className="avt-img"
                                      src="images/avatar/7.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                                <div className="txt-user">
                                  <h5>24 days ago</h5>
                                  <p className="weight-400 size-14">
                                    Pingu
                                    <span className="color-text">bid for</span>
                                    <span className="color-green">$300.00</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-block border-0 pt-2">
                <div className="content-modal-footer">
                  <div className="links-item-pages">
                    <a
                      href="page-collectibles-details.html"
                      className="icon-box prev"
                    >
                      <i className="ri-arrow-left-line" />
                    </a>
                    <a
                      href="page-collectibles-details.html"
                      className="icon-box next"
                    >
                      <i className="ri-arrow-right-line" />
                    </a>
                  </div>
                  <a href="javascript: void(0)" className="btn btn-bid-items">
                    <p>
                      Buy for <span className="size-13">(2.3ETH)</span>
                    </p>
                    <div className="ico">
                      <i className="ri-arrow-drop-right-line" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllShareProfile"
          tabIndex={-1}
          aria-labelledby="modalShareProfile"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="item-shared">
                  <div className="image-items">
                    <picture>
                      <source
                        srcSet="images/avatar/22.webp"
                        type="image/webp"
                      />
                      <img
                        className="user-img"
                        src="images/avatar/22.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="txt">
                    <h1>Camillo Ferrari</h1>
                    <p>unic.com</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-share-socials">
                  <div className="un-navMenu-default p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <button type="button" className="btn nav-link bg-snow">
                          <div className="item-content-link">
                            <h3 className="link-title">Copy</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-file-copy-2-line" />
                            </div>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <div className="sub-title-pkg">
                      <h2>Social Networks</h2>
                    </div>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link facebook"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/facebook.svg" alt="" />
                            </div>
                            <h3 className="link-title">Facebook</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link twitter"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/twitter.svg" alt="" />
                            </div>
                            <h3 className="link-title">Twitter</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link instrgrame"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/instagram.svg" alt="" />
                            </div>
                            <h3 className="link-title">Instrgrame</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link whatsapp"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/whatsapp.svg" alt="" />
                            </div>
                            <h3 className="link-title">WhatsApp</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllShareCollectibles"
          tabIndex={-1}
          aria-labelledby="modalShareCollectibles"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="item-shared">
                  <div className="image-items">
                    <picture>
                      <source srcSet="images/other/1.webp" type="image/webp" />
                      <img
                        className="user-img"
                        src="images/other/1.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="txt">
                    <h1>Galaxy on Earth</h1>
                    <p>unic.com</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-share-socials">
                  <div className="un-navMenu-default p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <button type="button" className="btn nav-link bg-snow ">
                          <div className="item-content-link">
                            <h3 className="link-title">Copy</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-file-copy-2-line" />
                            </div>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <div className="sub-title-pkg">
                      <h2>Social Networks</h2>
                    </div>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link facebook"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/facebook.svg" alt="" />
                            </div>
                            <h3 className="link-title">Facebook</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link twitter"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/twitter.svg" alt="" />
                            </div>
                            <h3 className="link-title">Twitter</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link instrgrame"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/instagram.svg" alt="" />
                            </div>
                            <h3 className="link-title">Instrgrame</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link whatsapp"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon-svg">
                              <img src="images/icons/whatsapp.svg" alt="" />
                            </div>
                            <h3 className="link-title">WhatsApp</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllBioDetails"
          tabIndex={-1}
          aria-labelledby="modalBioDetails"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="icon-socialNetworks">
                  <a href="javascript: void(0)" className="btn btn-social">
                    <img src="images/icons/facebook.svg" alt="" />
                  </a>
                  <a href="javascript: void(0)" className="btn btn-social">
                    <img src="images/icons/instagram.svg" alt="" />
                  </a>
                  <a href="javascript: void(0)" className="btn btn-social">
                    <img src="images/icons/twitter.svg" alt="" />
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-upload-item">
                  <h2 className="size-16 weight-500 text-dark margin-b-10">
                    Bio
                  </h2>
                  <p>
                    Camillo lives in Vancouver, British Columbia. When he's not
                    spending his time running around he is probably has his head
                    glued to the screen trying to create one of his wild ideas
                    which are running through his head. Christian is a
                    surrealist digital artist who creates a body of work relying
                    on simulation techniques. He is inspired by abstract work,
                    science fiction, and nature. Trained as a painter and motion
                    graphics artist he has moved into the digital realm where he
                    can create anything that comes to mind.
                  </p>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllUploadItem"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="title-modal">Upload Item</h1>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-upload-item text-center">
                  <p>
                    Choose <span>"Single"</span> if you want your collectible to
                    be one of a kind or
                    <span>"Multiple"</span>
                    if you want to sell one collectible multiple times
                  </p>
                  <div className="grid_buttonUpload">
                    <a
                      href="page-create-single.html"
                      className="btn btn-create bg-primary text-white margin-b-20"
                    >
                      Create Single
                    </a>
                    <a
                      href="page-create-multi.html"
                      className="btn btn-create bg-white border border-solid border-snow text-dark"
                    >
                      Create Multiple
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllAddETH"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="title-modal">Add ETH to your wallet</h1>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-upload-item">
                  <p className="text-center">
                    Select one of the options to deposit <br /> ETH to your
                    wallet
                  </p>
                  <div className="un-navMenu-default margin-t-30 p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item mb-3">
                        <a
                          className="nav-link effect-click"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon color-text w-auto">
                              <i className="ri-exchange-box-line" />
                            </div>
                            <h3 className="link-title">
                              Deposit from an exchange
                            </h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item mb-0">
                        <a
                          className="nav-link effect-click"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon color-text w-auto">
                              <i className="ri-bank-card-line" />
                            </div>
                            <h3 className="link-title">Buy with card</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal sidebarMenu -left -guest fade"
          id="mdllSidebar-guest"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <div className="welcome_em">
                  <h2>
                    Welcome to Unic<span>.</span>
                  </h2>
                  <p>
                    Connect wallet to browse, Buy, Sell, and create NFTs items.
                  </p>
                  <a
                    href="page-connect-wallet.html"
                    className="btn btn-md-size bg-primary text-white rounded-pill"
                  >
                    Connect wallet
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <ul className="nav flex-column -active-links">
                  <li className="nav-item">
                    <a className="nav-link" href="homepage.html">
                      <div className="icon_current">
                        <i className="ri-compass-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-compass-fill" />
                      </div>
                      <span className="title_link">Discover</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-homes.html">
                      <div className="icon_current">
                        <i className="ri-home-5-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-home-5-fill" />
                      </div>
                      <span className="title_link">Home Styles</span>
                      <span className="xs-badge">8</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-pages.html">
                      <div className="icon_current">
                        <i className="ri-pages-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-pages-fill" />
                      </div>
                      <span className="title_link">Page Packs</span>
                      <div className="badge-circle">
                        <span className="doted_item" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-components.html">
                      <div className="icon_current">
                        <i className="ri-layout-2-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-layout-2-fill" />
                      </div>
                      <span className="title_link">Components</span>
                    </a>
                  </li>
                  <label className="title__label">other</label>
                  <li className="nav-item">
                    <a className="nav-link" href="page-help.html">
                      <div className="icon_current">
                        <i className="ri-questionnaire-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-questionnaire-fill" />
                      </div>
                      <span className="title_link">Help Center</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="page-about.html">
                      <div className="icon_current">
                        <i className="ri-file-info-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-file-info-fill" />
                      </div>
                      <span className="title_link">About Unic.</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <div className="em_darkMode_menu">
                  <label className="text" htmlFor="switchDark2">
                    <h3>Dark Mode</h3>
                    <p>Browsing in night mode</p>
                  </label>
                  <label
                    className="switch_toggle toggle_lg theme-switch"
                    htmlFor="switchDark2"
                  >
                    <input
                      type="checkbox"
                      className="switchDarkMode theme-switch"
                      id="switchDark2"
                      aria-describedby="switchDark2"
                    />
                    <span className="handle" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className="toast status-connection"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        {/* JS FILES */}
        {/* PWA APP SERVICE REGISTRATION AND WORKS JS */}
      </>

      <Script src="assets/vendors/zuck_stories/zuck.min.js"></Script>
      <Script src="assets/vendors/smoothscroll/smoothscroll.min.js"></Script>
      <Script src="assets/vendors/swiper/swiper-bundle.min.js"></Script>
      <Script src="assets/vendors/nouislider/nouislider.min.js"></Script>
      <Script src="assets/vendors/nouislider/wNumb.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/pwa-services.js"></Script>
      <Script src="assets/js/custom.js"></Script>
    </>
  );
}
