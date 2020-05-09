import React, { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Jumbotron from "react-bootstrap/Jumbotron"

// style
import "./Propaganda.scss"

const Propaganda = () => {
  const [image, setImage] = useState()

  useEffect(() => {
    fetch(
      `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/propaganda?filter[orderby]=rand&filter[posts_per_page]=1`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        setImage(data)
        console.log(image)
      })
  }, [])

  return (
    <Jumbotron id="propaganda">
      {image ? (
        <>
          <LazyLoadImage
            rel="preload"
            src={image[0].acf.image.sizes.medium}
            alt={"propaganda"}
          />
          <div className={"fade-layer"}></div>
          <a
            href={image[0].acf.image.sizes.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={"is-1 serif bold"}>
              <span className={"is-3"}>教師公告｜</span>
              <br />
              {image[0].title.rendered}
            </h1>
          </a>
        </>
      ) : null}
    </Jumbotron>
  )
}

export default Propaganda
