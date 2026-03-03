
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: ReactNode
}

const Button = ({ text, icon, className = '', type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-primary-100 text-black-100 rounded-lg font-semibold ${className}`}
      {...rest}
    >
      {text}
      {icon ? <span aria-hidden='true'>{icon}</span> : null}
    </button>
  )
}

export default Button
