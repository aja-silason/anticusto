import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner"
import { accessdata } from "../mock/access"
import { USER_DATA_ROLE, USER_DATA_STORAGE, USER_TOKEN_STORAGE } from "../../utils/storageVariables"
import { MOCKTOKEN } from "../mock/mocktoken"
import { useNavigate } from "react-router-dom"
import { acesssType } from "../../utils/acessAuth"
import axios, { Axios } from "axios";

type loginDataInput = {
    telephone: string,
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

    const [data, setData] = useState<loginDataInput>({telephone: "", password: ""});

    const navigate = useNavigate();
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e?.target;
        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }


    const handleSubmit = async (e: FormEvent) => {
        e?.preventDefault();

        try {

            const payload: loginDataInput = {
                telephone: data?.telephone,
                password: data?.password
            } 

            const isValidate: Array<keyof loginDataInput> = ["telephone", "password"];
            for(const key of isValidate){
                if(payload[key] == undefined || payload[key] == null || payload[key] == "".trim()){
                    toast.info(`${key == "telephone" ? 'email ou telefone' : 'senha'} precisa ser verificado`);
                    return;
                }
            }

            const apiUrl = import.meta.env.VITE_API_URL;

            const userdata = await axios.post(`${apiUrl}login`, payload);

            const datas = userdata.data;

            console.log("Logou", datas);
            console.log("Logou", datas.login.access.nivel_de_acesso);
            console.log("Logou", datas.token);

            localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(datas));
            localStorage.setItem(USER_DATA_ROLE, JSON.stringify(datas.login.access.nivel_de_acesso));
            localStorage.setItem(USER_TOKEN_STORAGE, JSON.stringify(datas.token));

            if(acesssType[datas.login.access.nivel_de_acesso]){
                navigate(`${acesssType[datas.login.access.nivel_de_acesso]}`, {replace: true});
            } else {
                localStorage.clear();
                navigate("/", {replace: true});
            }

            
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