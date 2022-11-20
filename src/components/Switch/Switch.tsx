import Typography from "../Typography"

export interface SwitchProps {
  label: string,
  checked: boolean,
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const Switch = ({label, checked, onClick}: SwitchProps) => {
    return (
      <div className="inline-flex items-center" onClick={onClick}>
        <div className="relative inline-block w-13 h-8 cursor-pointer rounded-full">
          <input id="switch-component" type="checkbox" className="peer appearance-none w-13 h-8 absolute bg-neutral-90 rounded-full cursor-pointer transition-colors duration-300 checked:bg-primary-40 peer-checked:border-primary-40 peer-checked:before:bg-primary-40" checked={checked} />
          <label htmlFor="switch-component" className="bg-white w-6 h-6 border border-neutral-90 rounded-full shadow-md absolute top-2/4 left-1 peer-checked:left-0 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-neutral-50 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-primary-40 peer-checked:before:bg-primary-40">
            <div className="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full" style={{position: 'relative', overflow: 'hidden'}}>
            </div>
          </label>
        </div>
        <label htmlFor="switch-component" className="text-gray-700 font-light select-none cursor-pointer mt-px ml-3 mb-0"><Typography type='label' size='large'>{label}</Typography></label>
      </div>
  )
}

export default Switch
