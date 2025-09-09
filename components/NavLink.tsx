type Props = {
    name: string;
    link: string;
}
export default function NavLink({link, name}: Props) {

    return <a href={link} className="underline block decoration-solid text-blue-600 visited:text-purple-600">
        {name}
    </a>
}