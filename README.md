<div align="center">
  <img alt="Logo" src="public/logo512.png" width="100" />
</div>
<h1 align="center">
  Smart Dashboard (Front-end)
</h1>
<p align="center">
The frontend for my smart dashboard project. It calls the <a href="https://github.com/ben-oldham1/Smart-Dash-API">backend API</a> and displays the data in a SCI-FI style dashboard that updates asynchronously. 
</p>
<p  align="center">
<img  src="https://img.shields.io/badge/React-667881?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
<img  src="https://img.shields.io/badge/json-5881D8?style=for-the-badge&logo=json&logoColor=white" />
</p>
 
 SCREENSHOT WILL GO HERE	

## Tiles

Each individual card on the dashboard is called a tile. For modularity, each tile contains its own logic, API calls and updates itself asynchronously. 

A variety of different tiles included in this repository, but some are not configured to show on the dashboard by default.

### Showing/hiding tiles

The `TileConfig.json` file contains a boolean for each tile, determining whether it gets rendered or not.

```
"Today": true,
"Suncycle": true,
"Bus": true,
```

To show/hide a tile, simply update the json file to indicate whether it should be rendered. If you want to rearrange the layout of the tiles, you can move around the components within the `app.js` files.

### Creating new tiles

To create a new tile, there are a few steps to take:
- Duplicate one of the existing tiles to get the basic structure. You can then add your own code.
- Name your tile in `TileConfig.json` and set to `true`.
- Add your new tile component to `App.js`, with a conditional rendering block (that uses the name you set in `TileConfig.json`).

### Changing app appearance 

There will soon be functionality to customise the global app appearance (e.g. colours, fonts, etc) from within `TileConfig.json`.


## Inspiration
I drew inspiration from a variety of sources, the most notable being:
- Territory Studio: https://territorystudio.com/project/the-martian/
- Behance: https://www.behance.net/search/projects?search=Home+Dashboard&
