import fs from "fs";
export const ServerComponentTwo = () => {
    fs.readFileSync('./src/components/server-component-two.tsx', 'utf8');
    return <div>Server Component Two</div>;
}