My go-to package for building a slider is [keen-slider](https://keen-slider.io/). It is incredibly powerful, flexible and is very much "batteries included". However, it isn't easy (possible?) to SSR keen-slider output. This can lead to issues. Example: Marketing landing page with a stage that has multiple slides right in the top fold.

This repository is an exploration to build a minimal JS powered slider, as an alternative to keen-slider, until browser support for HTML sliders is sufficent. It is for less interactively demanding scenarios where speed and visual cohesion is important. 

Building a slider is actually really simple. Just make it horizontalls scroll. Mobile & macOS users are already accustomed to dragging to scroll. That leaves us with our first challenge: Dragging. Specifically making it feel native, without losing the ability to click buttons & links.

The current state of this has support for dragging though it does not feel 100% native. Turning on scroll snapping also causes the dragging to stop working, for some reason.
