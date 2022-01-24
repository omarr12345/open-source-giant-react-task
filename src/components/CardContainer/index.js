import React from "react";
import Sortable from "sortablejs";
import ListTitle from "../ListTitle";
import Card from "../Card";
import "./index.css";

const emptyCard = {
  id: Math.random() * 1000,
  title: "Untitled",
  rate: 1,
  tags: ["Services"],
};

const CardContainer = ({ list }) => {
  const ref = React.createRef(null);
  const [cards, setCards] = React.useState(list.cards);
  const listTotal = React.useMemo(
    () => cards.reduce((res, cur) => Number(res) + Number(cur.cost) || 0, []),
    [cards]
  );
  const statusCount = React.useMemo(() => {
    let overdueCount = 0;
    let soonCount = 0;
    let safeCount = 0;
    let notSetCount = 0;
    cards.map((card) => {
      switch (card.deadline_status) {
        case "overdue":
          overdueCount++;
          break;
        case "soon":
          soonCount++;
          break;
        case "safe":
          safeCount++;
          break;
        case "not_set":
          notSetCount++;
          break;

        default:
          break;
      }
    });

    const total = cards.length;

    return {
      overdueCount: (overdueCount / total) * 100,
      soonCount: (soonCount / total) * 100,
      safeCount: (safeCount / total) * 100,
      notSetCount: (notSetCount / total) * 100,
    };
  }, [cards]);

  const onAdd = () => {
    setCards([...cards, emptyCard]);
  };

  React.useEffect(() => {
    if (!ref.current) return;

    Sortable.create(ref.current, {
      group: "name", // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
      sort: true, // sorting inside list
      delay: 0, // time in milliseconds to define when the sorting should start
      delayOnTouchOnly: false, // only delay if user is using touch
      touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
      dragClass: "sortable-drag",
    });
  }, []);

  return (
    <div className="card-list d-flex flex-column mx-4">
      <ListTitle
        title={list.title}
        total={listTotal}
        statusCount={statusCount}
        onAdd={onAdd}
      />

      <div ref={ref} className="d-flex flex-column">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

CardContainer.propTypes = {};

export default CardContainer;
