## Contributing to MedRemind

Thanks for improving MedRemind. This document describes the minimal workflow we expect for contributions.

### Workflow

1. Update your local `main` and create a feature branch:

```bash
git checkout main
git pull origin main
git checkout -b feature/short-description
```

2. Make small, focused commits with conventional messages (e.g., `feat:`, `fix:`, `chore:`).

3. Run local checks and tests (see `backend/README.md` and `frontend/README.md`).

4. Push and open a pull request against `main`:

```bash
git push -u origin feature/short-description
```

5. Add a clear PR description and link any related issues. Requests will be reviewed by maintainers.

### Review and merging

- PRs require at least one approving review and passing CI checks before merge.
- Maintainers will squash or rebase commits when merging to keep history clean.

See `PROJECT_GUIDELINES.md` for coding standards and CI details.
