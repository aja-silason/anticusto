import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner"
import { accessdata } from "../mock/access"
import { USER_DATA_ROLE, USER_DATA_STORAGE, USER_TOKEN_STORAGE } from "../../utils/storageVariables"
import { MOCKTOKEN } from "../mock/mocktoken"
import { useNavigate } from "react-router-dom"

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
    password?: string,
    token: string
}

export const useLogin = () => {

    const [data, setData] = useState<loginDataInput>({login: "", password: ""});

    const navigate = useNavigate();
    
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

            //o endpoint de login vai aqui...

            if(payload?.login == accessdata?.login && payload?.password == accessdata?.password){
                const userdata: loginDataOutput = {
                    id: "wewe-121w-232d-232e-323e",
                    username: "ananiaaugusto",
                    firstname: "Anania",
                    lastname: "Augusto",
                    address: "Luanda, Viana",
                    telefone: "944996909",
                    role: "saler",
                    password: undefined,
                    id_store: "saasa-232e-ddae2-23er",
                    token: MOCKTOKEN
                }

                localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(userdata));
                localStorage.setItem(USER_DATA_ROLE, JSON.stringify(userdata?.role));
                localStorage.setItem(USER_TOKEN_STORAGE, JSON.stringify(userdata?.token));

                if(userdata?.role == "saler"){
                    navigate("/sale", {replace: true});
                } else if(userdata?.role == "stock"){
                    navigate("/stock", {replace: true});
                } else {
                    navigate("/", {replace: true});
                }


                // if()
                // localStorage.clear();

            } else {
                throw new Error("Dados de acesso incorretos");
            }

            console.log("Dados de user", payload)
            
        } catch (error: { message: string} | any) {
            // console.log(error?.message);
            error?.message == "Dados de acesso incorretos" ? toast.error("Dados de acesso incorretos", { duration: 2000}) : toast.error("Erro ao fazer o login", { duration: 2000});
        }

    }

    return {
        data,
        handleChange,
        handleSubmit
    }
}