import { createContext } from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const API_MONDAY = "https://api.monday.com/v2/";

/**
 * @name MondayContext
 * @description Initialize Monday context.
 */
export const initialState = {
  isClientAuthorized: false,
  isDevMode: false,
  url: API_MONDAY,
  client: new GraphQLClient({
    url: API_MONDAY,
  }),
  token: undefined,
};

const Context = createContext(initialState);

export default Context;
