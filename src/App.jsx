import {useState} from 'react';
import data from './data.js';
import List from './components/List.jsx';
const App = () => {
  const [people,setPeople] = useState(data);


  return <main>
    <section>
      <h3>{people.length} Birthdays Today</h3>
<List people={people}/>
      <button type='button' className='btn btn-block' onClick={()=> setPeople([])}>clear all</button>
    </section>
  </main>;
};
export default App;
