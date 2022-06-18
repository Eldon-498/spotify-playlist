import React from 'react';
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import TrackList from '../TrackList/TrackList';



class App extends React.Component { 

      constructor(props){
      super(props);
      this.state ={ 
      searchResults: [{
        name: 'Love Yourself',
        artist: 'Justin Beiber', 
        album: 'Love Yourself', 
        id: 1},
        {
          name: 'In Your Arms',
          artist: 'Illenium, X Ambassadors', 
          album: 'Ascend', 
          id: 3}
        ,{name: 'Hello',artist: 'Adele', album: '25', id: 5 },{name: 'Something Stupid', artist: 'Robbie Williams, Nicole Kidman', 
            album: 'Weihnachten 2019', 
            id: 11}
    ],
      playlistName : "Lucky",
      playlistTracks : [{
      name: 'Love Yourself',
      artist: 'Justin Beiber', 
      album: 'Love Yourself', 
      id: 1},{name: 'Hello',artist: 'Adele', album: '25', id: 5 },{name: 'Something Stupid', artist: 'Robbie Williams, Nicole Kidman', 
          album: 'Weihnachten 2019', 
          id: 11}
  ]};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    };

    addTrack(track){
      
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      } 
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
    
    }

    removeTrack(track){
        this.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
        this.setState({playlistTracks: this.playlistTracks});
    }

    updatePlaylistName(name) {
     this.setState({playlistName: name});
    }

    savePlaylist(){
      const trackUris = this.state.playlistTracks.map(track => track.uri);
    }

    search(term){
      console.log(term);
    }
    
    render(){
      return (
        <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlist playlistName ={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
        onRemove={this.removeTrack} 
        onNameChange={this.updatePlaylistName}
        onSave ={this.savePlaylist} />
        </div>
      </div>
    </div>
      )
    }
    }

export default App;
