import { useEffect, useState } from 'react'
import SoundCard from './components/SoundCard'
import logo from './assets/logo.png'

const App = () => {
  useEffect(() => {
    getSoundList();
  }, []);

  const [soundList, setSoundList] = useState([]);

  const getSoundList = () => {
    fetch("./assets/soundlist.json")
      .then((response) => response.json())
      .then((data) => {
        setSoundList(data);
      });
  };

  return (
    <div className="flex flex-col align-middle bg-gray-800 min-h-dvh">
      <header className="mx-auto">
        <img alt="Noizee" src={logo}/>
      </header>

      <div className="mx-auto grid grid-cols-3 gap-10">
        {soundList.map((sound) => (
          <SoundCard key={sound.filename} sound={sound}/>
        ))}
      </div>

      <footer className="text-center text-white">
        <br/>
        <small>
          Icons by&nbsp;
          <a className="text-green-600" target="_blank" href="https://www.flaticon.com/br/autores/eucalyp"
             title="Eucalyp">Eucalyp</a>
          <br/>
          Sounds by&nbsp;
          <a className="text-green-600" target_="_blank" href="https://freesound.org/" title="Freesound">Freesound</a>
          <br/>
          Developed with ♥️ by&nbsp;
          <a className="text-green-600" target="_blank" href="https://github.com/pedromorais486">pedroMNT_</a>
        </small>
      </footer>
    </div>
  )
}

export default App
