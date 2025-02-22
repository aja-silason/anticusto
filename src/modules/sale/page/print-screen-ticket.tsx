import { useParams } from "react-router-dom"

export const PrintScreenTicket = () => {

    const {data} = useParams();
    
    const dataToParams = data && JSON.parse(data);
    
    console.log("PRINTSCRENN", dataToParams);



    return (
        <div>
            <p>Print Screen {dataToParams}</p>
        </div>
    )
}
