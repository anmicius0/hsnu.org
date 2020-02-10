import React from "react"
import { Jumbotron, Container, Row, Col } from "react-bootstrap"

import "./landing.scss"

const Landing = () => {
  return (
    <Jumbotron fluid>
      <div className={"fade-layer"}></div>
      <a>
        <h1 className={"is-1 logo"}>
          澳洲大火的全球教訓：政治與科學之間，民主國家如何「複製危機」？
        </h1>
      </a>
    </Jumbotron>
  )
}

export default Landing
