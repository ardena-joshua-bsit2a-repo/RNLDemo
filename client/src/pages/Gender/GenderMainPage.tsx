import { useEffect, useState, useCallback } from "react";
import AddGenderForm from "./components/AddGenderForm";
import GenderList from "./components/GenderList";
import ToastMessage from "../../components/ToastMessage/ToastMessage";

const GenderMainPage = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastMessageIsVisible, setToastMessageIsVisible] = useState(false);

  const handleShowToastMessage = useCallback((message: string) => {
    setToastMessage(message);
    setToastMessageIsVisible(true);
  }, []);

  const handleCloseToastMessage = useCallback(() => {
    setToastMessageIsVisible(false);
  }, []);

  useEffect(() => {
    document.title = "Gender Main Page";
  }, []);

  return (
    <>
      <ToastMessage
        message={toastMessage}
        isVisible={toastMessageIsVisible}
        onClose={handleCloseToastMessage}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <AddGenderForm onGenderAdded={handleShowToastMessage} />
        </div>
        <div className="col-span-1">
          <GenderList />
        </div>
      </div>
    </>
  );
};

export default GenderMainPage;
