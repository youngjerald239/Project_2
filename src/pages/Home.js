
import GameList from "../components/GameList"
import OneGame from "../components/OneGame"
import {useState} from "react"

function Home (props) {
    const divStyle = {
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:"black",
        
        
    };

    const [selected, setSelected] = useState(null)

    const selectOneGame = async (selectOneGame) => {
        const response = await fetch(GameList.results)
        const data = await response.json()
        setSelected({
            id:data.id,
            name: data.results.name,
            platforms: data.results.platforms[0].platform.name,
            ratings: data.results.ratings
        })
    }

    return <div style={divStyle}>
        <GameList gamelist={props.gamelist} selectOneGame={selectOneGame}/>
        <OneGame selected={selected}/>
        
    </div>
}

export default Home