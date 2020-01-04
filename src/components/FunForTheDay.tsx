import React from 'react';
import {IonImg, IonItem, IonLabel} from "@ionic/react";
import {Event} from "../store/types/types";
import EventTags from "./EventTags";


interface Props {
    key: number,
    event: Event,
    routerLink: string,
}

const FunForTheDay: React.FC<Props> = (props: Props) => {
    const {titre, lieu, pays, vtt, cyclo, endurance, marche, nocturne, orientation} = props.event;
    const eventTagsObject = {vtt, cyclo, endurance, marche, nocturne, orientation};
    const imageSource = '/assets/images/' + pays + '.png';


    return (
        <IonItem routerLink={props.routerLink}>
            <IonImg src={imageSource} className="flags"/>
            <IonLabel className="event-label">
                {lieu}
                <p>{titre}</p>
            </IonLabel>
            <EventTags tags={eventTagsObject}/>
        </IonItem>
    );
}

export default FunForTheDay;