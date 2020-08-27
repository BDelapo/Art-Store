import React, { useState, useEffect } from 'react';
import PopUp from './testImage'


const  Admin = () => {

    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)

    const [img, setImg] = useState(null)
    const [name, setName] = useState(null)



    const fileSelectHandler = event => {
        setFileName(event.target.files[0].name)
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload=(e)=>{
            setFile(e.target.result)
        }
    }

    const textHandler = event => {
        setName(event.target.value)
    }

    const priceHandler = event => {
        setPrice(event.target.value)
    }

    const descriptionHandler = event => {
        setDescription(event.target.value)
    }



    async function fileUploadHandler() {
			await fetch(`http://localhost:5000/graphql`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: `mutation {addProduct(productName:"${fileName}", price:"${price}", description:"${description}", image:"${file}"){productName}}`
                        })
                    })
                .then((response) => response.json().then((data)=>{console.log(data.data.getProduct)}));
                console.log("bublewrap")
    }

    async function fileDownloadHandler() {
			await fetch(`http://localhost:5000/graphql`, {
				method: 'POST',
				headers: { 'Content-Type'  :'application/json' },
				body: JSON.stringify({
					query: `{getProduct(productName:"omnisiurehic.png") {image}}`
                        })
                    })
                .then((response) => response.json().then((data => setImg(data.data.getProduct[0].image))));
    }

    async function removeProductHandler(){
        await fetch(`http://localhost:5000/graphql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `mutation {removeProduct(productName:"${name}") {productName}}`
            })
        })
        .then((response) => response.json().then((data => console.log(data))))
    }



    return (
        <div>
            <div className='ui container cart-container'>
                <div className='ui centered grid'>
                    <div className='twelve wide column'>
                        <div className='ui segment'>
                            <table className="ui selectable celled table">
                                <thead>
                                    <tr>
                                     <th><input type ="file" onChange={fileSelectHandler}/></th>
                                     <th><input type="text" onChange={priceHandler}/>Price</th>
                                     <th><input type="text" onChange={descriptionHandler}/>Description</th>
                                     <th><button onClick={fileUploadHandler}>UPLOAD Product to database</button></th>

                                    </tr>
                                </thead>
                            </table>
                            <table className="ui selectable celled table">
                                <thead>
                                    <tr>
                                     <th> <input type='text' onChange={textHandler}/>Product name</th>
                                     <th> <button onClick={fileDownloadHandler}>DOWNLOAD Product from database</button></th>
                                     <th><button onClick ={removeProductHandler}>DELETE Product from Database</button></th>
                                    </tr>
                                </thead>
                            </table>
                            <PopUp imgsrc ={img}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default Admin