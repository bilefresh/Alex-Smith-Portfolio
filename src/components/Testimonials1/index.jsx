/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
  }
  render() {
    return (
      <section id="testimonials"
        className={`testimonials section-padding ${
          this.props.withBG ? "bg-img" : ""
        } ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${
          this.props.parallaxie ? " parallaxie" : ""
        } ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What People Have To Say
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                    Working with Alex to design and develop our website was the best decision we could have made.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/all/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Steven Grant
                              </h6>
                              <span className="author-details">
                                Co-founder, ColaTech
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/all/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Steven Grant
                            </h6>
                            <span className="author-details">
                              Co-founder, ColaTech
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    Alex took the picture that made my wife find me. I would absolutely recommend him and also tell your friends about him.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/all/cl-01.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Abel Regelman
                              </h6>
                              <span className="author-details">
                                Product Manager, HP
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/all/cl-01.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Abel Regelman
                            </h6>
                            <span className="author-details">
                              Product Manager, HP
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    I would highly recommend Alex. I worked with him
                    on a design for our U+2018 Click &amp; Collect U+2019
                    service. He is different from any other designer I have
                    worked with in the past.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/all/b3.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                John Grant
                              </h6>
                              <span className="author-details">
                                Customer
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/all/b3.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              John Grant
                            </h6>
                            <span className="author-details">
                              Customer
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
