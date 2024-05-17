/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
const CartDetails = ({
  item,
  quantity,
  onIncrement,
  onDecrement,
  onRemoveItem,
}) => {
  // console.log(item);

  // const [quantity, setQuantity] = useState(0);
  // const handleDecrement = () => {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  const totalPrice = item.price * quantity;
  const handleIncrement = () => {
    if (quantity < item.stock) {
      onIncrement();
    } else {
      toast.error("Sorry, the maximum stock for this item has been reached.");
    }
  };
  return (
    <tr className="hover:bg-gray-50 border-b transition duration-300">
      <td className="py-4 px-4 flex justify-start">
        <img
          src={item.img}
          alt="table navigate ui"
          className="h-16 w-16 object-cover bg-gray-300"
        />
      </td>
      <td className="py-4 px-6 border-b text-xl font-medium">{item.name}</td>
      <td className="py-4 px-6 border-b text-lg font-medium">{item.stock}</td>
      <td className="py-4 px-6 border-b text-lg font-medium">${item.price}</td>
      <td>
        <div className="input-group flex gap-2 items-center">
          <button
            type="button"
            onClick={onDecrement}
            className="input-group-text btn"
          >
            -
          </button>
          <div className="form-control text-center">{quantity}</div>
          <button
            type="button"
            onClick={handleIncrement}
            className="input-group-text btn"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4 px-6 border-b text-lg font-medium">
        ${totalPrice.toFixed(2)}
      </td>
      <td className="py-4 px-6 border-b text-end">
        <button
          onClick={() => onRemoveItem(item.id)}
          className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartDetails;
