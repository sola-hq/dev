# Sola-HQ Monorepo

This monorepo contains shareable configurations for various development tools used in sola-hq
projects.

## Packages

This monorepo is managed by [pnpm](https://pnpm.io/) and includes the following packages:

| Package                                                 | Description                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| [`@sola-hq/eslint-config`](/packages/eslint-config)     | Shareable `ESLint` configurations for different project types. |
| [`@sola-hq/prettier-config`](/packages/prettier-config) | Shareable `Prettier` configuration for code formatting.        |
| [`@sola-hq/tsconfig`](/packages/tsconfig)               | Shareable `TypeScript` configurations (tsconfig).              |

## Getting Started

To get started with this monorepo, you need to have [Node.js](https://nodejs.org/) and
[pnpm](https://pnpm.io/installation) installed.

Clone the repository and install the dependencies:

```bash
git clone https://github.com/sola-hq/dev.git sola-hq-dev
cd sola-hq-dev
pnpm install
```

## Development Workflow

### Building

To build all the packages in the monorepo, run the following command from the root directory:

```bash
pnpm build
```

### Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting.

- To lint all packages, run: `pnpm lint`
- To format all files, run: `pnpm format`

### Versioning and Releasing

This monorepo uses [Changesets](https://github.com/changesets/changesets) to manage versioning and
releases.

The release process is automated with GitHub Actions.

1.  **Make your changes:** Make your code changes in the respective packages.
2.  **Create a changeset:** Before committing your changes, run the following command:

    ```bash
    pnpm changeset
    ```

    This will prompt you to select the packages that have changed, the type of version bump (patch,
    minor, or major), and to provide a summary of the changes. This will create a new markdown file
    in the `.changeset` directory.

3.  **Commit and push:** Commit the generated changeset file along with your code changes.

4.  **Automated Release PR:** When you push to the `main` branch, the
    [Release Action](/.github/workflows/release.yml) will automatically create a "Version Packages"
    Pull Request with the version bumps and updated changelogs.

5.  **Publish to npm:** Once the "Version Packages" PR is merged, the action will publish the
    updated packages to npm.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
