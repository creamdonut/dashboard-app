# Line grap based on SVG example

Allows you to view the historical price of TON-coin by default.
PWA included.

# Starting

- install all the packages by command `yarn`
- create `.env` file with content `REACT_APP_BASE_BACKEND=https://ek3enc-8080.csb.app/` which is currently refers to custom backes on codesandbox.io
- `yarn start` to start the project

# Limitations

Accepts an array of elements with type:

```
{
  timestamp: number;
  price: number;
  xCoordinate: number;
  yCoordinate: number;
}
```

- If you have other response than this, create an `adatper` function in `pages/home/lib/`.
- All the consts are defined in `model/consts.ts` file and could be overwritten.
  > :Warning: **If BE is down or not responed** you can use mock data from `shared/mock` folder. Replace responses in `shared/api/index.ts` with MOCK consts.

# Tech stack

- react
- typescipt

# Roadmap

- more accurate tooltp placement
- allowing more linecharts in row
- _to be continued..._
