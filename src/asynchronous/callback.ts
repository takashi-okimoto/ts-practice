export default function callbackSample() {
  const url = 'https://api.github.com/users/takashi-okimoto'

  //コールバック関数で呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        //レスポンスのBodyをJsonで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('Asynchronous callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous callback Sample 2:', profile)
}
