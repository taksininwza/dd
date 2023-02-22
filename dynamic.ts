function dynamicFibonacci() {
    interface NumberArray {
        [index: number]: number;
    }
    let cache: NumberArray = {}
    return function fibonacci(n: number): number {
        count++
        if ((n in cache) === false) {
            if (n < 2)
                return n
            cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        }
        return cache[n]
    }
}
