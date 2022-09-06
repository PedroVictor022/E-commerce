import m1 from "../assets/img/macbook.png"
import naga from "../assets/img/mouseGamer.png";
import monitor from "../assets/img/monitor.png"
import w11 from "../assets/img/w11.png"
import teclado from "../assets/img/teclado.png"
import note from "../assets/img/note.png"

const randomId = () => {
   return  Math.random(Math.random * 1000).toFixed(3)
}

export const ProductsList = [
   {
      id: randomId(),
      name: 'Macbook M1',
      desc: "Macbook M1 chip Apple",
      img: m1,
      price: 10000,
   },
   {
      id: randomId(),
      name: 'Razer Naga',
      desc: "Mouse gamer Razer Naga",
      img: naga,
      price: 1200,
   },
   {
      id: randomId(),
      name: 'Monitor Gamer',
      desc: "Monitor gamer 120Hz 1ms",
      img: monitor,
      price: 600,
   },
   {
      id: randomId(),
      name: 'Windows 11 PRO',
      desc: "W11 KEY lorem ipsum", 
      img: w11,
      price: 200,
   },
   {
      id: randomId(),
      name: 'Keyboard Gamer',
      desc: "Teclado gamer RGB full custom",
      img: teclado,
      price: 90,
   },
   {
      id: randomId(),
      name: 'Notebook Gamer',
      desc: "Acer Predator GTX 1660 SUPER, Core I7",
      img: note,
      price: 3300,
   },
]