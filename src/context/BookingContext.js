import { createContext, useReducer, useContext } from "react";

const BookingContext = createContext();

const initialState = {
  tickets: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const existing = state?.tickets?.find(t => t.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          tickets: state.tickets.map(t =>
            t.id === action.payload.id ? { ...t, count: t.count + 1 } : t
          ),
        };
      }
      return {
        ...state,
        tickets: [
          ...state.tickets,
          {
            id: action.payload.id,
            title: action.payload.title,
            discountPrice: action.payload.discountPrice,
            count: 1,
          },
        ],
      };
    }
    case "decrement": {
      return {
        ...state,
        tickets: state.tickets
          .map(t =>
            t.id === action.payload.id
              ? { ...t, count: Math.max(0, t.count - 1) }
              : t
          )
          .filter(t => t.count > 0),
      };
    }
    default:
      return state;
  }
}


export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCount = (id) => state.tickets.find(t => t.id === id)?.count || 0;
  const getTotal = () =>
    state.tickets.reduce((sum, t) => sum + t.count * t.discountPrice, 0);

  return (
    <BookingContext.Provider value={{ state, dispatch, getCount, getTotal }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
