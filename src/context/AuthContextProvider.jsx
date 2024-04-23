import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const authValue = {};
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
