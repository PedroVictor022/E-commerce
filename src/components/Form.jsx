import { useState } from "react"

export function FormNote() {
   const [ title, setTitle ] = useState("");
   const [ body, setBody ] = useState("");
   const [ notes, setNotes ] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const uniqueID = Math.random(10).toFixed(3)
      console.log(uniqueID)

      const newNote = {
         id: uniqueID,
         title: title,
         body: body
      }
      setNotes([...notes, newNote])
      console.log("Formulario enviado", notes)
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
            <button>Adicionar</button>
         </form>
      </div>
   )
}