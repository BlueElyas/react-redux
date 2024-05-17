import { counterSlice } from "../features/counter/counterSlice";
import { randomCocktailSlice } from "../features/randomCocktail/randomCocktailSlice";
import { textCaptureSlice } from "../features/textCapture/textCaptureSlice";

// console.log(randomCocktailSlice);

const reducers = {
  textCounter: textCaptureSlice.reducer,
  counter: counterSlice.reducer,
  randomCocktail: randomCocktailSlice.reducer,
};

export default reducers;
