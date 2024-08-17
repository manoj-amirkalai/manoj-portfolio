import { useState } from "react";

const List = ({ navlist, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio__list">
      {" "}
      {navlist.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
            className={`${
              active === index ? "active-work" : ""
            } portfolio__list-item text-cs`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
