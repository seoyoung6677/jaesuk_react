/* 라이터 설정은 첫번째 jSX파일 App.JSX에서 보통 이루어진다 */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
/* 컴포넌트 불러오기 */
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Nick from './components/Nick'
import Intro from './components/Intro'

function App() {
  
  return (
    <div id="wrap">
      <Header />
      {/* 링크주소에 따라 컴포넌트 변경하는 위치는 전체를 브라우저 라우터로 묶고 시작해야한다 */}
      {/* 브라우저라우더 시작 위치 */}
      <main>
        {/* github pages로 리액트로 작업한 프로젝트를 배포할때는 github저장소명이 github특징상 주소에 가장 먼저 표시되기 때문에  라우터 경로시작도 basename속성을 이용해서 저장소명을 시작 값으로 설정헤야 한다 */}
        <BrowserRouter basename='jaesuk_react'>
        {/* 링크설정 */}
          <nav>
            <Link to="/">유재석</Link>
            <Link to="/intro">인적사항</Link>
            <Link to="nick">별명&특징</Link>
          </nav>
          {/* 라우터 설정 */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/nick" element={<Nick />} />
            </Routes>
        </BrowserRouter>
      </main>
      {/* 브라우저라우더 종료 위치 */}
      <Footer />
    </div>
  )
}

export default App
