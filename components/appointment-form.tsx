"use client";

import { CalendarCheck, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type AppointmentErrors = Partial<Record<"name" | "phone" | "date" | "time", string>>;

export function AppointmentForm() {
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: AppointmentErrors = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");

    if (name.length < 2) nextErrors.name = "Please enter the patient's name.";
    if (!/^[0-9+\-\s()]{8,16}$/.test(phone)) nextErrors.phone = "Please enter a valid phone number.";
    if (!date) nextErrors.date = "Please choose a preferred date.";
    if (!time) nextErrors.time = "Please choose a preferred time.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid gap-4 rounded-lg p-5 md:p-7">
      <input type="hidden" name="clinic" value="Dr. Vaijyanti Verma Clinic" />
      <div className="flex items-start gap-3 rounded-lg bg-[#DDF7EE]/72 p-4">
        <CalendarCheck className="mt-1 text-primary" size={24} />
        <div>
          <h3 className="font-serif text-2xl font-semibold text-primary">Request an appointment</h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Share your preferred time. The clinic can connect this form to a database, CRM, email, or WhatsApp workflow later.
          </p>
        </div>
      </div>

      <div>
        <Label htmlFor="appointment-name">Patient Name</Label>
        <Input id="appointment-name" name="name" placeholder="Patient full name" className="mt-2" aria-invalid={Boolean(errors.name)} />
        {errors.name ? <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p> : null}
      </div>

      <div>
        <Label htmlFor="appointment-phone">Phone Number</Label>
        <Input id="appointment-phone" name="phone" type="tel" placeholder="+91 99719 98804" className="mt-2" aria-invalid={Boolean(errors.phone)} />
        {errors.phone ? <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="appointment-date">Preferred Date</Label>
          <Input id="appointment-date" name="date" type="date" className="mt-2" aria-invalid={Boolean(errors.date)} />
          {errors.date ? <p className="mt-1 text-xs font-medium text-red-600">{errors.date}</p> : null}
        </div>
        <div>
          <Label htmlFor="appointment-time">Preferred Time</Label>
          <Input id="appointment-time" name="time" type="time" className="mt-2" aria-invalid={Boolean(errors.time)} />
          {errors.time ? <p className="mt-1 text-xs font-medium text-red-600">{errors.time}</p> : null}
        </div>
      </div>

      <div>
        <Label htmlFor="appointment-message">Message</Label>
        <Textarea
          id="appointment-message"
          name="message"
          placeholder="Reason for visit, pregnancy week, symptoms, or any notes you would like the doctor to know."
          className="mt-2 min-h-28"
        />
      </div>

      <Button type="submit" size="lg">
        <Send size={18} />
        Submit Request
      </Button>

      {submitted ? (
        <p className="rounded-md border border-primary/20 bg-[#DDF7EE] p-3 text-sm font-medium text-primary">
          Thank you. Your appointment request has been recorded on this page and is ready to connect with a backend.
        </p>
      ) : null}

      <p className="text-xs leading-5 text-muted-foreground">
        For urgent or emergency symptoms, please contact local emergency services or visit the nearest hospital.
      </p>
    </form>
  );
}
