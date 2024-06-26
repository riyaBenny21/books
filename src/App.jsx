import { useEffect , useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookContext from './Contexts/book';

function App() {

  const {fetchBooks} = useContext(BookContext);

  console.log(useContext(BookContext))
  useEffect(() => {
    fetchBooks();
  }, []);

  

  return (
    <>
      <div className='app'>
        <h1>Reading List</h1>
        <BookList/>
        <BookCreate/>
      </div>
    </>
  );
}


export default App;
