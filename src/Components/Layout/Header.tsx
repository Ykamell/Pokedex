import logo from "../../Assets/poke.png"
import circle from "../../Assets/pokeball-line-circle.png"
import "./Layout.css"

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={ logo } alt="PokeApi LOGO" className="header-logo"/>
      </div>
      <div className="pokeball-line-header">
        <img src={ circle } alt="Pokeball" className="pokeball-circle"/>
      </div>
    </>
  )
}
