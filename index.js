function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function insertionSort(array){
    const sorted = []
    while (array.length) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
