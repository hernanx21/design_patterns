class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `Product: ${this.name}`;
    }
}

//decorator

class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getDetail() {
        return this.product.getDetail();
    }
}

//concrete decorator

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(product, commercialInfo, brand) {
        super(product);

        this.commercialInfo = commercialInfo;
        this.brand = brand;
    }

    getDetail() {
        return `${super.getDetail()} - Commercial Info ${this.commercialInfo} - Brand: ${this.brand} - ${this.product.getDetail()}`;
    }
}

//ejecucion - component

const product = new ProductComponent('Cerveza');
console.log(product.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(product, 'Cerveza', 'Cusqueña');
console.log(commercialInfoProduct.getDetail());
