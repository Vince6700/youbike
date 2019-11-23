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