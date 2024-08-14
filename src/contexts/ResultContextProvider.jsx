
import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
              'x-rapidapi-key': 'ed75ee7727msh8200fa4730579d4p1f567djsncbd40f2194da',
              'x-rapidapi-host': 'google-search74.p.rapidapi.com'
            }
          });
          
        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);