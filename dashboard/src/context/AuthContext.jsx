import {
  createContext,
  useContext,
  useState,
} from "react"

const AuthContext = createContext()

export const AuthProvider = ({
  children,
}) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin"))
  )

  return (
    <AuthContext.Provider
      value={{
        admin,
        setAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>
  useContext(AuthContext)