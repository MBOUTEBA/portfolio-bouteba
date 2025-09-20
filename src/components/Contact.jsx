import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs.send(
      "service_f98hegv",   // Ton Service ID
      "template_nbhx0e9",  // Ton Template ID
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      "Q9tajFGXWLxQWBCeS"  // Ta clé publique
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
    <section id="contact" className="h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold mb-4">Contact</h2>
      <form onSubmit={sendEmail} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded h-32"
          required
        />
        <button type="submit" className="w-full px-6 py-3 bg-gray-900 text-white rounded">
          Envoyer
        </button>
      </form>
      {status && (
        <p className={`mt-2 ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </p>
      )}
    </section>
  );
}
