import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react'

function Login() {
    return(
        <AmplifyAuthenticator usernameAlias={"email"}>
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

export default Login;