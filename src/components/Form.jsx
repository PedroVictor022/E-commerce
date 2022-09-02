import { useState } from "react"

export function FormNote({sendData}) {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [notes, setNotes] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();


      const generateID = Math.floor(Math.random() * 100);

      if (title.trim() && body.trim()) {
         const newNote = {
            id: generateID,
            title: title,
            body: body
         };
         setNotes([...notes, newNote]);
         sendData(notes)

         // props.onSubmit({
         //    id: generateID,
         //    title: title,
         //    body: body
         // });
         // setNotes([...notes, newNote]);


      } else {
         console.log("Formulario invalido")
      }
   }

   const deleteNote = id => {
      const updateList = notes.filter(nota => nota.id !== id)
      updateList.slice(id, 1);
      setNotes(updateList);
   }

   return (
      <div>
         <form
            onSubmit={handleSubmit}
         >
            <div>
               <label>Titulo</label>
               <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
               />
            </div>
            <div>
               <label>Nota</label>
               <textarea
                  value={body}
                  onChange={e => setBody(e.target.value)}
               ></textarea>
            </div>
            <button type="submit">Adicionar</button>
         </form>

         {
            notes.map((note, index) => {
               return (
                  <div key={note.id}>
                     <h1>{note.title}</h1>
                     <p>{note.body}</p>
                     <button onClick={() => deleteNote(note.id)}>Delete</button>
                  </div>
               )
            })
         }

      </div>
   )
}