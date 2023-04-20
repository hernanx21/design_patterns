/*class SalesContext {
    constructor (strategy) {
        this.strategy = strategy
    }

    setStrategy (strategy) {
        this.strategy = strategy;
    }

    calculate (price) {
        return this.strategy.calculate(price)
    }
}

class RegularSaleStrategy {
    constructor (tax) {
        this.tax = tax
    }

    calculate (price) {
        return price + (price * this.tax);
    }
}

class DiscountSaleStrategy {
    constructor (tax, discount) {
        this.discount = discount;
        this.tax = tax;
    }

    calculate (price) {
        return price + (price * this.tax) - this.discount;
    }
}
const discountsale = new DiscountSaleStrategy(0.16, 10);
const regularsale = new RegularSaleStrategy(0.16);

const sale  = new SalesContext(regularsale);
//const sale2 = new SalesContext(discountsale);
sale.setStrategy(discountsale);
console.log(sale.calculate(100));
console.log(sale.calculate(100));
//console.log(sale2.calculate(100));*/

const data = [
    {
        name: 'Pilsener',
        country: 'Ecuador',
        description: 'Beer made in Ecuador',
    },
    {
        name: 'Corona',
        country: 'Mexico',
        description: 'Beer made in Mexico',
    },
    {
        name: 'Brahma',
        country: 'Brazil',
        description: 'Beer made in Brazil',
    }
]; 

class InfoContext {
    constructor (strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {
    show(data, element){

        element.innerHTML = data.reduce((ac, item) => {
            return ac + `<div>
                            <h2>${item.name}</h2>
                            <p>${item.country}</p>
                        </div>
                        <hr>`;
        }, "");
    }
}

class DescriptionStrategy {
    show(data, element){

        element.innerHTML = data.reduce((ac, item) => {
            return ac + `<div>
                            <h2>${item.name}</h2>
                            <p>${item.country}</p>
                            <p>${item.description}</p>
                        </div>
                        <hr>`;
        }, "");
    }
}

const strategies = [
    new ListStrategy(),
    new DescriptionStrategy()
]

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

selOpt.addEventListener('change', (e) => {
    const op = e.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});