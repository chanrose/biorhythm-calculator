import dayjs from 'dayjs';
import {

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

  } from '@ionic/react';
  import React from 'react';
  import {calculateBiorhythms} from '../calculations';
  import BiorhythmChart from './BiorythmChart';
  import './BiorythmCard.css';

  function formatDate(isoString) {
         return dayjs(isoString).format('YYYY-MM-DD')
  }

  function BiorythmCard({targetDate, birthDate}) {
    const bDate = formatDate(birthDate);
    const tDate = formatDate(targetDate);
    const {physical, emotional, intellectual} = calculateBiorhythms(bDate, tDate);
    return (
      
            <IonCard className="biorythm-card ion-text-center">
              <IonCardHeader>
                  <IonCardTitle> {formatDate(targetDate)} </IonCardTitle>
             
                </IonCardHeader>
              <IonCardContent>
                {tDate &&
                 <BiorhythmChart birthDate={bDate} targetDate={tDate} />
                }
                <p className="physical">Physical: {physical.toFixed(4)} </p>
                <p className="emotional">Emotional: {emotional.toFixed(4)} </p>
                <p className="intellectual">Intellectual: {intellectual.toFixed(4)} </p>
                
               {/*  <p>Health: {calculateBiorhythms(birthDate, targetDate, 28)}</p>
                <p>Spiritual: {calculateBiorhythms(birthDate, targetDate, 33)}</p> */}
                
              </IonCardContent>
          </IonCard>
  
    );
  }
  
  export default BiorythmCard;
  