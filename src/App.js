import React, {useState} from "react";
import Card from "./Card.js";
import Form from "./Form.js";

export default function App() {
    {/* Writing a controlled component 

    A controlled component is a component that use state to track the user input and update it whenever it changes... 

    Steps in writing a control component
    1. creating a state and give it a defualt value of the useState('Initial value')
    2. we assign the state to the value
    3. we update the change through onChange(accept evevt) which accept event in order to access the target.value.
    4. We use setName() to update the state. 

    5. lifting the state up. The state will be manage by the parent component. 

*/}

    const [albums, setAlbum] = useState([]);
    const [name , setName] = useState('');
    const [urlAdress, setUrlAdress] = useState('');
    const [validationMessage, setValidationMessage] = useState('');


    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name) {
            setValidationMessage('Please input a name for the picture');
            return;
        }

        if (!urlAdress && !validationMessage.startsWith('https://')) {
            setValidationMessage('Please enter a valid url for the image starting with https://');
            return;
        }

        const addAlbum = {
            id : albums.length,
            name : name,
            image : urlAdress
        }

        setAlbum([...albums, addAlbum])
        
        setName('');
        setUrlAdress('');
        setValidationMessage('');
    }

    function handleRemoveAlbum(indexToRemove) {
        const filteredAlbum = albums.filter((item, index) => item.id !== indexToRemove)
        setAlbum([...filteredAlbum])
    }


    const listAlbums = albums.map(album => {
        console.log(album.id)
        return <Card key={album.id} details={album} deleteId={album.id} onDeleteAlbum={handleRemoveAlbum}/>
    })
    
    return <>
        {/* <Form /> */}
        <Form name={name} setName={setName} urlAdress={urlAdress} setUrlAdress={setUrlAdress} validationMessage={setValidationMessage} validationMessage={validationMessage} onFormSubmit={handleFormSubmit} />


        {/* Card */}
        <div className="cards">
           { !albums.length && <p id="welcome-message">Add your first photo.</p>}
            {/* {renderDetails} */}
            
            { listAlbums }

        </div> 
    </>
}