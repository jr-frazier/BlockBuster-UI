type Props = {
    label: string;
    disable?: boolean;
}
export default function FormSubmitButton({disable, label}: Props) {

    return <button
        className="bg-blue-900 text-white rounded-md px-4 cursor-pointer button hover:bg-blue-500 py-1"
        disabled={disable}
        type={"submit"}>{label}
    </button>
}