import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { mutate } from "swr";

type saleProps = {
    username: string,
    password: string,
    id_employer: string,
    id_access_role: string,
}

export const useCreateUser = (handleClose: VoidFunction) => {
    
    const [data, setData] = useState<saleProps>({username: "", password: "", id_access_role: "", id_employer: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        const {name, value} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }


    const apiURL = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e: FormEvent) => {

        e?.preventDefault();

        try {
            
            const payload: saleProps = {
                username: data?.username,
                password: data?.password,
                id_employer: data?.id_employer,
                id_access_role: data?.id_access_role
            }

            await axios.post(`${apiURL}/user`, payload);
            mutate((prevState: any) => [
                {...prevState}, payload
            ])
            
            toast.success("Usuário registrado.", {duration: 3000});
            handleClose();

        } catch (error: any) {

            toast.error(`${error.response.data.message == "User already exist" && "Usuário já existe e foi adicionado a este funcionario"}`, {duration: 3000});
            handleClose();

        }

    }


    return {
        handleChange,
        handleSubmit,
        data
    }
}