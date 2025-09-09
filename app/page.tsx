import Image from "next/image";

export default function Home() {
    return (
        <div id="main">
            <h1>Hello World</h1>
            <Image src="/movies/top_gun.jpg" width={100} height={100}
                   alt="Picture of the author"/>
        </div>
    );
}
