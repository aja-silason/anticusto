import { Gear } from "@phosphor-icons/react";
import { Container, StudentSubscribeCard, Table } from "../component";

export default function HomeAcademy() {

    const rows = [
        { firstName: "Jon", lastName: "Snow", age: 35 },
        { firstName: "Cersei", lastName: "Lannister", age: 42 },
        { firstName: "Jaime", lastName: "Lannister", age: 45 },
        { firstName: "Arya", lastName: "Stark", age: 16 },
        { firstName: "Daenerys", lastName: "Targaryen", age: null },
        { firstName: "Melisandre", lastName: "Unknown", age: 150 },
        { firstName: "Ferrara", lastName: "Clifford", age: 44 },
        { firstName: "Rossini", lastName: "Frances", age: 36 },
        { firstName: "Harvey", lastName: "Roxie", age: 65 },
        { firstName: "Luna", lastName: "Black", age: 29 },
        { firstName: "Harry", lastName: "Potter", age: 23 },
        { firstName: "Hermione", lastName: "Granger", age: 22 },
        { firstName: "Ron", lastName: "Weasley", age: 23 },
        { firstName: "Draco", lastName: "Malfoy", age: 24 },
        { firstName: "Neville", lastName: "Longbottom", age: 25 },
        { firstName: "Luna", lastName: "Lovegood", age: 22 },
        { firstName: "Ginny", lastName: "Weasley", age: 21 },
        { firstName: "Fred", lastName: "Weasley", age: 23 },
        { firstName: "George", lastName: "Weasley", age: 23 },
      ];


    return (
        <Container title="Home">
            <div className="flex gap-[.5em] justify-between">
                <StudentSubscribeCard quantity={500} title="Formandos inscritos" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />
                <StudentSubscribeCard quantity={15} title="Cursos Disponíveis" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />
                <StudentSubscribeCard quantity={5} title="Formandos Certificados" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />
            </div>

            <div className="bg-[#fff] flex gap-[1em] w-[100%] p-[.5em] rounded-[.5em] md:h-[70%]">
                <Table data={rows} title="Formandos inscritos"/>
                <Table data={rows} title="Cursos Ministrados"/>
            </div>
        </Container>
    )
}