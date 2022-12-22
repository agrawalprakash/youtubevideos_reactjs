import React, { useState, useEffect } from "react";
import Video from './Video';
import base_url from '../api/bootapi';
import axios from "axios";
import { toast } from 'react-toastify';
const Allvideos=() => {

    // function to call server
    const getAllVideosFromServer=()=> {
       document.title = "View Videos";
       axios.get(`${base_url}/videos`).then(
            (response)=>{
                console.log(response.data);
                toast.success(("Videos have been loaded"), {
                    position: "bottom-center",
                }
                );
                setVideos(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error(("Some error had occured"), {
                    position: "bottom-center",
                });
            }
        );

    };

    useEffect(() => {
        getAllVideosFromServer();
    }, []);

    const[videos, setVideos] = useState([]);

    const updateVideos=(id)=> {
        setVideos(videos.filter((c) => c.id != id));
    }

    return (

            <div>
                <h1>All Videos</h1>
                <p>List of videos are as follows</p>
                {
                    videos.length > 0 ?
                    videos.map(
                        (item) => <Video key={item.id} video={item} update={updateVideos} />
                    ) : "No Videos"
                } 
            </div>

    )

};

export default Allvideos;