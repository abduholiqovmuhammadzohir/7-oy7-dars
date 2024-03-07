import { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from './styles.module.css';

function App() {
  const [isTextarea1Visible, setTextarea1Visible] = useState(false);
  const [isTextarea2Visible, setTextarea2Visible] = useState(false);
  const [isTextarea3Visible, setTextarea3Visible] = useState(false);
  const [task1, setTask1] = useState([]);
  const [task2, setTask2] = useState([]);
  const [task3, setTask3] = useState([]);

  useEffect(() => {
    const savedTasks1 = JSON.parse(localStorage.getItem('tasks1')) || [];
    setTask1(savedTasks1);
    const savedTasks2 = JSON.parse(localStorage.getItem('tasks2')) || [];
    setTask2(savedTasks2);
    const savedTasks3 = JSON.parse(localStorage.getItem('tasks3')) || [];
    setTask3(savedTasks3);
  }, []);

  const toggleTextarea1 = () => {
    setTextarea1Visible(!isTextarea1Visible);
  };

  const toggleTextarea2 = () => {
    setTextarea2Visible(!isTextarea2Visible);
  };

  const toggleTextarea3 = () => {
    setTextarea3Visible(!isTextarea3Visible);
  };

  const handleAddCard = (textareaId, setTask, task, setVisibility) => {
    const textareaValue = document.getElementById(textareaId).value;
    setTask([...task, textareaValue]);
    localStorage.setItem(textareaId, JSON.stringify([...task, textareaValue]));
    setVisibility(false);
  };

  const handleDeleteTask = (index, listName) => {
    const confirmation = window.confirm("Haqiqatan ham malumotdi o'chirmoqchimisiz ?");
    if (confirmation) {
      let updatedTasks;
      switch (listName) {
        case 'task1':
          updatedTasks = [...task1];
          updatedTasks.splice(index, 1);
          setTask1(updatedTasks);
          localStorage.setItem('tasks1', JSON.stringify(updatedTasks));
          break;
        case 'task2':
          updatedTasks = [...task2];
          updatedTasks.splice(index, 1);
          setTask2(updatedTasks);
          localStorage.setItem('tasks2', JSON.stringify(updatedTasks));
          break;
        case 'task3':
          updatedTasks = [...task3];
          updatedTasks.splice(index, 1);
          setTask3(updatedTasks);
          localStorage.setItem('tasks3', JSON.stringify(updatedTasks));
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.body_header}>
            <h3>To do</h3>
            <h3>...</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {task1.map((item, index) => (
              <p className={styles.text} key={index}>
                {item} 
                <div className={styles.icon} onClick={() => handleDeleteTask(index, 'task1')}>
                  <RiDeleteBin6Line />
                </div>
              </p>
            ))}
          </div>
          <div className={styles.body_inputs}>
            <textarea
              id="story1"
              name="story1"
              rows="5"
              cols="41"
              placeholder="Enter a title for this card..."
              style={{ display: isTextarea1Visible ? 'block' : 'none' }}
            />
          </div>
          <div className={styles.body_add}>
            <h3 className={styles.card} onClick={toggleTextarea1} style={{ display: isTextarea1Visible ? 'none' : 'block' }}>
              + Add a card
            </h3>
            <button style={{ display: isTextarea1Visible ? 'block' : 'none' }} onClick={() => handleAddCard('story1', setTask1, task1, setTextarea1Visible)}>Add card</button>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.body_header}>
            <h3>Doing</h3>
            <h3>...</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {task2.map((item, index) => (
              <p className={styles.text} key={index}>
                {item} 
                <div className={styles.icon} onClick={() => handleDeleteTask(index, 'task2')}>
                  <RiDeleteBin6Line />
                </div>
              </p>
            ))}
          </div>
          <div className={styles.body_inputs}>
            <textarea
              id="story2"
              name="story2"
              rows="5"
              cols="41"
              placeholder="Enter a title for this card..."
              style={{ display: isTextarea2Visible ? 'block' : 'none' }}
            />
          </div>
          <div className={styles.body_add}>
            <h3 className={styles.card} onClick={toggleTextarea2} style={{ display: isTextarea2Visible ? 'none' : 'block' }}>
              + Add a card
            </h3>
            <button style={{ display: isTextarea2Visible ? 'block' : 'none' }} onClick={() => handleAddCard('story2', setTask2, task2, setTextarea2Visible)}>Add card</button>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.body_header}>
            <h3>Done</h3>
            <h3>...</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {task3.map((item, index) => (
              <p className={styles.text} key={index}>
                {item} 
                <div className={styles.icon} onClick={() => handleDeleteTask(index, 'task3')}>
                  <RiDeleteBin6Line />
                </div>
              </p>
            ))}
          </div>
          <div className={styles.body_inputs}>
            <textarea
              id="story3"
              name="story3"
              rows="5"
              cols="41"
              placeholder="Enter a title for this card..."
              style={{ display: isTextarea3Visible ? 'block' : 'none' }}
            />
          </div>
          <div className={styles.body_add}>
            <h3 className={styles.card} onClick={toggleTextarea3} style={{ display: isTextarea3Visible ? 'none' : 'block' }}>
              + Add a card
            </h3>
            <button style={{ display: isTextarea3Visible ? 'block' : 'none' }} onClick={() => handleAddCard('story3', setTask3, task3, setTextarea3Visible)}>Add card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
