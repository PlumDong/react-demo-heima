import { useState, useEffect } from "react"

export const useMouse = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handelMouseMove = (e) => {
      setMouse({ x: e.pageX, y: e.pageY })
    }
    document.addEventListener('mousemove', handelMouseMove)
    return () => {
      document.removeEventListener('mousemove', handelMouseMove)
    }
  }, [])
  return mouse
}