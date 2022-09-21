import { ChevronDownIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { removeFromBasket } from "../Redux/basketSlice";
import { toast } from "react-hot-toast";

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ id, items }: Props) => {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.custom(
      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-6 py-4 transition ease-linear">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(items[0].image[0]).url()}
            alt="img"
          />
        </div>
        <div>
          <p className="flex items-center gap-1 text-lg">
            <span className="text-red-500">
              <XCircleIcon className="h-8 w-8" />
            </span>
            {items[0].title} removed from basket
          </p>
        </div>
      </div>,
      { position: "bottom-center", duration: 800 }
    );
  };
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>

          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency
              quantity={items.reduce((total, item) => total + item.price, 0)}
              currency="INR"
            />
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
