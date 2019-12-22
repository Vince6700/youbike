import React from 'react';
import {IonIcon, IonItem, IonLabel, IonListHeader} from "@ionic/react";
import {book} from "ionicons/icons";
import {Event} from "../store/types/types";


interface Props {
    key: number,
    event: Event
}

const FunForTheDay: React.FC<Props> = (props: Props) => {

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