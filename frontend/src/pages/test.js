// items.js
import "./style.css";
export const items = [
  {
    name: "Prada",
    category: "Bags",
  },
  {
    name: "Gucci",
    category: "Bags",
  },
  {
    name: "Guess",
    category: "Bags",
  },
  {
    name: "Rolex",
    category: "Watches",
  },
  {
    name: "Timex",
    category: "Watches",
  },
  {
    name: "Nike",
    category: "Sports",
  },
  {
    name: "Adidas",
    category: "Sports",
  },
  {
    name: "Fila",
    category: "Sports",
  },
  {
    name: "Ray Ban",
    category: "Sunglasses",
  },
  {
    name: "Aldo",
    category: "Sunglasses",
  },
  {
    name: "Polaroid",
    category: "Sunglasses",
  },
];

const Items = (props) => {
  if (props.display.length === 0)
    return items.map((item) => {
      return (
        <li className="item">
          <p> {item.name} </p> <p className="category"> {item.category} </p>{" "}
        </li>
      );
    });
  return (
    <div className="items-container">
      <ul>
        {" "}
        {items
          .filter((item) => props.display.includes(item.category))
          .map((item) => {
            return (
              <li className="item">
                <p> {item.name} </p>{" "}
                <p className="category"> {item.category} </p>{" "}
              </li>
            );
          })}{" "}
      </ul>{" "}
    </div>
  );
};

export default Items;
