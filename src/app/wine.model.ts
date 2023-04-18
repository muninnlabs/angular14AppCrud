export class Wine {
    id: string;
    name: string;
    year: number;
    notes: string;
    price: string;
    vineyard: string;
    numberOfBottles: number;

    constructor(
        id: string,
        name: string,
        year: number,
        notes: string,
        price: string,
        vineyard: string,
        numberOfBottles: number
    ) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.notes = notes;
        this.price = price;
        this.vineyard = vineyard;
        this.numberOfBottles = numberOfBottles;
    }


}
