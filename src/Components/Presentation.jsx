import Logo_L from '/Logo-L.svg'

const Presentation = () => {
    return (
        <div className='p-4 h-full border rounded-2xl w-full mx-16'>
            <div className='text-center text-xl'>
                Je suis <span className='text-purple_custom'>développeur web</span>
            </div>  

            <div className='flex flex-row justify-between items-center h-full'>
                <div className='w-1/2 ml-12 text-xl text-justify'>
                J’ai 22 ans et j’habite dans la région lyonnaise. Je suis passionné par le monde de l’informatique et des technologies depuis mon enfance. Je suis actuellement une formation de développeur web et chef de projet à l’Institut G4 en alternance chez RTE. À côté de cela, je suis passionné par les jeux vidéo, les mangas, la musique, le football et je réalise de plus en plus de voyages pour découvrir le monde.
                </div>

                <div className='w-1/3 text-xl text-left'>
                    <img src={Logo_L} alt="Logo Lucas" className="mb-4"/>
                    <div>E-mail : lucas.daneyrolle1@gmail.com</div>
                    <div>Téléphone : 07 80 30 98 26</div>                        
                    <div>GitHub : <a href='https://github.com/LucasDaneyrolle' className='text-blue-500'>LucasDaneyrolle</a></div>              
                    <div>LinkedIn : <a href='https://www.linkedin.com/in/lucas-daneyrolle-808a821b8/' className='text-blue-500'>Lucas Daneyrolle</a></div>                        
                </div>
            </div>
        </div>
    )
}

export default Presentation
