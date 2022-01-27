import { Link } from "react-router-dom"
import {useState} from "react"

function Index(props) {
    const [ newForm, setNewForm ] = useState({
        name: "",
        years_played: "",
        position: "",
        stat_one: "",
        stat_two: "",
        stat_three: "",
        image: "",
    });

     // handleChange function for form
    const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPlayer(newForm);
        setNewForm({
            name: "",
            years_played: "",
            position: "",
            stat_one: "",
            stat_two: "",
            stat_three: "",
            image: "",
        });
    };

  // loaded function
  const loaded = () => {
    return props.players.map((player) => (
      <div key={player._id} className="player">
        <Link to={`/players/${player._id}`}><h1>{player.name}</h1></Link>
        <img src={player.image} alt={player.name} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.years_played}
            name="years_played"
            placeholder="i.e. 2012 - 2014"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.position}
            name="position"
            placeholder="position"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.stat_one}
            name="stat_one"
            placeholder="stat"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.stat_two}
            name="stat_two"
            placeholder="stat"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.stat_three}
            name="stat_three"
            placeholder="stat"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
        />
        <input type="submit" value="Add Player" />
        </form>
        {props.players ? loaded() : loading()}
        </section>
  );
}

export default Index;