import React, {useState} from "react";
import clsx from "clsx";
import "styles/card.css" ;


export default function Card(props) {
    const [likes, setLikes] = useState(0);
    const {name, image} = props.details;
    const {onDeleteAlbum, deleteId} = props;
    const changeColor = clsx({likes_color : true})
    console.log(changeColor)
    function handleSetLikes(l) {
        if (!likes) {
            setLikes(likes + 1)
        } else{
            setLikes(0)
        }
    }

    return (
         <div className='card'>
            <div className="image-content">
                <h3 id='cap-name'>{name}</h3>
                <img src={image} alt="" />
            </div>
            <div className="likes">
                <button onClick={handleSetLikes} ><i className={`fas fa-heart love ${(likes) ?changeColor : null} `} >{likes}</i></button>
                <i className="fas fa-comment-alt">2</i>
                <i className="fas fa-share"></i>
                <button onClick={() => onDeleteAlbum(deleteId)} ><i className="fas fa-trash"></i></button>
            </div>
        </div> 
    )
}