import Carousel from 'react-bootstrap/Carousel';

export default function MyMain(){
    
    return(
        <div>
            {/* -- Carousel -- */}
             <Carousel>
                <Carousel.Item>
                    <img src='/image/a1.jpg' alt='react_portfolio'/>
                    <Carousel.Caption>
                    <h3>First Protfolio</h3>
                    <p>REACT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/image/a2.jpg' alt='java_portfolio'/>
                    <Carousel.Caption>
                    <h3>Second Protfolio</h3>
                    <p>Java</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/image/a3.jpg' alt=''/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}