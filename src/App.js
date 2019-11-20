import React from 'react'
import ContactCard from './ContactCard'

const App = () => 
    <div className='contacts'>
        <ContactCard 
            contact=
            {
                {
                    name: 'MR.CAT',
                    imgUrl: 'https://source.unsplash.com/200x150/?cat',
                    phone: '+89148929',
                    email: 'meoww321@yes.com'
                }
            }
        />

        <ContactCard 
            contact = {
                {
                    name: 'Showoff',
                    imgUrl: 'https://source.unsplash.com/200x151/?cat',
                    phone: '+84287123',
                    email: 'shekspier3@yahoo.meow'
                }
            }
        />

        <ContactCard 
            contact = {
                {
                    name: 'professional',
                    imgUrl: 'https://source.unsplash.com/200x152/?cat',
                    phone: '+81321123',
                    email: 'emailme@no.yes'
                }
            }
        />

        <ContactCard 
            contact = {
                {
                    name: 'mr.whiskerson',
                    imgUrl: 'https://source.unsplash.com/200x153/?cat',
                    phone: '+39710692',
                    email: 'balloon@ride.org'
                }
            }
        />
    </div>
 
export default App