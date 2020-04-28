import React, { useEffect, useState } from "react"
import Swiper from "react-id-swiper"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Jumbotron from "react-bootstrap/Jumbotron"

// style
import "./Propaganda.scss"

const Propaganda = () => {
  // config of swiper
  const params = {
    slidesPerView: "1",
  }

  const [images, setImages] = useState()

  useEffect(() => {
    fetch(
      `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/propaganda?per_page=3`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        setImages(
          data.map(datum => {
            return datum.acf.image.sizes.medium
          })
        )
      })
  }, [])

  return (
    <Jumbotron id="propaganda">
      <img
        rel="preload"
        src={
          "https://i0.wp.com/wordpress.hsnu.org/wp-content/uploads/2020/04/242198.jpg?fit=240%2C300&ssl=1"
        }
        alt={"Headline"}
      ></img>
      <div className={"fade-layer"}></div>
      <a href={"/"}>
        <h1 className={"is-1 serif bold"}>
          <span className={"is-2"}>教師公告｜</span>
          <br />
          防疫公告
        </h1>
      </a>
    </Jumbotron>
  )
}

export default Propaganda
