import { Button, Input } from "@headlessui/react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputList, productList } from "./data";
import { ChangeEvent, useState } from "react";
import { Iproduct } from "./interfaces";

import { porductValidation } from "./vaildation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";

function App() {
  // -------------state--------------------//

  const defaultProducObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  const [products, setProducts] = useState<Iproduct[]>(productList);
  const [product, setProduct] = useState<Iproduct>(defaultProducObject);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  const [tempColors, setTempColors] = useState<string[]>([]);

  // console.log(errors);

  const [isOpen, setIsOpen] = useState(false);

  // -------------state--------------------//
  // ------------handlers-----------------//
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // console.log(event.target.value);

    setErrors({
      ...errors,
      [name]: "",
    });

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const renderProductList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const submitHandler = () => {
    // console.log(product);

    const { title, description, price, imageURL } = product;

    const errors = porductValidation({
      title,
      description,
      imageURL,
      price,
    });

    // console.log(errors);

    //** check if any propery has abalue of "" && check if all properies a value of ""

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev,
    ]);
    setProduct(defaultProducObject);
    setTempColors([]);
    setIsOpen(false);
  };

  const onCancel = () => {
    // console.log("cancel");
    setProduct(defaultProducObject);
    setIsOpen(false);
  };
  // ------------handlers-----------------//

  // -------------Render------------------//

  const renderFormInputList = formInputList.map((input) => {
    const { id, label, name, type } = input;

    return (
      <div key={id} className="flex flex-col">
        <label htmlFor={id} className="mb-1 font-medium text-gray-700">
          {label}
        </label>
        <Input
          className="border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md"
          type={type}
          name={name}
          id={id}
          value={product[input.name]}
          onChange={onChangeHanlder}
        />
        <ErrorMessage msg={errors[input.name]} />
      </div>
    );
  });

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
        } else {
          setTempColors((prev) => {
            return [...prev, color];
          });
        }
      }}
    />
  ));

  // console.log(tempColors);

  // -------------Render------------------//

  return (
    <main className="container ">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-md  duration-300  p-2 w-full"
        onClick={openModal}
      >
        Add
      </Button>
      <div className=" rounded-md p-2 m-5 grid gird-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
          <form className="space-y-3">
            {renderFormInputList}
            <div className="flex items-center my-4 flex-wrap gap-1 ">
              {tempColors.map((color) => (
                <span
                  key={color}
                  style={{ backgroundColor: color }}
                  className="text-white p-1 rounded-lg"
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="flex  items-center my-4 gap-1 flex-wrap ">
              {renderProductColors}
            </div>

            <div className="flex items-center space-x-3 flex-cols ">
              <Button
                onClick={submitHandler}
                className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg  duration-300  p-2 w-full"
              >
                Subimt
              </Button>
              <Button
                className="bg-gray-400 hover:bg-gray-500 duration-300 rounded-lg text-white p-2 w-full"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
        {renderProductList}
      </div>
    </main>
  );
}

export default App;
