# Changelog

## [1.1.6] - 2023-05-23

- Fix flash of white on buttons when changing theme

## [1.1.5] - 2023-05-19

- Add link on version header to changelog
- Fix button sizing on smaller devices

## [1.1.4] - 2023-05-18

- Remove retrieving of version via API

## [1.1.3] - 2023-05-18

- Remove cron schedule for update-version.yml

## [1.1.2] - 2023-05-18

- Fix typo in deploy.yml

## [1.1.1] - 2023-05-18

- Fix semver scripts
- Add tracking script on deployment

## [1.1.0] - 2023-05-17

- Update GitHub action names
- Fix body tags
- Implement basic dark mode functionality when javascript disabled.
  - Also has the benefit of setting dark-styles before JS has fully loaded, reducing flashbang effect.

## [1.0.1] - 2023-05-17

- BunnyCDN:
  - Purge pull zone correctly
  - Copy over correct folder src
- bump script:
  - Fix on Linux
  - Rename from `semver` to `bump`
  - Use [semver script](https://github.com/fsaintjacques/semver-tool)

## [1.0.0] - 2023-05-17

- Main site release
  - Set first section to be full-page
  - Mobile support
  - Fixed header

