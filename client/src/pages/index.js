import Currency from "./Currency";
import BMI from "./BMI";

// Probability
import CoinFlip from "./Prob/CoinFlip";
import Dice from "./Prob/Dice";
import HigherLower from "./Prob/HigherLower";
import Spinner from "./Prob/Spinner";

// Coding
import Animation from "./Coding/Animation";
import Binary from "./Coding/Binary";
import Landing from "./Landing";

const pages = [
  {
    component: Landing,
    path: "/apps",
  },
  {
    component: Currency,
    path: "/apps/currency",
  },
  {
    component: BMI,
    path: "/apps/bmi",
  },
  // Probability
  {
    component: CoinFlip,
    path: "/apps/coin-flip",
  },
  {
    component: Dice,
    path: "/apps/dice",
  },
  {
    component: HigherLower,
    path: "/apps/higher-lower",
  },
  {
    component: Spinner,
    path: "/apps/wheel",
  },
  // Coding
  {
    component: Animation,
    path: "/apps/animation",
  },
  {
    component: Binary,
    path: "/apps/binary",
  },
];

export default pages;
