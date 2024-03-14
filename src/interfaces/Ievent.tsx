export interface IEvent {
    id: string;
    name: string;
    date: string;
    time: string;
    place: string;
    cover: string;
}

export interface IApiEvent {
    id: string;
    title: string;
    time: string;
    timeStart: string;
    locationName: string;
    cover: string;
}

export interface IEventDetail {
    id: string;
    title: string;
    time: string;
    timeStart: string;
    timeEnd: string;
    locationName: string;
    availableTickets: [{
        id: number;
        price: number;
        name: string;
        currency: string;
    }];
    poster: string;
    detail: string;
    detailRaw: string;
    ticketStartAt: string;
    ticketCloseTime: string;
    ticketStartTime: string;
}


export interface ICheckOutEvent {
    eventId: string;
    totalPrice: number;
    tikets: ITicket[];
}

export interface ITicket {
    id: string;
    number: number;
    name: string;
}