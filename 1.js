// You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]


function rotatearr(n,k,arr){
    k = k%n
    let stack = []
    let count = 0
    while(count < k){
        stack.push(arr[0])
        let newarr = []
        for(let i = 1; i < n; i++){
            newarr.push(arr[i])
        }
        newarr.push(stack[0])
        arr = newarr
        stack.pop()
        count++
    }
    return arr
}

let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(rotatearr(10,3,arr1))

// Time Complexity = O(n*k)
// Space Complexity = O(1)  