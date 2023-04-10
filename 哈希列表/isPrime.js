function isPrime(num) {
  if (num <= 1) return false
  const temp = Math.floor(Math.sqrt(num))
  for (i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
