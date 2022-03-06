import { Link } from "react-router-dom";
import Web from "./Web";

function Header() {
    return(
        <div className="qiiubi-porfolio-header">
            <h1 className="qiuubi-portfolio-main-title">Qiuubi Portfolio</h1>
            <nav>
                <ul className="qiuubi-portfolio-nav-container">
                    <li className="qiuubi-portfolio-nav-block"><Link className="qiuubi-portfolio-nav-block-link" to="/">Home</Link></li>
                    <li className="qiuubi-portfolio-nav-block"><Link className="qiuubi-portfolio-nav-block-link" to="/web">Web</Link></li>
                    <li className="qiuubi-portfolio-nav-block"><Link className="qiuubi-portfolio-nav-block-link" to="/art">Art</Link></li>
                    <li className="qiuubi-portfolio-nav-block"><Link className="qiuubi-portfolio-nav-block-link" to="/legal-design">Legal Design</Link></li>
                    <li className="qiuubi-portfolio-nav-block"><Link className="qiuubi-portfolio-nav-block-link" to="/about">About</Link></li>
                    <li className="qiuubi-portfolio-nav-block"><a href="#">Subscribe</a></li>
                    <li className="qiuubi-portfolio-nav-block"><Link className="qiuubi-portfolio-nav-block-link" to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;