import React from "react";
//import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/storage";
import PlaySongs from "./PlaySongs";
class AllSongs extends React.Component {
  constructor() {
    super();
    this.fetched_Data_Array = [];
    this.state = {
      all_Songs_Array: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    firebase
      .storage()
      .ref()
      .child("songs")
      .listAll()
      .then((data) => {
        data.items.forEach(async (ref) => {
          await ref
            .getDownloadURL()
            .then((url) => {
              this.fetched_Data_Array.push({ name: ref.name, url: url });

              //load the component when enough songs are added so that the list doesn't appear to be empty at first glance.
              if (this.fetched_Data_Array.length >= 7) {
                this.setState({
                  all_Songs_Array: this.fetched_Data_Array,
                  isLoading: false,
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  }
  render() {
    if (this.props.songIndex !== -1) {
      return (
        <PlaySongs
          songIndex={this.props.songIndex}
          Songs={this.state.all_Songs_Array}
          onPlaySongsScreen={this.props.onPlaySongsScreen}
          playPauseButtonClicked={this.props.playPauseButtonClicked}
        />
      );
    }
    return this.state.isLoading ? (
      <div className="loading-screen">
        <h1>Loading...</h1>
        <div className="loader"></div>
        <div>
          Depending upon your Internet Speed, fetching the data might take some
          time.
        </div>
      </div>
    ) : (
      <div className="all-songs">
        <h1 className="all-songs-heading">All Songs</h1>
        <div className="all-songs-list">
          {this.state.all_Songs_Array.map((item, index) => {
            return (
              <div
                className={
                  this.props.currentSongSelection === index
                    ? "selected-song"
                    : ""
                }
                key={index}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllSongs;
