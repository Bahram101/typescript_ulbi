import React from "react";
import Card, { CardVariant } from "../components/Card";
import EventsExample from "../components/EventsExample";

const Home = () => {
  return (
    <>
      <EventsExample />
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("clicked", num)}
      >
        <button>Кнопка</button>
      </Card>
    </>
  );
};

export default Home;
