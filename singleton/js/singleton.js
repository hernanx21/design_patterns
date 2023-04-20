//singleton es un patron creacional que permite asegurar que una clase solo tenga una instancia y proporciona un punto de acceso global a ella.
/*class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        this.random = Math.random();

        if (Singleton.instance) {
            return Singleton.instance;
        }
        
        Singleton.instance = this;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.instance;


console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton3.random);*/

class WeekDays {
    daysEs = [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'
    ];

    daysEn = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    constructor(lang) {
        this.lang = lang;

        if(WeekDays.instance)
            return WeekDays.instance;

        WeekDays.instance = this;
    }

    getDay() {
        return this.lang === 'es' ? this.daysEs : this.daysEn;
    }

}

const weekdays = new WeekDays('es');
const weekdays2 = new WeekDays('en'); //ignora mi segunda instancia y devuelve la primera

console.log(weekdays.getDay());
console.log(weekdays2.getDay());