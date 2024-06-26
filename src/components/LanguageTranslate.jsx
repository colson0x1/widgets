import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './LanguageConvert';

const options = [
  {
    label: 'Nepali',
    value: 'ne',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Portuguese (Portugal, Brazil)',
    value: 'pt',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'Chinese',
    value: 'zh-CN',
  },
  {
    label: 'Sanskrit',
    value: 'sa',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Swedish',
    value: 'sv',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
  },
  {
    label: 'Norwegian',
    value: 'no',
  },
  {
    label: 'Luxembourgish',
    value: 'lb',
  },
  {
    label: 'Latin',
    value: 'la',
  },
  {
    label: 'Turkish',
    value: 'tr',
  },
  {
    label: 'Greek',
    value: 'el',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
