import "../../styles/Card.css";
import art from "../../datas/ArtClassNames";

function Card(props) {
  return (
    <div className={art.card}>
      <div className={ art.card_img }>
        <img src={props.img} alt="dessin" />
      </div>
      <p className={ art.card_title }>{props.title}</p>
      <div>
        <p className={ art.card_music }><a href={props.music}><i className="fas fa-music"></i></a></p>
        <p className={ art.card_info }><i className="fas fa-info-circle"></i></p>
      </div>
    </div>
  );
}

export default Card;
