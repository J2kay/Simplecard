import avatar from "../image/avatar.jpg";


function Image (props){
    return(
        <div className="pic">
             <img src={avatar} alt="Barcelona FC" className="b1"/>
        </div>
    )
}
export default Image;