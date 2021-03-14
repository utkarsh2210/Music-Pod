import React from "react";

class Songs extends React.Component {
  componentDidMount() {
    this.props.onPlaySongsScreen();
    this.props.playPauseButtonClicked();
  }
  componentWillUnmount() {
    this.props.onPlaySongsScreen();
  }
  render() {
    const { songIndex, Songs } = this.props;
    return (
      <div className="screen-music">
        <h2>{Songs[songIndex].name}</h2>
        <div className="song-image">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxL5YxiMR-v5f5Ldv_hcjBvQWw6pP7VASxQ&usqp=CAU"
            }
            alt="song item"
          ></img>
        </div>
        <div style={{ marginTop: 20 }}>
          <audio
            controls="seeking"
            id="audio"
            src={Songs[songIndex].url}
          ></audio>
        </div>
        <div className="player-miscellaneous-buttons">
          <p>
            <i class="fas fa-heart"></i>
            <i class="fas fa-list"></i>
            <i class="fas fa-info-circle"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default Songs;
