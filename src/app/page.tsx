import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <main className="min-h-screen bg-white-100 px-6 py-20 text-black-100">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl border border-black-10 bg-white-100 p-8">
        <p className="text-sm text-black-100/70">Reusable UI Foundation</p>
        <Heading level="h3" as="h1">
          Shared utilities for cleaner Tailwind + CVA components
        </Heading>
        <Text size="md" className="max-w-2xl text-black-100/70">
          The <code>cn</code> helper merges conditional classes and resolves
          Tailwind conflicts, while variant-driven components keep style logic in
          one place.
        </Text>

        <Text size="sm" weight="semibold" className="text-black-100/80">
          Reusable typography now includes `Heading` and `Text`.
        </Text>

        <div className="flex flex-wrap gap-3">
          <Button>Get Started</Button>
          <Button variant="secondary">Compare Plans</Button>
          <Button variant="ghost" size="sm" className="px-8">
            Learn More
          </Button>
        </div>
      </section>
    </main>
  );
}
