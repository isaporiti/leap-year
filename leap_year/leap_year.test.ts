import isLeapYear from ".";

describe('LeapYear', () => {
    it('tells a year is not leap year if not divisible by four', () => {
        expect(isLeapYear(1997)).toBe(false);
    });

    it('tells a year is leap year if divisible by four', () => {
        expect(isLeapYear(1996)).toBe(true);
    });

    it('tells a year is leap year if divisible by four hundred', () => {
        expect(isLeapYear(1600)).toBe(true);
    });

    it('tells a year is not a leap year if divisible by 100 but not by 400', () => {
        expect(isLeapYear(1800)).toBe(false);
    });
});

