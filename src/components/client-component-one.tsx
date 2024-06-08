"use client";
import { useState } from "react";

export const ClientComponentOne = () => {
    const [name, setName] = useState("Batman");
    return <div>Client Component One</div>;
}