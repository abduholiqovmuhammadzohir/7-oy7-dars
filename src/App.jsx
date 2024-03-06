import { useState } from 'react';
import styles from './styles.module.css';

function App() {

  const [isTextarea1Visible, setTextarea1Visible] = useState(false);
  const [isTextarea2Visible, setTextarea2Visible] = useState(false);
  const [isTextarea3Visible, setTextarea3Visible] = useState(false);

  const toggleTextarea1 = () => {
    setTextarea1Visible(!isTextarea1Visible);
  };

  const toggleTextarea2 = () => {
    setTextarea2Visible(!isTextarea2Visible);
  };

  const toggleTextarea3 = () => {
    setTextarea3Visible(!isTextarea3Visible);
  };

  const handleAddCardClick = (textareaVisibleSetter) => {
    setTextarea1Visible(false);
    setTextarea2Visible(false);
    setTextarea3Visible(false);
    textareaVisibleSetter(true);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.body_header}>
            <h3>To do</h3>
            <h3>...</h3>
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
            <button onClick={() => handleAddCardClick(setTextarea1Visible)} style={{ display: isTextarea1Visible ? 'block' : 'none' }}>Add card</button>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.body_header}>
            <h3>Doing</h3>
            <h3>...</h3>
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
            <button onClick={() => handleAddCardClick(setTextarea2Visible)} style={{ display: isTextarea2Visible ? 'block' : 'none' }}>Add card</button>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.body_header}>
            <h3>Done</h3>
            <h3>...</h3>
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
            <button onClick={() => handleAddCardClick(setTextarea3Visible)} style={{ display: isTextarea3Visible ? 'block' : 'none' }}>Add card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
