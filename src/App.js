import "./css/common.scss";
import "./css/App.css";
import { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
function App() {
  return (
    <div className="App max-w-md m-auto tracking-tight text-lg  flex flex-col flex-1  ">
      <header className="py-4 px-2 fixed bg-white w-[100%] sm:w-[448px] border-b ">
        <section className="flex justify-between items-center bg-white ">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 overflow-hidden rounded-xl ">
              <img
                src="https://picsum.photos/id/1/200/300"
                alt="img"
                className=" object-cover"
              />
            </div>
            <p>Anna Baker</p>
          </div>
          <div>
            <div className="flex justify-between space-x-2 text-black cursor-pointer">
              <FiSearch />
              <FiBell />
            </div>
          </div>
        </section>
      </header>
      <main className="bg-white flex-1 h-40 bg-slate-50">
        <p className="p-4 my-20">
          <button
            onClick={() => {
              console.log(0);
            }}
          >
            button
          </button>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          similique praesentium nihil, id vel ratione? Iusto commodi error autem
        </p>
      </main>
      <footer className="border-t bg-white fixed bottom-0  w-[100%] sm:w-[448px] p-4">
        <div className="flex items-center justify-between py-1 px-4 cursor-pointer">
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
