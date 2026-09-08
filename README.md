# Intro Java with Processing

A creative Java course with eleven workbook lessons across nine phases, interactive concept tools, a local notebook, project stories, and a B Block calendar.

## Course texts
- Primary: *Learning Processing*, second edition.
- Supplementary: *Code as Creative Medium* and *The Nature of Code*.

Use the primary text for foundational lessons and reading references, with supplementary texts for creative prompts and extensions. Chapter and exercise mappings for the Unit 1 slides still need verification. See [course decisions](DECISIONS.md).

## Local use
Open `site/index.html` in a browser. Core learning tools require no accounts or backend. Notes stay in the browser on the current device; export JSON to back up or move them.

## Edit
- `site/course-data.js`: lessons, active focus, approved Classroom links.
- `site/calendar.js`: supplied meeting dates and provisional teaching windows.
- `site/fullsite.js`: shared Study/Present views and course workflows.
- `site/notebook-store.js`: versioned local notebook storage and validated imports.
- `site/examples/`: original Processing starters and downloadable packages.

Run `node site/verify.cjs` to check routes, resources, schemas, calendar, storage, and selected interaction logic.

## GitHub Pages
The workflow verifies the site and publishes the `site/` directory on pushes to `main`. In repository Settings → Pages, choose GitHub Actions as the source before the first deployment. A manual workflow dispatch is available for retrying after initial configuration.

Expected address after successful deployment: https://saberkhan372.github.io/IntroProcessing/

## Teaching readiness
The curriculum and pacing are proposed for teacher review. Starter code and browser workflows have source-level checks; direct browser visual review and Processing execution remain outstanding. Configure the actual current lesson and approved Classroom assignment links before classroom use. No student submissions or identifying student data are included.

Notebook backups use the Intro Java v1 schema; they are not automatically compatible with other course sites. Local storage is not cloud synchronization or a guaranteed backup. Markdown exports support a separately curated portfolio; Classroom remains the submission system.
