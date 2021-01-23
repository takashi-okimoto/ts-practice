export default function objectSample() {
  // const a: object = {
  //   name: 'oki',
  //   age: 32
  // }
  // a.name

  //オブジェクトリレラル記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object Sample 1:', country)

  country = {
    language: 'English',
    name: 'united State of America',
  }

  console.log('Object Sample 2:', country)

  //オプショナルとリードオンリー
  const okimaru: {
    age: number
    lastname: string
    readonly firstname: string
    gender?: string
  } = {
    age: 32,
    lastname: 'oki',
    firstname: 'taka',
  }

  okimaru.gender = 'male'
  okimaru.lastname = 'yamada'
  // okimaru.firstname = "tarou"

  console.log('Object Sample 3:', okimaru)

  //インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object Sample 4:', capitals)
}
