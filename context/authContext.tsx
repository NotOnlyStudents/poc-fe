import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react';
import { CognitoUser } from "@aws-amplify/auth"
import { AuthState } from '@aws-amplify/ui-components'

interface AuthContextProps {
    readonly authState: AuthState,
    readonly username: string | undefined,
    setAuthState: (newAuthState: AuthState) => void,
    setUsername: (newUsername: string | undefined) => void
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState<AuthState>();
    const [username, setUsername] = useState<string | undefined>();

    return (
        <AuthContext.Provider value={{
            authState,
            setAuthState,
            username,
            setUsername
        }} >            
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}