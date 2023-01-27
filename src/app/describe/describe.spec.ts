import { MyInfo } from "./describe";

describe('MyInfo', () => {
    it("should contain Name and student number", () => {
        expect(MyInfo()).toEqual(['Eric Leonard', 'S00196446']);
    });
});