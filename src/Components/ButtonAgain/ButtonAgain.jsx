import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPlayerInfo } from "../../features/player/playerSlice";
import { clearGameHistory } from "../../features/player/historyGameSlice";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const ButtonAgain = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();

    const handleAgainClick = () => {
        dispatch(clearPlayerInfo());
        dispatch(clearGameHistory());
        navigate("/");
    }

    return(
        <Button
            type="submit"
            variant="outlined"
            onClick={handleAgainClick}
            sx={ {background: '#291111',
                border: '#767676 1px solid',
                color: '#ffffff',
                '&:hover': {
                    background: '#5d0e0e',
                    border: '#171414 1px solid',
                },
            } }>
                {t("buttonAgain.again")}
        </Button>
    )
};

export default ButtonAgain;