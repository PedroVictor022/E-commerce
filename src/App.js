import { useState } from "react";
import { FormNote } from "./components/Form";
import { Header } from "./components/Header";
import { Container } from "./styles/UI";

function App() {
  const [newNote, setNewNote] = useState({})
  const [notes, setNotes] = useState([])


  return (
    <Container>
      <Header />

      <FormNote />

    </Container>
  );
}

export default App;
