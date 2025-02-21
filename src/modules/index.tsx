import { Input, LoginContainer, SubmitButton } from "../common"

import logo from "./../assets/anticost-imagotipo.jpg";
import { useLogin } from "../common/hook";

export const LoginScreen = () => {

    const {data, handleChange, handleSubmit, isLoading} = useLogin();

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <LoginContainer>
                <div className="flex flex-col gap-[2em] mb-[2em] justify-center items-center">
                    <img src={logo} alt="Logo Anticusto System" className="w-[90px]"/>
                    <h2>Preencha os campos abaixo para poder acessar o sistema</h2>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[1em]">
                    <Input change={handleChange} label="E-mail ou Telefone" name="telephone" value={data?.telephone} key={0}/>
                    <Input change={handleChange} label="Password" name="password" value={data?.password} type="password" key={1}/>
                    <SubmitButton text="Entrar" isLoading={isLoading}/>
                </form>

            </LoginContainer>
        </div>
    )
}