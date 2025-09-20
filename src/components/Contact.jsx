// src/components/Contact.jsx
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

    emailjs
      .send(
        "service_f98hegv",   // ton Service ID EmailJS
        "template_nbhx0e9",  // ton Template ID EmailJS
        {
          name: form.name,      // correspond à {{name}} dans ton template
          email: form.email,    // correspond à {{email}}
          message: form.message // correspond à {{message}}
        },
        "Q9tajFGXWLxQWBCeS"    // ta clé publique
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès ✅");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur EmailJS :", error);
          setStatus("Erreur lors de l'envoi ❌");
        }
      );
  };

  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold mb-6">Contact</h2>
      <form onSubmit={sendEmail} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded h-32"
          required
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gray-900 text-white rounded"
        >
          Envoyer
        </button>
      </form>
      {status && (
        <p className={`mt-4 ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </p>
      )}
    </section>
  );
}
