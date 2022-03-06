import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="qiuubi-portfolio-home-body">
            <section className="qiuubi-portfolio-home-container">                
                <section className="qiuubi-portfolio-home-block">
                    <h2 className="qiuubi-portfolio-home-block-title">Web</h2>
                    <img className="qiuubi-porfolio-home-block-img" src="https://i.pinimg.com/564x/d5/78/9a/d5789a21650b020d656250b73e9e642d.jpg" alt="web"></img>
                    <div>
                        <Link className="qiuubi-porfolio-home-block-link" to="/web">
                            En savoir plus
                        </Link>
                    </div>
                </section>
                <section className="qiuubi-portfolio-home-block">
                    <h2 className="qiuubi-portfolio-home-block-title">Art</h2>
                    <img className="qiuubi-porfolio-home-block-img" src="https://i.pinimg.com/564x/ad/ae/56/adae5639ee63b3706a4021dfd8bda697.jpg" alt="art"></img>
                </section>
                <section className="qiuubi-portfolio-home-block">
                    <h2 className="qiuubi-portfolio-home-block-title">Legal Design</h2>
                    <img className="qiuubi-porfolio-home-block-img" src="https://i.pinimg.com/564x/b9/17/53/b91753547d028a97406fffdb7fa44788.jpg" alt="legal design"></img>
                </section>
            </section>
        </div>

    )
}

export default Home;