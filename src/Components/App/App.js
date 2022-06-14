import React from 'react';
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";



class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={ 
      searchResults: [{
        name: 'Love You\'reself',
        artist: 'Justin Beiber', 
        album: 'Purpose', 
        id: 1},{name: 'Hello',artist: 'Adele', album: 'Broken', id: 5 },{name: 'Something Stupid', artist: 'Breaking Bad', 
            album: 'HeisenBerg', 
            id: 11}
    ]};
    }
  
    render(){
      return (
        <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} />
        <Playlist/>
        </div>
      </div>
    </div>
      )
    }
    }

export default App;
