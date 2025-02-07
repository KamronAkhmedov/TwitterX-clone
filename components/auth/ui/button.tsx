import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ButtonProps {
  label: string | ReactNode
  secondary?: boolean
  fullWidth?: boolean
  large?: boolean
  disabled?: boolean
  outline?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({
  label,
  onClick,
  disabled,
  fullWidth,
  large,
  outline,
  secondary,
  type
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        'rounded-full font-semibold border trnasition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed',
        fullWidth ? 'w-full' : 'w-fit',
        secondary ? 'bg-white text-black' : 'bg-sky-500 text-white',
        large ? 'text-xl px-5 py-3' : 'text-base px-4 py-3',
        outline
          ? 'bg-transparent border-slate-600 text-sky-500 hover:bg-slate-800/40'
          : ''
      )}
    >
      {label}
    </button>
  )
}
