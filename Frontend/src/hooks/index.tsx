import { ReactNode } from "react";
import { UserProvider } from "./UserContext";

type AppProviderProps = {
    children: ReactNode;
}

const AppProvider = ({children}: AppProviderProps) => {
    return(
        <UserProvider>
            {children}
        </UserProvider>
    );
}

export default AppProvider;