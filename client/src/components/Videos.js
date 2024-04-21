import React from "react";
import {useEffect,useState} from "react";
import {YouTube_API_Key} from "../utils/constants";
import VideoCard from "./VideoCard";

const Videos= ()=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[]);
    const getVideos= async ()=>{
        const data = await fetch(YouTube_API_Key);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
    }
    return (
        <div>
            <VideoCard info={videos[0]} />
        </div>
    )
}

export default Videos;