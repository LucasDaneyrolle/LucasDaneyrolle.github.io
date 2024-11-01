import Symfony from '/Symfony.svg'
import React from '/React.svg'
import Tailwind from '/Tailwind.svg'

import Django from '/Django.svg'
import Vue from '/Vue.svg'

import Git from '/Git.svg'
import VSC from '/VSCode.svg'
import JS from '/JS.svg'
import SQL from '/SQL.svg'

import HTML from '/HTML.svg'
import CSS from '/CSS.svg'
import PHP from '/PHP.svg'
import Wordpress from '/Wordpress.svg'

const Experiences = () => {
    return(
        <div className="w-full mx-16 grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
            {/* Institut G4 */}
            <div className="p-4 rounded-lg border border-purple_custom mx-10 text-center">
                <p className="text-xl font-semibold">Institut G4</p> 
                <p>Diplôme de Chef de projet SI - RNCP 7</p>
                <div className="flex justify-center space-x-12 my-4">
                    <img src={Symfony} alt="Logo Symfony" />
                    <img src={React} alt="Logo Symfony" />
                    <img src={Tailwind} alt="Logo Symfony" />
                </div>
                <p>2022-2025</p>
            </div>

            {/* RTE */}
            <div className="p-4 rounded-lg border border-purple_custom mx-10 text-center">
                <h3 className="text-xl font-semibold">RTE</h3>
                <p>Alternant développeur web fullstack</p>
                <div className="flex justify-center space-x-20 my-4">
                <img src={Django} alt="Logo Symfony" className='size-[76px]'/>
                    <img src={Vue} alt="Logo Symfony" className='size-[76px]'/>
                </div>
                <p>2022-2025</p>
            </div>

            {/* IUT Lyon 1 */}
            <div className="p-4 rounded-lg border border-purple_custom mx-10 text-center">
                <h3 className="text-xl font-semibold">IUT Lyon 1</h3>
                <p>DUT Informatique</p>
                <div className="flex justify-center space-x-8 my-4">
                    <img src={Git} alt="Logo Symfony" />
                    <img src={VSC} alt="Logo Symfony" />
                    <img src={JS} alt="Logo Symfony" />
                    <img src={SQL} alt="Logo Symfony" />
                </div>
                <p>2020-2022</p>
            </div>

            {/* Software International Consult */}
            <div className="p-4 rounded-lg border border-purple_custom mx-10 text-center">
                <h3 className="text-xl font-semibold">Software International Consult</h3>
                <p>Stagiaire développeur web fullstack</p>
                <div className="flex justify-center space-x-8 my-4">
                    <img src={HTML} alt="Logo Symfony" />
                    <img src={CSS} alt="Logo Symfony" />
                    <img src={PHP} alt="Logo Symfony" />
                    <img src={Wordpress} alt="Logo Symfony" />
                </div>
                <p>2022</p>
            </div>
        </div>
    )
}

export default Experiences
