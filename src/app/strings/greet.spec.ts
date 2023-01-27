import { greet } from "./greet";

describe('greet', () => {
    it('it should include the name in the message', () =>{
        expect (greet('Frank')).toContain('Frank');
    });

    //meant to fail //
    it('it should not include name in message', () => {
        expect (greet('Frank')).not.toContain('Frank');
    })
});