export const handlePlayAgain = (setChoice, setResult) => {
  setChoice(null);
  setResult(null);
};

export const handleChoice = (choice, setChoice) => {
  setChoice(choice);
};

export const checkBalance = (playerBalance, betAmount) => {
  if (playerBalance < betAmount) {
    return <p>На вашому балансі недостатньо коштів для гри</p>;
  }
  return null;
};
