import art from "../../datas/ArtClassNames";
import wts from "../../datas/imagesLink";
import Card from "./Card";
import '../../styles/Theme.css';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mosaique from "./Mosaique";

function Theme (props) {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return(
        <div >
            <h3 className={art.theme_title }>{props.title}</h3>
            <Slider {...settings} className={ art.container }>
                {wts.map((value) => {
                    return <Card key={value.id} img={value.img} title={value.title}></Card>
                })}
            </Slider>
            <Mosaique ></Mosaique>
        </div>
    )
}

export default Theme;