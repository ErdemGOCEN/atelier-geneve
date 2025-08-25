import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

const plans = [
  {
    id: "basic",
    name: "Basic",
    icon: Star,
    price: {
      monthly: 49,
      yearly: "Free forever",
    },
    description: "30 minutes of Tech Support",
    features: [
      "50 API calls / month",
      "60 second checks",
      "Single-user account",
      "5 monitors",
      "Basic email support",
    ],
    cta: "Get started for free",
  },
  {
    id: "premium",
    name: "Premium",
    icon: Zap,
    price: {
      monthly: 79,
      yearly: 75,
    },
    description: "60 minutes of Tech Support",
    features: [
      "Unlimited API calls",
      "30 second checks",
      "Multi-user account",
      "10 monitors",
      "Priority email support",
    ],
    cta: "Subscribe to Pro",
    popular: true,
  },
  {
    id: "luxury",
    name: "Luxury",
    icon: Shield,
    price: {
      monthly: 129,
      yearly: "Get in touch for pricing",
    },
    description: "90 minutes of Tech Support",
    features: [
      "You can DDOS our API.",
      "Nano-second checks.",
      "Invite your extended family.",
      "Unlimited monitors.",
      "We'll sit on your desk.",
    ],
    cta: "Contact us",
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 text-center sm:px-8 pt-32 lg:pt-48 pb-32">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center space-y-2">
            <Badge
              variant="outline"
              className="border-sky-blue/20 bg-sky-blue/15 mb-4 rounded-full px-4 py-1 text-sm font-medium"
            >
              <Sparkles className="text-primary mr-1 h-3.5 w-3.5 animate-pulse" />
              Affordable Price
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-5xl text-balance"
            >
              Pick the perfect plan for your needs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-md pt-2 text-lg"
            >
              Simple, transparent pricing that scales with your business. No
              hidden fees, no surprises.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          ></motion.div>

          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex"
              >
                <Card
                  className={cn(
                    "relative h-full w-full text-left transition-all duration-300 hover:shadow-lg",
                    plan.popular ? "border-sky-blue" : undefined
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
                      <Badge className="bg-sky-blue text-primary-foreground rounded-full px-4 py-1 shadow-sm">
                        <Sparkles className="mr-1 h-3.5 w-3.5" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className={cn("pb-4", plan.popular && "pt-8")}>
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full"
                        )}
                      >
                        <plan.icon className="h-4 w-4" />
                      </div>
                      <CardTitle className={cn("text-xl font-bold")}>
                        {plan.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="mt-3 space-y-2">
                      <p className="text-sm">{plan.description}</p>
                      <div className="pt-2">
                        {typeof plan.price[
                          "monthly" as keyof typeof plan.price
                        ] === "number" ? (
                          <div className="flex items-baseline">
                            <NumberFlow
                              className={cn("text-3xl font-bold text-sky-blue")}
                              format={{
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                              }}
                              value={
                                plan.price[
                                  "monthly" as keyof typeof plan.price
                                ] as number
                              }
                            />
                            <span className="text-muted-foreground ml-1 text-sm">
                              / one time cost
                            </span>
                          </div>
                        ) : (
                          <span
                            className={cn(
                              "text-2xl font-bold",
                              plan.popular ? "text-primary" : "text-foreground"
                            )}
                          >
                            {plan.price["monthly" as keyof typeof plan.price]}
                          </span>
                        )}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 pb-6">
                    {plan.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.05,
                        }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div
                          className={cn(
                            "flex h-5 w-5 items-center justify-center rounded-full bg-sky-blue text-secondary"
                          )}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span
                          className={
                            plan.popular
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.popular ? "green" : "outline"}
                      className={cn(
                        "group w-full rounded-full font-medium transition-all duration-300"
                      )}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>

                  <div className="hover:border-primary/10 pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
