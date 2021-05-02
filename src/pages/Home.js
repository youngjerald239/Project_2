import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import GameList from "../components/GameList"
import OneGame from "../components/OneGame"
import {useState} from "react"

function Home (props) {
    const divStyle = {
        display:"flex",
        justifyContent: "space-around"
    };

    const [selected, setSelected] = useState(null)

    const selectOneGame = async (onegame) => {
        const response = await fetch(onegame.url)
        const data = await response.json()
        setSelected({
            name: data.name,
            platform: data.platforms[0].name
        })
    }

    return <div style={divStyle}>
        <GameList gamelist={props.gamelist}/>
        <OneGame/>
    </div>
}

export default Home