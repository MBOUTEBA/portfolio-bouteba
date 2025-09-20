import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f98hegv",   // ✅ Ton Service ID
        "template_xxxxxx",   // ⚠️ Remplace par ton Template ID (EmailJS)
        form.current,
        "YOUR_PUBLIC_KEY"    // ⚠️ Remplace par ton Public Key (EmailJS -> Account -> API Keys)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès ✅");
        },
        (error) => {
          console.log(error.text);
          alert("Erreur ❌ Message non envoyé");
        }
      );
  };

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          required
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
          className="p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="p-2 border rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
