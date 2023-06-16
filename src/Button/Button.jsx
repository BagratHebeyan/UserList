


function Button({ title, clickMy, bakraundColor }) {
  return (
    <div>
      <button onClick={clickMy} style={{ backgroundColor: `${bakraundColor}` }}>{title}</button>
    </div>
  )
}

export default Button