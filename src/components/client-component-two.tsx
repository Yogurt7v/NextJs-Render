"use client";
import { useState } from "react";

export const ClientComponentTwo = () => {
    const [name, setName] = useState("Superman");
    return <div>Client Component Two</div>;
}