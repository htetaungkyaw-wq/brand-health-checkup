import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent!", {
      description: "We'll respond with a tactical idea within 48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="mt-8 bg-card rounded-xl p-8 border" style={{ boxShadow: "var(--shadow-soft)" }}>
      <h3 className="text-2xl font-semibold text-foreground">Contact</h3>
      <p className="text-muted-foreground mt-2">
        Drop your brief and optionally paste your result share link. We'll
        respond with one tactical idea within 48 hours.
      </p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Your name"
          required
          className="md:col-span-1"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="md:col-span-1"
        />
        <Textarea
          name="message"
          placeholder="Tell us about your brand challenge..."
          required
          className="md:col-span-2 h-32 resize-none"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="md:col-span-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </form>
    </section>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
