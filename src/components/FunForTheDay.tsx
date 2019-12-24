import React from 'react';
import {IonImg, IonItem, IonLabel} from "@ionic/react";
import {Event} from "../store/types/types";


interface Props {
    key: number,
    event: Event
}

const FunForTheDay: React.FC<Props> = (props: Props) => {
    const {titre, lieu, pays, vtt, cyclo, endurance, marche, nocturne, orientation} = props.event
    const eventTypeObject = {vtt, cyclo, endurance, marche, nocturne, orientation};
    const imageSource = '/assets/images/' + pays + '.png';

    return (
        <IonItem>
            <IonImg src={imageSource}/>
            <IonLabel>
                {lieu}
                <p>{titre}</p>
            </IonLabel>
        </IonItem>
    );
}

export default FunForTheDay;