
import React, { useState } from "react";
import {motion} from "motion/react"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Envoi en cours...");

    const formPayload = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulaire soumis avec succès !");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setResult(`Erreur: ${data.message}`);
      }
    } catch (error) {
      setResult("Erreur lors de l'envoi du formulaire.");
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="my-16 flex flex-col items-center justify-center px-6 lg:px-20">
      <motion.h2 whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration:1}} className="mb-8 text-4xl text-center">
        Contactez <span className="text-neutral-500">Moi</span>
      </motion.h2>
      <motion.form
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: 100}}
      transition={{duration:1}}
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 rounded-lg bg-neutral-900 p-8 shadow-lg"
      >
       
        <input type="hidden" name="access_key" value="c324ad2e-ae39-4f67-8d99-bd3413d7a9f9" />

        
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-white"
          >
            Votre nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-md border border-neutral-700 bg-neutral-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Entrez votre nom"
          />
        </div>

        
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white"
          >
            Votre e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-md border border-neutral-700 bg-neutral-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Entrez votre e-mail"
          />
        </div>

        
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-white"
          >
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-md border border-neutral-700 bg-neutral-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Entrez votre message"
          />
        </div>

        
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-3 text-white font-semibold shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Commencer à recevoir
        </button>
      </motion.form>

      
      <p className="mt-4 text-sm text-white">{result}</p>
    </div>
  );
};

export default ContactForm;
