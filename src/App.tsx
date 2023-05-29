import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodo, setDeleteTodo, todoSelector } from "./store/reducers/todo";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";
import { useTransition, animated, config } from "react-spring";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);

  const transitions = useTransition(todos, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
    config: { tension: 125, friction: 20, precision: 0.1 },
  });
  const handleAdd = () => dispatch(setTodo({}));

  return (
    <div className="App">
      <div className="wrapper">
        <div className="btns">
          <Button variant="contained" onClick={handleAdd}>
            Добавить
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => dispatch(setDeleteTodo({}))}
          >
            Удалить
          </Button>
        </div>
        <div className="todoList">
          {todos.length > 0 &&
            transitions((styles, el, _, index) => (
              <animated.div
                style={{
                  ...styles,
                  background: el.color,
                  zIndex: todos.length - index,
                }}
                className="todo"
                key={el.id}
              >
                {el.id}
              </animated.div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
