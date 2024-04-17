import './Person.scss';

export const Person = ({ person }) => {
  let marriageMessage = 'I am not married';

  if (person.isMarried) {
    const husbandOrWife = person.sex === 'f' ? 'husband' : 'wife';

    marriageMessage = `${person.partnerName} is my ${husbandOrWife}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p className="Person__partner">{marriageMessage}</p>
    </section>
  );
};
