import React, { useState } from 'react';
import './App.css'; 

const App = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isButtonRotated, setButtonRotated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체가사');
  const [isDarkMode, setIsDarkMode] = useState(false);

  //애국가 가사 - 1절 ~ 4절 따로따로 변수에 저장
  const verse1 = (
    <p>1절<br></br><br></br>
      동해물과 백두산이 마르고 닳도록<br></br>
      하느님이 보우하사 우리나라 만세<br></br>
      무궁화 삼천리 화려강산<br></br>
      대한 사람 대한으로 길이 보전하세<br></br>
    </p>
  );

  const verse2 = (
    <p>2절<br></br><br></br>
      남산 위에 저 소나무 철갑을 두른 듯<br></br>
      바람 서리 불변함은 우리 기상일세<br></br>
      무궁화 삼천리 화려강산<br></br>
      대한 사람 대한으로 길이 보전하세<br></br>
    </p>
  );

  const verse3 = (
    <p>3절<br></br><br></br>
      가을 하늘 공활한데 높고 구름 없이<br></br>
      밝은 달은 우리 가슴 일편단심일세<br></br>
      무궁화 삼천리 화려강산<br></br>
      대한 사람 대한으로 길이 보전하세<br></br>
    </p>
  );

  const verse4 = (
    <p>4절<br></br><br></br>
      이 기상과 이 맘으로 충성을 다하여<br></br>
      괴로우나 즐거우나 나라 사랑하세<br></br>
      무궁화 삼천리 화려강산<br></br>
      대한 사람 대한으로 길이 보전하세<br></br>
    </p>
  );
  // 1절 ~ 4절 전체저장
  const fullLyrics = (
    <p>전체가사<br></br>
      {verse1}
      {verse2}
      {verse3}
      {verse4}
    </p>
  );
  // 사이드바 토글기능
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // 사이드바 토글버튼을 누를 때마다 버튼이미지 180도 회전(화살표방향전환)
  const toggleRotation = () => {
    setButtonRotated(!isButtonRotated);
  };
  // 카테고리를 누를 때 해당하는 내용 반환
  const getCategoryContent = () => {
    switch (selectedCategory) {
      case '전체가사':
        return fullLyrics;
      case '1절':
        return verse1;
      case '2절':
        return verse2;
      case '3절':
        return verse3;
      case '4절':
        return verse4;
      default:
        return null;
    }
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  

  return (
    <div className="app" style={isDarkMode ? 
                               {backgroundColor:'#353c4d', color: 'white'} : {backgroundColor:'#fff', color:'black'}}>
      <header>
        {/* 사이드바 */}
        <aside className={`${isSidebarOpen ? 'sidebar-open' : 'sidebar'}`} style={isDarkMode ? {backgroundColor:'#22262e'} : {backgroundColor:'#eee'}}>
            <img          // 사이드 바 버튼, 열렸을 때와 닫혔을 때 css따로 지정
              id="sidebtn" 
              onClick={() => { toggleSidebar(); toggleRotation(); }}
              src="/icon-2423349_1280.png"
              alt="토글 사이드바"
              width={30}
              style={{ transform: isButtonRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          <h2>Menu</h2>
          <ul>
            <li onClick={() => setSelectedCategory('전체가사')}>전체가사</li>
            <li onClick={() => setSelectedCategory('1절')}>1절</li>
            <li onClick={() => setSelectedCategory('2절')}>2절</li>
            <li onClick={() => setSelectedCategory('3절')}>3절</li>
            <li onClick={() => setSelectedCategory('4절')}>4절</li>
          </ul>
          <div className='darkdiv'>
            <p id='darkmodetext'>다크모드</p>
            <div className='darkMode' onClick={toggleDarkMode}>
              <div className={`darkMode-btn ${!isDarkMode ? "disabled" : ""}`}>{isDarkMode ? 'ON' : 'OFF'}</div>
            </div>
          </div>
        </aside>
      </header>
      <div className="main">
        {/* 메인 컨텐츠 */}
        <main>
          <h1>리액트 사이드 바 구현</h1>
          <h2>애국가</h2>
          {getCategoryContent()}
        </main>
      </div>
    </div>
  );
};
export default App;