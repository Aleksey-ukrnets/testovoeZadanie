import React, { useRef, useState, useEffect, MouseEvent } from 'react';

// Ваш импорт стилей

let id = 0;

interface MessageHubProps {
  timeout?: number;
  children: (add: AddFunction) => void;
}

type AddFunction = (msg: string) => void;

interface Item {
  key: number;
  msg: string;
}

function MessageHub({ timeout = 3000, children }: MessageHubProps) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    children((msg: string) => {
      setItems((state) => [...state, { key: id++, msg }]);
    });
  }, []);

  const removeItem = (item: Item) => {
    setItems((state) => state.filter((i) => i.key !== item.key));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.key}>
          <div>
            
            <p>{item.msg}</p>
            <div
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                removeItem(item);
              }}
            >
              X
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const ref = useRef<null | AddFunction>(null);

  const handleClick = () => {
    ref.current?.('123');
  };

  return (
    <div onClick={handleClick}>
      Click here to create notifications
      <MessageHub
        children={(add: AddFunction) => {
          ref.current = add;
        }}
      />
    </div>
  );
}