import React from 'react';
import {IonContent, IonDatetime, IonItem, IonLabel} from "@ionic/react";

const DatePicker : React.FC = () => {
    return (
        <IonContent>
            <IonItem>
                <IonItem>
                    <IonLabel>Choisir un mois</IonLabel>
                    <IonDatetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" yearValues={2020}/>
                </IonItem>
            </IonItem>
        </IonContent>
    );
}

export default DatePicker;