import React from 'react';
import axios from 'axios';
import Photo from './Components/Photo.js';
import SearchPicture from './Components/SearchPicture.js';
import AddImage from './Components/AddImage.js';

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
      return <Photo photo={photo}/>
    });

    return <>
      <h1 className="text-3xl h-20 bg-pink-900 text-white flex items-center justify-center">Welcome to Betsy's Album</h1>
      <br></br>
      <SearchPicture/>
      <AddImage/>
      <div className="container  mt-6 py-10 grid grid-cols-3 gap-4">  
        {photos}
      </div>
    </>

  }
}


export default App;
