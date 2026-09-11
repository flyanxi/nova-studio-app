"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  description: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    if (!formData.name.trim()) return "Пожалуйста, укажите имя.";
    if (!formData.email.trim()) return "Пожалуйста, укажите email.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Некорректный формат email.";
    if (!formData.description.trim()) return "Опишите ваш запрос.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      // Simulating data transmission to the server
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setFormData({ name: "", email: "", description: "" });
    } catch (err) {
      setStatus("error");
      setError("Не удалось отправить запрос. Попробуйте ещё раз.");
    }
  };

  // Successful submission screen
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-6 py-16">
        <h2 className="text-2xl font-mono tracking-widest uppercase text-onSurface">
          Thank You!
        </h2>
        <p className="text-sm text-outline max-w-md">
          Your request has been received. Our team will contact you shortly to
          discuss your architectural vision.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-mono tracking-widest text-outline hover:text-onSurface transition-colors uppercase"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  // The form itself
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs font-mono tracking-widest uppercase text-outline"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="bg-transparent border-b border-outline focus:border-onSurface outline-none py-2 text-onSurface transition-colors disabled:opacity-50"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs font-mono tracking-widest uppercase text-outline"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="bg-transparent border-b border-outline focus:border-onSurface outline-none py-2 text-onSurface transition-colors disabled:opacity-50"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-xs font-mono tracking-widest uppercase text-outline"
        >
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled={status === "submitting"}
          rows={4}
          className="bg-transparent border-b border-outline focus:border-onSurface outline-none py-2 text-onSurface transition-colors resize-none disabled:opacity-50"
          required
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 font-mono" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 text-sm font-mono tracking-widest uppercase border border-outline hover:border-onSurface hover:text-onSurface transition-colors py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}