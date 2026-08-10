# Contributing

Four different kinds of people end up in this repo. Find yourself below.

| You are… | Go to |
|---|---|
| A candidate doing an assigned challenge | [For candidates](#for-candidates) |
| Adding or improving a challenge | [Adding a new challenge](#adding-a-new-challenge) |
| Forking this to run at your own company | [For companies adapting a fork](#for-companies-adapting-a-fork) |
| A maintainer of this repo | [For maintainers](#for-maintainers) |

Everyone here is covered by the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## For candidates

### The one thing to know up front

**Your PR will be reviewed and then closed. It will not be merged.** That is the normal, successful outcome. The challenges have to stay broken so the next candidate gets the same starting point. Nothing about a closed PR means you did badly. What's being read is the diff and the conversation, not the merge button.

### The flow

1. Fork this repo to your own account.
2. Do **one** challenge, the one you were assigned, unless you were told otherwise.
3. Branch off `main`, named after the challenge: `challenge/01-css-bug-hunt`.
4. Read the `README.md` inside that challenge's folder and make the fix.
5. Commit, push, and open a PR against this repo's `main`.
6. Reply to review comments and push follow-up commits to the same branch.

### What a good submission looks like

**Scope.** Change only what the challenge asks for. A one-line fix that stays a one-line fix reads far better than a fix plus a reformat of the whole file. If your editor reformats on save, turn that off or revert the unrelated hunks before committing.

**Commits.** Present tense, says what changed and implies why: `Fix card shadow by correcting box-shadow property name`. Not `fix`, not `update`, not `asdf`. Several small commits are fine. So is one. Don't commit `.DS_Store`, editor config, or `node_modules`.

**The PR description.** Three things, a couple of sentences each:
- **What was wrong** — the actual cause, not the symptom.
- **What you changed** — and why that fix and not another.
- **How you checked** — "opened `index.html` in Chrome and Firefox, shadow renders on all three cards", "resized to 375px wide, cards stack". Say what you actually did.

If you got stuck, or you're unsure a decision was right, say so in the PR. Flagging a real uncertainty is a strength, not an admission.

**Review.** Expect comments, including on a correct fix. Read them properly before replying. If you agree, push the change and say you did. If you disagree, say why, that's a legitimate move and it's part of what's being looked at. Push commits to the same branch; don't close the PR and open a new one.

### What sinks a submission

- Doing several challenges when you were assigned one.
- A PR body that says "fixed the bug" and nothing else.
- Unrelated files in the diff.
- Silence after review comments.
- Changing files the challenge explicitly told you not to touch.

---

## Adding a new challenge

Challenges are deliberately small: one clear defect, one file or two, solvable in under thirty minutes by someone junior. Each lives in its own self-contained folder with everything it needs.

### Steps

1. Copy `challenges/_TEMPLATE/` to `challenges/NN-short-slug/`, using the next free number and a kebab-case slug that matches the challenge title.
2. Add the files the challenge needs (`index.html`, `css/style.css`, `js/app.js`, whatever it takes). Keep the folder self-contained: don't reach up into the repo root or across into another challenge.
3. Introduce **exactly one** defect, and make it genuinely discoverable from the symptom described in the README.
4. Fill in the challenge `README.md` following the format below.
5. Add a row to the table in the root [README.md](README.md#challenges).
6. Open the challenge's `index.html` in a browser and confirm the symptom is actually visible, then confirm the intended fix resolves it.

### Challenge README format

Every challenge README uses the same three-part shape (see `challenges/_TEMPLATE/README.md`):

```markdown
# Challenge NN: Title

**Difficulty:** Beginner
**Skill focus:** CSS, attention to detail

## The problem

What the candidate observes, phrased as a symptom, not a diagnosis.

## Your task

1. Numbered steps.
2. Any explicit "do not change X".
3. Always ends with: verify in a browser, then commit and open a PR
   explaining what was wrong and how you found it.
```

**Difficulty** is one of `Beginner`, `Beginner+`, or `Intermediate`, and must match the root README table.

**Skill focus** is a short comma-separated list, e.g. `HTML forms`, `Accessibility (a11y)`, `Basic JavaScript, debugging`.

### Conventions that matter

- **Describe the symptom, never the fix.** "The cards should have a drop shadow, but they don't" is right. "The `box-shadow` property is misspelled" gives it away.
- **One defect per challenge.** Two bugs makes grading ambiguous.
- **No dependencies, no build step.** Plain HTML, CSS, and JS that runs by opening the file.
- **Say what's off limits** if the challenge can be trivially cheated by editing the wrong file, the way `11-update-the-docs` says "Do not change `index.html`."
- **Keep it brand-neutral where you can.** Forks rebrand the site; challenges that don't hardcode company copy are easier for them to reuse.

Improving an existing challenge (clearer wording, a fix for a broken-in-the-wrong-way defect) is just as welcome as adding one. Just don't accidentally fix the intentional bug.

---

## For companies adapting a fork

Fork it and run it, no attribution needed beyond the MIT license. The setup steps are in the [README](README.md#use-this-for-your-own-team). A few things worth knowing beyond those:

**Rebranding.** `grep -ri integify .` finds every mention. The logo is `integify_logo.png` at the root, referenced from `index.html`. Challenge folders each have their own `index.html` with their own copy.

**Staying mergeable with upstream.** If you want to keep pulling new challenges from here, keep your changes concentrated in the branding layer: the root `index.html`, the logo, and the README. Adding your own challenges as new numbered folders won't conflict. Rewriting existing challenge folders will, so if you need a variant, add it as a new number rather than editing challenge `05` in place.

**Decide your review flow before the first candidate.** Who assigns, who reviews, and what you're actually grading. The exercise is only useful if someone genuinely engages with the PR, and a candidate who gets one drive-by comment and silence learns nothing about you and tells you nothing about them.

**Your candidate PRs will need the same close-don't-merge rule** as ours, for the same reason: merged fixes break the exercise for the next person. Set up a `candidate-submission` label and say so in your README so nobody reads a close as a rejection.

**Rotate.** Any challenge that runs long enough will end up with public solutions in candidate forks. Adding your own private challenges, or varying which one you assign, keeps it meaningful.

---

## For maintainers

**Nobody pushes to `main`.** Everything arrives as a PR, including from maintainers.

**Triage every incoming PR into one of two buckets:**

*Candidate submissions* — label `candidate-submission`. Review substantively: scope, commit hygiene, the PR description, whether the fix addresses the cause. Leave real comments and give the candidate room to respond. Then **close, never merge.** Say plainly in the closing comment that closing is the expected outcome and why, so it doesn't read as a rejection.

*Real contributions* — new challenges, fixes to the site itself, docs. Review and merge normally. Before merging a new challenge: check the folder is self-contained, the README follows the format, the root README table has a matching row with matching difficulty, the symptom is visible in a browser, and the README describes the symptom rather than the fix.

**Watch for the overlap case:** a candidate who, alongside their challenge, spots a genuine bug in the repo. That's a good signal. Ask them to split it into a second PR, and merge that one.

**Hosting.** Vercel, Framework Preset "Other", no build command, `playground.integify.io` under the project's Domains settings. Any push to `main` redeploys.
