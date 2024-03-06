import styles from './styles.module.css';

function App() {

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.body_header}>
              <h3>To do</h3>
              <h3>...</h3>
            </div>
            <div className={styles.body_inputs}>
              <textarea id="story" name="story" rows="5" cols="41" placeholder=' Enter a title for this card...'>
              </textarea>
            </div>
            <div className={styles.body_add}>
              <h3 className={styles.card}>+ Add a card</h3>
              <button>Add card</button>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.body_header}>
              <h3>Doing</h3>
              <h3>...</h3>
            </div>
            <div className={styles.body_inputs}>
              <textarea id="story" name="story" rows="5" cols="41" placeholder=' Enter a title for this card...'>
              </textarea>
            </div>
            <div className={styles.body_add}>
              <h3 className={styles.card}>+ Add a card</h3>
              <button>Add card</button>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.body_header}>
              <h3>Done</h3>
              <h3>...</h3>
            </div>
            <div className={styles.body_inputs}>
              <textarea id="story" name="story" rows="5" cols="41" placeholder=' Enter a title for this card...'>
              </textarea>
            </div>
            <div className={styles.body_add}>
              <h3 className={styles.card}>+ Add a card</h3>
              <button>Add card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
