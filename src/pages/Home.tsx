import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { thunkActionCreator } from '../store/actions';
import { AppState } from '../store';
import FunForTheDay from "../components/FunForTheDay";
import {Event} from "../store/types/types";

interface Props {
    dispatch: (fn : any) => {},
    history: object,
    location: object,
    match: object,
    staticContext: any,
    store: {
        eventsReducer: {
            events : Event[],
            isError: boolean,
            isFetching: boolean,
        }
    },
    n: string,
}

class HomePage extends React.Component<Props> {

    componentDidMount(){
        this.props.dispatch(thunkActionCreator());
    }
    render() {
        const {events} = this.props.store.eventsReducer;
        const renderFunForTheDay = events ?
            events.map(event => (
                <FunForTheDay key={event.id}/>
            )) :
            <div><p>No events</p></div>;

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                        <IonMenuButton />
                        </IonButtons>
                        <IonTitle className='brand-title'>
                            <img src='assets/images/logo-long.png' alt='logo' className="rand-title__logo"/>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem color='primary'>
                        <IonLabel className={'ion-text-center'}>Prochaines Organisations</IonLabel>
                    </IonItem>
                    <IonList lines="full">
                        { renderFunForTheDay }
                    </IonList>
                </IonContent>
            </IonPage>
        );

    }
};

const mapStateToProps = (state: AppState) => {
    return {
        store: state
    }
}

export default connect(mapStateToProps)(HomePage);
