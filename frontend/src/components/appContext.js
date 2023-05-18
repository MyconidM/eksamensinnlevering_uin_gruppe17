import { createContext } from "react";

const AppContext = createContext(null);


const AppContextProv = ({children}) => {
    const [favorties, setFavorties] = useState([]);
}