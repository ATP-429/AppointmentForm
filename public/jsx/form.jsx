AppointmentForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    submit = () => {

    }

    return (
        <React.Fragment>
            <form onSubmit={submit} className="container">
                <center><h2>APPOINTMENT FORM</h2></center>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Please enter your name" />
                </div>

                <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Please enter your email" />
                </div>

                <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input className="form-control" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Please enter your phone number" />
                </div>

                <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" className="form-control" id="date" placeholder="Please enter your phone number" />
                </div>

                <center><button className="btn btn-primary">Submit</button></center>
            </form>
        </React.Fragment>
    );
}

ReactDOM.render(
    <AppointmentForm />,
    document.getElementById('page')
);