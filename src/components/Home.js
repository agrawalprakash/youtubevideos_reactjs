import React, { useEffect } from 'react';
import { Container, Button } from "reactstrap";
import { Link } from 'react-router-dom';

const Home=()=> {

    useEffect(() => {
        document.title = "Home | Highest Rated Youtube Channels";
    }, []);

    return (
        <div className="jumbotron">
            
                <h1>Add Youtube Playlists that you love to create your own video magazine</h1>
                <h1></h1>
                <br />
                <h3>You will save a lot of time, as you get best quality free content at one place, and you don't have to search or watch low quality content.</h3>
                <br />
                <h3>
                    Head on to View Videos page and you can add any youtube playlist from Add Video page !!
                </h3>
                <br />
                <Container>
                <Link
                    className="App-link" 
                    tag="a" 
                    to="/view-videos" 
                    action
                >
                    Start Using
                </Link>
                </Container>

            
        </div>
    );

}

export default Home;