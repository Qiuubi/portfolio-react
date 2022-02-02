import classNames from "../../datas/classNames";
import Card from "../Card";
import '../../styles/Theme.css';

function WatchingTheSky (props) {
    return(
        <div className={ classNames.wts }>
            <h3>Je suis le composant Watching The Sky</h3>
            <section className={ classNames.container }>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </section>
        </div>
    )
}

export default WatchingTheSky;