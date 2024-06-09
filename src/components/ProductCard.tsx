import { Iproduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProp {
  product: Iproduct;
}

const ProductCard = ({ product }: IProp) => {
  const { title, price, description, colors, imageURL } = product;

  return (
    <div className="border rounded-md p-2 flex flex-col max-w-[300px] mx-auto sm:m-0">
      <Image
        imageUrl={`/public/images/${imageURL}`}
        alt="photo"
        className="rounded-lg mb-2 h-36 object-cover"
      />
      <h2 className="text-lg font-semibold">{textSlicer(title, 25)}</h2>

      <p className="text-xs text-gray-500 break-words">
        {textSlicer(description, 100)}
      </p>
      <div className="flex space-x-2 items-center my-4 ">
        {colors.map((color) => (
          <CircleColor key={color} color={color} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span>{price}</span>

        <Image
          imageUrl={`/public/images/${imageURL}`}
          alt="photo"
          className="w-10 h-10 rounded-full object-cover border border-black"
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
