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
        const response = await fetch(GameList.url)
        const data = await response.json()
        setSelected({
            name: data.name,
            platforms: data.platforms[0].name,
            img: data.results.short_image
        })
    }

    return <div style={divStyle}>
        <GameList gamelist={props.gamelist} selectOneGame={selectOneGame}/>
        <OneGame selected={selected}/>
    </div>
}

export default Home