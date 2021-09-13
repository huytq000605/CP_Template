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
	let numberOfLines = parseInt(readline(), 10) * 2
	for(let i = 0; i < numberOfLines; i++) {
		let x = readline().trim()
		if(i % 2 === 1) {
			console.log(solve(x))
		}
		// print(solve(x))
		// fs.appendFileSync("output.txt", `Case #${i+1}: ${solve(x)}` + "\n")
	}
    
}

function solve(str) {
    let arr = str.split("");
	let numOfUnknown = 0
	let queue = []
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== "?") queue.push(i)
		else numOfUnknown++
	}
	if(numOfUnknown > 0 && !queue.length) {
		arr[0] = "B"
		queue.push(0)
	}
	while(queue.length && numOfUnknown) {
		let current = queue.pop()
		if(current > 0 && arr[current - 1] === "?") {
			if(arr[current] === "B") arr[current-1] = "R"
			else arr[current-1] = "B"
			queue.push(current - 1)
			numOfUnknown--
		}
		if(current < arr.length - 1 && arr[current + 1] === "?") {
			if(arr[current] === "B") arr[current + 1] = "R"
			else arr[current + 1] = "B"
			queue.push(current + 1)
			numOfUnknown--
		}
	}

	return arr.join("")
}
