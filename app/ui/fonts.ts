import {Lusitana,Montserrat,Inter} from 'next/font/google'


// cambiar la fuente ademas se le puede agregar peso a las letras, 
// export const montserrat = Montserrat ({subsets:['latin'], weight:'400'})


//exporto una fuente especifica el mi idioma
export const montserrat = Montserrat ({subsets:['latin']})

export const  lusitana= Lusitana ({
    subsets: ['latin'],
    weight: '400'
})

export const inter = Inter({ subsets: ['latin'] });