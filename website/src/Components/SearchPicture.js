import React from 'react';

export default class SearchPicture extends React.Component{
    render(){
        return(
            <>
            <input id="searchImage" class="border p-2 mb-2 w-full" type="text" placeholder="Search for picture"></input>
            <button className="w-full flex items-end flex-col"id="searchButton" class="bg-pink-900 text-white px-4 py-2 rounded">Search</button>
            </>
        );
    }
}