export default function primitiveSample() {
  const name = 'oki'
  console.log('primitive sample 1:', typeof name, name)

  const age = 32
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = true
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const isOver30: boolean = age >= 30
  console.log('primitive sample 4:', typeof isOver30, isOver30)
}
