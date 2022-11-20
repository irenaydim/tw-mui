import Typography from "../Typography"
import cx from 'classnames'
import { ChangeEventHandler } from "react"

export interface TextFieldProps {
    name: string,
    value: string,
    label: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onBlur: ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
    error: string,
    disabled: boolean
}

const TextField = ({ name, value, label, onChange, onBlur, placeholder, error, disabled }: TextFieldProps) => {    
    return <fieldset className={cx(
            "group flex flex-col border rounded caret-primary-40",
            !disabled && 'focus-within:border-2',
            disabled && !error && 'border-neutral-90 text-neutral-90',
            !disabled && !error && 'border-neutral-50 text-neutral-50 hover:border-primary-40 focus-within:border-primary-40 hover:text-primary-40 focus-within:text-primary-40',
            error && 'border-error-40 text-error-40'
        )}>
        <legend className='mx-2 p-0'>
            <Typography type='body' size='small'>&nbsp;{label}&nbsp;</Typography>
        </legend>
        <input
            name={name}
            disabled={disabled}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={cx(
                'p-2 my-0.5 bg-transparent outline-0 autofill:bg-transparent',
                'placeholder-neutral-variant-30 disabled:placeholder-neutral-90 text-neutral-10',
                'placeholder-body-lg text-body-lg'
            )} />
        {error && <span className="absolute hidden group-hover:flex group-focus-within:flex bottom-0 -right-3 translate-x-full w-48 px-2 py-1 bg-slate-100 rounded-lg text-center text-red-600 text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-slate-100">
            {error}
        </span>}
    </fieldset>
}

export default TextField
