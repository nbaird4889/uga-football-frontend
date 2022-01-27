
function Show(props){
    const id = props.match.params.id;
    const players = props.players;
    const player = players.find(p => p._id === id);

    return (
        <div className="player-cards">
            <h2>{player.name}</h2>
            <img src={player.image} alt={player.name} />
            <p className="player-details">{player.years_played}</p>
            <p className="player-details">{player.position}</p>
            <p className="player-details">{player.stat_one}</p>
            <p className="player-details">{player.stat_two}</p>
            <p className="player-details">{player.stat_three}</p>
        </div>
    );
} 
  
export default Show;