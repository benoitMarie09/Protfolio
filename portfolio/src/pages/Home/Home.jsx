import "./Home.scss";
import Logo from "../../components/Logo/Logo";

/**
 * Home page
 * @returns A section with a centred logo
 */
export default function Home() {
    return (
        <section className="Home">
            <Logo></Logo>
        </section>
    );
}
