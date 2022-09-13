import React, { useState } from "react";
import { IonButton } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const Mixtape: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLA3DqFJObiKlU0uMeoifnWy1RI78guNDM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Mixtape;
