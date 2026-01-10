import { useCallback, useEffect, type RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
  active: boolean
) => {
  const handleClick = useCallback((e: MouseEvent) => {
    if (!ref.current || ref.current.contains(e.target as Node)) {
      return;
    }
    handler();
  }, [ref, handler])

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleClick)

      return document.removeEventListener('mousedown', handleClick)
    }
  }, [active, handleClick])
}