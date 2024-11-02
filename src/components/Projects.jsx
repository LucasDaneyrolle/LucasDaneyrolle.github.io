import { useState } from "react"
import Logo_L from '/Logo-L.svg'
import Pibaho from '/Pibaho.svg'
import G4 from '/G4.svg'
import RTE from '/RTE.svg'
import Mairie from '/Mairie.svg'
import Others from '/Projects.svg'

const items = [
    { id: 1, title: "Portfolio", img: Logo_L },
    { id: 2, title: "Pibaho", img: Pibaho },
    { id: 3, title: "G4 Network", img: G4 },
    { id: 4, title: "Alternance", img: RTE },
    { id: 5, title: "Stage", img: Mairie },
    { id: 6, title: "Autres projets", img: Others },
]

const Projects = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
    }

    const closeModal = () => {
        setSelectedItem(null);
    }

    return (
        <div className="w-full mx-16 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => openModal(item)}
                        className="flex items-center gap-6 flex-col transition-all border border-purple_custom text-center p-4 pb-6 rounded-lg text-white cursor-pointer hover:shadow-2xl hover:mx-5 mx-10 my-4"
                    >
                        <p className="text-xl font-semibold">{item.title}</p>
                        <img className="size-24" src={item.img} alt="Logo Symfony" />
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="fixed inset-0 flex items-center justify-end z-50">
                    <div 
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={closeModal}
                    ></div>

                    <div className="fixed right-0 top-0 h-full bg-[linear-gradient(to_right_bottom,#482973,#35245a,#261e40,#1a1727,#0d0d0d)] w-1/3 p-6 shadow-lg border-l border-purple_custom transition-transform duration-300 ease-in-out">
                        <button 
                            className="absolute top-4 right-4"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <p className="text-2xl font-semibold">{selectedItem.title}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects
