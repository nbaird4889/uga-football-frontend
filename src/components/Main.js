import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [ players, setPlayers ] = useState(null);
  
    const URL = "https://uga-football-backend.herokuapp.com/players/";
  
    const getPlayers = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPlayers(data);
    };
  
    const createPlayer = async (player) => {
      // make post request to create people
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(player),
      });
    // update list of people
      getPlayers();
    };
  
    useEffect(() => getPlayers(), []);
  
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Index players={players} createPlayer={createPlayer} />
          </Route>
          <Route
            path="/players/:id"
            render={(rp) => (
              <Show
                players={players}
                {...rp}
              />
            )}
          />
        </Switch>
      </main>
    );
}
  
  export default Main;