# PR Playground

A collection of small, beginner-friendly challenges for practicing (and evaluating) the real GitHub workflow: fork, branch, commit, PR, respond to review.

Built and maintained by [Integify](https://integify.io), and MIT licensed so any team can fork it and run the same exercise for their own hiring. This repo is the reference instance, live at **playground.integify.io**.

**Doing a challenge?** Start at [How it works](#how-it-works).
**Running this for your own company?** Start at [Use this for your own team](#use-this-for-your-own-team).

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

> **Your challenge PR will be closed, not merged, and that's the expected outcome.** The challenges have to stay broken for the next person. Closing is not a rejection: the review conversation is the whole point. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full picture.

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

## Use this for your own team

You don't need permission and you don't need to ask. Fork it, rebrand it, run it.

1. **Fork this repo** into your own GitHub org (or use GitHub's "Use this template" if you'd rather start without the fork link).
2. **Swap the branding.** Replace `integify_logo.png`, and update the company name, copy, and links in `index.html` and in each `challenges/*/index.html`. Grep for `Integify` to find every mention.
3. **Update this README**: your domain, your intro, and your own contact details.
4. **Deploy it.** It's a plain static site, no build step. Vercel, Netlify, Cloudflare Pages, or GitHub Pages all work. For Vercel: connect the repo, Framework Preset "Other", leave the build command empty, then add your domain under Domains and point DNS as instructed.
5. **Decide your review flow** before you send it to a candidate: which challenge to assign, who reviews, what you're actually grading. [CONTRIBUTING.md](CONTRIBUTING.md#for-companies-adapting-a-fork) has notes on this and on staying mergeable with upstream.

If you improve a challenge or write a new one, a PR back here is very welcome, but never required.

## Contributing

New challenges, fixes to the site itself, and doc improvements are all welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first: it covers the challenge folder layout, the conventions each challenge README follows, and how candidate PRs are handled differently from real contributions. By taking part you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Maintainers

- This repo is the permanent source. Everyone forks it, nobody pushes to `main` directly.
- Candidate submissions land as PRs here so there's one place to review and compare them. They get the `candidate-submission` label, a review, and then a close, never a merge.
- Genuine contributions (new challenges, site fixes, docs) get merged normally.
- To add a new challenge: copy `challenges/_TEMPLATE/`, rename it, write the task, and add a row to the table above. Full checklist in [CONTRIBUTING.md](CONTRIBUTING.md#adding-a-new-challenge).
- Hosted on Vercel: Framework Preset "Other", no build command, custom domain `playground.integify.io` under the project's Domains settings.

## License

[MIT](LICENSE). Use it, fork it, sell training on it, no attribution needed beyond the license text.
