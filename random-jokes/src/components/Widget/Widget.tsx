import Button from '../Button/Button';
import './Widget.scss';
import {useState, useEffect} from 'react';
import axios from 'axios'
import Loader from '../Loader/Loader'
function Widget() {
  const [joke, setJoke] = useState('One super hilarious joke');
  const[loading, setLoading] = useState(true)
  const fetchJoke = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (e) {
      setJoke('Error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []

  );

  return (
    <article className="widget">
      {loading ? <Loader /> : <p className="widget-content">{joke}</p>}
      <Button fetchJoke={fetchJoke}/>
    </article>
  );
}

export default Widget;