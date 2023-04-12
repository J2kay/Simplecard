import '../App.css';

function Title(props){
    console.log(props)
    return(
        <div>
            <h1 className="title">{props.text}</h1>
        </div>
    )
}
export default Title;