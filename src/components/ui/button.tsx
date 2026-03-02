
interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className='px-6 py-[13px] bg-primary-100 text-black-100 rounded-lg font-semibold'>
      {text}
    </button>
  )
}

export default Button