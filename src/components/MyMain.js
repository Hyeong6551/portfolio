import Carousel from 'react-bootstrap/Carousel';
import '../css/MyMain.css';

export default function MyMain(){
    
    return(
        
        <div>
            {/* -- Carousel -- */}
             <Carousel>
                <Carousel.Item>
                    <img src='/image/04.jpg' alt='react_portfolio' width={"1000px"} height={"500px"}/>
                    <Carousel.Caption>
                    <h3>First Protfolio</h3>
                    <p>REACT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/image/06.jpg' alt='java_portfolio' width={"1000px"} height={"500px"}/>
                    <Carousel.Caption>
                    <h3>Second Protfolio</h3>
                    <p>Java</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/image/09.jpg' alt='' width={"1000px"} height={"500px"}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Quick */}
            <div className="container">
                <h3 id="aboutMe">ABOUT ME</h3>
                <div className="myBtn">열정</div>
                <div className="myBtn">끈기</div>
                <div className="myBtn">꼼꼼한</div>
                <div className="myBtn">창의적</div>
            </div>
        </div>
    )
}