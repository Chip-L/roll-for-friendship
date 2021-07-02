import React, { createContext, useContext } from "react";
import { useUserReducer } from "./userReducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useUserReducer({
    playerLevels: [
      { name: "Beginner", description: "New player, I don't know the rules" },
      { name: "Low Level", description: "I know the basics of the rules" },
      { name: "Mid Level", description: "I know the obscure rules" },
      { name: "Advanced Level", description: "I like to homebrew the rules" },
    ],

    stateList: [
      { abrv: "AL", state: " Alabama" },
      { abrv: "AK", state: " Alaska" },
      { abrv: "AZ", state: " Arizona" },
      { abrv: "AR", state: " Arkansas" },
      { abrv: "CA", state: " California" },
      { abrv: "CO", state: " Colorado" },
      { abrv: "CT", state: " Connecticut" },
      { abrv: "DE", state: " Delaware" },
      { abrv: "FL", state: " Florida" },
      { abrv: "GA", state: " Georgia" },
      { abrv: "HI", state: " Hawaii" },
      { abrv: "ID", state: " Idaho" },
      { abrv: "IL", state: " Illinois" },
      { abrv: "IN", state: " Indiana" },
      { abrv: "IA", state: " Iowa" },
      { abrv: "KS", state: " Kansas" },
      { abrv: "KY", state: " Kentucky" },
      { abrv: "LA", state: " Louisiana" },
      { abrv: "ME", state: " Maine" },
      { abrv: "MD", state: " Maryland" },
      { abrv: "MA", state: " Massachusetts" },
      { abrv: "MI", state: " Michigan" },
      { abrv: "MN", state: " Minnesota" },
      { abrv: "MS", state: " Mississippi" },
      { abrv: "MO", state: " Missouri" },
      { abrv: "MT", state: " Montana" },
      { abrv: "NE", state: " Nebraska" },
      { abrv: "NV", state: " Nevada" },
      { abrv: "NH", state: " New Hampshire" },
      { abrv: "NJ", state: " New Jersey" },
      { abrv: "NM", state: " New Mexico" },
      { abrv: "NY", state: " New York" },
      { abrv: "NC", state: " North Carolina" },
      { abrv: "ND", state: " North Dakota" },
      { abrv: "OH", state: " Ohio" },
      { abrv: "OK", state: " Oklahoma" },
      { abrv: "OR", state: " Oregon" },
      { abrv: "PA", state: " Pennsylvania" },
      { abrv: "RI", state: " Rhode Island" },
      { abrv: "SC", state: " South Carolina" },
      { abrv: "SD", state: " South Dakota" },
      { abrv: "TN", state: " Tennessee" },
      { abrv: "TX", state: " Texas" },
      { abrv: "UT", state: " Utah" },
      { abrv: "VT", state: " Vermont" },
      { abrv: "VA", state: " Virginia" },
      { abrv: "WA", state: " Washington" },
      { abrv: "WV", state: " West Virginia" },
      { abrv: "WI", state: " Wisconsin" },
      { abrv: "WY", state: " Wyoming" },
    ],

    classList: [],

    raceList: [],

    roleList: [],

    currentUser: {},
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
