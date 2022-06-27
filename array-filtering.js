function evenNumbers(numbers){
    return numbers%2==0
}
 numbers = [1,2,3,4,5,6,7,8,9,10]
filtered=numbers.filter(evenNumbers)
console.log(filtered)
