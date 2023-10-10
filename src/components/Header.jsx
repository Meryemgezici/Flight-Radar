import { useSelector } from "react-redux";

const Header = () => {
  const state=useSelector((store)=>store);

  return (
    <header className="header">
      <div>
        <img src="/logo.png" alt="" />
        <h1>Uçuş Radarı</h1>
      </div>
      <h3>{state.isLoading ? "Uçuşlar Hesaplanıyor" : `${state.flights.length} Uçuş Bulundu`}</h3>
    </header>
  )
}

export default Header
