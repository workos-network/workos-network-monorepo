/* --- Global --- */
import React, { useContext, useReducer, useEffect, useState } from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";

/* --- Local --- */
import * as actionList from "./actions";
import Context, { initialState } from "./Context";
import reducer from "./lib/reducer";
import { enhanceActions } from "./lib/middleware";
import {
  AUTHORIZE_CLIENT,
  ENABLE_DEV_MODE,
  CONNECT_CLIENT,
  SET_TOKEN,
} from "./lib/types";

/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {String} url
 * @param {String} token
 */
const Provider = ({ children, url, token, devMode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    if (devMode) {
      dispatch({
        type: ENABLE_DEV_MODE,
      });
    }
    // if (!url && token) {
    //   dispatch({
    //     type: AUTHORIZE_CLIENT,
    //     payload: { token },
    //   });
    // }
    // if (url && token) {
    //   dispatch({
    //     type: CONNECT_CLIENT,
    //     payload: {
    //       url,
    //       token,
    //     },
    //   });
    // }
  }, []);

  React.useMemo(async () => {
    if (process.browser) {
      if (window.localStorage) {
        const token = window.localStorage.getItem("token");
        if (token) {
          dispatch({
            type: SET_TOKEN,
            payload: { token },
          });
        }
      }
    }
  }, []);

  React.useEffect(() => {
    if (state.token) {
      console.log(state.token, "state.token2");
      dispatch({
        type: AUTHORIZE_CLIENT,
        payload: { token: state.token },
      });
    }
  }, [state.token]);

  const actions = enhanceActions(actionList, state, dispatch);

  React.useEffect(() => {
    console.log(state, "monday state");
  }, [state]);

  return (
    <ClientContext.Provider value={state.client}>
      <Context.Provider
        value={{
          ...actions,
          ...state,
        }}
      >
        {children}
      </Context.Provider>
    </ClientContext.Provider>
  );
};

export default Provider;
