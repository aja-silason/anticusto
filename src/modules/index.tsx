import { Input } from "../common"

export const LoginScreen = () => {
    return (
        <div>
            Login
            <Input change={() => {}} label="E-mail ou Telefone" name="" value={"aa"}/>
            <Input change={() => {}} label="Password" name="" value="JaJaJ" type="password"/>
        </div>
    )
}