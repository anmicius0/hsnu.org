import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Swiper from "react-id-swiper"
import shuffle from "shuffle-array"

// icons
import facebook from "../../../images/icons/socialMedia-colored/facebook-colored.svg"
import instagram from "../../../images/icons/socialMedia-colored/instagram-colored.svg"
import line from "../../../images/icons/socialMedia-colored/line-colored.svg"
import patreon from "../../../images/icons/socialMedia-colored/patreon-colored.svg"
import soundcloud from "../../../images/icons/socialMedia-colored/soundcloud-colored.svg"
import spotify from "../../../images/icons/socialMedia-colored/spotify-colored.svg"
import telegram from "../../../images/icons/socialMedia-colored/telegram-colored.svg"
import twitter from "../../../images/icons/socialMedia-colored/twitter-colored.svg"
import youtube from "../../../images/icons/socialMedia-colored/youtube-colored.svg"

// style
import "./Clubs.scss"

export const ClubsPure = ({ clubs }) => {
  // Swiper config
  const params = {
    loop: "true",
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  }

  // switch type to icon
  function type_to_icon(type) {
    switch (type) {
      case "facebook":
        return facebook
      case "instagram":
        return instagram
      case "line":
        return line
      case "patreon":
        return patreon
      case "soundcloud":
        return soundcloud
      case "spotify":
        return spotify
      case "telegram":
        return telegram
      case "twitter":
        return twitter
      case "youtube":
        return youtube
      default:
        return
    }
  }

  return (
    <section id="clubs">
      <h2 className={"is-2 bold"}>社團</h2>
      <Swiper {...params}>
        {shuffle(clubs)
          .slice(0, 9)
          .map(club => (
            <div key={club.node.title}>
              <div className={"club-card"}>
                {/* cover */}
                <figure>
                  <img
                    src={club.node.acf.image.sizes.wordpress_1536x1536}
                    alt={club.node.title}
                  />
                </figure>

                {/* club info card */}
                <div className={"club-info"}>
                  {/* title */}
                  <h3 className={"is-3 bold"}>{club.node.title}</h3>

                  {/* social media */}
                  <Container>
                    <Row className={"icons"}>
                      {club.node.acf.social_medias
                        ? club.node.acf.social_medias.map(media => (
                            <Col
                              className={"icon col-4 col-sm-3"}
                              key={media.media_link}
                            >
                              <a
                                href={media.media_link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={type_to_icon(media.media_type)}
                                  alt={media.media_type}
                                />
                              </a>
                            </Col>
                          ))
                        : null}
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

const Clubs = () => {
  // get clubs data from wordpress
  const clubs = useStaticQuery(graphql`
    {
      allWordpressWpClubs {
        edges {
          node {
            title
            acf {
              image {
                sizes {
                  wordpress_1536x1536
                }
              }
              social_medias {
                media_type
                media_link
              }
            }
          }
        }
      }
    }
  `).allWordpressWpClubs.edges

  return <ClubsPure clubs={clubs} />
}

export default Clubs
