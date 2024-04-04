import { React, useState } from "react";
import "./App.css";
import main_picture from './pictures/團體照.png';
import gray_vector from './pictures/Vector.png';
import person4 from './pictures/personal_picture/01-黃政文.png';
import person5 from './pictures/personal_picture/02-蘇奕幃.png';
import person3 from './pictures/personal_picture/03-王三禾.png';
import person2 from './pictures/personal_picture/04-紹紹.png';
import person1 from './pictures/personal_picture/05-曾鈺蘋.png';
import vector from './pictures/personal_picture/Vector.png';
import button1 from './pictures/personal_picture/button.png';

function App() {
  const [displayText, setDisplayText] = useState("");
  const handleHover = (personId) => {
    switch(personId) {
      case 'person1':
        setDisplayText( <>
          <span style={{ fontSize: '30px' }}>曾鈺蘋</span><br />
          工程師<br />
          e-mail: E24103175@gs.ncku.edu.tw
        </>);
        break;
      case 'person2':
        setDisplayText( <>
          <span style={{ fontSize: '30px' }}>阮紹銘</span><br />
          工程師<br />
          e-mail: bend06b@gmail.com
        </>);
        break;
      case 'person3':
        setDisplayText( <>
          <span style={{ fontSize: '30px' }}>王三禾</span><br />
          工程師<br />
          e-mail: wang3harry@gmail.com
        </>);
        break;
      case 'person4':
        setDisplayText( <>
          <span style={{ fontSize: '30px' }}>黃政文</span><br />
          UI/UX設計師<br />
          e-mail: nodong3334@gmail.com
        </>);
        break;
      case 'person5':
        setDisplayText( <>
          <span style={{ fontSize: '30px' }}>蘇奕幃</span><br />
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
        <p class="introduce">我們是一支致力於信用卡企劃業務提案的軟體開發團隊，提供即時現有活動，並比較過去同等規模的活動的經濟規模等資訊。透過我們軟體的協助，能夠為企劃業務提供更具可行性和可靠性的建議，協助其提出更有競爭力的提案。</p>
      </div>
      <div className="personal_introduce" >
        <img class="personsmall" id="person1" onMouseEnter={() => handleHover('person1')} src={person1} alt="person1" />
        <img class="personsmall" id="person2" onMouseEnter={() => handleHover('person2')} src={person2} alt="person2" />
        <img class="personsmall" id="person3" onMouseEnter={() => handleHover('person3')} src={person3} alt="person3" />
        <img class="personsmall" id="person4" onMouseEnter={() => handleHover('person4')} src={person4} alt="person4" />
        <img class="personsmall" id="person5" onMouseEnter={() => handleHover('person5')} src={person5} alt="person5" />
        {/* <img id="button1" src={button1} alt="button1" /> */}
        <div className="right-side">
          <p>{displayText}</p>
        </div>
      </div>

      <div className="vector">
        <img class="vectorsmall" src={vector} alt="vector1" />
        <img class="vectorsmall" src={vector} alt="vector2" />
        <img class="vectorsmall" src={vector} alt="vector3" />
        <img class="vectorsmall" src={vector} alt="vector4" />
        <img class="vectorsmall" src={vector} alt="vector5" />
      </div>
      <h class="member_introduce">To Craft <br/>an Ultimate User Experience</h>
    </body>
  );
}

export default App;
