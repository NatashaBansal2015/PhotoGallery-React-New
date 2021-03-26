import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();

    this.state = { photos: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/photos')
      .then(res =>{
        this.setState({photos: res.data })
      });
  }

  
  render() {

    const photos = this.state.photos.map(photo => {
      return <div className=" rounded-lg shadow-xl overflow-hidden">
        {/*<img className="h-48 w-full" src = {photo.url}/>*/}

        <div className="h-72 w-full" style={{
          backgroundImage: `url(${photo.url})`,
          backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
        </div>

        <div className="p-4">
          <h2 className="font-bold">{photo.title}</h2>

          <p className="text-gray-700 ">{photo.description}</p>
        </div>



      </div>
    });

    return <>
      <h1 className="text-3xl h-20 bg-blue-900 text-white flex items-center justify-center">Welcome to PhotoGallery</h1>
      <br></br>
      <input id="searchImage" class="border p-2 mb-2 w-full" type="text" placeholder="Search for picture"></input>
      <button className="w-full flex items-end flex-col"id="searchButton" class="bg-blue-500 text-white px-4 py-2 rounded">Search</button>

      <input id="imageTitle" class="border p-2 mb-2 w-full" type="text" placeholder="Image title"></input>
      <input id="imageURL" class="border p-2 mb-/2 w-full" type="text" placeholder="Image url"></input>
      <button id="imageButton" class="bg-blue-500 text-white px-4 py-2 rounded">Add Image</button>


      
      {/*<button className="text-blue-500 underline" onClick={this.loadPhotos.bind(this)}>Load photos</button>*/}
      <div className="container  mt-6 py-10 grid grid-cols-3 gap-4">  
        {photos}
      </div>
    </>

  }
}


export default App;
