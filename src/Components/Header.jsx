import Logo_L from '/Logo-L.svg'
import Logo_GitHub from '/Logo-GitHub.svg'
import Logo_Linkedin from '/Logo-Linkedin.svg'

const Header = () => {
  return (
    <header className='border-b flex flex-row  p-4 items-center justify-between '>
        <div className='flex items-center space-x-6'>
          <div className="size-8 mb-4">
            <img src={Logo_L} alt="Logo Lucas"/>
          </div>
          <div className='text-2xl'>Portfolio</div>
        </div>

        <div className="text-2xl">Lucas Daneyrolle</div>

        <div className='flex items-center space-x-4'>
          <a className="size-10" href='https://github.com/LucasDaneyrolle'>
            <img src={Logo_GitHub} alt="Logo GitHub" />
          </a>
          <a className="size-10" href='https://www.linkedin.com/in/lucas-daneyrolle-808a821b8/'>
            <img src={Logo_Linkedin} alt="Logo Linkedin" />
          </a>
        </div>
      </header>
  )
}

export default Header