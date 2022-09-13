import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <h1>Theres Nothing Here</h1>
        <h3>and you probably arent supposed to be here, anyways</h3>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
