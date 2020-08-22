import React, {useState, useEffect} from 'react'


const PopUp = ({imgsrc}) =>  {

    const [image, setImage] = useState(false)

    function onClickeHandler(){
        setImage(true)
        console.log(imgsrc)
     }

     useEffect(() =>{

        console.log("hellllooooooooo",imgsrc, "11111111111111")
      }
     )

    return(
           <div>
           <button type="button" onClick={onClickeHandler} >
               Click Me
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