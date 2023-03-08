import React from "react";
import { getPlayer } from "../../features/player/playerSlice";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import ButtonAgain from "../../Components/ButtonAgain";

import s from "./TryAgainPage.module.css";

const TryAgainPage = () => {
    const player = useSelector(getPlayer);

    return (
        <>
            <section className={s.section}>
                <Header />
                <div className={s.textWrapper}>
                <h2 className={s.title}>Ви програли :( </h2>
                <p className={s.text}>На жаль, {player.name}, ви не змогли подвоїти ваш депозиз {player.deposit}$. Ваш баланс {player.balance}$ недостатній для продовження гри. Спробуйте ще!</p>
                <ButtonAgain />
            </div>
            </section> 
        </>
    )
}

export default TryAgainPage;
