import { Button } from "@headlessui/react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
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
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-md  duration-300  p-2 w-full">
              Subimt
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-800 duration-300 rounded-md text-white p-2 w-full"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </Modal>
        {renderProductList}
      </div>
    </main>
  );
}

export default App;
