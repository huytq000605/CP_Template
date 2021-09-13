import {readline, print, testOutput} from "@ip-algorithmics/codeforces-io"
import fs from "fs"

let numberOfTests = parseInt(readline(), 10)

for(let i = 0; i < numberOfTests; i++) {
    let input = readline().trim()
    let inputs = input.split(" ")
    let M = Number(inputs[0]);
    let N = Number(inputs[1]);
    let A = Number(inputs[2]);
    let B = Number(inputs[3]);
    print(`Case #${i+1}: ${solve(M, N, A, B)}`)
    fs.appendFileSync("output.txt", `Case #${i+1}: ${solve(M, N, A, B)}` + "\n")
}
testOutput()


function solve(M, N, A, B) { 
    if(M + N - 1 > A || M + N - 1 > B) {
        return "Impossible"
    } else {
        let matrix = ""
        for(let row = 0; row < M; row++) {
            matrix+="\n"
            for(let col = 0; col < N; col++) {
                if(row === 0 && col === 0) {
                    matrix += A - (M + N - 2) 
                } else if(row === 0  && col === N - 1) {
                    matrix += B - (M + N - 2)
                } else {
                    matrix += 1
                }
                if(col !== N - 1) {
                    matrix += " "
                }
            }
        }
        return "Possible" + matrix
    }
}

