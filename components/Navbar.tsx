import Icon from "./Navbar/Icon.tsx";
import Menu from "../islands/Menu.tsx";


export default function Navbar() {
    return (
        <nav class="flex justify-between items-center w-screen px-5 py-5">
            <Icon />
            <Menu />
        </nav>
    );
}
