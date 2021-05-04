import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import MyGames from "./pages/MyGames"
import {useState, useEffect} from "react"
import './App.css';

function App() {
//My games page with share the game list data with home

  const [games, setGames] = useState([])

  const [gamelist, setGameList] = useState([])

  const getGameList = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=c23a0873534643e2b3b58cea382e6f9a&page_size=80&platforms=18,1,7,2,3,4")
    
    const data = await response.json()

    setGameList(data.results)

    // console.log(getFreeGameList)

  }

  useEffect(() => {getGameList()}, [])

  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home gamelist={gamelist}/>
          </Route>
          <Route path="/MyGames">
            <MyGames/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;