import { removeFromCart } from "@/redux/features/cartSlices";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";

interface propsType {
  id: string;
  img: string;
  title: string;
  price: string;
  quantity: string;
}

const CartProduct: React.FC<propsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={title} />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
