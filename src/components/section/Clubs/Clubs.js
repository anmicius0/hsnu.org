import React from "react"
import Swiper from "react-id-swiper"
import { Container, Row, Col } from "react-bootstrap"

import spotify from "../../../images/icons/socialMedia-colored/spotify-colored.svg"
import facebook from "../../../images/icons/socialMedia-colored/facebook-colored.svg"
import telegram from "../../../images/icons/socialMedia-colored/telegram-colored.svg"
import instagram from "../../../images/icons/socialMedia-colored/instagram-colored.svg"
import patreon from "../../../images/icons/socialMedia-colored/patreon-colored.svg"
import soundcloud from "../../../images/icons/socialMedia-colored/soundcloud-colored.svg"
import twitter from "../../../images/icons/socialMedia-colored/twitter-colored.svg"
import youtube from "../../../images/icons/socialMedia-colored/youtube-colored.svg"

import asylum from "../../../images/cover/asylum.jpeg"

// style
import "./Clubs.scss"

const Clubs = () => {
  // config of swiper
  const params = {
    loop: "true",
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
    },
  }

  return (
    <section id="clubs">
      <h2 className={"is-2 serif bold"}>社團</h2>
      <Swiper {...params}>
        {[1, 2, 3].map(item => (
          <div>
            <div className={"club-card"}>
              {/* cover */}
              <figure>
                <img src={asylum} />
              </figure>

              {/* club info card */}
              <div className={"club-info"}>
                {/* title */}
                <h3 className={"is-3 bold serif"}>英語會話社</h3>

                {/* social media */}
                <Container>
                  <Row className={"icons"}>
                    {[
                      telegram,
                      spotify,
                      facebook,
                      instagram,
                      soundcloud,
                      youtube,
                      patreon,
                      twitter,
                    ].map(icon => (
                      <Col className={"icon col-4 col-sm-3"}>
                        <a hre="#">
                          <img src={icon} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </section>
  )
}

export default Clubs
