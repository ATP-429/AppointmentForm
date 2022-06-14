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
    uploadDetails({
      name: name,
      email: email,
      phone: phone,
      date: date
    }).then(response => {
      console.log(response);

      if (response.success) {
        setSuccess(true);
      } else {
        setFail(true);
      }

      setSubmitting(false);
    }).catch(() => {
      setFail(true);
      setSubmitting(false);
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      submit();
    },
    className: "container"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h2", null, "APPOINTMENT FORM")), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    id: "name",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Please enter your name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: "form-control",
    id: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Please enter your email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "phone"
  }, "Phone Number"), /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    id: "phone",
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "Please enter your phone number"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "date"
  }, "Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    id: "date",
    value: date,
    onChange: e => setDate(e.target.value),
    placeholder: "Please enter your phone number"
  })), success ? /*#__PURE__*/React.createElement("div", {
    className: "alert alert-success "
  }, "Submission successful! Your details have been stored in our database!") : null, fail ? /*#__PURE__*/React.createElement("div", {
    className: "alert alert-danger"
  }, "Submission failed! Please try again!") : null, submitting ? /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: true
  }, "Submitting...")) : /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Submit"))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(AppointmentForm, null), document.getElementById('page'));