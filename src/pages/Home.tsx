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
    IonToolbar,
    IonProgressBar,
    IonListHeader,
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
    match: {
        isExact: true,
        params: object,
        path: string,
        url: string,
    },
    staticContext: any,
    store: {
        eventsReducer: {
            events : Event[],
            isError: boolean,
            isFetching: boolean,
        }
    },
    isFetching: boolean
}

class HomePage extends React.Component<Props> {

    componentDidMount(){
        this.props.dispatch(thunkActionCreator());
    }

    render() {
        const {events} = this.props.store.eventsReducer;

        const renderFunForTheDay = events ?
            events.map((event:Event, index:number, events:Event[]) => {
                if (
                    index === 0 ||
                    (index === 1 && event.jourStr !== events[index - 1].jourStr) ||
                    ((index > 1 && events[index + 1]) && event.jourStr !== events[index + 1].jourStr) ||
                    (!events[index +1] && event.jourStr !== events[index - 1].jourStr)
                ) {
                    const date = new Date(event.jourStr);
                    const formattedDay = (date.getDate() < 10 ? '0' : '') + date.getDate();
                    const formattedMonth = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
                    const formattedDate = formattedDay + '/' + formattedMonth + '/' + date.getFullYear();
                    return (
                        <div key={index}>
                            <IonListHeader>
                                <IonLabel>
                                    {formattedDate}
                                </IonLabel>
                            </IonListHeader>
                            <FunForTheDay
                                key={event.id}
                                event={event}
                                routerLink={`${this.props.match.url}/eventDetails/${event.id}`}
                            />
                        </div>
                    )
                } else {
                    return (
                            <FunForTheDay 
                                key={event.id}
                                event={event}
                                routerLink={`${this.props.match.url}/eventDetails/${event.id}`}
                            />
                        )
                }
            })
            :
            (<div><p>No events</p></div>);

        const renderLoader = (this.props.isFetching && events.length <= 0) ?
            <IonProgressBar type="indeterminate" /> : "";

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle className='brand-title'>
                            <img src='assets/images/logo-long.png' alt='logo' className="rand-title__logo"/>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                {renderLoader}
                <IonContent>
                    <IonItem color='primary'>
                        <IonLabel className={'ion-text-center'}>Prochaines Organisations</IonLabel>
                    </IonItem>
                    <IonList lines="full">
                        {renderFunForTheDay}
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
};

const mapStateToProps = (state: AppState) => {
    const {eventsReducer} = state;
    const { isFetching } = eventsReducer;
    return {
        store: state,
        isFetching
    }
}

export default connect(mapStateToProps)(HomePage);
