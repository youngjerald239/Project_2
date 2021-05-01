import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import FreeGameList from "../components/FreeGameList"
import FreeGame from "../components/FreeGame"

function Home (props){
    const divStyle = {
        display:"flex",
        justifyContent: "space-around"
    }
    return <div style={divStyle}>
        <FreeGameList FreeGameList={props.FreeGameList}/>
        <FreeGame/>
    </div>
}

export default Home