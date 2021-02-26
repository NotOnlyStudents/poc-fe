import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { CognitoUser } from "@aws-amplify/auth"

import { useAuthContext } from "context/authContext";

function Authenticator() {
    const { setAuthState, setUsername } = useAuthContext();
    const router = useRouter()
    
    useEffect(() => {
        return onAuthUIStateChange((nextAuthState: AuthState, authData: CognitoUser) => {            
            if (nextAuthState === AuthState.SignedIn) {
                setAuthState(nextAuthState);
                setUsername(authData.getUsername());
                
                router.replace('/');
            }
        });
    }, []);
    
    return(
        <AmplifyAuthenticator 
            usernameAlias={"email"}            
        >
            <div slot="federated-buttons"></div>
            <AmplifySignUp
                slot="sign-up"
                usernameAlias="email"
                formFields={[
                    { type: "email" },
                    { type: "password" }
                ]}
            />
            <AmplifySignIn slot="sign-in" usernameAlias="email" />
        </AmplifyAuthenticator>
    );
}

export default Authenticator;