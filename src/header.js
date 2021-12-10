import React from "react"
import './css/header.css'
import logo from'./img/logo4.png'
import arrow from'./img/scroll.png'
import Parallax from'parallax-js'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            burgeractive:false,
            activelink:""
        }
        this.burgettogler=this.burgettogler.bind(this)
        this.linktogler=this.linktogler.bind(this)
    }
    componentDidMount(){
        var scene = document.querySelector('.scene');
        var parallaxInstance = new Parallax(scene);
    }
    burgettogler(){
        this.setState(state=>({burgeractive:!state.burgeractive}))
    }
    linktogler(e){
        this.setState({activelink:e.target.parentNode.id,burgeractive:false})
    }
    render(){
        let burgerclass=this.state.burgeractive?"active":""
        
        return(
            <div className="header">
                <div className="nav">
                <a class="logo" href=""><img className="logo_img" src={logo} alt=""/></a>
                <ul className={`nav_item_list ${burgerclass}`} id="nav_drop">
                <li className={`nav_item ${this.state.activelink=="about_me"?"active":""}`} id="about_me"><a href="#about_link" onClick={this.linktogler} class="nav_link">About</a></li>
                <li className={`nav_item ${this.state.activelink=="work_me"?"active":""}`} id="work_me"><a href="#work_link" onClick={this.linktogler} class="nav_link">Work</a></li>
                <li className={`nav_item ${this.state.activelink=="contact_me"?"active":""}`} id="contact_me"><a href="#contacts_link" onClick={this.linktogler} class="nav_link">Contact</a></li>
                </ul>
                <button onClick={this.burgettogler} className={`nav_item_but ${burgerclass}`} id="nav_but">
                    <div className="nav_img"></div>
                </button>
                </div>
                <div className="scene">
                    <div className="layer" data-depth="0.2">
                        <div className="center_logo">
                    <h1 className="logo_title">Kozak Vladyslav (InGWeT)</h1>
                </div>
                    </div>
                </div>
                
                <h2 className="logo_title_bot">Junior/Fronted/Web devoloper</h2>
                <a className="arrow_bot" href="#about_link"><img className="arrow_img" src={arrow} alt=""/></a> 
            </div>
        )
    }
}
export default Header