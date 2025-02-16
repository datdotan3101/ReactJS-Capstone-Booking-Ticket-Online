import { createSlice } from "@reduxjs/toolkit";
import data from "./danhSachGhe.json";
import { list } from "postcss";
const initialState = {
  listSeats: data,
  listSeatSelected: [],
};

const findIndexSeat = (data, numberSeat) => {
  return data.findIndex((seat) => seat.soGhe === numberSeat);
};

const bookingTicketSlice = createSlice({
  name: "bookingTicketSlice",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      const { payload } = action;
      const index = findIndexSeat(state.listSeatSelected, payload.soGhe);
      const listSeatsSelectedClone = [...state.listSeatSelected];
      if (index !== -1) {
        // remove seat
        listSeatsSelectedClone.splice(index, 1);
      } else {
        // push seat
        listSeatsSelectedClone.push(payload);
      }
      state.listSeatSelected = listSeatsSelectedClone;
    },
  },
});
export const { setSelected } = bookingTicketSlice.actions;
export default bookingTicketSlice.reducer;
