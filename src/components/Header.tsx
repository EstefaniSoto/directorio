

function Header() {
  return (
    <>
    <div className="md:p-10">
      <div className="flex justify-center">
      <img src="public/img/mobile-logo.jpg" alt="" className="w-50 md:hidden text-center" />         
      </div>

      <img src="public/img/logo-ministerio.jpg" alt="" className="hidden w-50 md:block" />  
    </div>

    </>
  )
}

export default Header