export interface KeyValueDisplayProps {
    label: string,
    value: string
}

const KeyValueDisplay = ({ label, value }: KeyValueDisplayProps) => {
    return <div className="flex justify-between">
        <span className="pr-4 text-sm">{label}</span>
        <span className="text-sm font-bold">{value}</span>
    </div>
}

export default KeyValueDisplay
