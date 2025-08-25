import React from "react";

function Shopping() {
  const product = [
    { id: 1, name: "Gabbage", isfruit: false },
    { id: 2, name: "Apple", isfruit: true },
    { id: 3, name: "Garlic", isfruit: true },
  ];

  const list = product.map((item) => {
    return (
      <li key={item.id} style={{ color: item.isfruit ? "magenta" : "green" }}>
        {item.name}
      </li>
    );
  });
  return (
    <div>
      <h1>Shopping list</h1>
      <ul>{list}</ul>
    </div>
  );
}

export default Shopping;
