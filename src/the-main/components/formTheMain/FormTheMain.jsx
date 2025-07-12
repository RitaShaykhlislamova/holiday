import React from "react";
import './formTheMain.css';

const FormTheMain = () => {
  return (  
    
<div className="formTheMain">
  <div className="form-title">Зворотній зв’язок</div>
  <div className="form-label name-label">Ім’я</div>
  <div className="form-input name-input">
    <div className="placeholder">Введіть ім’я</div>
  </div>
  <div className="form-label phone-label">Номер телефону</div>
  <div className="form-input phone-input">
    <div className="placeholder">Введіть номер телефону</div>
  </div>
  <div className="form-footer">
    <div className="submit-button">Запросити виклик</div>
  </div>
</div>

);
};
export default FormTheMain;