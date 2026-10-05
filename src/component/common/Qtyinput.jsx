import { MdDelete } from "react-icons/md";

const QtyInput = ({ incrementQty, qty, decrementQty }) => {
    return (
        <div className="flex flex-row  md:h-10 h-6 rounded-lg relative bg-transparent mt-1 quantity">
            <button
                data-action="increment"
                onClick={incrementQty}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
                <span className="m-auto md:text-2xl text-base font-thin">+</span>
            </button>
            <input
                
                className="focus:outline-none text-center md:w-10 w-5  bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                name="quantity"
                value={qty}
                onChange={() => {}}
            ></input>

            <button
                data-action="decrement"
                onClick={decrementQty}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
                {
                    qty === 1 ? (<div className="flex items-center justify-center"> <MdDelete className="text-xl"/></div>):(<span className="m-auto md:text-2xl text-base font-thin">−</span>)
                }
                
            </button>
        </div>
    );
};

export default QtyInput;
