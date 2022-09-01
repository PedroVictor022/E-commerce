import { useState } from "react"

export function FormNote(sendData) {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [notes, setNotes] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();


      const generateID = Math.random(10).toFixed(3);

      if (title.trim() && body.trim()) {
         const newNote = {
            id: generateID,
            title: title,
            body: body
         };
         setNotes([...notes, newNote]);

      } else {
         console.log("Formulario invalido")
      }
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
                     <button>Delete</button>
                  </div>
               )
            })
         }

      </div>
   )
}