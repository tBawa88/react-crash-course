const getRolls = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++)
        arr.push(Math.floor(Math.random() * 6 + 1))
    return arr;
}

//using array.reduce function to find sum of all array elements
const sum = (arr) => arr.reduce((curr, acc) => curr + acc, 0);

const getRandom = () => Math.floor(Math.random() * 6 + 1)

//creates an array of random numbers, which will go into the dies 
const getDices = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push({ id: i, val: getRandom() });
    }
    return arr;
}

const checkSUM = (arr) => {
    return arr.reduce((acc, curr) => curr.val + acc, 0)
}

export { getRolls, sum, getRandom, getDices, checkSUM };