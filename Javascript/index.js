'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
	let numberOfTestcases = parseInt(readline(), 10)
	for(let i = 0; i < numberOfTestcases; i++) {
		let [hole, mice] = readline().split(" ")
		let positions = readline().split(" ")
		console.log(solve(hole, mice, positions))
		// fs.appendFileSync("output.txt", `Case #${i+1}: ${solve(x)}` + "\n")
	}
    
}

function solve(hole, mice, positions) {
	let maxMove = hole - 1
	positions.sort((a,b) => a-b)
	let result = 0
	while(maxMove > 0 && positions.length > 0) {
		let position = positions[positions.length -1]
		let moveNeed = hole - position
		if(maxMove >= moveNeed) {
			positions.pop()
			maxMove -= moveNeed
			result++
		}
		else break
	}
	return result
}