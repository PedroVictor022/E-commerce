import { useState } from "react"

export const Home = () => {
   const [products, setProducts] = useState([
      {
         id:1,
         name: 'Macbook M1',
         price: 10000,
         qtd: 3,
      },
      {
         id:2,
         name: 'Razer Nagga',
         price: 1200,
         qtd:5,
      },
      {
         id:3,
         name: 'Monitor Ultrawide 29',
         price: 600,
         qtd: 2,
      },
      {
         id:4,
         name: 'Windows 11 PRO',
         price: 200,
         qtd: 10,
      },
      {
         id:5,
         name: 'Keyboard K2',
         price: 90,
         qtd: 3,
      },
   ])


   return (
      <div>
         Homepage

         {/* Produtos em destaque */}

         produtos
         {
            products.map((item) => {
               return (
                  <div>
                     <h2>{item.name}</h2>
                     <p>de R${item.price} - estoque {item.qtd}</p>
                  </div>
               )
            })
         }

         mais conteudo



      </div>
   )
}