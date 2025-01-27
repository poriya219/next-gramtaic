"use client"

import HistoryTile from "@/components/history-tile";
import AxiosInstance from "@/utils/axiosInstance";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [history, setHistory] = useState(null);
    // const[error, setError] = useState(null);

  const fetchData = async () => {
    try {
        const response = await AxiosInstance.get('/api/info/user');
        
        const accounts = response.data.accounts;
        
        if(accounts != null && accounts != []){
            const dataResponse = await AxiosInstance.get(`/api/user/history`);
            const historyData = dataResponse.data.history;
            console.log('history data:', historyData);
            
            
            setHistory(historyData);
            
        }
        else if(accounts != null && accounts == []){
            // setError("There is no account");
            setHistory([{'error': 'error text'}]);
        }
        else{
            // setError("Error loading data");
            setHistory([{'error': 'error text2'}]);
        }
    } catch (err) {
        // setError("Error loading data");
    } finally {
      // setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    if(history === null){
        
        fetchData();
    }
  }); 

    return (
        <div>
  {history != null ? (
    history.map((h, index) => (
        <div key={index}>
          <HistoryTile history={h}/>
        </div>
      ))
  ) : (
    <div>Loading...</div> // Render a consistent fallback
  )}
</div>
    );
}

export default HomePage;