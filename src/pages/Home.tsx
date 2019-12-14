import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {book, build, colorFill, grid} from 'ionicons/icons';
import React from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { thunkActionCreator } from '../store/actions';
import { AppState } from '../store';

class HomePage extends React.Component<{dispatch : any}> {

    componentDidMount(){
        this.props.dispatch(thunkActionCreator());
    }

    render() {
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
                <IonList lines="none">
                    <IonListHeader>
                        <IonLabel>Prochaines organisations</IonLabel>
                    </IonListHeader>
                    <IonItem href="https://ionicframework.com/docs/" target="_blank">
                    <IonIcon slot="start" color="medium" icon={book} />
                    <IonLabel>Ionic Documentation</IonLabel>
                    </IonItem>
                    <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
                    <IonIcon slot="start" color="medium" icon={build} />
                    <IonLabel>Scaffold Out Your App</IonLabel>
                    </IonItem>
                    <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
                    <IonIcon slot="start" color="medium" icon={grid} />
                    <IonLabel>Change Your App Layout</IonLabel>
                    </IonItem>
                    <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
                    <IonIcon slot="start" color="medium" icon={colorFill} />
                    <IonLabel>Theme Your App</IonLabel>
                    </IonItem>
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
