import PHP from '/PHP.svg'
import Symfony from '/Symfony.svg'
import Python from '/Python.svg'
import Django from '/Django.svg'
import React from '/React.svg'

import HTML from '/HTML.svg'
import CSS from '/CSS.svg'
import JS from '/JS.svg'
import Vue from '/Vue.svg'
import Git from '/Git.svg'
import SQL from '/SQL.svg'
import Tailwind from '/Tailwind.svg'

import Wordpress from '/Wordpress.svg'
import C from '/C.svg'
import CSharp from '/CSharp.svg'
import Java from '/Java.svg'
import Dart from '/Dart.svg'
import Flutter from '/Flutter.svg'
import Sass from '/SASS.svg'

import GitHub from '/Logo-GitHub.svg'
import GitLab from '/GitLab.svg'
import VSCode from '/VSCode.svg'
import Figma from '/Figma.svg'
import Unity from '/Unity.svg'
import Discord from '/Discord.svg'
import Trello from '/Trello.svg'
import GSheets from '/GSheets.svg'

const Skills = () => {
    return (
        <div className='flex flex-col justify-center w-full mx-16'>
            <div className="flex flex-row items-center border-b border-purple_custom">
                <div className='text-purple_custom font-bold text-xl'>Très bonne maitrise</div> 
                <div className='flex flex-row gap-10 ml-12'>
                    <img src={PHP} alt="Logo PHP" />
                    <img src={Symfony} alt="Logo Symfony" />
                    <img src={Python} alt="Logo Python" />
                    <img src={Django} alt="Logo Django" />
                    <img src={React} alt="Logo React" />
                </div>
            </div>
            <div className="flex flex-row items-center border-b border-purple_custom">
                <div className='text-purple_custom font-bold text-xl'>Bonne maitrise</div>
                <div className='flex flex-row gap-10 ml-[97px]'>
                    <img src={HTML} alt="Logo HTML" />
                    <img src={CSS} alt="Logo CSS" />
                    <img src={Tailwind} alt="Logo Tailwind" />
                    <img src={JS} alt="Logo JavaScript" />
                    <img src={Vue} alt="Logo Vue" />
                    <img src={Git} alt="Logo Git" />
                    <img src={SQL} alt="Logo SQL" />
                </div>
            </div>
            <div className="flex flex-row items-center border-b border-purple_custom">
                <div className='text-purple_custom font-bold text-xl'>Connaissances</div>
                <div className='flex flex-row gap-10 ml-[94px] py-1'>
                    <img src={Wordpress} alt="Logo Wordpress" />
                    <img src={C} alt="Logo C" />
                    <img src={CSharp} alt="Logo C#" />
                    <img src={Java} alt="Logo Java" />
                    <img src={Dart} alt="Logo Dart" />
                    <img src={Flutter} alt="Logo Flutter" />
                    <img src={Sass} alt="Logo Sass" />
                </div>
            </div>
            <div className="flex flex-row items-center border-b border-purple_custom">
                <div className='text-purple_custom font-bold text-xl'>Autres outils</div>
                <div className='flex flex-row gap-10 ml-[125px] py-1'>
                    <img className="size-20" src={GitHub} alt="Logo GitHub" />
                    <img src={GitLab} alt="Logo GitLab" />
                    <img src={VSCode} alt="Logo Visual Studio Code" />
                    <img src={Figma} alt="Logo Figma" />
                    <img src={Unity} alt="Logo Unity" />
                    <img src={Discord} alt="Logo Discord" />
                    <img src={Trello} alt="Logo Trello" />
                    <img src={GSheets} alt="Logo GSheets" />
                </div>
            </div>
            <div className="flex flex-row items-center border-b border-purple_custom py-6">
                <div className='text-purple_custom font-bold text-xl'>Soft skills</div>
                <div className='text-xl ml-[145px]'>Curieux | Organisé | Autonome | Persévérant | Rigoureux | Capacité à s’autoformer </div>
            </div>
        </div>
    )
}

export default Skills