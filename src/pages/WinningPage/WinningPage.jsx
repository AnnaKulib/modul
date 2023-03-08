import React from "react";
import { getPlayer } from "../../features/player/playerSlice";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import ButtonAgain from "../../Components/ButtonAgain";

import s from "./WinningPage.module.css";

const WinningPage = () => {
    const player = useSelector(getPlayer);
    
    return (
        <>
            <section className={s.section}>
                <Header />
                <div className={s.textWrapper}>
                    <h2 className={s.title}>Ви виграли! </h2>
                    <p className={s.text}>Вітаємо {player.name}, ви змогли подвоїти ваш депозиз з {player.deposit}$ до {player.balance}$</p>
                    <ButtonAgain />
                </div>
            </section>
        </>
    )
}

export default WinningPage;