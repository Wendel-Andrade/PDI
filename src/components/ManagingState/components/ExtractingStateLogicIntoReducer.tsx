import { useReducer, useState } from 'react';
import { useStyleTheme } from '../hook/useStyleTheme';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
};

type AddTaskProps = {
  onAddTask: (text: string) => void;
};

type Action =
  | { type: 'ADDED'; id: number; text: string }
  | { type: 'CHANGED'; task: Task }
  | { type: 'DELETED'; id: number };

const initialTasks = [
  { id: 0, text: 'Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People', done: true },
  { id: 1, text: 'Algoritmos Funcionais', done: true },
  { id: 2, text: 'Clean Code', done: true },
  { id: 3, text: 'The Pragmatic Programming', done: false },
  { id: 4, text: 'Refactoring: Improving the Design of Existing Code', done: false },
];

export function ExtractingStateLogicIntoReducer() {
  return <TaskApp />;
}

function tasksReducer(state: Task[], action: Action) {
  switch (action.type) {
    case 'ADDED':
      return [...state, { id: action.id, text: action.text, done: false }];

    case 'CHANGED':
      return state.map((task: Task) => {
        if (task.id === action.task.id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      });

    case 'DELETED':
      return state.filter((task: Task) => task.id !== action.id);

    default:
      return state;
  }
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const { styleTextPrimary } = useStyleTheme();

  function handleAddTask(text: string) {
    let newId;

    if (tasks.length) {
      newId = tasks[tasks.length - 1].id + 1;
    } else {
      newId = 0;
    }

    if (text && newId) {
      dispatch({
        type: 'ADDED',
        id: newId,
        text: text,
      });
    }
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'CHANGED',
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'DELETED',
      id: taskId,
    });
  }

  return (
    <>
      <h2 style={styleTextPrimary}>Books to Read</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    onAddTask(text);
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new book" />
      <button onClick={handleAddClick}>Add new book</button>
    </div>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <input style={{ margin: '0 10px' }} type="checkbox" checked={task.done} onChange={() => onChangeTask(task)} />
          {task.text}
          <button style={{ marginLeft: '10px' }} onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
