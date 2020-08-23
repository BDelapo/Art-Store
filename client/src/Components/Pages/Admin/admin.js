import React, { useState, useEffect } from 'react';
import PopUp from './testImage'


const  Admin = () => {

    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState('NONE')
    const [img, setImg] = useState(null)
    const [name, setName] = useState("NONE")



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
        console.log(event.target.value)
    }



    async function fileUploadHandler(name) {
			await fetch(`http://localhost:5000/graphql`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: `mutation {addProduct(name:"${fileName}", value:"${file}") {name}}`
                        })
                    })
                .then((response) => response.json().then((data)=>{console.log(data)}));
                console.log("bublewrap")
    }

    async function fileDownloadHandler() {
			await fetch(`http://localhost:5000/graphql`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: `{getProduct(name:"${name}") {value}}`
                        })
                    })
                .then((response) => response.json().then((data => setImg(data.data.getProduct[0].value))));
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
                                     <th>Name</th>
                                     <th>File</th>
                                     <th>Notes</th>
                                    </tr>
                                    <tr>
                                     <th><input type ="file" onChange={fileSelectHandler}/></th>
                                     <th><button onClick={fileUploadHandler}>UPLOAD</button></th>
                                     <th>
                                         <input type='text' onChange={textHandler}></input>
                                         <button onClick={fileDownloadHandler}>DOWNLOAD</button>
                                    </th>
                                     <th> <PopUp imgsrc={img}>This is the PopUp</PopUp></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default Admin