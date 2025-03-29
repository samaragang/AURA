import { useState } from "react";
import './author-application.css';
import authorApplicationImage from './../../images/img/author-application.png';
import CustomButton from './../ui/CustomButton';
const AuthorApplication = () => {
  const [telegram, setTelegram] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Отправленные данные:", { telegram, files });
  };

  return (
    <div className="author-application">
      <div className="container">
        <div className="author-application__inner">
          <div className="author-application__content">
            <h2 className="section__title">Стать автором</h2>
            <p className="author-application__subtitle">
              Если ты художник или стремишься им стать — добро пожаловать к нам!
            </p>
            <p className="author-application__description">
              Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме. Если наши кураторы решат, что нам по пути,
              то мы обязательно свяжемся с тобой и обговорим условия сотрудничества! <strong>Удачи!</strong>
            </p>
            <div className="author-application__images">
              <img src={authorApplicationImage} alt="Иллюстрация" className="author-application__image" />
            </div>
          </div>
          <form className="author-application__form" onSubmit={handleSubmit}>
            <label className="author-application__upload">
              <input
                type="file"
                className="author-application__input"
                accept=".jpeg, .png"
                multiple
                onChange={handleFileChange}
              />
              <div className="author-application__upload-button">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.4081 16.5919H40V23.4081H23.4081V40H16.5919V23.4081H0V16.5919H16.5919V0H23.4081V16.5919Z" fill="#EDEDF2" />
                </svg>
              </div>
              <span className="author-application__upload-text">Прикрепить работы (.jpeg / .png)</span>
            </label>
            <input
              type="text"
              className="author-application__telegram"
              placeholder="@telegram_nickname"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
            <CustomButton type="submit">
              Отправить
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorApplication;
