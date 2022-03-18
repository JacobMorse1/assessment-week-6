const {shuffleArray} = require('./utils')

let testArr = [5, 61, 16, 4]

describe('shuffleArray should', () => {
    test("if shuffleArray returns an array", () => {
        let shuffledArr = shuffleArray(testArr)
        expect(shuffledArr.length).toEqual(testArr.length)
    });
    test("if shuffleArray shuffled the items around", () => {
        let newArr = shuffleArray(testArr)
        expect(newArr).not.toEqual(testArr)
    });
})