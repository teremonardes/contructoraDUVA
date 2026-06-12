"use client";

import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xojzpvov");

  if (state.succeeded) {
    return (
      <div className="text-center py-10">
        <h3 className="text-2xl font-semibold mb-3">
          Mensaje enviado
        </h3>

        <p className="text-gray-600">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="block mb-2 text-sm font-medium">
          Nombre
        </label>

        <input
          type="text"
          name="nombre"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Correo electrónico
        </label>

        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Teléfono
        </label>

        <input
          type="tel"
          name="telefono"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Mensaje
        </label>

        <textarea
          name="mensaje"
          rows={6}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--primary)] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-full bg-[var(--primary)] text-white py-4 font-medium hover:opacity-90 transition"
      >
        {state.submitting
          ? "Enviando..."
          : "Enviar mensaje"}
      </button>
    </form>
  );
}