export default function isLeapYear(year: number): boolean {
    return checkIfLeapYear(new Dividend(year));
}

function checkIfLeapYear(year: Dividend): boolean {
    if (year.isDivisibleBy(100) && !year.isDivisibleBy(400)) {
        return false;
    }
    return year.isDivisibleBy(4);
}

class Dividend {
    constructor(dividend: number) {
        this.dividend = dividend;
    }

    private readonly dividend: number;

    public isDivisibleBy(divisor: number): boolean {
        return this.dividend % divisor === 0;
    }
}
