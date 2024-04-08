import { React, useState } from "react";
import "./App.css";
import main_picture from "./img/團體照.png";
import gray_vector from "./img/Vector.png";
import member1 from "./img/personal_picture/01-黃政文.png";
import member2 from "./img/personal_picture/02-蘇奕幃.png";
import member3 from "./img/personal_picture/03-王三禾.png";
import member4 from "./img/personal_picture/04-阮紹銘.png";
import member5 from "./img/personal_picture/05-曾鈺蘋.png";
import vector from "./img/personal_picture/Vector.png";
// import button1 from "./img/personal_picture/button.png";

function App() {
  const [displayText, setDisplayText] = useState("");
  const member_data = [
    { name: "黃政文", role: "UI/UX設計師", email: "nodong3334@gmail.com", intro: "", img: member1 },
    { name: "蘇奕幃", role: "工程師", email: "yiwei.suuu@gmail.com", intro: "未來想當前端工程師，興趣是聽Kpop跟跑咖🤩", img: member2 },
    { name: "王三禾", role: "工程師", email: "wang3harry@gmail.com", intro: "我想變成一隻(海豚)在海裡游泳", img: member3 },
    { name: "阮紹銘", role: "工程師", email: "bend06b@gmail.com", intro: "我今天想翹課。", img: member4 },
    { name: "曾鈺蘋", role: "工程師", email: "E24103175@gs.ncku.edu.tw", intro: "希望未來可以每天生魚片吃到飽", img: member5 },
  ];
  const handleHover = (personId) => {
    switch(personId) {
    case "person5":
      setDisplayText( <>
        <span style={{ fontSize: "30px" }}>曾鈺蘋</span><br />
          工程師<br />
          e-mail: E24103175@gs.ncku.edu.tw
      </>);
      break;
    case "person4":
      setDisplayText( <>
        <span style={{ fontSize: "30px" }}>阮紹銘</span><br />
          工程師<br />
          e-mail: bend06b@gmail.com
      </>);
      break;
    case "person3":
      setDisplayText( <>
        <span style={{ fontSize: "30px" }}>王三禾</span><br />
          工程師<br />
          e-mail: wang3harry@gmail.com
      </>);
      break;
    case "person2":
      setDisplayText( <>
        <span style={{ fontSize: "30px" }}>黃政文</span><br />
          UI/UX設計師<br />
          e-mail: nodong3334@gmail.com
      </>);
      break;
    case "person1":
      setDisplayText( <>
        <span style={{ fontSize: "30px" }}>蘇奕幃</span><br />
          資深工程師<br />
          e-mail: yiwei.suuu@gmail.com
      </>);
      break;
    default:
      setDisplayText("");
    }
  };
  return (
    <body>
      <div className="page-container">
        <div className="people-images">
          <img src={main_picture} alt="main_picture" />
        </div>
        <div className="gray_vector">
          <img src={gray_vector} alt="gray_vector" />
        </div>
        <h className="about_us">
          Something About Us
        </h>
        <p className="introduce">我們是一支致力於信用卡企劃業務提案的軟體開發團隊，提供即時現有活動，並比較過去同等規模的活動的經濟規模等資訊。透過我們軟體的協助，能夠為企劃業務提供更具可行性和可靠性的建議，協助其提出更有競爭力的提案。</p>
      </div>
      <div className="personal_introduce" >
        <img className="personsmall" id="person1" onMouseEnter={() => handleHover("person1")} src={member1} alt="person1" />
        <img className="personsmall" id="person2" onMouseEnter={() => handleHover("person2")} src={member2} alt="person2" />
        <img className="personsmall" id="person3" onMouseEnter={() => handleHover("person3")} src={member3} alt="person3" />
        <img className="personsmall" id="person4" onMouseEnter={() => handleHover("person4")} src={member4} alt="person4" />
        <img className="personsmall" id="person5" onMouseEnter={() => handleHover("person5")} src={member5} alt="person5" />
        {/* <img id="button1" src={button1} alt="button1" /> */}
        <div className="right-side">
          <p>{displayText}</p>
        </div>
      </div>ewdfsdfs

      <div className="vector">
        <img className="vectorsmall" src={vector} alt="vector1" />
        <img className="vectorsmall" src={vector} alt="vector2" />
        <img className="vectorsmall" src={vector} alt="vector3" />
        <img className="vectorsmall" src={vector} alt="vector4" />
        <img className="vectorsmall" src={vector} alt="vector5" />
      </div>
      <h className="member_introduce">To Craft <br/>an Ultimate User Experience</h>
    </body>
  );
}

export default App;
