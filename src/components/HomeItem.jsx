import { useSelector, useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoBagAdd } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import { toast } from 'react-toastify';

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
    toast.success("Item Added to Bag");
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
    toast.success("Item removed from Bag");
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound === false ? (
          <button
            type="button"
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBag}
          >
            <IoBagAdd /> Add to Bag
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-bag btn btn-danger"
            onClick={handleRemove}
          >
            <IoBagRemove /> Remove
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
