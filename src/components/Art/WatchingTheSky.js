import classNames from "../../datas/classNames";
import Card from "../Card";
import '../../styles/Theme.css';

function WatchingTheSky () {
    return(
        <div >
            <h3 className={classNames.theme_title }>Watching The Sky</h3>
            <section className={ classNames.container }>
                <Card 
                    img="https://i.pinimg.com/736x/f5/34/24/f5342430e0789731f5ca178d322f124b.jpg"
                    title="Dessin 1">
                </Card>
                <Card 
                    img="https://i.pinimg.com/736x/49/03/c0/4903c0e50eba82d17d1ff2387e3d58e8.jpg"
                    title="Dessin 2">
                </Card>
                <Card 
                    img="https://i.pinimg.com/564x/fd/3e/6d/fd3e6dbb27b900e2c2640e203d79aca4.jpg"
                    title="Dessin 3">
                </Card>
                <Card 
                    img="https://i.pinimg.com/564x/b3/41/f2/b341f229417442e1402e3646386b1d41.jpg"
                    title="Dessin 4">
                </Card>
                <Card 
                    img="https://i.pinimg.com/564x/2a/24/f0/2a24f018eb500ee885924ed9a59193d2.jpg"
                    title="Dessin 5">
                </Card>
            </section>

        </div>
    )
}

export default WatchingTheSky;