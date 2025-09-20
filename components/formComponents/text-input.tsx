type Props = {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
}
export default function TextInput({placeholder, id, name, type = 'text'}: Props) {
    return (<>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className="
        w-72 px-4 py-1
        rounded-md
        border-2 border-gray-300
        bg-gradient-to-b from-white to-blue-50
        placeholder-gray-500 text-gray-900
        shadow-inner
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
      "
        /></>)
}