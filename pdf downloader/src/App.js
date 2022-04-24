import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PDFFile from './components/PDFFile';
import './index.css'

const App = () => {
  return <div>hello
    <PDFDownloadLink document={<PDFFile name={'shreekrushna'} Number={'7411804424'}/>} fileName="form">
      {({loading})=>(loading?<button>Loading</button>:<button>download</button>)}
    </PDFDownloadLink>
  
  </div>;
};

export default App;
