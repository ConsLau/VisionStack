"use client"

import { CardModel } from "@/components/models/card-model"
import { useEffect, useState } from "react"


export const ModelProvider = () => {
    const [ isMounted, setIsMounted ] = useState(false)
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) {
        return null;
    }
    
    return (
        <>
            <CardModel />
        </>
    )
}