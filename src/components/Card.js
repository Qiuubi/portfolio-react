import "../styles/Card.css";
import classNames from "../datas/classNames";

function Card(props) {
  return (
    <div className={classNames.card}>
      <div class={ classNames.card_img }>
        <img src={props.img} alt="dessin" />
      </div>
      <p>{props.title}</p>
      <p>{props.music}</p>
      <p class={ classNames.card_btn }>En savoir plus</p>
    </div>
  );
}

export default Card;
