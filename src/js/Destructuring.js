export default function destructuring(character) {
  const { special: params } = character;
  const special = [];
  for (let atack of params) {
    const {
      description = 'Описание недоступно',
    } = atack;
      atack.description = description;
      special.push(atack);
    }
  return special
}
