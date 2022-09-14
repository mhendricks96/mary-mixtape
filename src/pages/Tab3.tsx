import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
} from "@ionic/react";
import Eps from "../components/songs/eps";
import Cuditastic from "../components/songs/cuditastic";
import Trippy from "../components/songs/trippy";
import Elevatas from "../components/songs/elevatas";
import GetItIn from "../components/songs/getItIn";
import AllTalk from "../components/songs/allTalk";
import Revofev from "../components/songs/revofev";
import KnowWhy from "../components/songs/know-why";
import HipHopHooray from "../components/songs/hip-hop-hooray";
import DoMyThing from "../components/songs/do-my-thing";
import WateverYouWant from "../components/songs/whatever-you-want";
import SimpleAs from "../components/songs/simple-as";
import DidItAgain from "../components/songs/did-it-again";
import WontYouTellMe from "../components/songs/wont-you-tell";
import KillinMe from "../components/songs/killin-me";
import ThatTree from "../components/songs/that-tree";
import CallMeMoonMan from "../components/songs/call-me-moon";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Track-List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Track-List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <Eps name="EPS" />
          </IonItem>
          <IonItem>
            <Cuditastic name="Cuditastic" />
          </IonItem>
          <IonItem>
            <Trippy name="Trippy" />
          </IonItem>
          <IonItem>
            <Elevatas name="Elevatas" />
          </IonItem>
          <IonItem>
            <GetItIn name="Get It In" />
          </IonItem>
          <IonItem>
            <AllTalk name="All Talk" />
          </IonItem>
          <IonItem>
            <Revofev name="REVOFEV" />
          </IonItem>
          <IonItem>
            <KnowWhy name="Know Why" />
          </IonItem>
          <IonItem>
            <HipHopHooray name="Hip-Hop Hooray" />
          </IonItem>
          <IonItem>
            <DoMyThing name="Do My Thing" />
          </IonItem>
          <IonItem>
            <WateverYouWant name="Watever You Want" />
          </IonItem>
          <IonItem>
            <SimpleAs name="Simple As" />
          </IonItem>
          <IonItem>
            <DidItAgain name="Did It Again" />
          </IonItem>
          <IonItem>
            <WontYouTellMe name="Wont You Tell Me" />
          </IonItem>
          <IonItem>
            <KillinMe name="Ur Killin Me" />
          </IonItem>
          <IonItem>
            <ThatTree name="That Tree" />
          </IonItem>
          <IonItem>
            <CallMeMoonMan name="Call Me Moon Man" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
