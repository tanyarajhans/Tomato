<<<<<<< HEAD
import { useState, useEffect } from "react";

const useTabSwitch = (tab, defaultTab) => {
    const [currentTab, setCurrentTab] = useState(defaultTab);

    useEffect(() => {
        setCurrentTab(defaultTab)
    }, [defaultTab])

    const handleTabSwitch = (tab) => {
        setCurrentTab(tab);
    } 
=======
import { useEffect, useState } from "react";


const useTabSwitch = (defaultTab, tabs) => {
    const [currentTab, setCurrentTab] = useState(defaultTab);
    useEffect(()=>{
        setCurrentTab(defaultTab);
    }, [defaultTab]);

    const handleTabSwitch = (newTab) => {
        setCurrentTab(newTab);
    }

>>>>>>> main
    return [currentTab, handleTabSwitch];
}

export default useTabSwitch;