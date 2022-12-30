import useHook from './hooks/use-basic';

const BasicForm = (props) => {
  const {
    value: EnteredFirstName,
    isvalid: EnteredValueFirstNameIsValid,
    Invalid: EnteredValueInvalid,
    ValueHandler: firstNameHandler,
    Blur: firtNameBlur,
    reset: FirstName,
  } = useHook((value) => value.trim() !== '');

  const {
    value: EnteredLastName,
    isvalid: EnteredValueLastNameIsValid,
    Invalid: EnteredValueLastNameInvalid,
    ValueHandler: lastNameHandler,
    Blur: lastNameBLur,
    reset: LastName,
  } = useHook((value) => value.trim() !== '');

  const {
    value: EnteredEmail,
    isvalid: EnteredEmailvalid,
    Invalid: EnteredEmailInvalid,
    ValueHandler: Emailhandler,
    Blur: EmailBLur,
    reset: email,
  } = useHook(
    (value) =>
      value.trim() !== '' && value.includes('@') && value.includes('gmail.com')
  );

  let formValid = false;

  if (
    EnteredValueFirstNameIsValid &&
    EnteredValueLastNameIsValid &&
    EnteredEmailvalid
  ) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      EnteredFirstName.trim() === '' &&
      EnteredLastName.trim() === '' &&
      EnteredEmail.includes('@')
    ) {
      return;
    }

    console.log(EnteredFirstName);
    console.log(EnteredLastName);
    console.log(EnteredEmail);
    FirstName();
    LastName();
    email();
  };

  const inputChangeClass = EnteredValueInvalid
    ? 'form-control invalid '
    : 'form-control';
  const lastNameChangeClass = EnteredValueLastNameInvalid
    ? 'form-control invalid '
    : 'form-control';
  const emailChangeClass = EnteredEmailInvalid
    ? 'form-control invalid '
    : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputChangeClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameHandler}
            value={EnteredFirstName}
            onBlur={firtNameBlur}
            type="text"
            id="name"
          />
          {EnteredValueInvalid && (
            <p className="error-text">PLEASE ENTER FIRST-NAME</p>
          )}
        </div>

        <div className={lastNameChangeClass}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameHandler}
            value={EnteredLastName}
            onBlur={lastNameBLur}
            type="text"
            id="name"
          />
          {EnteredValueLastNameInvalid && (
            <p className="error-text">PLEASE ENTER LAST-NAME</p>
          )}
        </div>
      </div>
      <div className={emailChangeClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={Emailhandler}
          value={EnteredEmail}
          onBlur={EmailBLur}
          type="text"
          id="name"
        />
        {EnteredEmailInvalid && (
          <p className="error-text">PLEASE ENTER EMAIL-ADDRESS</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
