---
title: "Component Architecture"
description: "A deep dive into how we structure our Astro and React components for maximum reusability."
---

# Component Architecture

Building a scalable frontend requires a solid foundation. In this guide, we will explore how we structure our Astro project to keep components reusable, isolated, and highly performant.

## The Island Architecture

Astro uses an "Island Architecture" by default. This means that your UI is rendered as static HTML, and interactive components are isolated into "islands".

### Key Benefits
* **Zero JavaScript by default:** Pages load incredibly fast.
* **Framework Agnostic:** You can mix React, Vue, and Svelte on the same page.
* **Partial Hydration:** Only the components that need JavaScript are hydrated.

## Code Example

Here is a quick look at how you might embed a React interactive island inside an Astro layout:

```astro
---
import InteractiveCounter from '../components/InteractiveCounter.jsx';
import StaticHeader from '../components/StaticHeader.astro';
---

<main>
  <StaticHeader title="My Fast Page"/>
  <!-- This component will load its JS only when it becomes visible -->
  <InteractiveCounter client:visible/>
</main>