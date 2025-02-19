import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { USER_DATA_STORAGE } from "../../../../common/utils/storageVariables";
import axios from "axios";
import { mutate } from "swr";

type saleProps = {
    client_id: string,
    product_id: string,
    quantity: number,
    user_id: string
}


export const useCreateSale = (handleClose: VoidFunction) => {
    
    const [data, setData] = useState<saleProps>({client_id: "", user_id: "", product_id: "", quantity: 0});

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const user_data = localStorage.getItem(USER_DATA_STORAGE);
    const parsedData = user_data && JSON.parse(user_data);
    const userId = parsedData?.login?.logindata?.id
    // const token = parsedData?.token;

    const api_url = import.meta.env.VITE_API_URL;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        const {name, value} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSelectProductChange = (selectedOption: any) => {
        setData((prevState) => ({
            ...prevState, product_id: selectedOption?.value || ""
        }));
    }

    const handleSelectClientChange = (selectedOption: any) => {
        setData((prevState) => ({
            ...prevState, client_id: selectedOption?.value || ""
        }));
    }

    const handleSubmit = async (e: FormEvent) => {

        e?.preventDefault();

        setIsLoading(true);

        try {
            
            const payload: saleProps = {
                client_id: data?.client_id,
                user_id: userId,
                product_id: data?.product_id,
                quantity: +data?.quantity
            }

            const isValidate: Array<keyof saleProps> = ["client_id", "client_id", "quantity" ];
            for(const key of isValidate){
                if(payload[key] === undefined || payload[key] === null || payload?.quantity === 0){
                    toast.warning(`Verifique os campos`);
                    return;
                }
            }

            const {data: ticket} = await axios.post(`${api_url}/sale`, payload);

            await mutate((prevState: any) => [
                {...prevState}, payload
            ])

            console.log("RESPONSE SALE", ticket);

            console.log("payload", payload);
            
            toast.success("venda realizada com sucesso", {duration: 3000});
            handleClose();
            setData({client_id: "", user_id: "", product_id: "", quantity: 0});

        } catch (error) {
            toast.error("Impossivle processar a compra", {duration: 3000});
        } finally{
            setIsLoading(false);
        }

    }


    return {
        handleChange,
        handleSubmit,
        handleSelectProductChange,
        handleSelectClientChange,
        data,
        isLoading
    }
}