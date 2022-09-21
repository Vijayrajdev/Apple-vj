import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../Redux/basketSlice";
import { urlFor } from "../sanity";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}
const Product = ({ product }: Props) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.custom(
      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-6 py-4">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(product.image[0]).url()}
            alt="img"
          />
        </div>
        <div>
          <p className="flex items-center gap-1 text-lg">
            <span className="text-green-400">
              <CheckCircleIcon className="h-8 w-8" />
            </span>
            {product.title} added to basket
          </p>
        </div>
      </div>,
      { position: "bottom-center" }
    );
  };
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>₹{product.price}</p>
        </div>

        <div
          onClick={addItemToBasket}
          className="textGradient flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full md:h-[70px] md:w-[70px]"
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Product;
