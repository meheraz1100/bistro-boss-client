import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from '../../../assets/home/01.jpg'
import sliderImg2 from '../../../assets/home/02.jpg'
import sliderImg3 from '../../../assets/home/03.png'
import sliderImg4 from '../../../assets/home/04.jpg'
import sliderImg5 from '../../../assets/home/05.png'
import sliderImg6 from '../../../assets/home/06.png'

const Bannner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={sliderImg1} />
                </div>
                <div>
                    <img src={sliderImg2} />
                </div>
                <div>
                    <img src={sliderImg3} />
                </div>
                <div>
                    <img src={sliderImg4} />
                </div>
                <div>
                    <img src={sliderImg5} />
                </div>
                <div>
                    <img src={sliderImg6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Bannner;