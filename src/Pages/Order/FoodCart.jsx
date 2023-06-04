import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { image, price, name, recipe,_id } = item;
const [,refetch]=useCart()
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem={menuId: _id , name,image,price,email: user.email}
      fetch("http://localhost:5000/carts",{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(cartItem)
        

      })
      .then((res) => res.json())
      .then((data)=>{
        if(data.insertedId){
          refetch() //
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Food added on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from:location}} )
        }
      })
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-orange-900 text-white absolute right-0 mr-4 mt-4 px-2 rounded-md">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-end text-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
