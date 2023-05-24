"use client";
import { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";

const LeftSidebar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Botón de barra lateral para pantallas pequeñas */}
      <button
        type="button"
        className="block md:hidden fixed z-50 right-0 top-0 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleModal}
      >
        Abrir barra lateral
      </button>

      {/* Barra lateral */}
      <div className="hidden md:block bg-white border-r-2 border-gray-300 py-4 px-6 w-1/4">
        <div className="mb-8">
          {/* Sección "Acerca de" */}
          <h2 className="text-lg font-bold mb-2">Acerca de</h2>
          <p>Esta es una breve descripción del sitio web.</p>
        </div>

        <div className="mb-8">
          {/* Sección "Contacto" */}
          <h2 className="text-lg font-bold mb-2">Contacto</h2>
          <p>
            Puede ponerse en contacto con nosotros a través de los siguientes
            medios:
          </p>
          <ul className="mt-2">
            <li>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-700"
              >
                Correo electrónico
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-700"
              >
                Teléfono
              </Link>
            </li>
          </ul>
        </div>

        <div>
          {/* Sección de búsqueda */}
          <h2 className="text-lg font-bold mb-2">Buscar</h2>
          <form>
            <input
              type="text"
              placeholder="Ingrese una palabra clave"
              className="w-full border border-gray-300 rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      {/* Modal de barra lateral para pantallas pequeñas */}
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-r-2 border-gray-300 py-4 px-6 w-1/2 md:hidden text-center"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-75 z-50"
      >
        <div className="mb-8">
          {/* Sección "Acerca de" */}
          <h2 className="text-lg font-bold mb-2">Acerca de</h2>
          <p>Esta es una breve descripción del sitio web.</p>
        </div>

        <div className="mb-8">
          {/* Sección "Contacto" */}
          <h2 className="text-lg font-bold mb-2">Contacto</h2>
          <p>
            Puede ponerse en contacto con nosotros a través de los siguientes
            medios:
          </p>
          <ul className="mt-2">
            <li>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-700"
              >
                Correo electrónico
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-700"
              >
                Teléfono
              </Link>
            </li>
          </ul>
        </div>

        <div>
          {/* Sección de búsqueda */}
          <h2 className="text-lg font-bold mb-2">Buscar</h2>
          <form>
            <input
              type="text"
              placeholder="Ingrese una palabra clave"
              className="w-full border border-gray-300 rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Buscar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LeftSidebar;
