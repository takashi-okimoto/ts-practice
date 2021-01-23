export default function arraySample() {
  //シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('Array Sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("8")
  console.log('Array Sample 2:', even)

  const ids: (string | number)[] = ['abc', 123]
  ids.push('def')
  ids.push(456)
  // ids.push(true)
  console.log('Array Sample 3:', ids)

  //配列の型推論
  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('abc')
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array Sample 4:', someArray)

  //イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log('Array Sample 5:', commands)
}
