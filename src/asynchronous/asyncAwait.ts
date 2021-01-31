export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/takashi-okimoto'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  // async/awaitでコールバック関数を同期的な処理に置き換える
  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })
    // responseがnullならfetchに失敗
    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('asynchronous async/await Sample 1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })
    // jsonがnullならレスポンスBodyの読み取りに失敗
    if (!json) {
      return null
    }
    return json
  }
  // さらに同期的な処理にする
  const profile = await fetchProfile()
  if (profile) {
    console.log('asynchronous async/await Sample 2:', profile)
  }
}
