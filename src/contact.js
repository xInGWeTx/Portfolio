import React from "react"
import './css/contact.css'
import mail from './img/email.png'
import facebook from'./img/facebook.png'
import inst from './img/inst.png'
import vk from './img/vk.ong.png'

class Contact extends React.Component{
    render(){
        return(
            <div className="contacts" id="contacts_link">
                <div className="email">
                    <a href="mailto:kozakvlad97@gmail.com">
                        <div className="size_mail">
                        <img className="mail_img" src={mail} alt=""/>
                        <p className="text_cont">kozakvlad97@gmail.com</p>
                        </div>
                        </a>
                    <div className="social_container">
                        <a href="https://www.facebook.com/profile.php?id=100007411809808"><img className="social_logo" src={facebook} alt=""/></a>
                        <a href="https://vk.com/lngwet"><img className="social_logo" src={vk} alt=""/></a>
                        <a href="https://www.instagram.com/xingwetx/?hl=ru"><img className="social_logo" src={inst} alt=""/></a>
                    </div>
                    <div className="footer">
                    Designed and built by Kozak Vladyslav with HTML5, CSS3,React
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact