import { useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({children}) => {
    const {BabyName, setBabyName} = useState('Baby')
    const {FatherName, setFatherName} = useState('Father')
    const {MotherName, setMotherName} = useState('Mother')
    const data = {
        BabyName, 
        setBabyName, 
        FatherName, 
        setFatherName, 
        MotherName,
        setMotherName
    }
    return <DataContext value={data}>{children}</DataContext>
};

export default DataProvider;