import axios from "axios";
import { ChangeEvent, useState } from "react"
import { supplyData } from "../../page/supply-management";

type supplyProps = {
    supply: string,
    product: string
}

export const useCreateSupply = () => {

    const [data, setData] = useState<supplyProps>({supply: "", product: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
        const {value, name} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async () => {

        try {
            supplyData.push(data);
            // const  ab = await axios.post("")
            
        } catch (error) {
            console.log(error);
        }

    }

    return {
        data,
        handleChange,
        handleSubmit
    }

}
