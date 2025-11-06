import { useEffect, useState } from "react";

export const Popup = ({ popupObj, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(!!(popupObj?.title && popupObj?.message));
  }, [popupObj]);

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Development notice"
    >
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative text-center">
        <span
          onClick={() => {
            setShowPopup(false);
            onClose?.();
          }}
          className="absolute top-3 right-3 font-bold hover:scale-125 cursor-pointer rounded-full p-0"
          aria-label="Close"
        >
          ✕
        </span>

        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {popupObj.title}
        </h2>
        <p className="mt-5 text-gray-600 dark:text-gray-300 text-sm">
          {popupObj.message}
        </p>

        <div className="flex justify-end">
          <button
            onClick={() => {
              setShowPopup(false);
              onClose?.();
            }}
            className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
