
export default function ProductItem(props) {
  return (
      <div className="product-item">
        <div className="image">
          <img src={props.image} alt={props.name}></img>
        </div>

        <div>
          <h2>{props.name}</h2>
          <p>{props.price}</p>
        </div>

      </div>
  )
}

