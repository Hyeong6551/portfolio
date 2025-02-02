import Carousel from 'react-bootstrap/Carousel';
import '../css/MyMain.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MyMain(){
    const navigate = useNavigate();
    const goPortfolio = () => { navigate('/board/list'); }
    
    let [myBtn,setMyBtn] = useState();
    let getMyBtn = () => {

    }

    return(
        <div>
            {/* -- Carousel -- */}
            <div className='container' style={{width:"70%"}}>
                <Carousel>
                    <Carousel.Item>
                        <img src='/image/04.jpg' alt='react_portfolio' width={"1000px"} height={"500px"} onClick={goPortfolio}/>
                        <Carousel.Caption>
                        <h3>First Protfolio</h3>
                        <p>REACT CRUD</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/image/06.jpg' alt='java_portfolio' width={"1000px"} height={"500px"}/>
                        <Carousel.Caption>
                        <h3>Second Protfolio</h3>
                        <p>Java Book management project</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/image/09.jpg' alt='' width={"1000px"} height={"500px"}/>
                        <Carousel.Caption>
                        <h3>Third Protfolio</h3>
                        <p>maybe Team Project</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Quick */}
            <div className='second_container'>
                <div className="container">
                    <h3 id="aboutMe_title">ABOUT ME</h3>
                    <div>
                        <div className="myBtn" onClick={ getMyBtn }>{myBtn}열정</div>
                        <div className="myBtn" onClick={ ()=>{} }>끈기</div>
                        <div className="myBtn" onClick={ ()=>{} }>꼼꼼한</div>
                        <div className="myBtn" onClick={ ()=>{} }>창의적</div>
                    </div>
                </div>
                <div className="container">
                    <h3 id="mySkill_title">My Skill</h3>
                    <div className="display">
                        <div className="skillBtn">REACT</div>
                        <p className="skill_description">REACT 게시판</p>
                    </div>
                    <div className="display">
                        <div className="skillBtn">JAVA</div>
                        <p className="skill_description">도서 관리 프로그램</p>
                    </div>
                </div>
            </div>
        </div>
    )
}