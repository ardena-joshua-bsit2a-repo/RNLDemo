import type { FC } from "react";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:h-11 sm:w-11 cursor-pointer"
        title="Close modal"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.04289 36.541305.65237 16.9318 5.65237 17.565 6.04289 17.955506.43342 18.346 7.06658 18.346 7.45711 17. 9555L11.9987 13.4139L16-5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 36.5438L13.4129 11.9997L17.955 7.4576018.3455 7.06707 18.3455 6.43391 17.955 6.64338C17.56455.65286 16.9313 5.65286 16.5488 6.04338L11.9987 10.5855L7.45711 6.043907.06658 5.65338 6.43342 5.65338 6.84289 6.043905.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.54132"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
};

export default ModalCloseButton;
