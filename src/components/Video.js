import { Link } from "react-router-dom";

function Video(props) {
    return (
        <div className="video">
            <video id="background-video" autoPlay loop muted>
                <source src="https://res.cloudinary.com/dhbumhhh1/video/upload/v1643297705/Football/football-video_jnhayw.mp4" type="video/mp4" poster="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643381797/Football/Screen_Shot_2022-01-28_at_9.55.15_AM-min_tl9wn5.png" />
            </video>

            <div className="introduction">
            <h2 className="intro-headline">UNIVERSITY OF GEORGIA FOOTBALL</h2>
            <h3 className="intro-subhead">2021 NATIONAL CHAMPIONS</h3>
            <p className="intro-text">
                Check out the legends of UGA Football who paved the way.
            </p>
            <Link to="/players">
            <button className="intro-btn">LET'S GO</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Video;