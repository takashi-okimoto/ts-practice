export default function anySample() {
  let name: any = 'okitaka'
  console.log('any sample 1:', typeof name, name)

  name = 32
  console.log('any sample 2:', typeof name, name)
}
