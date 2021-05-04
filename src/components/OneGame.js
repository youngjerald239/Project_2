function OneGame (props){
    return <div>
        <h1>{props.selected}</h1>
        <img src={props.selected} alt={props.selected}/> 
        <h2> Platforms {props.selected}</h2>
        { <button onClick={() => props.handleClick(props.slected)}>{props.label}</button>}
    </div>
}

export default OneGame