import React, { useState, useEffect } from 'react';
import PopUp from './testImage'


const  Admin = () => {

    const [file, setFile] = useState(null)
    const [img, setImg] = useState(null)

    const fileSelectHandler = event => {
        setFile(event.target.files)

        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload=(e)=>{
            setFile(e.target.result)
        }
    }

    async function fileUploadHandler() {
			await fetch(`http://localhost:5000/graphql`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: `mutation {addProduct(name:"TEST7", value:"${file}") {name}}`
                        })
                    })
                .then((response) => response.json());
                console.log("bublewrap")
    }

    async function fileDownloadHandler() {
			await fetch(`http://localhost:5000/graphql`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: `{getProduct(name:"TEST8") {value}}`
                        })
                    })
                .then((response) => response.json().then((data => setImg(data.data.getProduct[0].value))));
	}


    useEffect(() => {
        console.log(img)
    }, [img])


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
                                     <th><button onClick={fileDownloadHandler}>DOWNLOAD</button></th>
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