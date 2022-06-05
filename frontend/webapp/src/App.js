import logo from './logo.svg';
import './App.css';
import SimpleMap  from './component/googlemap/gmap';
import {Map}from './component/googlemap/gmap'
import History from './component/googlemap/history' 
import { useEffect } from 'react';

function App() {

  return (
   // axios req
   // list
    <>
      <Map className='map'/>;
      <History />
    </>
  )
 
}

export default App;
