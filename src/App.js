import React from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import MainScreen from "./Components/MainScreen";
import ZingTouch from "zingtouch";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.change_in_angle = 0;
    this.currently_selected = 0;
    this.state = {
      menuItems: ["Games", "Music", "Settings", "Gallery"],
      fixedMenu: ["Games", "Music", "Settings", "Gallery"],
      songs_Menu_Items: ["All Songs", "Artists", "Albums"],
      showPage: -1,
      songIndex: -1,
      current_Song: 0,
      change_in_angle: 0,
      selected_Item_Index: 0,

      on_Play_Songs_Screen: false,
    };
  }

  componentDidMount() {
    // ZingTouch for implementing the gesture based motion on the button wheel

    var zt = new ZingTouch.Region(
      document.getElementsByClassName("buttons-container")[0]
    );
    zt.bind(
      document.getElementsByClassName("buttons-container")[0],
      "rotate",
      (event) => {
        if (
          document
            .getElementsByClassName("main-menu-box")[0]
            .classList.contains("box-width-change")
        ) {
          let dist = event.detail.distanceFromLast;
          this.change_in_angle += dist;
          if (this.change_in_angle > 60) {
            this.currently_selected++;
            this.currently_selected =
              this.currently_selected % this.state.menuItems.length;
            this.setState({
              selected_Item_Index: this.currently_selected,
            });

            this.change_in_angle = 0;
          } else if (this.change_in_angle < -60) {
            this.currently_selected--;
            if (this.currently_selected === -1)
              this.currently_selected = this.state.menuItems.length - 1;

            this.currently_selected =
              this.currently_selected % this.state.menuItems.length;
            this.setState({
              selected_Item_Index: this.currently_selected,
            });
            this.change_in_angle = 0;
          }
        }
      }
    );
  }

  menuButtonClicked = () => {
    let screenMenuClassList = document.getElementsByClassName(
      "main-menu-box"
    )[0].classList;
    if (screenMenuClassList.contains("box-width-change")) {
      $(".main-menu-box").removeClass("box-width-change"); //To hide the menu
    } else {
      $(".main-menu-box").addClass("box-width-change"); //To show the menu
    }
  };

  leftButtonClicked = () => {
    /* In case the left button is clicked, when the song is currently being played. */
    if (this.state.on_Play_Songs_Screen) {
      if (
        !document
          .getElementsByClassName("main-menu-box")[0]
          .classList.contains("box-width-change")
      ) {
        if (this.state.songIndex === 0) {
          this.setState({
            songIndex: 6,
          });
          return;
        }
        if (this.state.songIndex !== -1) {
          this.setState({
            songIndex: this.state.songIndex - 1,
          });
          return;
        }
      }
    }

    // This is for the go back to main menu option
    // In case the user is currently on Music Menu, then upon clicking the "<<" button
    // user would be redirected to the main menu. (The logic for the same is below)
    if (
      this.state.menuItems.length === 3 &&
      document
        .getElementsByClassName("main-menu-box")[0]
        .classList.contains("box-width-change")
    )
      this.setState({
        menuItems: this.state.fixedMenu,
        songIndex: -1,
        selected_Item_Index: 0,
      });
    if (
      !document
        .getElementsByClassName("main-menu-box")[0]
        .classList.contains("box-width-change")
    ) {
      // Logic for playing the song. We check whether the menu box is visible or not.
      // Further there is a check if the Music menu is open, if it is then we check for the songs list,
      // and finally we play the song
      if (this.state.menuItems.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_Song === 0)
            this.setState({
              current_Song: 6,
              songIndex: -1,
            });
          else
            this.setState({
              current_Song: this.state.current_Song - 1,
              songIndex: -1,
            });
        }
      }
    }
  };

  rightButtonClicked = () => {
    /* In case the right button is clicked, when the song is currently being played. */
    if (this.state.on_Play_Songs_Screen) {
      if (
        !document
          .getElementsByClassName("main-menu-box")[0]
          .classList.contains("box-width-change")
      ) {
        if (this.state.songIndex === 6) {
          this.setState({
            songIndex: 0,
          });
          return;
        }
        if (this.state.songIndex !== -1) {
          this.setState({
            songIndex: this.state.songIndex + 1,
          });
          return;
        }
      }
    }
    if (
      !document
        .getElementsByClassName("main-menu-box")[0]
        .classList.contains("box-width-change")
    ) {
      // Logic for playing the song. We check whether the menu box is visible or not.
      // Further there is a check if the Music menu is open, if it is then we check for the songs list,
      // and finally we play the song
      if (this.state.menuItems.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_Song === 6)
            this.setState({
              current_Song: 0,
            });
          else
            this.setState({
              current_Song: this.state.current_Song + 1,
            });
        }
      }
    }
  };

  playPauseButtonClicked = () => {
    if ($("#audio")[0] !== undefined) {
      if ($("#audio")[0].paused) {
        $("#audio")[0].play();
        return;
      }
      $("#audio")[0].pause();
    }
  };

  onPlaySongsScreen = () => {
    if (this.state.on_Play_Songs_Screen) {
      this.setState({
        on_Play_Songs_Screen: false,
      });
    } else
      this.setState({
        on_Play_Songs_Screen: true,
      });
  };

  selectButtonClicked = () => {
    if (
      this.state.on_Play_Songs_Screen &&
      !document
        .getElementsByClassName("main-menu-box")[0]
        .classList.contains("box-width-change")
    ) {
      return;
    }
    if (
      this.state.selected_Item_Index === 1 &&
      this.state.menuItems.length === 4
    ) {
      this.setState({
        menuItems: this.state.songs_Menu_Items,
        selected_Item_Index: 0,
        showPage: -1,
        songIndex: -1,
      });
      this.currently_selected = 0;
      return;
    }
    if (
      !document
        .getElementsByClassName("main-menu-box")[0]
        .classList.contains("box-width-change")
    ) {
      // Logic for playing the song. We check whether the menu box is visible or not.
      // Further there is a check if the Music menu is open, if it is then we check for the songs list,
      // and finally we play the song
      if (this.state.menuItems.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.songIndex === -1) {
            this.setState({
              songIndex: this.state.current_Song,
            });
            this.currently_selected = 0;
            return;
          }
        }
      }
    }
    this.setState({
      showPage: this.state.selected_Item_Index,
      songIndex: -1,
      selected_Item_Index: 0,
    });
    this.currently_selected = 0;
    this.menuButtonClicked();
  };

  render() {
    const {
      selected_Item_Index,
      showPage,
      menuItems,
      current_Song,
      songIndex,
    } = this.state;

    return (
      <div className="App">
        <MainScreen
          selectedItem={selected_Item_Index}
          showPage={showPage}
          mainMenuItems={menuItems}
          currentSongSelection={current_Song}
          songIndex={songIndex}
          onPlaySongsScreen={this.onPlaySongsScreen}
          playPauseButtonClicked={this.playPauseButtonClicked}
        />
        <Buttons
          menuButtonClicked={this.menuButtonClicked}
          rightButtonClicked={this.rightButtonClicked}
          playPauseButtonClicked={this.playPauseButtonClicked}
          leftButtonClicked={this.leftButtonClicked}
          selectButtonClicked={this.selectButtonClicked}
        />
      </div>
    );
  }
}

export default App;
