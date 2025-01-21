import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";

type saleProps = {
    client: string,
    bi: string,
    email: string,
    address: string,
    civilState: string,
    phone: string,
}

export const useCreateClient = () => {
    
    const [data, setData] = useState<saleProps>({client: "", phone: "", bi: "", civilState: "", email: "", address: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        const {name, value} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {

        e?.preventDefault();

        try {
            
            const payload: saleProps = {
                client: data?.client,
                phone: data?.phone,
                bi: data?.bi,
                civilState: data?.civilState,
                email: data?.email,
                address: data?.address
            }

            console.log("payload", payload);
            
            toast.success("venda realizada com sucesso", {duration: 3000});

        } catch (error) {
            toast.error("Impossivle processar a compra", {duration: 3000});
        }

    }


    return {
        handleChange,
        handleSubmit,
        data
    }
}