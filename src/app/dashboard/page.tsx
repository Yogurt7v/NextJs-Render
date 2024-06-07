"use client";
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
//   console.log("проверка на клиентский компонент");

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Имя: {name}</p>
      </div>
    </>
  );
}
