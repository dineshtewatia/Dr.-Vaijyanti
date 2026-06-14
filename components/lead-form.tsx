import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createLead } from "@/lib/actions";

export function LeadForm({ treatment }: { treatment?: string }) {
  return (
    <form action={createLead} className="glass grid gap-4 rounded-lg p-5 md:p-7">
      <input type="hidden" name="source" value={treatment || "general"} />
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" placeholder="Your name" required className="mt-2" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" placeholder="+1 555 0100" required className="mt-2" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" placeholder="United States" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="treatment">Treatment</Label>
          <Input id="treatment" name="treatment" placeholder="Cardiac surgery" defaultValue={treatment} className="mt-2" />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Medical summary</Label>
        <Textarea id="message" name="message" placeholder="Diagnosis, timeline, reports available, preferred travel month" className="mt-2" />
      </div>
      <Button type="submit" variant="secondary" size="lg">
        <Send size={18} />
        Request consultation
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        By submitting, you consent to Curivora contacting you about treatment planning. Emergency cases should contact local emergency services.
      </p>
    </form>
  );
}
