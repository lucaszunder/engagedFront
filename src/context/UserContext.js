import React, { createContext, useCallback, useState, useContext } from "react";

var UserStateContext = createContext();
var UserDispatchContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token")
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <AuthProvider>{children}</AuthProvider>
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export { UserProvider };

// ###########################################################

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const role = localStorage.getItem("@engagED:role");

    if (role) {
      return JSON.parse(role);
    }

    return { role: "none" };
  });

  const signIn = useCallback(async (role, history) => {
    try {
      localStorage.setItem("@engagED:role", JSON.stringify({ role }));

      setData({ role });
      history.push("/app/");
    } catch {}
  }, []);

  const signOut = useCallback(history => {
    localStorage.removeItem("@engagED:role");

    setData({ role: "none" });
    console.log();
    //history.push("/login");
  }, []);

  return (
    <AuthContext.Provider value={{ role: data.role, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
