function GameList (props){
    return <div>
        {props.gamelist.map((game, index) => {
            return <div>
             <button onClick={() => props.selectOneGame(game.name.onegame)}>{game.name}</button>
             </div>
        })}
    </div>
}
export default GameList