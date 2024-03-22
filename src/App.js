
import Cards from './components/Cards';
import './App.css';

function App() {

  return (
    <>
      

        <div className='p-2 text-lg bg-slate-700 text-center flex  my-auto mx-auto justify-center  text-white border border-red-600 w-fit'>
          <Cards limit={1}/>
          <Cards limit={2}/>
          <Cards limit={3}/>
          <Cards limit={4}/>
          <Cards limit={5}/>
        </div>
      
    </>
  );
}

export default App;
