import { FormEvent } from "react";
import { Input, LoginContainer, SubmitButton } from "../common"

import logo from "./../assets/anticost-imagotipo.jpg";

export const LoginScreen = () => {
    const handleSubmit = (e: FormEvent) => {
        e?.preventDefault();
        console.log("Cliquei aqui...");
    }
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <LoginContainer>
                <div className="flex flex-col gap-[2em] mb-[2em] justify-center items-center">
                    <img src={logo} alt="Logo Anticusto System" className="w-[90px]"/>
                    <h2>Preencha os campos abaixo para poder acessar o sistema</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input change={() => {}} label="E-mail ou Telefone" name="email" value={"aa"} key={0}/>
                    <Input change={() => {}} label="Password" name="password" value="JaJaJ" type="password" key={1}/>
                    <SubmitButton text="Entrar"/>
                </form>

            </LoginContainer>
        </div>
    )
}