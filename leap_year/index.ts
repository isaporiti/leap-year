export default function isLeapYear(year: number): boolean {
    if (isDivisibleBy(year, 100) && !isDivisibleBy(year, 400)) return false 
    return isDivisibleBy(year, 4);
}
function isDivisibleBy(dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
}

