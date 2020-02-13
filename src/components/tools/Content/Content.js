import React from "react"

import "./Content.scss"
import pdf from "../../../images/icons/files/pdf.svg"
import ppt from "../../../images/icons/files/ppt.svg"

const Content = () => {
  return (
    <article className={"content"}>
      {/* title */}
      <h2 className={"is-2 bold serif"}>Hello Taipei</h2>

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>設備組</p>
        <p className={"is-5 light"}>2020/1/11</p>
        <p className={"is-5 tag"}>熱門</p>
      </div>

      {/* files */}
      <div className={"files"}>
        {[1, 2, 3, 4].map(item => (
          <>
            <a href="#">
              <div className={"file pdf"}>
                {/* icon */}
                <img src={pdf}></img>
                {/* name */}
                <p className={"is-5"}>暑假課表.pdf</p>
              </div>
            </a>
            <a href="#">
              <div className={"file ppt"}>
                {/* icon */}
                <img src={ppt}></img>
                {/* name */}
                <p className={"is-5"}>暑假課表暑假課表暑假課表.ppt</p>
              </div>
            </a>
          </>
        ))}
      </div>

      {/* context */}
      <p className={"is-4  context"}>
        1456廖廷涓同學以"全球平均海平面的年際變化(1993-2017)，Mean Sea Level
        Variations on Inter-annual to Decadal
        Timescale，1993-2017"，榮獲地球與環境科學科一等獎，並獲選為出國正選代表，感謝指導老師陳忠城老師辛苦指導
        1456林立元、陳明生同學以"藥物骨架Chromeno〔4，3-b〕pyrrolidine的合成方法之探討"，榮獲化學科二等獎，並獲選為出國正選代表，感謝指導老師陳昭錦老師辛苦指導
        1454張裴芩、張世敏同學以"酯類代謝於花粉萌發及花粉管生長所辦演的角色"，榮獲植物學科二等獎，並獲選為出國正選代表，感謝指導老師羅尹廷老師辛苦指導
        1456黃柏睿、施凱升同學以"銠金屬催化劑應用於優化不對稱加成反應"，榮獲化學科三等獎，感謝指導老師陳昭錦老師辛苦指導
        1462陳柏翰同學以"微量氧化亞錫參雜與氧化鎢光觸媒之光電催化性質探討"，榮獲化學科四等獎，感謝指導老師李柏翰老師辛苦指導
        1454蘇韋丞、林泊里、陳允平同學以"地錢熱逆境記憶元件HSA32及HSP101之功能探討"，榮獲植物學科四等獎，感謝指導老師羅尹廷老師辛苦指導
        1455陳祈佑、林暐城同學以"各種導電物質於不同變因下之共振頻率的探討與運用"，榮獲物理與天文學科四等獎，感謝指導老師戴仁欽老師辛苦指導
      </p>
    </article>
  )
}

export default Content
