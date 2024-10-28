import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyEditor: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      placeholder="Pega tu contenido aquí..."
    />
  );
};

export default MyEditor;
