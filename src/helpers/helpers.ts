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
    const date = new Date(year, month);
    const monthFormatted = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    const yearFormatted = date.getFullYear();
    const lastDayOfTheMonth = (new Date(year, month, 0)).getDate();
    const result = events.filter(
        event =>
            event.jour <= parseInt(`${yearFormatted}${monthFormatted}${lastDayOfTheMonth}`) &&
            event.jour >= parseInt(`${yearFormatted}${monthFormatted}01`)
    );
    return result;
}
