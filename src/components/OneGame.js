function GameDetail (props){
    return <div>
        <h1>{props.selected}</h1>
        <img src={props.GameDetail} alt={props.selected}/> 
        <h2> Game Details {props.selected}</h2>
        { <h1 onClick={() => props.handleClick(props.slected.game)}>{props.label}</h1>}
    </div>
}

export default GameDetail