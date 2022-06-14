AppointmentForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [date, setDate] = React.useState('');

    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);

    submit = () => {
        setSubmitting(true);
        setFail(false);
        uploadDetails({name: name, email: email, phone: phone, date: date}).then(response => {
                console.log(response);
                if(response.success) {
                    setSuccess(true);
                }
                else {
                    setFail(true);
                }
                setSubmitting(false);
            }).catch(() => { setFail(true); setSubmitting(false);}
        );
    }

    return (
        <React.Fragment>
            <form onSubmit={e => {e.preventDefault(); submit(); }} className="container">
                <center><h2>APPOINTMENT FORM</h2></center>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Please enter your name" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Please enter your email" />
                </div>

                <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input className="form-control" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Please enter your phone number" />
                </div>

                <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" className="form-control" id="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Please enter your phone number" />
                </div>

                { success ? <div className="alert alert-success ">Submission successful! Your details have been stored in our database!</div> : null}
                { fail ? <div className="alert alert-danger">Submission failed! Please try again!</div> : null}
                { submitting ? <center><button className="btn btn-primary" disabled>Submitting...</button></center> : <center><button className="btn btn-primary">Submit</button></center> }
            </form>
        </React.Fragment>
    );
}

ReactDOM.render(
    <AppointmentForm />,
    document.getElementById('page')
);