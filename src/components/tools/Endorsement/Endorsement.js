import React from "react"

// style
import "./endorsement.scss"

const Endorsement = () => {
  return (
    <div className={"endorsement"}>
      {["#FF4040", "#FFAF37", "#FBFF32", "#A0FFA4", "#76DEFF", "#874EFF"].map(
        color => (
          <div className={"dot"} style={{ "background-color": color }}></div>
        )
      )}
    </div>
  )
}

export default Endorsement
