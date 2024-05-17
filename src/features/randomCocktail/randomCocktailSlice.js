import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomCocktail = createAsyncThunk(
  "randomCocktail/fetchRandomCocktail",
  async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    const data = await response.json();
    // console.log(data);
    return data;
  }
);

export const randomCocktailSlice = createSlice({
  name: "randomCocktail",
  initialState: {
    drinksArr: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomCocktail.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
        state.drinksArr.push(action.payload);
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchRandomCocktail.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default randomCocktailSlice.reducer;
