const menuItems = [
    "Qui suis-je ?",
    "Mes projets",
    "Mes expériences",
    "Mes compétences"
];

const Nav = ({active, setActive}) => {
    return (
        <nav>
            <ul className='flex justify-center space-x-8 text-xl p-8'>
                {menuItems.map((item) => (
                    <li key={item}>
                        <div onClick={() => setActive(item)}  className='relative pb-2 cursor-pointer'>
                            {item}
                            {active === item && (
                            <span className="absolute left-0 right-0 bottom-0 h-1 bg-purple_custom"/>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
