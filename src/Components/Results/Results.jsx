import _ from "lodash";
import { getGameNameById } from "../../helpers/getGameNameById";
import { useTranslation } from "react-i18next";
import s from "./Results.module.css"

const Results = ({history}) => {
    const { t } = useTranslation();

    const getChangedResults = _.map(history.games, (game) => {
        const gameName = getGameNameById(game.id);
        return(
            <div key={game.id}>
                {gameName && <h3 className={s.text}>{gameName}</h3>}
                <p className={s.text}>{t("results.balance")}: {game.balanceChange}$</p>
            </div>
        )
    });

    return (
        <div>
            <h2 className={s.title}>{t("results.results")}:</h2>
            {getChangedResults}
        </div>
    );
};

export default Results;