import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonInput,
  IonItem,
  IonTitle,
  IonLabel,
  IonDatetime,

} from '@ionic/react';
import React, {useState} from 'react';
import BioRythmCard from './components/BiorythmCard';
import {useLocalStorage} from './hooks';

function App() {
 
  const [nameF, setNameF] = useLocalStorage('nameF', '');
  const [nameL, setNameL] = useLocalStorage('nameL', '');
  const [birthday, setBirthday] = useLocalStorage('birthday', '');
  const [targetDate, setTDate] = useLocalStorage('targetdate', '');
  const dayjs = require('dayjs');
  

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BioRhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       
        <IonItem>
          <IonLabel position="fixed"> First name: </IonLabel>
          <IonInput type="text" placeholder="Chanbroset" value={nameF} onIonChange ={(event) => setNameF(event.detail.value)}/>
        </IonItem>
      

        <IonItem>
          <IonLabel position="fixed"> Last name: </IonLabel>
          <IonInput type="text" placeholder="Prach" value={nameL} onIonChange ={(event) => setNameL(event.detail.value)}/>
        </IonItem>
        
        <IonItem>
          <IonLabel display-format="DD MMMM YYYY" position="fixed">Birthday:</IonLabel>
          <IonDatetime placeholder="Select Date" value={birthday} onIonChange = {(event) => setBirthday(event.detail.value)}/>
        </IonItem>
        {birthday && 
        
        <IonItem>
          <IonLabel display-format="DD MMMM YYYY" position="fixed">Target Date:</IonLabel>
          <IonDatetime placeholder="Select Date" value={targetDate} onIonChange = {(event) => setTDate(event.detail.value)}/>
        </IonItem>}

        {targetDate &&
            <BioRythmCard birthDate={birthday} targetDate={targetDate} />
        }

      </IonContent>
    </IonApp>
  );
}

export default App;
