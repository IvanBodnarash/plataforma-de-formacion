import { useContext } from "react";
import { traducciones } from "../data/dictionary";
import LanguageContext from "../context/LanguageContext";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const langStorage = localStorage.getItem("lang");
  const t = traducciones[langStorage];
  return (
    <div className="home-page-container text-light">
      <h1 className="fs-1">🎓 {t.welcomeContent.header1}</h1>
      <div className="fs-5 d-flex flex-row gap-4">
        <div className="w-50">{t.welcomeContent.description1}</div>
        <ul className="list-unstyled">
          {t.welcomeContent.list1.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      </div>
      <h1 className="fs-1">🚀 {t.welcomeContent.header2}</h1>
      <div className="fs-5 d-flex flex-row gap-4">
        <div className="w-50">{t.welcomeContent.description1}</div>
        <ul className="list-unstyled">
          {t.welcomeContent.list1.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
