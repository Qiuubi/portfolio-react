import "../../styles/Mosaique.css"
import BlockMosaique from './BlockMosaique';
import art from '../../datas/ArtClassNames';
import wts from '../../datas/imagesLink';

function Mosaique() {
    return(
        <div className={ art.msq }>
            {wts.map((value) => {
                return <BlockMosaique key={value.id} img={value.img} ></BlockMosaique>
            })}
        </div>
    );
}

export default Mosaique;