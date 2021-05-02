function GameList (props){
    return <div>
        {props.gamelist.map((game, index) => {
            return <h1>{game.name}</h1>
        })}
    </div>
}
export default GameList