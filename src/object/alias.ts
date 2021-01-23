export default function typeAliasSample() {
  //型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object Alias Sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'united State of America',
  }

  console.log('Object Alias Sample 2:', america)

  //合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }
  //合併型... KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard

  //交差型... KnightかつWizard両方の型を持つ
  type Paladin = Knight & Wizard

  //Knight寄り
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 50,
    weapon: 'こん棒',
    swordSkill: '袋叩き',
  }

  //Wizard寄り
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '杖',
    magicSkill: '火の玉',
  }

  console.log('Object Alias Sample 3:', adventurer1)
  console.log('Object Alias Sample 4:', adventurer2)

  //交差型
  const paladin: Paladin = {
    hp: 200,
    sp: 50,
    mp: 30,
    weapon: '木の剣',
    swordSkill: '袋叩き',
    magicSkill: '火の玉',
  }

  console.log('Object Alias Sample 5:', paladin)
}
