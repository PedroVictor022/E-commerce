import { Button, HeaderC, NavItem } from "../styles/UI";

export function Header() {
   return (
      <HeaderC>
         <h1>My Notes</h1>
         
         <NavItem>
            <Button>New Note</Button>
            <input 
               type="text"
               placeholder="My note"
            />
         </NavItem>

      </HeaderC>
   )
}