import Card from "./Card";
import Persons from "./Persons";

const App1 = () => {
  return (
    <div className="App1">
      {Persons.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          source={contact.source}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default App1;
