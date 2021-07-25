import Persons from "./Persons";

const Card = ({ name, source, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={source} alt={name} />
      <br />
      Email: {email}
    </div>
  );
};

export default Card;
