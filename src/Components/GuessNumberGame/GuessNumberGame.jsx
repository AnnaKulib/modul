import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCompareBalance } from "../../hooks/useCompareBalance";
import { updateBalance } from "../../features/player/playerSlice";
import { addGame, updateBalanceChange } from "../../features/player/historyGameSlice";
import { times } from "lodash";
import { Button } from "@mui/material";

import s from "./GuessNumberGame.module.css";

const GuessNumberGame = ({ player, bet, handleChoice, handlePlayAgain }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);
  const previousBalance = player.deposit;
  let currentBalance = player.balance;
  let winningNumber;

  useCompareBalance(currentBalance, previousBalance);

  const handleGuessNumber = () => {
    let result;
    let win;

    if (choice != null) {
      winningNumber = Math.floor(Math.random() * 10) + 1;
      win = choice === winningNumber;
      result = win ? "win" : "lose";
      let change = win ? bet * 10 : -bet;
      
      dispatch(updateBalance(change));
      dispatch(addGame({id: id, balanceChange: change})) 
      dispatch(updateBalanceChange({ gameId: id, balanceChange: change }));
    }
      setResult(result);
  };

  return (
    <>
      {!choice ? (
        <div className={s.textWrapper}>
          <p className={s.text}>Оберіть номер:</p>
          {times(10, (i) => (
            <Button
              key={i}
              type="submit"
              variant="outlined"
              onClick={() => handleChoice(i + 1, setChoice)}
              className={s.btnAgain}
              sx={ {background: '#291111',
                    border: '#767676 1px solid',
                    color: '#ffffff', 
                    '&:hover': {
                      background: '#5d0e0e',
                      border: '#171414 1px solid',
                    },
                  } }>{i + 1}
            </Button>
          ))}
        </div>
      ) : (
        <div className={s.textWrapper}>
          <p className={s.text}>Обраний вами номер: {choice}</p>
          <Button
            type="submit"
            variant="outlined"
            onClick={handleGuessNumber}
            className={s.btnAgain}
            sx={ {background: '#291111',
                  border: '#767676 1px solid',
                  color: '#ffffff', 
                  '&:hover': {
                    background: '#5d0e0e',
                    border: '#171414 1px solid',
                  },
            } }>Вгадав?
          </Button>
        </div>
      )}
      {result && (
        <div className={s.textWrapper}>
          <p className={s.text}>{result === "win" ? "Ви виграли!" : "Ви програли :("}</p>
          <Button
            type="submit"
            variant="outlined"
            onClick={() => handlePlayAgain(setChoice, setResult)}
            className={s.btnAgain}
            sx={ {background: '#291111',
                  border: '#767676 1px solid',
                  color: '#ffffff',
                  '&:hover': {
                    background: '#5d0e0e',
                    border: '#171414 1px solid',
                  },
            } }>Обрати знову
          </Button>
        </div>
      )}
    </>
  );
};

export default GuessNumberGame;
