import React, { useState } from 'react'
import '../styles/Form.css'

const Form = ({ movieName, genres, time, language, set }) => {
    const [name, setName] = useState('')
    const [ticket, setTicket] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')

    const closeForm = () => {
        set(false)
    }

    const userTicketDetail = [name, ticket, email, contact]

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('User', userTicketDetail);
        set(false)
    }

    return (
        <div className='form'>
            <form submit={handleSubmit}>
                <div className='container'>
                    <div className='head'>
                        <h1>{movieName}</h1>
                        <div onClick={closeForm} className='crossSign'>X</div>
                    </div>

                    <div className="row">
                        <div class="col">
                            <div className="mb-3 personName">
                                <label htmlFor="inputPersonName" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="inputPersonName" onChange={(e) => setName(e.target.value)} required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3 noOfTickets">
                                <label htmlFor="inputTickets" className="form-label">No. of Tickets</label>
                                <input type="number" className="form-control" id="inputTickets" onChange={(e) => setTicket(e.target.value)} required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3 email">
                                <label htmlFor="inputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail1" onChange={(e) => setEmail(e.target.value)} />
                                <span id="emailHelp" className="form-text">We'll never share your email with anyone else.</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3 email">
                                <label htmlFor="inputContact" className="form-label">Your Contact</label>
                                <input type="text" className="form-control" id="inputContact" onChange={(e) => setContact(e.target.value)} required />
                                <span id="emailHelp" className="form-text">We'll never share your contact with anyone else.</span>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3 password">
                                <label htmlFor="inputLanguage" className="form-label">Language</label>
                                <input type="text" className="form-control" id="inputLanguage" value={language} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3 password">
                                <label htmlFor="inputTiming" className="form-label">Timing</label>
                                <input type="text" className="form-control" id="inputTiming" value={time} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3 password">
                                <label htmlFor="inputGenres" className="form-label">Genres</label>
                                <input type="text" className="form-control" id="inputGenres" value={genres} />
                            </div>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form