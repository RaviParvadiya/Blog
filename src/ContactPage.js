function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us using the form below:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
