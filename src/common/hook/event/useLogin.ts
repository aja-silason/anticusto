import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner"

type loginDataInput = {
    login: string,
    password: string
}

type loginDataOutput = {
    username: string,
    firstname: string,
    lastname: string,
    telefone: string,
    role: string,
    address: string,
    id: string,
    id_store: string,
}

export const useLogin = () => {

    const [data, setData] = useState<loginDataInput>({login: "", password: ""});
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e?.target;
        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = (e: FormEvent) => {
        e?.preventDefault();

        try {

            const payload: loginDataInput = {
                login: data?.login,
                password: data?.password
            } 

            const isValidate: Array<keyof loginDataInput> = ["login", "password"];
            for(const key of isValidate){
                if(payload[key] == undefined || payload[key] == null || payload[key] == "".trim()){
                    toast.info(`${key == "login" ? 'email ou telefone' : 'senha'} precisa ser verificado`);
                    return;
                }
            }

            console.log("Dados de user", payload)
            
        } catch (error) {
            toast.error("Erro ao fazer o login", { duration: 2000});
        }

    }

    return {
        data,
        handleChange,
        handleSubmit
    }
}