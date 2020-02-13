import React from "react"
import Swiper from "react-id-swiper"
import { Helmet } from "react-helmet"

import asylum from "../../../images/cover/asylum.jpeg"

// style
import "./NewsSlider.scss"

const newsSlider = () => {
  // config of swiper
  const params = {
    loop: "true",
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
      </Helmet>

      <div id="news-slider">
        <Swiper {...params}>
          {[1, 2, 3].map(item => (
            <div className={"news-card-l"}>
              <a>
                {/* cover */}
                <figure>
                  <img src={asylum} />
                </figure>

                {/* title and sub-title */}
                <div className={"text"}>
                  {/* title */}
                  <h3 className={"is-3 serif bold"}>
                    等待落實的人權－臺灣《難民法草案》
                    等待落實的人權－臺灣《難民法草案》
                  </h3>
                  {/* sub-title */}
                  <p className={"sub-title is-7 light"}>
                    臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法草案》臺灣《難民法草案》草案》
                  </p>
                </div>
              </a>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default newsSlider
