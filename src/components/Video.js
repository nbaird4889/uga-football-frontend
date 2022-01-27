function Video(props) {
    return (
        <div className="video">
            <video id="background-video" autoPlay loop muted>
                <source src="https://res.cloudinary.com/dhbumhhh1/video/upload/v1643297705/Football/football-video_jnhayw.mp4" type="video/mp4" />
            </video>

            <div className="introduction">
            <h2 className="intro-headline">UNIVERSITY OF GEORGIA FOOTBALL</h2>
            <h3 className="intro-subhead">2021 NATIONAL CHAMPIONS</h3>
            <p className="intro-text">
                Check out the legends of UGA Football who all paved the way.
            </p>
            <button className="intro-btn">LET'S GO</button>
            </div>
            
        </div>
    )
}

export default Video;