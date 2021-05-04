import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'

function GameList (props){
    return <div>
        {props.gamelist.map((game, index) => {
            return <div>
                      <Card style={{ width: '40rem'}}>
                            <Card.Img src={game.background_image} />
                            <Card.ImgOverlay>
                            <Card.Body>
                        <h1 onClick={() => props.selectOneGame(game.name)}>{game.name}</h1>
                        <Button variant="primary">Game Details</Button>
                        </Card.Body>
                        </Card.ImgOverlay>
                        </Card>
                    </div>
        })}
    </div>
}
export default GameList