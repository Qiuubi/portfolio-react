import Theme from "./Art/Theme"
import art from "../datas/ArtClassNames";
import '../styles/Art.css';

function Art(props){
    // const {name, description} = props;
    return(
        <div className={art.body}>
            <h1 className={art.main_title}>Art</h1>
            <section className={art.themes}>
                <section className={ art.wts }>
                    <Theme title="Watching The Sky"></Theme>
                </section>
            </section>
            
        </div>
    );
}

export default Art;