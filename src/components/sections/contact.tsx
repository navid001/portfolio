"use client";

import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE = "https://formspree.io/f/manyevvr";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "var(--surface)",
  border: "1px solid var(--hairline)",
  borderRadius: 4,
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-body), sans-serif",
  fontSize: 15,
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.15s ease",
};

interface FieldProps {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
  error?: string;
}

function Field({ name, label, type = "text", multiline, error }: FieldProps) {
  const [focused, setFocused] = useState(false);
  const style = {
    ...fieldStyle,
    borderColor: focused ? "var(--accent)" : error ? "#E87070" : "var(--hairline)",
  };

  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "var(--quiet)",
          textTransform: "lowercase",
          marginBottom: "0.4rem",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          style={{ ...style, resize: "vertical" }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          style={style}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
      {error && (
        <p
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "#E87070",
            marginTop: "0.3rem",
            letterSpacing: "0.04em",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({ user_name: "", user_email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const form = formRef.current;
    const errs = { user_name: "", user_email: "", message: "" };
    let valid = true;
    if (!form?.user_name.value.trim()) { errs.user_name = "Required."; valid = false; }
    if (!form?.user_email.value.trim()) { errs.user_email = "Required."; valid = false; }
    if (!form?.message.value.trim()) { errs.message = "Required."; valid = false; }
    setErrors(errs);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: formRef.current?.user_name.value,
          user_email: formRef.current?.user_email.value,
          message: formRef.current?.message.value,
        }),
      });
      if (res.ok) {
        toast({ title: "Sent.", description: "I'll get back to you within a few days." });
        formRef.current?.reset();
      } else {
        throw new Error("Send failed");
      }
    } catch {
      toast({ title: "Error", description: "Couldn't send. Try emailing me directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 1.5rem",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: "1rem",
                lineHeight: 1.15,
              }}
            >
              Working on something interesting?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 16,
                color: "var(--quiet)",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              Send a note and let&apos;s figure out if we&apos;re a good fit. I work with
              a small number of clients at a time and prefer real conversations
              over long intake forms.
            </p>
            <a
              href="mailto:navidalvi.001@gmail.com"
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 13,
                color: "var(--quiet)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--quiet)")}
            >
              navidalvi.001@gmail.com
            </a>
          </div>

          {/* Right: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <Field name="user_name" label="name" error={errors.user_name} />
            <Field name="user_email" label="email" type="email" error={errors.user_email} />
            <Field name="message" label="message" multiline error={errors.message} />

            <button
              type="submit"
              disabled={submitting}
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                border: "none",
                borderRadius: 4,
                padding: "0.75rem 1.5rem",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                cursor: submitting ? "default" : "pointer",
                opacity: submitting ? 0.7 : 1,
                alignSelf: "flex-start",
                transition: "opacity 0.15s ease",
                letterSpacing: "0.01em",
              }}
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
