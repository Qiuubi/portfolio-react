import art from '../../datas/ArtClassNames';
import '../../styles/Mosaique.css';

function BlockMosaique(props) {
    return(
        <div className={ art.block_msq }>
            <img src={props.img} className={ art.block_msq_img } alt="mosaique random"></img>
        </div>
    );
}

export default BlockMosaique;