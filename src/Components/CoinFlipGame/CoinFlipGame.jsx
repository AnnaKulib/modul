import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCompareBalance } from "../../hooks/useCompareBalance";
import { updateBalance } from "../../features/player/playerSlice";
import { addGame, updateBalanceChange } from "../../features/player/historyGameSlice";
import { Button } from "@mui/material";

import s from "./CoinFlipGame.module.css"

const CoinFlipGame = ({ player, bet, handleChoice, handlePlayAgain }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);
  const previousBalance = player.deposit;
  let currentBalance = player.balance;
  let isHeads;

  useCompareBalance(currentBalance, previousBalance);

  const handleFlipCoin = () => {
    let result;
    let win;
  
    if (choice) {
      isHeads = Math.random() < 0.5;
      win = (choice === "heads" && isHeads) || (choice === "tails" && !isHeads);
      result = win ? "win" : "lose";
      let change = win ? bet * 2 : -bet;

    dispatch(updateBalance(change));  
    dispatch(addGame({id: id, balanceChange: change}))   
    dispatch(updateBalanceChange({ gameId: id, balanceChange: change }));
    }
    setResult(result);
  };

  return (
    <>
      {!choice ? (
      <div>
        <Button
          type="submit"
          variant="outlined"
          onClick={() => handleChoice("heads", setChoice)}
          sx={ {background: '#291111',
              border: '#767676 1px solid',
              color: '#ffffff', 
              '&:hover': {
                background: '#5d0e0e',
                border: '#171414 1px solid',
              },
          }}>Орел
        </Button>
        <Button
          type="submit"
          variant="outlined"
          onClick={() => handleChoice("tails", setChoice)}
          sx={ {background: '#291111',
              border: '#767676 1px solid',
              color: '#ffffff', 
              '&:hover': {
                background: '#5d0e0e',
                border: '#171414 1px solid',
              },
          } }>Решка
        </Button>
      </div>
      ) : (
        <div className={s.textWrapper}>
          <p className={s.text}>Ваш вибір {choice}</p>
          <button className={s.btnAgain} onClick={handleFlipCoin}>Підкинути<img className={s.img} src="/img/coinFlip1.webp" alt="coin flip icon" /></button>
        </div>
      )}
      {result && (
        <div className={s.textWrapper}>
        <p className={s.text}>{result}</p>
      {result === "win" && 
        <p className={s.text}>Переможець: {isHeads ? "Heads" : "Tails"}</p>
      }
      <Button
        type="submit"
        variant="outlined"
        onClick={() => handlePlayAgain(setChoice, setResult)}
        sx={ {background: '#291111',
              border: '#767676 1px solid',
              color: '#ffffff',
              '&:hover': {
                background: '#5d0e0e',
                border: '#171414 1px solid',
              },
          } }>Підкинути знову
      </Button>
      </div>
      )}
    </>
  );
};

export default CoinFlipGame;
