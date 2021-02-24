import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react';
import { CognitoUser } from "@aws-amplify/auth"
import { AuthState } from '@aws-amplify/ui-components'

interface AuthContextProps {
    readonly authState: AuthState,
    readonly user: CognitoUser | undefined,
    setAuthState: (newAuthState: AuthState) => void,
    setUser: (newUser: CognitoUser | undefined) => void
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState<AuthState>();
    const [user, setUser] = useState<CognitoUser | undefined>();

    return (
        <AuthContext.Provider value={{
            authState,
            setAuthState,
            user,
            setUser
        }} >            
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}