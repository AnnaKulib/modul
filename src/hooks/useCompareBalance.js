import { useNavigate } from "react-router-dom";

export const useCompareBalance = (currentBalance, previousBalance) => {
  const navigate = useNavigate();

  if (currentBalance >= previousBalance * 2) {
    navigate("/winning");
  }
  if (currentBalance <= 0) {
    navigate("/try-again");
  }
};
