const Contact = () => {
  return (
    <div>
      <h1 className="font-bold test-3xl p-4 m-4">Contact Us</h1>
      <p>This is the Contact page.</p>

      <form action="">
        <input type="text" className="border border-black p-2 m-2" placeholder="name" />
        <input type="text" placeholder="message" className="border border-black p-2 m-2" />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg cursor-pointer">Submit</button>
      </form>
    </div>
  );
}

export default Contact;