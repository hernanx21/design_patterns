interface IObserver <T, U> {
    refresh(data: T | U): void;
}

interface ISubject <T, U> {
    observers: IObserver <T, U> [];
    notify(data: T): void;
    suscribe(observer: IObserver <T, U>): void;
    unsuscribe(observer: IObserver <T, U>): void;
}

class SubjectG <T, U> implements ISubject <T, U> {
    
    observers: IObserver <T, U> [];

    constructor() { 
        this.observers = [];
    }

    notify(data: T | U): void {
        this.observers.forEach(suscriber => suscriber.refresh(data));
    }
    suscribe(observer: IObserver<T, U>): void {
        this.observers.push(observer);
    }
    unsuscribe(observer: IObserver<T, U>): void {
        this.observers = this.observers.filter(suscriber => suscriber !== observer);
    }
}

class ObserverG <T, U> implements IObserver <T, U> {
    private fn: (value: T | U) => void;

    constructor(fn: (value: T | U) => void) {
        this.fn = fn;
    }

    refresh(data: T | U): void {
        this.fn(data);
    }
}

const subject = new SubjectG <string, number>();
const observer = new ObserverG <string, number>((data: string | number) => console.log("refresh: " + `${data}`));
const observer3 = new ObserverG <string, number>((data: string | number) => console.log("refresh: " + `${data}`));

subject.suscribe(observer);
subject.suscribe(observer3);
subject.notify('Actualizar sds');
subject.notify(5);