import React, {useContext, useEffect, useState} from 'react';
import Card from './Card';
import Compose from './Compose';
import First from "./First";
import { Link } from 'react-router-dom';
import Context from "../context/context";

const Home = () => {
    const {notes, fetchNotes, user, checkLogin} = useContext(Context)
  
    useEffect(()=>{
        checkLogin()
     fetchNotes()
    }, [])
    
    return (
        (user ? <div className="min-h-[70vh]">
            {
                notes &&(notes.length !== 0 && <h1 className="text-2xl text-center font-bold">Hello {notes[0].username}</h1>)
                         }
            {notes && notes.length !== 0 && <h2 className="text-xl text-center py-4 font-bold">Your Notes</h2>}
            <div className="flex flex-col space-y-4 mb-8">
            {
                notes ?(notes.length !== 0 ? (notes.map((note)=> {
               return <Card key={note._id} title={note.title} description={note.description} id={note._id} />
            })) :<div className="flex items-center justify-center flex-col"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 512 512">
	<defs>
		<symbol id="meteoconsWind0" viewBox="0 0 342 234">
			<path fill="none" stroke="currentColor" strokeDasharray={148} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={18} d="M264.2 21.3A40 40 0 1 1 293 89H9">
				<animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></animate>
			</path>
			<path fill="none" stroke="currentColor" strokeDasharray={110} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={18} d="M148.2 212.7A40 40 0 1 0 177 145H9">
				<animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></animate>
			</path>
		</symbol>
	</defs>
	<use width={342} height={234} href="#meteoconsWind0" transform="translate(85 139)"></use>
</svg> <h3>No Notes Found</h3></div>):<div className="flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>

            
            }
                
            </div>
            <div className="flex items-center justify-center fixed bottom-6 left-4 rounded-full bg-primary">
            <Link className="p-2 text-black" to="/compose"> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" strokeDasharray={18} strokeDashoffset={18} strokeLinecap="round" strokeWidth={2}>
		<path d="M12 5V19">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"></animate>
		</path>
		<path d="M5 12H19">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"></animate>
		</path>
	</g>
</svg> </Link></div>
        </div> : <First />)
    );
}

export default Home;