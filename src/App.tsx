import styles from './App.module.css';
import Form from './components/Form/Form';
function App() {
  return (
    <>
      <h1 className= {styles.title}>Weather finder</h1>

      <div className={styles.container}>
        <Form/>
        <p>2</p>
      </div>
    </>
  )
}

export default App
