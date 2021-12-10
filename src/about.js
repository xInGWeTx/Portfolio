import React from "react"
import './css/about.css'
import logo_face from'./img/logo_centr.png'
class About extends React.Component{
    render(){
        return(
            <div className="about" id="about_link">
                <div className="photo"><img className="photo_img" src={logo_face} alt=""/></div>
                <div className="main_title">
                    Vlad is an aspiring frontend developer<br/>living in Ukraine.
                </div>
                <div className="descript">
                    <div className="block">
                        <h3>Work</h3>
                        <p>I have little experience in the Front-end area, there are developments and projects for myself, which are located <a className="achor_bot" href="#work_link">here.</a> </p>
                    </div>
                    <div className="block">
                        <h3>I Dream</h3>
                        <p>My long run goal is to contribute to the IT industry. I strive to become a part of web development and focus on Front-end and further Back-end development.</p>
                    </div>
                    <div className="block align">
                        <h3>About</h3>
                        <p>Name: Kozak Vladislav Olegovich<br></br>
Age: 24 years old<br></br>
Residence: <a className="maps" href="https://www.google.com/maps/place/%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA,+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@47.9897768,37.4813404,10z/data=!3m1!4b1!4m5!3m4!1s0x40e0909500919a2d:0x36335efdc5856f84!8m2!3d48.015883!4d37.80285">Donetsk</a><br></br>
Languages: Russian (native), Ukrainian (spoken), English (school)<br></br>
Opening hours: Full day<br></br>
Employment: Full time</p>
</div>
        </div>
                <div class="line"></div>
            </div>
        )
    }
}
export default About