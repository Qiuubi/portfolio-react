import WatchingTheSky from "./Art/WatchingTheSky"
import UnderTheAbyss from "./Art/UnderTheAbyss"
import FromNightCityHighway from "./Art/FromNightCityHighway"
import ExploringTheStars from "./Art/ExploringTheStars";
import AboveTheBeyond from "./Art/AboveTheBeyond";
import classNames from "../datas/classNames";
import '../styles/Art.css';

function Art(props){
    // const {name, description} = props;
    return(
        <div className={classNames.art}>
            <h1>Je suis le composant Art</h1>
            <section className="qiuubi-art-themes">
                <WatchingTheSky></WatchingTheSky>
                <UnderTheAbyss></UnderTheAbyss>
                <FromNightCityHighway></FromNightCityHighway>
                <ExploringTheStars></ExploringTheStars>
                <AboveTheBeyond></AboveTheBeyond>
            </section>
        </div>
    );
}

export default Art;