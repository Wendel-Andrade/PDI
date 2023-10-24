import { useState } from 'react';
import './index.css';

interface QuickStartProps {
  name?: string;
  age?: number;
}

interface User {
  name: string;
  imageUrl: string;
  imageSize: number;
}

interface Product {
  title: string;
  id: number;
}

const number1: number = Math.floor(Math.random() * 100) + 1;
const number2: number = Math.floor(Math.random() * 100) + 1;

const QuickStart: React.FC<QuickStartProps> = ({ name = 'Wendel', age = 22 }) => {
  const user: User = {
    name: 'Icon',
    imageUrl: 'https://cdn.icon-icons.com/icons2/3249/PNG/512/person_circle_filled_icon_199758.png',
    imageSize: 90,
  };

  let messageConditionalRendering: JSX.Element;

  if (number1 > number2) {
    messageConditionalRendering = <p>O primeiro número é maior</p>;
  } else if (number1 < number2) {
    messageConditionalRendering = <p>O segundo número é maior</p>;
  } else {
    messageConditionalRendering = <p>Os números são iguais</p>;
  }

  const [products, setProducts] = useState<Product[]>([
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Random', id: 4 },
  ]);

  const reverseList = () => {
    setProducts([...products].reverse());
  };

  return (
    <div className="container">
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <p>
        Nome: <span className="name">{name}</span>
      </p>
      <p>
        Idade: <span className="age">{age}</span>
      </p>
      <p>
        Número 1: {number1} Número 2: {number2}
      </p>
      {messageConditionalRendering}
      {number1 > number2 ? <span>O primeiro número é maior</span> : <span>O segundo número é maior</span>}
      <ul style={{ padding: 0 }}>
        {products.map((product) => (
          <li style={{ color: 'orange', padding: 0 }} key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
      <button onClick={reverseList}>Reverse List</button>
    </div>
  );
};

export default QuickStart;
