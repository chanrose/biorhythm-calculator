import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonInput,
  IonItem,
  IonTitle,
  IonLabel,
  IonButton,
  IonDatetime,
  IonToast

} from '@ionic/react';
import React, {useState} from 'react';
import BioRythmCard from './components/BiorythmCard';


function TestApp() {
 
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="fixed"> First name: </IonLabel>
          <IonInput type="text" placeholder="Chanbroset" onIonChange ={(event) => setNameF(event.detail.value)}/>
        </IonItem>
      

        <IonItem>
          <IonLabel position="fixed"> Last name: </IonLabel>
          <IonInput type="text" placeholder="Prach" onIonChange ={(event) => setNameL(event.detail.value)}/>
        </IonItem>
      
        <IonItem>
          <IonLabel position="fixed"> Country: </IonLabel>
          <IonInput type="text" placeholder="Cambodia" onIonChange = {(event) => setCountry(event.detail.value)}/>
        </IonItem>

        <IonItem>
          <IonLabel position="fixed"> Major: </IonLabel>
          <IonInput type="text" placeholder="Information Technology" onIonChange = {(event) => setMajor(event.detail.value)}/>
        </IonItem>
        
        <IonItem>
          <IonLabel display-format="DD MMMM YYYY" position="fixed">Birthday:</IonLabel>
          <IonDatetime placeholder="Select Date" value={birthday} onIonChange = {(event) => setBirthday(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed"> Age: </IonLabel>
          <IonInput type="number" placeholder="20" onIonChange = {(event) => setAge(event.detail.value)} />
        </IonItem>

      
        <hr/> <p> My name is <u>{nameF} {nameL} </u>. I born in {birthday}. I'm {age} years old. I come from the beautiful country of  {country}. I'm majoring in {major} </p>
        <hr/>
      <IonButton onClick={() => setReport(true)} expand="block">View Report</IonButton>
      <IonToast
        isOpen={showReport}
        onDidDismiss={() => setReport(false)}
        message="Opening"
        duration={200}
      />

      </IonContent>
    </IonApp>
  );
}

export default TestApp;
