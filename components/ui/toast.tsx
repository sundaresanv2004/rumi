import React, { useState, useEffect } from 'react'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

export const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-md shadow-lg`}>
      {message}
    </div>
  )
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = (toast: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, { ...toast, duration: toast.duration || 3000 }])
  }

  return { Toast, addToast, toasts }
}