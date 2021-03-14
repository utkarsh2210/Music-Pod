import React from "react";
import Menu from "./Main_Menu/Menu";

import AllSongs from "./Music_Functions/AllSongs";
import ConsolidatedScreen from "./Screens/ConsolidatedScreen";

const Screen = ({
  selectedItem,
  mainMenuItems,
  showPage,
  currentSongSelection,
  playPauseButtonClicked,
  onPlaySongsScreen,
  songIndex,
}) => {
  return (
    <div className="main-screen-container">
      <Menu selectedItem={selectedItem} mainMenuItems={mainMenuItems} />
      {showPage === 0 && mainMenuItems.length === 4 ? (
        <ConsolidatedScreen
          nameOfClass={"Game"}
          headingName={"Games"}
          imgSrc={
            "https://cdn2.iconfinder.com/data/icons/xbox-one-controllers/500/gamer_titanfall-256.png"
          }
          imgAlt={"Games"}
        />
      ) : (
        ""
      )}
      {showPage === 2 && mainMenuItems.length === 4 ? (
        <ConsolidatedScreen
          nameOfClass={"Setting"}
          headingName={"Settings"}
          imgSrc={
            "https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/21-2-256.png"
          }
          imgAlt={"Settings"}
        />
      ) : (
        ""
      )}
      {showPage === 3 && mainMenuItems.length === 4 ? (
        <ConsolidatedScreen
          nameOfClass={"Gallery"}
          headingName={"Gallery"}
          imgSrc={
            "https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-06-256.png"
          }
          imgAlt={"Gallery"}
        />
      ) : (
        ""
      )}

      {showPage === 0 && mainMenuItems.length === 3 ? (
        <AllSongs
          currentSongSelection={currentSongSelection}
          songIndex={songIndex}
          onPlaySongsScreen={onPlaySongsScreen}
          playPauseButtonClicked={playPauseButtonClicked}
        />
      ) : (
        ""
      )}
      {showPage === 1 && mainMenuItems.length === 3 ? (
        <ConsolidatedScreen
          nameOfClass={"Artists"}
          headingName={"Artists"}
          imgSrc={
            "https://cdn0.iconfinder.com/data/icons/LABORATORY-Icon-Set-by-Raindropmemory/256/LL_Music.png"
          }
          imgAlt={"Artists"}
        />
      ) : (
        ""
      )}
      {showPage === 2 && mainMenuItems.length === 3 ? (
        <ConsolidatedScreen
          nameOfClass={"Albums"}
          headingName={"Albums"}
          imgSrc={
            "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678058-folder-music-256.png"
          }
          imgAlt={"Albums"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Screen;
