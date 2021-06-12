import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ margin: "16px auto 10px" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622558692_web.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622820897_All_day_comfort_web.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622655783_Home_page_banner_web.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622821020_kids_wear_web.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622550434_dairy_delights_web_main.jpg"
                        alt="Five slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622821216_womens_wear_web.jpg"
                        alt="Six slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622482833_web.jpg"
                        alt="Seven slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620826904_w.jpg"
                        alt="Eight slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620488590_riceweb.jpg"
                        alt="Nine slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621437879_w.jpg"
                        alt="Ten slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

//render(<ControlledCarousel />);

export default ControlledCarousel;