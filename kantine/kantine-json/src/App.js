
import './App.css';
import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
const schema = person.schema;
const uischema = person.uischema;
const initialData = person.data;

function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className='App'>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />

      <button onClick={() => {
        const formData = new FormData();
        formData.append('json', JSON.stringify(data));
        fetch('https://localhost:5001/api/uploadJson', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
      }}>Send to SQL Server</button>
    </div>
  );
}

export default App;
