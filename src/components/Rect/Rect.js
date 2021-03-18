const Rect = ({size}) => {
  return (
    <rect 
      width={size + 10}
      height={size + 10}
      fill="none"
      stroke="grey"
    />
  )
}

export default Rect;