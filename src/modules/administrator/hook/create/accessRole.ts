import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";

type saleProps = {
    access_role: string,
}

export const useCreateAccessRole = (handleClose: VoidFunction) => {
    
    const [data, setData] = useState<saleProps>({access_role: ""});

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
                access_role: data?.access_role
            }

            await axios.post(`${apiURL}/access-role`, payload);
            
            toast.success("Nível de acesso registrado.", {duration: 3000});
            
        } catch (error: any) {
            
            toast.error(`${error.response.data.message}`, {duration: 3000});
            handleClose();
            
        } finally {
            handleClose();
        }

    }


    return {
        handleChange,
        handleSubmit,
        data
    }
}