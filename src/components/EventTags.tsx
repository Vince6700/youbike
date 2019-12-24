import React from 'react';
import {IonImg} from "@ionic/react";

interface Props {
    tags: {
        vtt:boolean,
        cyclo: boolean,
        endurance: boolean,
        marche: boolean,
        nocturne: boolean,
        orientation: boolean,
    }
}

const EventTags : React.FC<Props> = (props : Props ) => {
    const path = '/assets/images/';
    const {vtt, cyclo, endurance, marche, nocturne, orientation} = props.tags;
    return (
        <div className="event-tags">
            {vtt && <IonImg src={`${path}vtt.svg`}/>}
            {cyclo && <IonImg src={`${path}cyclo.svg`}/>}
            {endurance && <IonImg src={`${path}runbike.svg`}/>}
            {marche && <IonImg src={`${path}marche.svg`}/>}
            {nocturne && <IonImg src={`${path}vtt.svg`}/>}
            {orientation && <IonImg src={`${path}vtt.svg`}/>}
        </div>
    );
}

export default EventTags;