import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    setStatus("Envoi en cours...");

    emailjs
      .send(
        "service_f98hegv",      // ⚡ Ton Service ID
        "template_xxxxxx",      // ⚡ Ton Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"       // ⚡ Ta clé publique (commence par "X-...")
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès ✅");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Erreur lors de l'envoi ❌");
        }
      );
  };

  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
      <form onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </section>
  );
}

export default Contact;
