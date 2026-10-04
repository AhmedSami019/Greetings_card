import DataContext from "./DataContext";

const DataProvider = ({children}) => {
    const data = {
        name: "sami", category: "chodna"
    }
    return <DataContext value={data}>{children}</DataContext>
};

export default DataProvider;