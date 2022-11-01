import { signal } from "@preact/signals";
import {
    MenuOpen,
    MenuClose,
} from "../components/Icons.tsx"


// Constants for menu open/close TW animation
const open = "right-0 opacity-100 pointer-events-auto";
const closed = "-right-full opacity-0 pointer-events-none";

// Signal for the menu state
const menuState = signal(closed);

export default function Menu() {
    return (
        <div class="flex items-center">
            <MenuButton />
            <MenuList />
        </div>
    );
}

// Menu Icon updated based on signal state
function MenuIcon() {
    return menuState.value === closed ? <MenuOpen /> : <MenuClose />;
}

// Menu Button
function MenuButton() {
    return (
        <button
            class="focus:outline-none"
            onClick={ () => {
                menuState.value = menuState.value === closed ? open : closed;
            }}
        >
            <MenuIcon />
        </button>
    );
}

function MenuList() {

    const list = `
        relative 
        bg-white 
        bottom-20 
        flex-row-reverse 
        py-3 
        px-4 
        delay-[1500ms] 
        transition-400 
        transition-all 
        cursor-pointer
        md:bottom-0 
        md:w-full
        md:transition-[1000ms] 
    `

    return (
        <ul 
          class={`
            fixed 
            md:absolute
            top-16
            bottom-0 
            grid 
            place-content-center 
            md:content-start 
            md:justify-items-end 
            w-screen 
            md:w-auto 
            bg-white
            text-xl
            whitespace-nowrap 
            transition-700 
            md:transition-[1200ms] 
            transition-all ` +
            menuState}
        >
            <li class={"" + list} >
                <a>Hjem</a>
            </li>
            <li class={"" + list} >
                <a>Om meg</a>
            </li>
            <li class={"" + list} >
                <a>Prosjekter</a>
            </li>
            <li class={"" + list} >
                <a>Kontakt</a>
            </li>
        </ul>
    );
}