import { Iproduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProp {
  product: Iproduct;
}

const ProductCard = ({ product }: IProp) => {
  const { title, price, description, imageURL } = product;

  return (
    <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-md mx-auto sm:m-0">
      <Image
        imageUrl="/public/portfolio.png"
        alt="photo"
        className="rounded-md mb-2 object-contain"
      />
      <h2 className="text-lg font-semibold">{textSlicer(title, 25)}</h2>

      <p className="text-xs text-gray-500 break-words">
        {textSlicer(description, 100)}
      </p>
      <div className="flex space-x-2 items-center my-4 ">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-slate-900 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-900 rounded-full cursor-pointer" />
      </div>
      <div className="flex justify-between items-center">
        <span>{price}</span>

        <Image
          imageUrl={imageURL}
          alt="photo"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5 object-center">
        <Button
          className="bg-indigo-700"
          width="w-full"
          onClick={() => console.log("done")}
        >
          Edit
        </Button>
        <Button className="bg-red-700 p-2" width="w-full">
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
