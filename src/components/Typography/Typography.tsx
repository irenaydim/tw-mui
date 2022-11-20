import cx from 'classnames';

export type TypographyTypes = 'display' | 'title' | 'body' | 'label'
export type TypographySizes = 'small' | 'medium' | 'large'

export interface TypographyProps {
    children: string | string[],
    type?: TypographyTypes,
    size?: TypographySizes,
}

const Typography = ({ children, type = 'body', size = 'medium' }: TypographyProps) => (
    <p className={cx(
        type === 'title' && "font-display",
        type === 'title' && size === 'small' && 'text-title-sm',
        type === 'title' && size === 'medium' && 'text-title-md',
        type === 'title' && size === 'large' && 'text-title-lg',
        (type === 'body' || type === 'label') && "font-body",
        type === 'body' && size === 'small' && 'text-body-sm',
        type === 'body' && size === 'medium' && 'text-body-md',
        type === 'body' && size === 'large' && 'text-body-lg',
        type === 'label' && size === 'small' && 'text-label-sm',
        type === 'label' && size === 'medium' && 'text-label-md',
        type === 'label' && size === 'large' && 'text-label-lg',
    )}>{children}</p>
)

export default Typography
