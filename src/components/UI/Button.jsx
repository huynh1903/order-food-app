
const Button = ({ children, onClick }) => {
  return (
    <><button onClick={onClick} className="px-3 py-1 border-[1px] border-orange-600 rounded-md bg-orange-600 text-white font-medium hover:text-orange-600 hover:bg-slate-50 hover:cursor-pointer ease-in duration-100">{children}</button></>
  )
}

export default Button
