import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Mixtape from "../components/mixtape";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marijuana Mixtape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <Mixtape name="Marijuana Mixtape" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
