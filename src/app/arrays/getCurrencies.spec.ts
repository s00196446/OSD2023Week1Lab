import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it("should contain EUR GBP and USD", () => {
        expect(getCurrencies()).toEqual(['USD','GBP','EUR']);
    });

    it("Should not contain CAD", () => {
        expect(getCurrencies()).not.toEqual(['CAD'])
    })
});