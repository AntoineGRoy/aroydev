const articles = [
  {
    id: "1",
    title: "From Philosophy to Frontend Engineering",
    slug: "antoine-roy-frontend-journey",
    date: "2025-07-24",
    excerpt: "How a background in logic and pedagogy evolved into a career building design systems, scalable frontends, and cross-platform user experiences.",
    tags: [
      "career journey",
      "frontend engineer",
      "design systems",
      "React",
      "education tech",
      "trainingpeaks",
      "vue",
      "growth teams",
      "ab testing",
      "checkout",
      "stripe",
      "firestore",
      "accessibility",
      "cross-functional collaboration"
    ],
    categories: ["About Me"],
    content: [
      { type: "heading", text: "I've always loved logic" },
      { type: "paragraph", text: `
        My professional path didn’t start with code. It started with logic & Philosophy.  
        After earning a **Bachelor’s in Philosophy** and a **Master’s in Pedagogy**, I spent more than a decade as an **educator and digital education advisor**, deploying tools that helped teachers impact classrooms across continents —from Europe to the Amazonian rainforest, the Caribbean to the U.S.
      `},
      
      { type: "heading", text: "Learning the Language of the Web" },
      { type: "paragraph", text: `
        Teaching how to research information, how to use social networks responsibly, helping teachers and students use more and more complex tools led me to learn more about User Experience in technology.
        Ultimately it led me to code my first tools, learn about accessibility, and understand the importance of performance.
        That's when I realized I wanted to build tools that help people. In my mind, at this time, I could then go back to teaching with a stronger and deeper understanding of the impact of technology.
        `},
      { type: "paragraph", text: `
        I began as a freelancer, rebuilding frontends for startups like **Wespire** and **Resolvve**, boosting performance and stability. From there, I joined larger product teams: first **Buffini & Company**, then **Nexient**, and ultimately **TrainingPeaks**.
      `},
      {
        type: "paragraph",
        text: `
        Since then, I had the oportunity to work for very different companies with very different levels of maturity. From a very small startup like Resolvve to a well established brands like Williams Sonoma. Engineering culture and how it shapes the code produced - and sometimes the lack of it - is always fascinating to me. Melvin E. Conway was definetely right: `
      },
      {type: 'quote', text: '"Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization\'s communication structure."'},
      { type: "heading", text: "Engineering for Growth, Design, and Consistency" },
      { type: "paragraph", text: `
        At **TrainingPeaks**, I’ve worked across **checkout**, **growth**, and **design system** teams.  
        I helped lead a **Stripe-powered checkout overhaul**, built **A/B testing frameworks** using Eppo and Segment, and co-led a **rebrand across web and mobile** by creating a shared design token system between engineering and design.
      `},
      { type: "list", items: [
        "Created a reusable design system with MUI themes, CSS variables, and icon libraries",
        "Reduced checkout latency by 20% and dev time by 25% via shared components",
        "Enabled experimentation across platforms through a unified growth framework"
      ]},
      { type: "paragraph", text: `
        I don’t just code features. I build **tools that accelerate teams**, connect **Figma to production**, and reduce **redundant effort**.
      `},
  
      { type: "heading", text: "Code is Culture" },
      { type: "paragraph", text: `
        I believe **development is a cultural act**. A good codebase expresses values: clarity, consistency, scalability.
        Whether through documentation at TrainingPeaks’ Web Guild, or mentoring junior devs, I’ve always seen frontend work as a way to **influence how teams think and collaborate**.
      `},
      { type: "quote", text: "Communicating the complexities and opportunities offered by technical solutions is my favorite thing to do." },
  
      { type: "heading", text: "What Drives Me Today" },
      { type: "paragraph", text: `
        My ambition is to produce optimized, accessible code using best practices.  
        I’m committed, motivated, and eager to learn. I want to help teams **move forward**, **solve meaningful problems**, and **build systems that scale**.
      `},
      { type: "list", items: [
        "Frontend architecture with React, Vue, and Next.js",
        "Design system tooling and cross-platform theming",
        "Performance tuning, A/B experimentation, and Lighthouse optimization",
        "Accessibility-first development and testing"
      ]},
  
      { type: "heading", text: "A Life Beyond the Terminal" },
      { type: "paragraph", text: `
        Outside of work, I’m a **surfer of 30 years**, a **musician**, and a **lover of French poetry**.
        I’ve lived on **four continents**, and that global perspective continues to inform the way I build—**with empathy, with curiosity, and with a bias toward clarity**.
      `},
      
      { type: "separator" },
  
      { type: "heading", text: "Looking Ahead" },
      { type: "paragraph", text: `
        I’m excited to continue contributing to teams that value performance, usability, and developer experience.  
        Whether building tooling, leading initiatives, or delivering user-facing features, I aim to bridge the gap between **design and development**, **speed and scalability**, and **vision and execution**.
      `}
    ]
  }
  ,
  {
    id: "0",
    title: "How to build a design system",
    slug: "how-to-build-a-design-system",
    date: "2025-07-16",
    excerpt: "Company wide design system when environments are using many different technologies.",
    tags: [
      "design system",
      "tokens",
      "cross-platform",
      "collaboration",
      "workflow",
      "adoption",
      "scaling",
      "guidelines",
      "design tokens",
      "Figma",
      "Supernova",
      "Tailwind",
      "MUI",
      "JSON",
      "consistency",
      "tech debt"
    ],
    categories: [
      "Blog","Design Systems"
    ],
    content: [
      { type: 'heading', text: 'What problem are we trying to solve?' },
      { type: 'paragraph', text: `
        Imagine a **mid-size company** with **200+ employees**, **10+ different teams**, and **5+ different technologies**, including web and mobile applications. 
        Each environment has its own **legacy** and **practices** in terms of style implementation.
        Each team can work in any environment depending on the project. There is a **dedicated designer** for each team. This organization allows each team to focus on a specific **mission** rather than a specific technology but it makes it difficult 
        for engineers to adapt to each different environment's **legacy code** and **best practices**.
      `},
      { type: 'paragraph', text: 'The consequences, in terms of styling, are:' },
      { type: 'list', items: [
        '**Unmaintainable styles** with hardcoded values',
        '**Redundant code** – engineers avoid reusing components or values for fear of breaking other parts of the application',
        '**Inconsistent design** and components across platforms'
      ]},
      { type: 'paragraph', text: 'In three words: **tech debt increases**.' },
      { type: 'paragraph', text: 'The root cause is the lack of a shared, authoritative **source of truth** for **styling**.' },
      { type: 'list', items: [
        'Each environment has solved styling in its own **siloed way**. There’s **no global strategy**. **No unified vision**.'
      ]},
      { type: 'separator' },
      { type: 'heading', text: 'Stage 0: The Variables' },
      { type: 'paragraph', text: `
        CSS and associated frameworks have gone a long way. They offer a lot of flexibility and power. How many engineers have had a deep feeling of accomplishment when replacing hard-coded values with CSS variables?
        It feels good, it looks better, and you can now change a value everywhere with one change. But very quickly, new variables are added, engineers are reluctant to change existing variables' values because it's beyond the scope of their task and they are unsure of the consequences. Variables' power will cause their downfall. They will multiply and become unmanageable.
      `},
      { type: 'paragraph', text: `
        These variables only exist in code; their names are very often the arbitrary creation of one engineer. In most cases, you will see some variations appear: blue1 will follow blue, and primary-light will follow primary. Watch them grow into primary-lighter or blue1-darker.
      `},
      { type: 'paragraph', text: `
        The problem is that these variables are not shared. They are not part of a design system. They are not part of a shared vocabulary. They are not part of a shared understanding.
        They are not part of a shared culture. They are not part of a shared language.
      `},
      { type: 'paragraph', text: `
        The problem is that these variables are not shared. They are not part of a design system. They are not part of a shared vocabulary. They are not part of a shared understanding.
      `},
      { type: 'heading', text: 'Stage 1: The Guidelines' },
      { type: 'paragraph', text: `
        This is usually the **first attempt** at solving the chaos.
        **Courageous engineers** comb through codebases and documentation in an effort to define **cross-environment styling guidelines**. 
        They consult with **engineering leads** and **code owners** to understand existing patterns and challenges. They come accross the many variables and try to establish naming conventions.
      `},
      { type: 'paragraph', text: `
        They write **documentation**. But the reality is, **guidelines aren’t enough**. 
        They help **standardize** practices within a team or repository—but they do not prevent **divergence** across environments.
      `},
      { type: 'quote', text: `
        In the absence of a Design System, guidelines are often too vague to be useful or too detailed to be followed. 
      `},
      { type: 'paragraph', text: `
        At this point, engineers begin to realize the scope of the problem. **It’s not just technical—it’s organizational**.
        Solving this problem seems like a herculean task that cannot be owned by engineering alone.
      `},
      { type: 'separator' },
      { type: 'heading', text: 'Stage 2: A holistic approach' },
      { type: 'paragraph', text: `
        We need to understand the problem from a holistic perspective. We won't be able to systematize styling if we don't understand the styles life cycle: 
      `},
      { type:'list', items:[`How it is created`, `How it travels from designers to engineers`, `How it is used in production`]},
        { type:'paragraph', text:`**Designers are producers**, they produce styled UI elements.
        Understanding their **tools**, **feedback cycles**, and **creative expectations** is critical if we want to systematize styling implementation.`},
        { type:'paragraph', text:`Designers will be consumers and co-owners of the system, therefore it cannot be built without them.`},
      { type: 'heading', text: 'Stage 3: Building the Styling Dictionary' },
      { type: 'paragraph', text: `
        The first meaningful step is creating a **styling dictionary**: a shared, structured collection of **design values** expressed as **tokens**.
        This is a **collaborative effort** between design and engineering. Together, we define:
      `},
      { type: 'list', items: [
        '**Base tokens**: raw values like colors, spacing, font sizes (#000, 8px, 1.5rem)',
        '**Semantic tokens**: named purpose-driven values like primary-text, surface-background, action-hover',
        '**Component tokens**: scoped tokens like card-padding, button-radius, form-border'
      ]},
      { type: 'paragraph', text: `
        The **naming system** is inspired by utility-first frameworks like **Tailwind**—predictable, human-readable, and scalable.
      `},
      { type: 'paragraph', text: 'But here’s the balance you must strike:' },
      { type: 'list', items: [
        '**Designers need enough expressive vocabulary** to stay creative',
        'The system must stay **opinionated and systematic**—if everything is allowed, it’s not a system'
      ]},
      {type:'quote', text:'If everything is allowed, it’s not really a system anymore, is it?'},
      { type: 'paragraph', text: `
        It's not just about building tooling for developers -  it's about **formalizing how designers express intent**.
      `},

      { type: 'heading', text: 'Stage 4: Aligning Workflows' },
      { type: 'paragraph', text: `
        A dictionary alone won’t solve anything if teams don’t use it.
        The next step is **aligning workflows**:
      `},
      { type: 'list', items: [
        'How do designers use these tokens in **Figma** or **Sketch**?',
        'How are these values surfaced to **engineers**?',
        'How are **updates proposed and approved**?',
        'How do tokens move from **idea → prototype → production**?'
      ]},
      { type: 'paragraph', text: `
        Expose the design system in ways that are **native to both disciplines**:
        Designers see tokens in **Figma plugins** or tools like **Supernova**,
        Engineers consume them through **theme files**, **constants**, or **utility classes**.
      `},

      { type: 'heading', text: 'Stage 5: Implementation Across Platforms' },
      { type: 'paragraph', text: `
        You don’t need to build a full platform to get started. In fact, you **shouldn’t**.
        Start with the **simplest, most portable format**: a structured **JSON file**.
      `},
      { type: 'paragraph', text: `
        This **JSON object** becomes the **source of truth** for tokens. Any platform—web, native, server-rendered—can consume it.
      `},
      { type: 'list', items: [
        'Every team has access to **consistent values**',
        'The system is immediately **useful in any environment**',
        'You can **evolve tooling** around it without breaking things'
      ]},

      { type: 'heading', text: 'Stage 6: Scaling the Outputs' },
      { type: 'paragraph', text: `
        Once the **JSON-based dictionary** is working and trusted, you can expand:
      `},
      { type: 'list', items: [
        'Generate a **Tailwind config** from the dictionary',
        'Export **MUI themes** mapped to token categories',
        'Generate **native token objects** for iOS or Android',
        'Build a central **icon registry** as part of the system'
      ]},
      { type: 'paragraph', text: `
        This isn’t about adding complexity—it’s about **scaling one coherent system** across multiple platforms.
      `},

      { type: 'heading', text: 'Stage 7: Adoption Through Enablement' },
      { type: 'paragraph', text: `
        If you want this system to be adopted, there’s only one strategy that works:
        **Make it easier than not using it.**
      `},
      { type: 'list', items: [
        '**Run workshops**',
        '**Pair with engineers**',
        '**Demo** how quickly you can build consistent UIs using the dictionary',
        'Let designers see how their naming gets used **1:1 in production**'
      ]},
      { type: 'paragraph', text: `
        Once people realize it **reduces friction**, they’ll adopt it on their own.
        The system succeeds because it **helps them do their job better**.
      `},

      { type: 'heading', text: 'Stage 8: Evolving with Change' },
      { type: 'paragraph', text: `
        Designers iterate. They change their mind. A lot. And that’s a **feature, not a bug**.
        The system must accommodate this reality:
      `},
      { type: 'list', items: [
        '**Updating tokens** should be collaborative and traceable',
        'The **source of truth** must allow flexibility with structure',
        'Tools like **Supernova** or **Specify** can enable designers to edit token values without touching code'
      ]},

      { type: 'separator' },

      { type: 'heading', text: 'Stage 9: Final Thoughts & What Comes Next' },
      { type: 'paragraph', text: `
        You've moved beyond **fragmented styling** and **outdated documentation**.
        You've created a **shared design vocabulary**, **aligned workflows** across disciplines, and introduced a system that **scales across technologies**.
        But building the system is only part of the journey.
      `},
      { type: 'paragraph', text: `
        Now comes the real test: **proving it works**.
        A system only justifies its existence if it brings **tangible value**—**consistency**, **scalability**, and **increased productivity**.
        The next step is to **track adoption**, **measure impact**, and **surface wins**.
      `},
      { type: 'paragraph', text: `
        In the next chapter, we’ll explore how to **demonstrate the system’s effectiveness**.
        What **KPIs** can you use? How do you **measure consistency**?
        How can you **prove** that what you’ve built makes your organization **faster, more efficient, and more cohesive**?
      `}
    ]
  },
  {
    id: "3",
    title: "Technical Deepdive: Performant React Context",
    slug: "technical-deepdive-performant-react-context",
    date: "2025-08-02",
    excerpt: "A deep dive into the performance of React Context, and how to use it effectively.",
    tags: [
      "React",
      "Context"
    ],
    categories: [
      "Blog"
    ],
    content: [
      { type: 'heading', text: 'What is React Context?' },
      { type: 'paragraph', text: `
        React Context is a way to pass data through the component tree without having to pass props down manually at every level.
      `},
      {type: 'list', items: [
        '**Intuitive**: Context totally makes sense in the context of modern React, it\'s a hook just like useState or useEffect',
        '**Easy to implement**: Very little boilerplate, just a few lines of code',
        '**Scalable**: It\'s a powerful tool, you reach any level of complexity with it adding reducers and other hooks.'
      ]},
      { type: 'heading', text: `But there is one major issue with Context: Performance`},
      { type: 'paragraph', text: `
        Context is a powerful tool, but it can also be a performance bottleneck.
        When a **component re-renders**, all of its **children will re-render**, even if the data hasn't changed.
        Worse, if you have nested Context providers, the performance will degrade exponentially because, after all, they are children too.
      `},
      { type: 'paragraph', text: `
        We could argue that in a perfectly architectured application, this is not a problem. But perfection is rarely achieved and if it is it fades away eventually.
        In a real world application, we will have to deal with this issue.
      `},
      { type: 'heading', text: 'Achieving performant Context' },
      { type: 'paragraph', text: `
        There are a few ways to achieve performant Context.
      `},
      { type: 'list', items: [
        '**Use a memoized context**: Use a memoized context to avoid re-rendering the context provider when the data hasn\'t changed.',
        '**Implement selective subscriptions**: Only subscribe to the specific state slices you need',
        '**Use useSyncExternalStore**: Leverage React\'s built-in external store hook for better control',
        '**Separate read and write operations**: Split state access from state updates',
        '**Implement manual subscription management**: Control exactly when components re-render'
      ]},
      { type: 'heading', text: 'Building a Fast Context Implementation' },
      { type: 'paragraph', text: `
        Let's build a performant context implementation that addresses these issues. The key is to bypass React's built-in context re-rendering mechanism and implement our own subscription system.
      `},
      { type: 'paragraph', text: `
        Here's how we can create a fast context that only re-renders components when their specific data changes:
      `},
      { type: 'quote', text: 'The goal is to make components subscribe directly to state changes rather than relying on context propagation.' },
      { type: 'heading', text: 'Core Architecture' },
      { type: 'paragraph', text: `
        Our fast context implementation uses several key techniques:
      `},
      { type: 'list', items: [
        '**Reference-based state**: Use useRef instead of useState to prevent Provider re-renders',
        '**Manual subscription system**: Implement custom listeners with Set for O(1) operations',
        '**useSyncExternalStore**: Leverage React\'s external store hook for better control',
        '**Selective subscriptions**: Components only subscribe to their specific data needs',
        '**Immutable updates**: Ensure referential equality for unchanged state portions'
      ]},
      { type: 'heading', text: 'Implementation Details' },
      { type: 'paragraph', text: `
        The implementation consists of three main parts:
      `},
      { type: 'list', items: [
        '**Store**: A lightweight state container with get, set, and subscribe methods',
        '**Provider**: A component that creates and provides the store without re-rendering',
        '**Hooks**: useSelector for reading state and useSet for updating state'
      ]},
      { type: 'paragraph', text: `
        The store uses useRef to maintain state, preventing the Provider from re-rendering when state changes. Instead, it manually notifies subscribers through a custom subscription system.
      `},
      { type: 'heading', text: 'Performance Benefits' },
      { type: 'paragraph', text: `
        This approach provides several significant performance improvements:
      `},
      { type: 'list', items: [
        '**Zero Provider re-renders**: The Provider component never re-renders, regardless of state changes',
        '**Selective component updates**: Only components using changed data re-render',
        '**Predictable performance**: Performance doesn\'t degrade with component tree depth',
        '**Efficient memory usage**: Automatic cleanup prevents memory leaks',
        '**Scalable architecture**: Performance remains consistent as the application grows'
      ]},
      { type: 'heading', text: 'Real-World Comparison' },
      { type: 'paragraph', text: `
        In our demo, you can see the difference between classic React Context and our fast implementation.
      `},
      { type: 'demoLink', text: 'See code and live example', url: '/context/' },
      { type: 'list', items: [
        '**Classic Context**: All components re-render when any state changes, even if they don\'t use that data',
        '**Fast Context**: Only components using changed data re-render, others remain untouched'
      ]},
      { type: 'paragraph', text: `
        This becomes especially important in large applications where you might have hundreds of components in the tree.
      `},
      { type: 'heading', text: 'When to Use Fast Context' },
      { type: 'paragraph', text: `
        Fast context is ideal for:
      `},
      { type: 'list', items: [
        '**Large component trees**: When you have many components that need access to shared state',
        '**Frequent state updates**: Applications with high-frequency state changes',
        '**Performance-critical applications**: Where every re-render matters',
        '**Complex state management**: When you need fine-grained control over re-renders'
      ]},
      { type: 'paragraph', text: `
        For simple applications with infrequent updates, classic React Context might be sufficient. But as your application grows, the performance benefits become increasingly valuable.
      `},
      { type: 'heading', text: 'Best Practices' },
      { type: 'paragraph', text: `
        When implementing fast context, follow these best practices:
      `},
      { type: 'list', items: [
        '**Use specific selectors**: Only select the data you actually need',
        '**Keep selectors pure**: Avoid creating new objects or arrays in selectors',
        '**Implement proper cleanup**: Always return cleanup functions from subscriptions',
        '**Test performance**: Measure re-render counts to verify optimizations',
        '**Document patterns**: Help your team understand when and how to use the fast context'
      ]},
      { type: 'separator' },
      { type: 'heading', text: 'Conclusion' },
      { type: 'paragraph', text: `
        React Context is a powerful tool, but it comes with performance trade-offs. By implementing a fast context pattern, we can maintain the simplicity and developer experience of Context while achieving the performance characteristics of external state management libraries.
      `},
      { type: 'paragraph', text: `
        The key insight is that we don't need to rely on React's built-in context re-rendering mechanism. By implementing our own subscription system and using useSyncExternalStore, we can create a context that only re-renders components when their specific data changes.
      `},
      { type: 'paragraph', text: `
        This approach scales well and provides predictable performance characteristics, making it suitable for large, performance-critical applications. The implementation is relatively simple but provides significant performance benefits.
      `},
      { type: 'quote', text: 'Performance optimization is not about premature optimization - it\'s about building the right architecture from the start.' }
    ]
  },
  {
    id: "4",
    title: "Frontend Fun: Framer Motion",
    slug: "technical-deepdive-framer-motion",
    date: "2025-09-02",
    excerpt: "Exploring the power of Framer Motion for creating delightful animations in React applications, with practical examples and performance considerations.",
    tags: [
      "Framer Motion",
      "React",
      "Animation",
      "UI/UX",
      "Performance",
      "SVG",
      "Interactive Design",
      "Motion Design",
      "Frontend Development",
      "User Experience"
    ],
    categories: [
      "Frontend Fun"
    ],
    content: [
      { type: "heading", text: "What is Framer Motion?" },
      { type: "link", text: "Explore the interactive animation", url: "https://roy-a.name/a-roy.me/react-motion/" },
      { type: "paragraph", text: `
        **Framer Motion** is a powerful animation library for React that makes it incredibly easy to create smooth, performant animations and interactions. 
        Built on top of the Framer animation engine, it provides a declarative API that feels natural to React developers while offering the flexibility to create complex motion designs.
      `},
      { type: "paragraph", text: `
        As a frontend engineer, I've always been fascinated by the intersection of **code and creativity**. 
        Animation isn't just about making things move—it's about **enhancing user experience**, **providing feedback**, and **creating emotional connections** with your users.
      `},
      
      { type: "heading", text: "Why Animation Matters" },
      { type: "paragraph", text: `
        Good animation serves several critical purposes in modern web applications:
      `},
      { type: "list", items: [
        "**Visual feedback**: Users understand what's happening when they interact with your interface",
        "**Spatial relationships**: Animations help users understand how different parts of your app relate to each other",
        "**Brand personality**: Motion can reinforce your brand's character and values",
        "**Perceived performance**: Well-crafted animations can make your app feel faster and more responsive",
        "**Accessibility**: Motion can help users with cognitive disabilities understand interface changes"
      ]},
      
      { type: "heading", text: "Getting Started with Framer Motion" },
      { type: "paragraph", text: `
        Framer Motion's API is designed to be intuitive. The core concept is simple: you replace regular HTML elements with motion components and add animation properties.
      `},
      { type: "paragraph", text: `
        Here's a basic example of how easy it is to get started:
      `},
      { type: "quote", text: "The beauty of Framer Motion lies in its simplicity. What used to require complex CSS animations or JavaScript can now be achieved with just a few props." },
      
      { type: "heading", text: "Key Features That Make Framer Motion Special" },
      { type: "list", items: [
        "**Declarative animations**: Define animations as props, not imperative code",
        "**Layout animations**: Automatic animations when elements are added, removed, or reordered",
        "**Gesture support**: Built-in support for drag, hover, tap, and scroll gestures",
        "**Variants**: Reusable animation definitions that can be shared across components",
        "**Orchestration**: Control the timing and sequence of multiple animations",
        "**Performance**: Optimized for 60fps animations with automatic will-change properties",
        "**Accessibility**: Respects user preferences for reduced motion"
      ]},
      
      { type: "heading", text: "A Creative Example: Sustainability in Motion" },
      { type: "paragraph", text: `
        I love combining **technical skills with creative expression**. 
        To demonstrate Framer Motion's capabilities, I created an interactive SVG animation that tells a story about sustainability.
      `},
      { type: "paragraph", text: `
        The animation features a plant that turns off a light, illustrating the concept of **energy conservation** and **environmental responsibility**. 
        This isn't just a technical demo—it's a way to use motion design to communicate important messages.
      `},
      { type: "link", text: "Explore the interactive animation", url: "https://roy-a.name/a-roy.me/react-motion/" },
      
      { type: "heading", text: "Performance Considerations" },
      { type: "paragraph", text: `
        While Framer Motion makes animation easy, it's important to understand the performance implications:
      `},
      { type: "list", items: [
        "**Use transform and opacity**: These properties are GPU-accelerated and perform best",
        "**Avoid animating layout properties**: Animating width, height, or position can cause expensive reflows",
        "**Leverage will-change**: Framer Motion automatically adds this, but be mindful of overuse",
        "**Consider reduced motion**: Always respect user preferences for accessibility",
        "**Test on lower-end devices**: What looks smooth on your development machine might not on older hardware"
      ]},
      
      { type: "heading", text: "Best Practices for Motion Design" },
      { type: "paragraph", text: `
        Creating great animations isn't just about technical implementation—it's about **design principles**:
      `},
      { type: "list", items: [
        "**Easing matters**: Use natural easing curves that feel organic, not mechanical",
        "**Timing is everything**: Animations should feel snappy but not rushed",
        "**Consistency**: Establish animation patterns that users can learn and expect",
        "**Purpose-driven**: Every animation should serve a functional purpose",
        "**Subtlety**: Sometimes the best animation is the one users don't consciously notice"
      ]},
      
      { type: "heading", text: "Advanced Techniques" },
      { type: "paragraph", text: `
        Once you're comfortable with the basics, Framer Motion offers powerful advanced features:
      `},
      { type: "list", items: [
        "**Layout animations**: Automatic animations when components mount, unmount, or reorder",
        "**Shared layout**: Create smooth transitions between different views of the same content",
        "**Scroll-triggered animations**: Animate elements as they come into view",
        "**Complex gesture handling**: Multi-touch, drag constraints, and gesture recognition",
        "**Custom easing functions**: Create unique animation curves for your brand"
      ]},
      
      { type: "heading", text: "The Intersection of Code and Art" },
      { type: "paragraph", text: `
        What I love most about working with Framer Motion is how it bridges the gap between **engineering and design**. 
        As developers, we often focus on functionality, but animation reminds us that **user experience is emotional**.
      `},
      { type: "paragraph", text: `
        The plant animation I created isn't just a technical demonstration—it's a **story told through code**. 
        It shows how we can use our technical skills to create something that resonates with users on a deeper level.
      `}]
  }
];

module.exports = articles; 