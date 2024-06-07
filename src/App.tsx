import { Button, Input } from "@headlessui/react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputList, productList } from "./data";
import { useState } from "react";

function App() {
  // -------------state--------------------//

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // -------------state--------------------//

  // -------------Render------------------//

  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

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
        />
      </div>
    );
  });
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

            <div className="flex items-center space-x-3 flex-cols ">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg  duration-300  p-2 w-full">
                Subimt
              </Button>
              <Button
                className="bg-gray-400 hover:bg-gray-500 duration-300 rounded-lg text-white p-2 w-full"
                onClick={() => {
                  setIsOpen(false);
                }}
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
