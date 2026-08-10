# PR Playground

A collection of small, beginner-friendly challenges built by Integify to practice (and evaluate) the real GitHub workflow: fork, branch, commit, PR, respond to review.

Live at: **playground.integify.io**

## Why this exists

AI agents can write code. What's still worth testing in a junior candidate is whether they can work like a developer: follow instructions, make a small isolated change, explain it clearly, and take feedback on a pull request without getting lost or defensive.

## How it works

1. **Fork** this repo to your own GitHub account.
2. **Pick ONE challenge** from the list below (unless told otherwise).
3. **Create a branch** named after the challenge, e.g. `challenge/01-css-bug-hunt`.
4. Read that challenge's own `README.md` inside its folder and make the fix.
5. **Commit** with a clear message.
6. **Open a Pull Request** back to this repo. Describe what you changed, why, and how you checked it works.
7. We'll leave feedback on the PR. Reply and adjust, that's part of the challenge.

## Challenges

| # | Challenge | Skill focus | Difficulty |
|---|-----------|-------------|------------|
| 01 | [CSS Bug Hunt](challenges/01-css-bug-hunt) | CSS, attention to detail | Beginner |
| 02 | [Typo Fix](challenges/02-typo-fix) | HTML, content editing | Beginner |
| 03 | [Missing Footer](challenges/03-missing-footer) | HTML/CSS, building from scratch | Beginner |
| 04 | [Broken Button](challenges/04-broken-button) | Basic JavaScript, debugging | Beginner+ |
| 05 | [Broken Image](challenges/05-broken-image) | HTML, file paths | Beginner |
| 06 | [Responsive Cards](challenges/06-responsive-cards) | CSS layout, mobile checking | Beginner+ |
| 07 | [Broken Form](challenges/07-broken-form) | HTML forms | Beginner+ |
| 08 | [Missing Alt Text](challenges/08-missing-alt) | Accessibility (a11y) | Beginner |
| 09 | [Broken Link](challenges/09-broken-link) | HTML links, verifying navigation | Beginner |
| 10 | [Color Contrast](challenges/10-color-contrast) | Accessibility, CSS color | Intermediate |
| 11 | [Update the Docs](challenges/11-update-the-docs) | Documentation PRs | Beginner |
| 12 | [Console Error](challenges/12-console-error) | JavaScript, browser console | Beginner+ |

More challenges get added over time, this repo is meant to grow.

## For the Integify team

- This repo is the permanent source. Everyone forks it, nobody touches `main` directly.
- All submissions land as PRs back to this repo, one place to review and compare candidates.
- To add a new challenge: create a new folder under `challenges/`, give it its own `README.md` with the task, and add a row to the table above.
- Hosted on Vercel. Connect this repo in the Vercel dashboard (Framework Preset: Other, no build command needed), then add `playground.integify.io` as a custom domain under the project's Domains settings and point your DNS to Vercel as instructed there.
