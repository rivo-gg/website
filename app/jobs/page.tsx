import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Code, Users, Zap } from "lucide-react"

export default function Component() {

  const features = [
    { icon: Code, label: 'Open Source', description: 'Contribute to our public repositories' },
    { icon: Users, label: 'Community', description: 'Join our developer community' },
    { icon: Zap, label: 'Innovation', description: 'Work on cutting-edge projects' },
  ]

  return (
   <section id="jobs" className="my-20 flex-col gap-20 px-6 min-h-screen text-white flex items-center justify-center p-4">
    <div className="max-w-4xl w-full">
			<span className="text-center text-5xl font-semibold leading-[1.15] md:text-6xl">
				Join the <span className="text-primary">Rivo</span> Ecosystem
			</span>
        <Card className="rounded-xl border-2 border-foreground/5 bg-foreground/[0.0125] p-8 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">We're Not Hiring, We're Collaborating</h2>
            <p className="text-lg mb-6">
              While we're not currently expanding our team, we believe in the power of community-driven innovation. Join us in shaping the future of digital products through open-source contributions!
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>Explore Our GitHub</span>
            </Button>
          </div>
        </Card>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.label}
              className="p-6 rounded-xl border-2 border-foreground/5 bg-foreground/[0.0125]"
             >
              <feature.icon className={"h-12 w-12 mb-4"} />
              <h3 className="text-xl font-bold mb-2">{feature.label}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>
  )
}
