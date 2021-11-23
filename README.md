# Pappcorn template

This is a workspace template project generate with [NX](https://nx.dev), for be a first point of init for new projects in Pappcorn

## Commits

this project has been configured with  [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) to prevent bad commits on yours future projects

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Some examples:

```
feat: allow provided config object to extend other configs

feat(api)!: send an email to the customer when a product is shipped
```

Bad commit

<img width="714" alt="Screen Shot 2021-11-23 at 2 39 54 PM" src="https://user-images.githubusercontent.com/6579616/143092826-1db30a9e-1fd7-4c07-8868-9cd81110880e.png">

## Structure libraries

There are many types of libraries in a workspace. In order to maintain a certain sense of order, we recommend having only the below four (4) types of libraries:

* Feature libraries: Developers should consider feature libraries as libraries that implement smart UI (with injected services) for Business Use Cases specific to that feature.
* UI libraries: A UI library contains only presentational components.
* Data-access libraries: A data-access library contains services and utilities for interacting with a
  back-end system.
* Utility libraries: A utility library contains common utilities and services used by many libraries and applications. It also includes all the code related to State management.

[Enterprise angular monorepo Angular](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book)

For nomenclature, we should use `ui, data-access, feature, and utility` like type on our libraries structures following the pattern
```
/libs/<scope-1>/<type-1>-<lib-name>
/libs/<scope-1>/<type-2>-<lib-name>
```

this [repo](https://github.com/tomwhite007/enterprise-angular-mono-repo-patterns-example) is an example about how to structure your libraries
