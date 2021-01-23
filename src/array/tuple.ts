export default function tupleSample() {
  //一般的なタプルの型定義
  const response: [number, string] = [200, 'abc']
  // response = [400, "Bad Request", "Email"]
  // response = ["400", "Bad Request"]
  console.log('tuple Sample 1:', response)

  //可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['nami', 'asu', 'aina']
  girlfriends.push('sayu')
  console.log('tuple Sample 2:', girlfriends)
}
