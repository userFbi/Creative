import { Upload, Link, Clock, Trash2 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload your files",
    description: "Drag & drop or select photos, videos, or documents",
  },
  {
    icon: Clock,
    title: "Set expiry time",
    description: "Choose how long your files stay available (1-7 days)",
  },
  {
    icon: Link,
    title: "Get shareable link",
    description: "Instantly receive a unique link to share with anyone",
  },
  {
    icon: Trash2,
    title: "Auto-delete",
    description: "Files are automatically removed after expiry for privacy",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-16 px-4">
      <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
        How it works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={index}
              className="bg-card rounded-xl p-5 shadow-card hover:shadow-soft transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-sky/50 flex items-center justify-center mb-4">
                <IconComponent className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
