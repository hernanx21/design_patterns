interface IObserver <T> {
    refresh(data: T): void;
}

interface ISubject <T> {
    observers: IObserver <T> [];
    notify(data: T): void;
    suscribe(observer: IObserver <T>): void;
    unsuscribe(observer: IObserver <T>): void;
}

class SubjectG <T> implements ISubject <T> {
    
    observers: IObserver <T> [];

    constructor() { 
        this.observers = [];
    }

    notify(data: T): void {
        this.observers.forEach(suscriber => suscriber.refresh(data));
    }
    suscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }
    unsuscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(suscriber => suscriber !== observer);
    }
}

class ObserverG <T> implements IObserver <T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(data: T): void {
        this.fn(data);
    }
}

const subject = new SubjectG <string>();
const observer = new ObserverG <string>((data: string) => console.log("refresh: " + data.toUpperCase()));
const observer3 = new ObserverG <string>((data: string) => console.log("refresh: " + data));

subject.suscribe(observer);
subject.suscribe(observer3);
subject.notify('Actualizar sds');
subject.notify('Actualizar sds2');