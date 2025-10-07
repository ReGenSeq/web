import { ScrollRevealSection } from '../ScrollRevealSection'

export default function ScrollRevealSectionExample() {
  return (
    <ScrollRevealSection className="h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Example Section</h2>
        <p className="text-lg text-muted-foreground">
          This content is revealed as you scroll, with images sliding in from both sides.
        </p>
      </div>
    </ScrollRevealSection>
  )
}
