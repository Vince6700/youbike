import {Event} from "../store/types/types";

export const sortEvents = (events:Event[]) => {
    const result = events.sort((a: Event, b: Event) => {
        const aDate: any = new Date(a.jourStr);
        const bDate: any = new Date(b.jourStr);
        return aDate - bDate;
    });
    return result;
}

export const eventsOfTheMonth = (events: Event[], year: number, month: number) => {
    const lastDayOfTheMonth = (new Date(month, year, 0)).getDate();
    const result = events.filter(
        event =>
            event.jour <= parseInt(`${year}${month}${lastDayOfTheMonth}`) &&
            event.jour >= parseInt(`${year}${month}01`)
    );
    return result;
}
