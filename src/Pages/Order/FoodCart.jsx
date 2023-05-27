const FoodCart = ({item}) => {
    const {image,price,name,recipe}=item
  return <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-orange-900 text-white absolute right-0 mr-4 mt-4 px-2 rounded-md">${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>

    <div className="card-actions justify-end text-center">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
};

export default FoodCart;
