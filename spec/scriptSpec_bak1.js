const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator Tests", () => {

    it("should calculate simple interest correctly", () => {
        // Arrange
        const principal = 1000;
        const rate = 5;
        const time = 1;

        // Act
        const actual = calculateSimpleInterest(principal, rate, time);

        // Assert
        expect(actual).toBe(50);
    });

    it("should calculate total payable amount correctly", () => {
        // Arrange
        const principal = 1000;
        const interest = 50;

        // Act
        const actual = calculateTotalPayableAmount(principal, interest);

        // Assert
        expect(actual).toBe(1050);
    });

});
