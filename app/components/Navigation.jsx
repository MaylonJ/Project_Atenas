"use client"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-cover bg-center">
      <div className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow ">
            <button
              className="  lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              onClick={() => router.push("/")}
            >
              Inicio
            </button>
            <button
              className="  lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              onClick={() => router.push("/archivos")}
            >
              Archivos
            </button>
            <button
              className=" lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              onClick={() => router.push("/autores")}
            >
              Autores
            </button>
            <button
              className=" lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              onClick={() => router.push("/avisos")}
            >
              Avisos
            </button>
            <button
              className=" lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              onClick={() => router.push("/acerca")}
            >
              Acerca de:
            </button>
            <button className=" lg:inline-block lg:mt-0 text-white hover:text-gray-400">
              Buscar
            </button>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="flex flex-col lg:flex-row items-end" ref={menuRef}>
              <div className="relative lg:mr-4">
                <button
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:hidden"
                  onClick={toggleMenu}
                >
                  Menú
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-800 rounded-md shadow-lg z-10">
                    <button
                      className="block px-4 py-2 text-sm text-white rounded-md hover:bg-gray-900"
                      onClick={() => router.push("/iniciar-sesion")}
                    >
                      Iniciar sesión
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-white rounded-md hover:bg-gray-900"
                      onClick={() => router.push("/registrarse")}
                    >
                      Registrarse
                    </button>
                  </div>
                )}
              </div>
              <div className="hidden lg:flex">
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mr-4">
                  Iniciar sesión
                </button>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;