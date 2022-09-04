export const Product = ({ products, addToCart }) => {
   return (
      <div>
         {
            products.map((item) => {
               return (
                  <div key={item.id}>
                        <div className="flexStart">
                           <h2 className="name">{item.name}</h2>
                        <p className="desc">{item.desc}</p>
                        <p className="price">de R${item.price}</p>
                        </div>
                     <button onClick={() => addToCart(item.id)}>Comprar</button>
                  </div>
               )
            })
         }
      </div>
   )
}