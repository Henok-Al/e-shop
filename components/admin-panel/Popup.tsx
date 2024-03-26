import React, { SetStateAction, useState, Dispatch, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { makeToast } from "@/utils/helper";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/features/loadingSlice";

interface PropsType {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {
  const productData = useAppSelector((store) => store.productReducer);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    name: productData.name,
    category: productData.category,
    price: productData.price,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .put(`/api/edit_product/${productData._id}`, inputData)
      .then((res) => {
        makeToast("Product Update Successfully");
        setUpdateTable((prevState) => !prevState);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
        setOpenPopup((prevState) => !prevState);
      });
  };

  return <div>popup</div>;
};

export default Popup;
