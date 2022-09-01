import { useState } from "react";
import { FormNote } from "./components/Form";
import { Header } from "./components/Header";
import { Container } from "./styles/UI";

function App() {
  const [ notes, setNotes ] = useState([])

  const sendData = (data) => {
    setNotes(data);
    console.log(notes)
  }

  return (
    <Container>
      <Header />

      <FormNote sendData={sendData}/>

    </Container>
  );
}

export default App;