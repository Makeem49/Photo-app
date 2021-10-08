import React , {useState} from "react";
import 'styles/form.css'

export default function Form(props) {
    const {name , setName, urlAdress, setUrlAdress, validationMessage, setValidationMessage, onFormSubmit} = props;

    return <>
        <div className='form-container'>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <label htmlFor='name'><p>Name</p></label>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor='image-url'><p> Image url : </p></label>
                <input type='url' id='image-url' value={urlAdress} onChange={(e) => setUrlAdress(e.target.value)} ></input>
                <div className='button-p'>
                    <button id='add'>Add Product</button>
                    <p>{validationMessage}</p>
                </div>
            </form>  
        </div>  
    </>
}