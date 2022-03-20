import utilStyles from "../styles/utils.module.css";

const ContactForm = () => (
  <div className={utilStyles.formContainer}>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" id="name" placeholder="Name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" placeholder="Email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" placeholder="Subject" />
      </label>
      <label>
        Message
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Type your message here..."
        />
      </label>
      <button type="submit">Send me a message!</button>
      <input type="reset" value="Clear" />
    </form>
  </div>
);

export default ContactForm;
