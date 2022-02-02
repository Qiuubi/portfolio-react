import "../styles/Card.css";
import classNames from "../datas/classNames";

function Card() {
  return (
    <div className={classNames.card}>
      <div class={ classNames.card_img }>
        <img src="#" alt="dessin" />
      </div>
      <p>Titre</p>
      <p>Theme</p>
      <p>Music</p>
      <p>En savoir plus</p>
    </div>
  );
}

export default Card;
