import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { USER_DATA_STORAGE } from "../../../../common/utils/storageVariables";
import { mutate } from "swr";

type employerProps = {
    id_store: string,
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    bi: string,
}


export const useCreateEmployer = (handleClose: VoidFunction) => {
    
    const [data, setData] = useState<employerProps>({firstName: "", lastName: "", email: "",telephone: "",id_store: "", bi: "",});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        const {name, value} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }


    const apiURL = import.meta.env.VITE_API_URL;

    const dataLogin = localStorage?.getItem(USER_DATA_STORAGE);
    const parsedData = dataLogin && JSON.parse(dataLogin);
    const idStore = parsedData?.login?.store?.id;

    const handleSubmit = async (e: FormEvent) => {

        e?.preventDefault();

        try {
            
            const payload: employerProps = {
                id_store: idStore,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                telephone: data.telephone,
                bi: data.bi
            }

            const isValidate: Array<keyof employerProps> = ["id_store", "firstName", "lastName", "email", "telephone", "bi"];
            for(const key of isValidate){
                if(payload[key] === undefined || payload[key].trim() == ""){
                    throw new Error(`${key} Precisa ser preenchido`);
                }
            }

            await axios.post(`${apiURL}/employer`, payload);
            mutate((prevState: any) => [
                {...prevState}, payload
            ]);
            
            toast.success("Usuário registrado.", {duration: 3000});

        } catch (error: any) {

            toast.error(`${error?.response?.data?.data}`, {duration: 3000});
            handleClose();

        } finally{
            setData({firstName: "", lastName: "", email: "",telephone: "",id_store: "", bi: "",})
            handleClose();
        }

    }


    return {
        handleChange,
        handleSubmit,
        data
    }
}