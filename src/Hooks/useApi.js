import Axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
export const useApi=()=>{
    const [info, setInfo] = useState([]);
    const { data,isLoading } = useQuery(["Name"], () => {
      return getData();
    });
    
    const getData = () => {
      Axios.get("https://api.publicapis.org/entries").then((res) => {
        setInfo(res.data.entries);
      });
    };
    
    useEffect(() => {
      getData();
    }, [info]);
    return {info,setInfo,data,isLoading}
}

