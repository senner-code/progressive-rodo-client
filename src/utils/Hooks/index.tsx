import {useEffect, useRef, useState} from "react";

export const useObserveSize = () => {
  const ref:any = useRef()

  const [width, setWidth] = useState<null | number>(null)
  const [height, setHeight] = useState<null | number>(null)


  const observer = useRef(new ResizeObserver((entries => {
      const {width,height} = entries[0].contentRect
      setHeight(height)
      setWidth(width)
    }))
  )


  useEffect(() => {
    // @ts-ignore
    observer.current.observe(ref.current)
    return () => {
    }
  },[width,height,ref])

  return [ref,width,height]
}