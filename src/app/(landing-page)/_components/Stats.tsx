
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type StatItem = {
  id: string
  value: string
  label: string
}

const STATS: StatItem[] = [
  { id: "active-users", value: "6M+", label: "Active users" },
  { id: "support", value: "24/7", label: "Users support" },
  { id: "countries", value: "160+", label: "Countries" },
  { id: "trade-volume", value: "$22B+", label: "Trade volume" },
]

const StatCard = ({ value, label }: Omit<StatItem, "id">) => {
  return (
    <article className="flex w-full flex-col items-center justify-center rounded-2xl border border-white-10 bg-white-5 px-6 py-10 text-center sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
      <Heading as="h2" level="h2" className="mb-1 text-primary-100">
        {value}
      </Heading>
      <Text size="md" className="text-white-80">
        {label}
      </Text>
    </article>
  )
}

const Stats = () => {
  return (
    <section
      className="section-y bg-black-100"
      aria-labelledby="stats-section-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Heading id="stats-section-title" as="h2" level="h6" className="sr-only">
          Crypgo platform stats
        </Heading>
        <div className="flex flex-wrap gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
