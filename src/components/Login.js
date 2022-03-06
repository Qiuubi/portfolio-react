import React from "react";
import "../styles/Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.statePassword = { value: '' }
        // 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value});  
    }

    handleSubmit(event) {
      alert('Vous avez utilisé votre adresse ' + this.state.value + ' pour vos connecter');
      event.preventDefault();
    }

    render() {
        return (
        <div className="qiuubi-portfolio-login">
            <section className="qiuubi-portfolio-login-block-form">
                <form className="qiuubi-portfolio-login-form" onSubmit={this.handleSubmit}>
                    <div className="qiuubi-portfolio-login-form-block">
                        <label className="qiuubi-portfolio-login-form-label">Email </label>
                        <input name="email" className="qiuubi-portfolio-login-form-input" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="qiuubi-portfolio-login-form-block">
                        <label className="qiuubi-portfolio-login-form-label">Mot de passe </label>
                        <input name="password" className="qiuubi-portfolio-login-form-input" type="password" />
                    </div>
                    <div className="qiuubi-portfolio-login-form-block">
                        <input type="submit" className="qiuubi-portfolio-login-button" value="Envoyer" />
                    </div>
                </form>
            </section>

        </div>
        )
    };
}

export default Login;



