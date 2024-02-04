interface Step {
  key: string;
  title: string;
  description: string;
  slug: string;
}

export const steps: Step[] = [
  {
    key: "levain",
    title: "Levain",
    description: "Create your levain",
    slug: "levain",
  },
  {
    key: "autolyse",
    title: "Autolyse",
    description: "Mix water & flour",
    slug: "autolyse",
  },
  {
    key: "stretch",
    title: "Stretch & fold",
    description: "Stretch and fold",
    slug: "stretch-and-fold",
  },
  {
    key: "bulk",
    title: "Bulk fermentation",
    description: "Let make this bread stronger by waiting",
    slug: "bulk-fermentation",
  },
  {
    key: "divide",
    title: "Divide & preshape",
    description: "Let it rest on the counter",
    slug: "divide",
  },
  {
    key: "shaping",
    title: "Shaping",
    description: "Shape into a boule, batard, baguette",
    slug: "shaping",
  },
  {
    key: "proofing",
    title: "Proofing",
    description: "Let the gluten do the wonder",
    slug: "proofing",
  },
  {
    key: "scoring",
    title: "Scoring",
    description: "Make it beautiful",
    slug: "scoring",
  },
  {
    key: "baking",
    title: "Baking",
    description: "Bake your bread",
    slug: "baking",
  },
];
