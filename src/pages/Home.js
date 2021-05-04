
import GameList from "../components/GameList"
import OneGame from "../components/OneGame"
import {useState} from "react"

function Home (props) {
    const divStyle = {
        display:"flex",
        justifyContent: "space-around",
        backgroundColor:"black"
        
    };

    const [selected, setSelected] = useState(null)

    const selectOneGame = async (onegame) => {
        const response = await fetch(GameList.stores)
        const data = await response.json()
        setSelected({
            name: data.name,
            platforms: data.platforms[0].name,
            img: data.results.background_image
        })
    }

    return <div style={divStyle}>
        <GameList gamelist={props.gamelist} selectOneGame={selectOneGame}/>
        <OneGame selected={selected}/>
    </div>
}

export default Home