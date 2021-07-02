# React Query in shipwell/frontend-web

## Presentation

This presentation uses [MDXP][]. To start the presentation in dev mode, with live reloading:

```sh
yarn start
```

To build the presentation as a single page to present:

```sh
yarn build:onepage
```

Then the presentation can be viewed by loading `dist/onepage/index.html` in a browser with no web server required.

[mdxp]: https://0phoff.github.io/MDXP/

The Resources slide from the presentation is reproduced here for quick reference:

## Resources

- React Query documentation <https://react-query.tanstack.com/overview>
- React Query Essentials course (paid) <https://learn.tanstack.com/p/react-query-essentials>
- API reference for `useQuery` <https://react-query.tanstack.com/reference/useQuery>
- API reference for `useMutation` <https://react-query.tanstack.com/reference/useMutation>
- [Example component in `shipwell/frontend-web` that uses `useQuery` and `useMutation`](https://github.com/shipwell/frontend-web/blob/24cff118270ea38e5b896dc83d8f6a28ae1fb4d9/src/app/containers/drayageShipment/components/Stops/index.js).
- [Initial PR and discussion around React Query in `shipwell/frontend-web`](https://github.com/shipwell/frontend-web/pull/4673).
