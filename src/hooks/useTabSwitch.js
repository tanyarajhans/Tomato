import { useEffect, useState } from "react";


const useTabSwitch = (defaultTab, tabs) => {
    const [currentTab, setCurrentTab] = useState(defaultTab);
    useEffect(()=>{
        setCurrentTab(defaultTab);
    }, [defaultTab]);

    const handleTabSwitch = (newTab) => {
        setCurrentTab(newTab);
    }

    return [currentTab, handleTabSwitch];
}

export default useTabSwitch;