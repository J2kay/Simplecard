import { react } from "@babel/types";
import React from "react";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import './picture.css';



class SimpleCard extends React.Component{
    render(){
        return(
            <div className="simple">
                <Image  className="image" imagesource="avatar"/>
                    <div className="container">
                        <Title  text="Avatar:The way of water"/>
                        <Description  about="Avatar: The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series."/>
                    </div> 
            </div>
        )   
    }
}
export default SimpleCard