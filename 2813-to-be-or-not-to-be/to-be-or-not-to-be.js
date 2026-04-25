function expect(val) {
    return {
        toBe: (other) => {
            if (val === other) return true;
            else throw "Not Equal";
        },
        notToBe: (other) => {
            if (val !== other) return true;
            else throw "Equal";
        }
    };
}