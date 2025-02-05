import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner"
import { USER_DATA_ROLE, USER_DATA_STORAGE, USER_TOKEN_STORAGE } from "../../utils/storageVariables"
import { useNavigate } from "react-router-dom"
import { acesssType } from "../../utils/acessAuth"
import axios from "axios";

type loginDataInput = {
    telephone: string,
    password: string
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

            const userdata = await axios.post(`${apiUrl}/login`, payload);

            const datas = userdata.data;

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
            error?.message == "Dados de acesso incorretos" ? toast.error("Dados de acesso incorretos", { duration: 2000}) : toast.error("Erro ao fazer o login", { duration: 2000});
        }

    }

    return {
        data,
        handleChange,
        handleSubmit
    }
}