import Typography from "../Typography"

export interface CardProps {
    children: JSX.Element,
    headline: string
}

const Card = ({ children, headline }: CardProps) => (
    <div className='bg-primary-light p-4 rounded-xl'>
        {headline ? (<>
            <Typography type='title' size='medium'>{headline}</Typography>
            <div className="pt-4" />
            </>) : null}
        {children}
    </div>
)

export default Card
