import React, { useState } from "react";
import { IonButton } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const KnowWhy: React.FC<ContainerProps> = ({ name }) => {
  const [showSong, setShowSong] = useState(false);

  function toggleShowSong() {
    setShowSong(!showSong);
  }

  return showSong ? (
    <div>
      <IonButton onClick={toggleShowSong}>Hide</IonButton>
      <h1>{name}</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yBBNoCtlAr0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <IonButton onClick={toggleShowSong}>{name}</IonButton>
  );
};

export default KnowWhy;
