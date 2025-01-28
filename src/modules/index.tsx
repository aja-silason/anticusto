import { Input, LoginContainer } from "../common"

export const LoginScreen = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <LoginContainer>
                <Input change={() => {}} label="E-mail ou Telefone" name="" value={"aa"}/>
                <Input change={() => {}} label="Password" name="" value="JaJaJ" type="password"/>
            </LoginContainer>
        </div>
    )
}