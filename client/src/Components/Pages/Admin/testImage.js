import React, {useState, useEffect} from 'react'


const PopUp = ({imgsrc}) =>  {

    const [image, setImage] = useState(false)

    function onClickeHandler(){
        setImage(true)
     }


    return(
           <div>
           <button type="button" onClick={onClickeHandler} >
               CLICK TO RENDER IMAGE
           </button>
           {
             image?
                 <img src={imgsrc}></img>
                 : null
           }
           </div>
        );
}

export default PopUp