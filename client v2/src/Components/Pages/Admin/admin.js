import React, { useState, useEffect } from 'react';
import PopUp from './testImage'
import RemoveFromCart from '../../Buttons/RemoveFromCart';



const Admin = () => {

    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)

    const [img, setImg] = useState(null)
    const [name, setName] = useState(null)

    const [products, setProducts] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(()=>{
        async function fetchData(){
             await fetch(`http://localhost:5000/graphql`, {
                method: 'POST',
                headers: {'Content-Type' :'application/json'},
                body: JSON.stringify({
                    query: `{getAllProducts{id, productName, price, description, image}}`
                })
            }).then((response) => response.json().then((data) => setProducts(data.data.getAllProducts)))
        }
        fetchData()
    },[update])

    const list = () => {
        if (!products) {
            return (
                <div className="ui segment">
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )
        }
        else {
            return products.map(item => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td><img src={item.image} alt='unavailable' /></td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td><button onClick={() => removeProductHandler(item.productName)}>X</button></td>
                    </tr>
                )
            })
        }
    }

    const fileSelectHandler = event => {
        setFileName(event.target.files[0].name)
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (e) => {
            setFile(e.target.result)
        }
    }

    const textHandler = event => {
        setName(event.target.value)
    }

    const priceHandler = event => {
        setPrice(event.target.value)
        console.log(price)
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
            .then((response) => response.json().then(setUpdate(!update)));
        console.log("bublewrap")
    }

    async function fileDownloadHandler() {
        await fetch(`http://localhost:5000/graphql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `{getProduct(productName:"${name}") {image}}`
            })
        })
            .then((response) => response.json().then((data => setImg(data.data.getProduct[0].image))));
    }

    async function removeProductHandler(name) {
        await fetch(`http://localhost:5000/graphql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `mutation {removeProduct(productName:"${name}") {productName}}`
            })
        })
            .then(setUpdate(!update))
    }


    return (
        <div>
            <div className='ui container cart-container'>
                <div className='ui centered grid'>
                    <div className='fourteen wide column'>
                        <div class="ui form">
                            <h4 class="ui dividing header">Upload Product</h4>
                            <div class="four fields">
                                <div class="field">
                                    <label>Image</label>
                                    <input type="file" onChange={fileSelectHandler} />
                                </div>
                                <div class="field">
                                    <label>Price</label>
                                    <input type="text" onChange={priceHandler} />
                                </div>
                                <div class="field">
                                    <label>Descrription</label>
                                    <input type="text" onChange={descriptionHandler} />
                                </div>
                                <div class="field">
                                    <label>Complete</label>
                                    <button onClick={fileUploadHandler}>UPLOAD PRODUCT</button>
                                </div>
                            </div>
                        </div>
                        <h4 class="ui dividing header">Current Products</h4>
                        <table class="ui celled table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin