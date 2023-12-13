import './CreateTicket.css'

export default function CreateTicket() {
    return (
        <div className='createTicket'>
            <form className='createTicketForm' action='../../data.json'>
                <label for='email'>Email:</label><br></br>
                <input type='email' id='email' name='email' required placeholder='Eksempel@eksempel.com' className='fiksBoks'/>
                <label for='navn'>Navn:</label><br></br>
                <input type='text' id='navn' name='navn' placeholder='Fornavn, Etternavn' required autoComplete='off' className='fiksBoks'/>
                <label for='dato'>Dato:</label><br></br>
                <input type='text' id='Dato' name='Dato' placeholder='DD.MM.YYYY' required autoComplete='off' className='fiksBoks'/>
                <label for='viktighet'>Alvorlighetsgrad:</label><br></br>
                <select id='viktighet' name='viktighet' required className='fiksBoks'>
                    <option value='hoy'>Høy</option>
                    <option value='middels'>Middels</option>
                    <option value='lav'>Lav</option>
                </select>
                <label form='problem'>Problem:</label><br></br>
                <input type='text' id='problem' name='problem' required autoComplete='off' placeholder='Forklar problemet kort.' className='fiksBoks'/>
                <label form='detaljer'>Detaljer:</label><br></br>
                <textarea type='text' id='detaljer' name='detaljer' required rows={10} cols={50} placeholder='Forklar problemet og hvordan det oppstod.' autoComplete='off' className='fiksBoks'/>
                <br></br>
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}