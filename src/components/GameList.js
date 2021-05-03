function GameList (props){
    return <div>
        {props.gamelist.map((game, index) => {
            return <h1 onClick={() => props.selectOneGame(game.name)}>{game.name}</h1>
        })}
    </div>
}
export default GameList