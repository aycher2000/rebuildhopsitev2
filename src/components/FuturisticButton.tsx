import Link from 'next/link'
import { ReactNode } from 'react'

interface FuturisticButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function FuturisticButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = ''
}: FuturisticButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
  const variantStyles = {
    primary: "bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20",
    secondary: "bg-black/50 text-white border border-white/20 hover:bg-white/10"
  }

  const buttonContent = (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return (
    <button onClick={onClick} className={className}>
      {buttonContent}
    </button>
  )
} 