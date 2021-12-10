import React from "react"
import './css/work.css'
import work1 from"./img/work1.png"
import work2 from"./img/work2.png"
import work3 from"./img/work3.png"
class Work extends React.Component{
    render(){
        return(
            <div className="work" id="work_link">
                <h2 className="work_title">WORK</h2>
                <div className="works_img">
                    <a target="_blank" className="item_link" href="https://xingwetx.github.io/Pets-Project/"><img src={work1} alt="" className="cada_img"/></a>
                    <a target="_blank" className="item_link" href="https://xingwetx.github.io/Dart/"><img src={work2} alt="" className="cada_img center"/></a>
                    <a target="_blank" className="item_link" href="https://xingwetx.github.io/Web/"><img src={work3} alt="" className="cada_img"/></a>
                </div>
                <div class="line"></div>
            </div>
        )
    }
}
export default Work
