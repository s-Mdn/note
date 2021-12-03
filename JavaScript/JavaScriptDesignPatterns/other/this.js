var fun = function(a,b,c) {
    console.log(this==global, this==obj)
}

var obj = {
    test: fun
}
obj.test.apply(null)

var arr = [1, 2, 3]
arr.shift.call()
console.log(arr)