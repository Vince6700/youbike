export interface Event {
    categorie : number,
    cyclo: boolean,
    endurance: boolean,
    id: number,
    inPaysHaut: boolean,
    inWeyler: boolean,
    jour: number,
    jourStr: string,
    key: string,
    lastUpdate: number,
    lieu: string,
    marche: boolean,
    mois: number,
    nocturne: boolean,
    o2: number,
    orientation: boolean,
    pays: number,
    status: boolean,
    titre: string,
    vtt: boolean,
}

export interface Events {
    events: Event[],
    isError: boolean,
    isFetching: boolean,
}

export const FETCH_DATA = 'FETCH_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';
export const RECEIVED_ERROR = 'RECEIVED_ERROR';

interface fetchData {
    type : typeof FETCH_DATA;
    isFetching: boolean,
    isError: boolean,
}

interface receivedData {
    type: typeof RECEIVED_DATA;
    payload: Event[];
    isFetching: boolean,
    isError: boolean,
}

interface receiveError {
    type: typeof RECEIVED_ERROR;
    isFetching: boolean,
    isError: boolean,
}

export type EventsActionTypes = fetchData | receivedData | receiveError;