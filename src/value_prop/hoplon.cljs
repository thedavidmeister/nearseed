(ns value-prop.hoplon
 (:require
  [hoplon.core :as h]))

(defn value-prop
 []
 [
  (h/h1
   :css {:white-space "nowrap"}
   (logo.hoplon/logo) "NearSeed")

  (h/p
   "Near: easy, journey."
   (h/br)
   "Seed: life, growth."
   (h/br)
   "NearSeed: together, potential.")

  (h/h2 "The story")

  (h/p "One day, stuck doing something onerous, Dave (consultant, founder) flipped the table.")
  (h/p "(ノಠ益ಠ)ノ彡┻━┻")
  (h/p "\"Why is this difficult!?")
  (h/p "\"The freelance lifestyle (and money) is great… until the chores pile up… tracking billables, chasing bureaucrats, presenting well, and diarising events…")
  (h/p "\"Sure, there are cloud tools, integrations and service providers. Researching, configuring then maintaining them all takes hours 😓")
  (h/p "\"Even after I am set up, should I be doing this? Chores aren't my passion. I'll wind up with mistakes and pointless fees. Working all the time, bumbling through… 🤔")
  (h/p "\"I need to spend all my work time doing what I do best and none of my play time with chores on the mind.")
  (h/p "And so he set out to create a system.")

  (h/p
   (typography.hoplon/highlight
    "If this story resonates then keep reading."
    (h/br))
   (typography.hoplon/highlight
    "The system is waiting to support you."))

  (h/h2 "The promise")

  (h/ul
   (map h/li ["Unlock time. Be awesome. Live the dream."
              "Be supported. Keep being you."
              "Strengthen existing relationships."
              "No bureaucrats. No bosses. No jobs. No recruiters."
              "Meet interesting people."
              "Transparency at every step."
              "Simple tools to help calibrate your trajectory."
              "Access vetted service providers."
              "Access services typically off-limits to individuals."
              "Build much more wealth than the $$$ value."
              "Unify it all under a single tax-deductible fee."]))

  (h/h2 "The system")

  (h/p
   (typography.hoplon/highlight
    "NearSeed gives simplicity and context to everyday life.")
   (h/br)
   (h/em "Almost") " too simple."
   (h/br)
   (h/em "Just enough") " context.")


  (h/p
   "The system is divided into 4 thematic tiers."
   (h/br)
   "Access to each tier is tied to your professional experience and income.")

  (h/p
   "Each tier gives monthly credits."
   (h/br)
   "Credits can be exchanged for services aligned with the theme of your current tier.")

  (h/p
   "A dedicated NearSeed helper will review your situation periodically and recommend the best services for you.")

  (h/p
   "The first tiers focus on focus and stability."
   (h/br)
   "Accounting, tools & calculators, goal tracking, diarising, and task management.")

  (h/p
   "Later tiers build on the foundations of earlier tiers."
   (h/br)
   "Global travel, public speaking, and more sophisticated opportunities.")

  (h/h2 "The tiers")
  (h/h3 "0: Automation")
  (h/h3
   (typography.hoplon/highlight
    "Start " (h/em "those") " conversations with yourself."))

  (h/p
   "Cloud platform for social, self & wealth development."
   (h/br)
   "$50 p.m. for everyone.")

  (h/h3 "A: Accountability")
  (h/h3
   (typography.hoplon/highlight
    "Unlock time for growth."))

  (h/p
   "Everything in 0: Automation and credits for…")

  (h/p
   "Personal accountability, daily grind assistance, bookkeeping and accounting."
   (h/br)
   "$100 p.w. for anyone with 5+ years industry experience.")

  (h/h3 "AA: Activation")
  (h/h3
   (typography.hoplon/highlight
    "Present well to become known for ideas."))

  (h/p
   "Everything in A: Accountability and credits for…")

  (h/p
   "Personal branding, travel and social opportunities."
   (h/br)
   "$200 p.w. for anyone earning $150k+.")

  (h/h3 "AAA: Access")
  (h/h3
   (typography.hoplon/highlight
    "Reach your potential."))

  (h/p
   "Everything in AA: Activation and credits for…")

  (h/p
   "Exclusive co-working spaces, events and co-founder/VC opportunities."
   (h/br)
   "$300 p.w. for anyone earning $180k+.")])
