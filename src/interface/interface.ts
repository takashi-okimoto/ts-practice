interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

//型エイリアスで表現
type Mabodofu = {
  calories: number
  spaicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboRice = Mabodofu & Rice //交差型(union)

const maboRice: MaboRice = {
  calories: 500,
  spaicyLevel: 10,
  gram: 300,
}

//インターフェイスの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 300,
  title: 'コトリップ',
  theme: '旅行',
}

//インプリメンツを使ってクラスに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。'
  }
}

const popularComic = new Comic(200, 'ワンピース', '1995')
console.log(popularComic.getPublishYear())
