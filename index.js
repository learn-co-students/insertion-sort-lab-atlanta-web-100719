function findMinAndRemove(array) {
    let min = array[0], index = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            index = i
        }
    }
    array.splice(index, 1)
    return min
}

function insertionSort(array) {
    if (array.length <= 0) {
        return [...array]
    }
    let min = findMinAndRemove(array)
    return [min, ...insertionSort(array)]

}