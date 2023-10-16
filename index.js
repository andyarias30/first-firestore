import { addArt, getAllArt } from "./src/art.js";

await addArt({
    artist: "Van Gough",
    title:"Irises",
    media:"oil",

});

await addArt({
    artist: "da Vinci",
    title: "Last Supper",
    media: "oil",
});

 await getAllArt();