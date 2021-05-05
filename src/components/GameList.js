import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'

function GameList (props){
    return <div>
        {props.gamelist.map((game, index) => {
            return <div>
                      <Card style={{ width: '30rem',height:'16rem', justifyContent:'space-between'}}>
                            <Card.Img src={game.background_image} />
                            <Card.ImgOverlay>
                            <Card.Body>
                        <h1 onClick={() => props.selectOneGame(game.results)}>{game.name}</h1>
                        </Card.Body>
                        </Card.ImgOverlay>
                        </Card>
                    </div>
        })}
    </div>
}
export default GameList