import { useState } from 'react';
import {IntlProvider, FormattedMessage} from "react-intl"
function App() {
  const messages={
    "tr-TR":{
      title:"Merhaba Dünya"
    },
    "en-US":{
      title:"Hello World"
    }
  }
  const [lang, setLang]=useState("tr-TR")
  return (
    <div style={{textAlign:"center"}}>
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id='title'/>
        <br/>
        <br/>

        <button onClick={()=>setLang("tr-TR")}>Tr</button>
        <button onClick={()=>setLang("en-US")}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
