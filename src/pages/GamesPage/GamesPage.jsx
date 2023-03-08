import { useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getHistory } from "../../features/player/historyGameSlice";
import Header from "../../Components/Header";
import Results from "../../Components/Results";
// import { LanguageContext } from "../../LanguageContext";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";

import s from "./GamesPage.module.css";

const GamesPage = () => {
    const history = useSelector(getHistory);
    // const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    useEffect(() => {
      const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }, []);
  
  return (
    <>
      <div className={s.section}>
        <Header/>
        <div className={s.main}>
          <div className={s.flexColBlock}>
            <div className={s.textWrapper}>
              <h1 className={s.title}>{t("gamesPage.title")}</h1>   
            </div>
            <div className={`swiper-container ${s.swiperContainer}`}>
              <div className="swiper-wrapper">
              {/* <div className="swiper-slide"><Link to="/games/1"><div className={s.gameCard}><img className={`${s.img} ${s.imgBig}`} src="/img/coinFlip1.webp" alt="game logo" />{language === 'en' ? <h2 className={`${s.title} ${s.wrapper}`}>Flip Coin</h2> : <h2 className={`${s.title} ${s.wrapper}`}>Монетка</h2>}</div></Link></div> */}
              <div className="swiper-slide"><Link to="/games/1"><div className={s.gameCard}><img className={`${s.img} ${s.imgBig}`} src="/img/coinFlip1.webp" alt="game logo" /><h2 className={`${s.title} ${s.textWrapper}`}>{t("gamesPage.coinFlip")}</h2></div></Link></div>
              <div className="swiper-slide"><Link to="/games/2"><div className={s.gameCard}><img className={`${s.img} ${s.imgBig}`} src="/img/guessTheDoor1.png" alt="game logo" /><h2 className={`${s.title} ${s.textWrapper}`}>{t("gamesPage.guessDoor")}</h2></div></Link></div>
              <div className="swiper-slide"><Link to="/games/3"><div className={s.gameCard}><img className={s.img} src="/img/magic-numbers.png" alt="game logo" /><h2 className={`${s.title} ${s.textWrapper}`}>{t("gamesPage.guessNumber")}</h2></div></Link></div>
              </div>
              <div className={`swiper-button-prev ${s.swiperButtonPrev}`}></div>
              <div className={`swiper-button-next ${s.swiperButtonNext}`}></div>
            </div>
            <div className={s.textWrapper}>
              <p className={s.text}>{t("gamesPage.goal")}</p>
            </div>
          </div> 
          {history.games.length > 0 && (
            <div className={`${s.textWrapper} ${s.flexColBlock} ${s.aside}`}>
              <Results history={history} />
            </div>
          )}
          
        </div>
      </div>   
    </>
    )
}

export default GamesPage;