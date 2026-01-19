import './App.css'

function App() {

  return (
    <>
      <section class="h-[90vh] w-[95vw] mt-8 relative z-10 p-8 mx-4 bg-white/5            backdrop-blur-md border border-white/10 rounded-2xl shadow-2x1 flex justify-center items-center ">
        <nav class="h-full absolute left-0 bg-blue-700 rounded-l-lg p-2">
          <p>navbar</p>
        </nav>

        <main>
          <h1 class="text-3xl font-bold text-blue-700">
            Hello world!
          </h1>
        </main>

      </section>


      <footer class="mt-10 p-5 border-t border-solid">

        <p>© 2026 Itamar Henriques.</p>
      </footer>
    </>
  )
}

export default App
