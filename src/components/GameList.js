import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function GameList (props){
    return <div>
        {props.gamelist.map((game, index) => {
            return <div>
                <CardDeck>
                      <Card style={{ width: '30rem',height:'20rem', justifyContent:'space-between', display: 'grid'}}>
                            <Card.Img src={game.background_image} />
                            <Card.ImgOverlay>
                            <Card.Body>
                            
                        <h1 onClick={() => props.selectOneGame(game.results)}>{game.name}</h1>
                        </Card.Body>
                        </Card.ImgOverlay>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        </Card>
                        <Card.Text>
                                
                        </Card.Text>
                        </CardDeck>
                    </div>
        })}
    </div>
}
export default GameList