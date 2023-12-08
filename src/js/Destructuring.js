export default function destructuring(character) {
  const { special } = character;
  for (let atack of special) {
    if (!atack.description) {
      atack.description = 'Описание недоступно'
  return special
    }
  }
}