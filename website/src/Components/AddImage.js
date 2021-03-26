import React from 'react';

export default class AddImage extends React.Component{
    render(){
        return(
            <>
            <input id="imageTitle" class="border p-2 mb-2 w-full" type="text" placeholder="Image title"></input>
            <input id="imageURL" class="border p-2 mb-/2 w-full" type="text" placeholder="Image url"></input>
            <button id="imageButton" class="bg-pink-900 text-white px-4 py-2 rounded">Add Image</button>
            </>
        );
    }
}