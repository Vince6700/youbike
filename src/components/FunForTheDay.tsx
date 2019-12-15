import React from 'react';
import {IonIcon, IonItem, IonLabel, IonListHeader} from "@ionic/react";
import {book} from "ionicons/icons";

const FunForTheDay: React.FC = () => {
    return (
        <div className={'item wrapper'}>
            <IonListHeader>
                <IonLabel>Prochaines organisations</IonLabel>
            </IonListHeader>
            <IonItem href="https://ionicframework.com/docs/" target="_blank">
                <IonIcon slot="start" color="medium" icon={book} />
                <IonLabel>Ionic Documentation</IonLabel>
            </IonItem>
        </div>
    );
}

export default FunForTheDay;