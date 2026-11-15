import Welcome from './components/welcome'
import Counter from './components/Counter'

function App() {
  return (
    <main className="app-content">
      <section className="welcome-list" aria-label="Welcome messages">
        <Welcome name="olen" />
        <Welcome name="bamper" />
        <Welcome name="hroshi" />
        <Welcome name="ta shashlyk" />
      </section>
      <Counter />
    </main>
  )
}

export default App
