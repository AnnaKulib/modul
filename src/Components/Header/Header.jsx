import { useSelector } from "react-redux";
import { getPlayer } from "../../features/player/playerSlice";
import ButtonAgain from "../ButtonAgain";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

import s from "./Header.module.css";

const Header = () => {
const player = useSelector(getPlayer);
const { t } = useTranslation();

    return (
        <header className={s.header}>
            <img className={s.img} src={player.logo?.dataUrl ?? ""} alt="logo" />
            <p>
                <span>{player.name}</span>, {t("header.deposit")}: 
                <span>{player.deposit}$</span>  {t("header.balance")}: 
                <span>{player.balance}$</span>
            </p>
            <LanguageSwitcher />
            <ButtonAgain />
        </header>
    );
};

export default Header;