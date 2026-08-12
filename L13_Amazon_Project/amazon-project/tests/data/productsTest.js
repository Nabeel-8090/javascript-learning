import { Product, Clothing, Appliance } from '../../data/products.js';

describe('test suite: Product class', () => {
    let product;

    beforeEach(() => {
        product = new Product({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
        });
    });

    it('should create a Product object', () => {
        expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product.rating.stars).toEqual(4.5);
        expect(product.rating.count).toEqual(87);
        expect(product.priceCents).toEqual(1090);
    });

    it('should have the correct methods', () => {
        expect(product.extraInfoHTML).toBeDefined();
    });
});

describe('test suite: Clothing class', () => {

    let product;

    beforeEach(() => {
        product = new Clothing({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            sizeChartLink: "images/clothing-size-chart.png"
        });
    });

    it('should create a Clothing object', () => {
        expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product.rating.stars).toEqual(4.5);
        expect(product.rating.count).toEqual(87);
        expect(product.priceCents).toEqual(1090);
        expect(product.sizeChartLink).toEqual("images/clothing-size-chart.png");
    });

    it('should have the correct extraInfoHTML method', () => {
        expect(product.extraInfoHTML).toBeDefined();
        expect(product.extraInfoHTML()).toContain(`<a href="${product.sizeChartLink}" target="_blank">Size chart</a>`);
    });
});

describe('test suite: Appliance class', () => {
    let product;

    beforeEach(() => {
        product = new Appliance({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            instructiosLink: "images/appliance-instructions.png",
            warrantyLink: "images/appliance-warranty.png"
        });
    });

    it('should create a Appliance object', () => {
        expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product.rating.stars).toEqual(4.5);
        expect(product.rating.count).toEqual(87);
        expect(product.priceCents).toEqual(1090);
        expect(product.instructiosLink).toEqual("images/appliance-instructions.png");
        expect(product.warrantyLink).toEqual("images/appliance-warranty.png");
    });

    it('should have the correct extraInfoHTML method', () => {
        expect(product.extraInfoHTML).toBeDefined();

        const html =  `
      <a href="${product.instructiosLink}" target="_blank">Instructions</a>
      <a href="${product.warrantyLink}" target="_blank">Warranty</a>
    `;

        expect(product.extraInfoHTML()).toContain(html);
    });
});