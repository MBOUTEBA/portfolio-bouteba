import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Met à jour le formulaire
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envoi du mail
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs
      .send(
        "service_f98hegv",   // Ton Service ID
        "template_nbhx0e9",  // Ton Template ID
        {
          from_name: form.name,   // correspond à {{from_name}} dans le template
          email: form.email,      // correspond à {{email}} dans le template
          message: form.message,  // correspond à {{message}} dans le template
        },
        "Q9tajFGXWLxQWBCeS"    // Ta clé publique
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
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      {status && (
        <p style={{ color: status.includes("✅") ? "green" : "red" }}>
          {status}
        </p>
      )}
    </section>
  );
}

export default Contact;
