import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import LineString from 'ol/geom/LineString.js';
import Point from 'ol/geom/Point.js';
import { DragRotateAndZoom, defaults as defaultInteractions } from 'ol/interaction.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import TileLayer from 'ol/layer/Tile.js';
import { fromLonLat } from 'ol/proj.js';
import { Vector as VectorSource } from 'ol/source.js';
import OSM from 'ol/source/OSM.js';
import { Circle, Fill, Stroke, Style } from 'ol/style.js';

const album = {
  id: 3218,
  userId: 'b38008ab-40a7-465a-b429-3e1f2d017ff0',
  name: 'Thành phố Phú Quốc',
  description: '',
  latitude: '10.216582007519255',
  longitude: '103.95902634949937',
  geo: {
    type: 'Point',
    coordinates: [103.95902634949937, 10.216582007519255],
  },
  status: 1,
  reviewStatus: 1,
  photoId: 9079,
  createdAt: '2023-12-08T03:32:24.388Z',
  updatedAt: '2023-12-08T03:32:31.783Z',
  deletedAt: null,
  startDate: '2023-08-04T00:00:00.000Z',
  endDate: '2023-11-09T00:00:00.000Z',
  user: {
    id: 1219,
    userId: 'b38008ab-40a7-465a-b429-3e1f2d017ff0',
    nickname: 'Tan Huynh 024',
    email: 'tan.huynh+024@supremetech.vn',
    birthdate: '2000/11/08',
    address: 'vn',
    hometown: 'vn',
    nextTarget: '',
    picture: '',
    gender: 'male',
    createdAt: '2023-12-08T03:19:50.890Z',
    updatedAt: '2023-12-08T03:21:11.416Z',
    setting: {},
  },
  likesCount: 0,
  tags: [],
  thumbnail: {
    id: 9079,
    spotId: 1248,
    albumId: 3218,
    originalName: '4a8574cf9680eb030f0288746e53e9e9_exif.jpg',
    latitude: '10.216582007519255',
    longitude: '103.95902634949937',
    status: 1,
    reviewStatus: 1,
    orderIndex: null,
    createdAt: '2023-12-08T03:32:31.783Z',
    updatedAt: '2023-12-08T03:32:31.783Z',
    deletedAt: null,
    moderationLabels: [],
    originalUrl:
      'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1248/photos/f0024ab62aac0672565daa6eb7a17cf1d675d579.jpg',
    smallUrl:
      'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1248/photos/f0024ab62aac0672565daa6eb7a17cf1d675d579_small.jpg',
  },
  spots: [
    {
      id: 1251,
      albumId: 3218,
      photoId: 9112,
      name: 'Grand World Phú Quốc, Xã Gành Dầu, Thành phố Phú Quốc, Tỉnh Kiên Giang, Việt Nam',
      description: '',
      latitude: '10.32415385',
      longitude: '103.85673220970264',
      status: 1,
      startDate: '2023-08-04T00:00:00.000Z',
      endDate: '2023-08-04T00:00:00.000Z',
      createdAt: '2023-12-08T03:32:53.585Z',
      updatedAt: '2023-12-08T03:32:53.585Z',
      deletedAt: null,
      landmarkId: 580,
      orderIndex: 4,
      thumbnail: {
        id: 9112,
        spotId: 1251,
        albumId: 3218,
        originalName: 'f72861b4c40b919d6672130d8935513e_exif.jpg',
        latitude: '10.32415385',
        longitude: '103.85673220970264',
        status: 1,
        reviewStatus: 1,
        orderIndex: null,
        createdAt: '2023-12-08T03:32:53.585Z',
        updatedAt: '2023-12-08T03:32:53.585Z',
        deletedAt: null,
        moderationLabels: [],
        originalUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1251/photos/14a51437b9264d94f0c31b6650903f1793fc83d1.jpg',
        smallUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1251/photos/14a51437b9264d94f0c31b6650903f1793fc83d1_small.jpg',
      },
    },
    {
      id: 1250,
      albumId: 3218,
      photoId: 9109,
      name: 'Trần Hưng Đạo, Xã Dương Tơ, Thành phố Phú Quốc, Tỉnh Kiên Giang, 92509, Việt Nam',
      description: '',
      latitude: '10.1535921',
      longitude: '103.9734386',
      status: 1,
      startDate: '2023-10-04T00:00:00.000Z',
      endDate: '2023-10-04T00:00:00.000Z',
      createdAt: '2023-12-08T03:32:49.256Z',
      updatedAt: '2023-12-08T03:32:49.256Z',
      deletedAt: null,
      landmarkId: 579,
      orderIndex: 3,
      thumbnail: {
        id: 9109,
        spotId: 1250,
        albumId: 3218,
        originalName: '8930c382c1d6ffec90cfcd676b10fd83_exif.jpg',
        latitude: '10.1535921',
        longitude: '103.9734386',
        status: 1,
        reviewStatus: 1,
        orderIndex: null,
        createdAt: '2023-12-08T03:32:49.256Z',
        updatedAt: '2023-12-08T03:32:49.256Z',
        deletedAt: null,
        moderationLabels: [],
        originalUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1250/photos/5949e9f12a0e00607af1b98e76593010b83e8d05.jpg',
        smallUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1250/photos/5949e9f12a0e00607af1b98e76593010b83e8d05_small.jpg',
      },
    },
    {
      id: 1248,
      albumId: 3218,
      photoId: 9079,
      name: 'Ba Mươi Tháng Tư',
      description: '',
      latitude: '10.216582007519255',
      longitude: '103.95902634949937',
      status: 1,
      startDate: '2023-11-09T00:00:00.000Z',
      endDate: '2023-11-09T00:00:00.000Z',
      createdAt: '2023-12-08T03:32:31.783Z',
      updatedAt: '2023-12-08T03:32:31.783Z',
      deletedAt: null,
      landmarkId: 578,
      orderIndex: 1,
      thumbnail: {
        id: 9079,
        spotId: 1248,
        albumId: 3218,
        originalName: '4a8574cf9680eb030f0288746e53e9e9_exif.jpg',
        latitude: '10.216582007519255',
        longitude: '103.95902634949937',
        status: 1,
        reviewStatus: 1,
        orderIndex: null,
        createdAt: '2023-12-08T03:32:31.783Z',
        updatedAt: '2023-12-08T03:32:31.783Z',
        deletedAt: null,
        moderationLabels: [],
        originalUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1248/photos/f0024ab62aac0672565daa6eb7a17cf1d675d579.jpg',
        smallUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1248/photos/f0024ab62aac0672565daa6eb7a17cf1d675d579_small.jpg',
      },
    },
    {
      id: 1249,
      albumId: 3218,
      photoId: 9099,
      name: 'Ba Mươi Tháng Tư',
      description: '',
      latitude: '10.216582007519255',
      longitude: '103.95902634949937',
      status: 1,
      startDate: '2023-11-09T00:00:00.000Z',
      endDate: '2023-11-09T00:00:00.000Z',
      createdAt: '2023-12-08T03:32:34.083Z',
      updatedAt: '2023-12-08T03:32:34.083Z',
      deletedAt: null,
      landmarkId: 578,
      orderIndex: 2,
      thumbnail: {
        id: 9099,
        spotId: 1249,
        albumId: 3218,
        originalName: 'd915172dffff07f0cb784157b671ba81_exif.jpg',
        latitude: '10.216582007519255',
        longitude: '103.95902634949937',
        status: 1,
        reviewStatus: 1,
        orderIndex: null,
        createdAt: '2023-12-08T03:32:34.083Z',
        updatedAt: '2023-12-08T03:32:34.083Z',
        deletedAt: null,
        moderationLabels: [],
        originalUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1249/photos/fd0a201b9bbae9f57d84abe71b2156e814955532.jpg',
        smallUrl:
          'https://cdn.dev.tb.supremetech.vn/albums/3218/spots/1249/photos/fd0a201b9bbae9f57d84abe71b2156e814955532_small.jpg',
      },
    },
  ],
  encodedId: '1d333b9a-84b1-0000-00f6-00004536d692',
};

const points = album.spots.map(
  (spot) =>
    new Feature({
      type: 'icon',
      geometry: new Point(fromLonLat([+spot.longitude, +spot.latitude])),
    })
);

const lineCords = [];
for (let i = 1; i < album.spots.length; i++) {
  lineCords.push([
    fromLonLat([album.spots[i - 1].longitude, album.spots[i - 1].latitude]),
    fromLonLat([album.spots[i].longitude, album.spots[i].latitude]),
  ]);
}
const lines = lineCords.map(
  (lineCord) =>
    new Feature({
      geometry: new LineString(lineCord),
      name: 'LineString',
    })
);

lines.forEach((line) => {
  line.setStyle(
    new Style({
      stroke: new Stroke({
        color: 'white',
        width: 5,
        //lineDash: [4, 4, 4],
        lineCap: 'butt',
        /* https://openlayers.org/en/latest/apidoc/module-ol_style_Stroke.html */
      }),
    })
  );
});

console.log(lines);

points.forEach((point) => {
  point.setStyle(
    new Style({
      image: new Circle({
        radius: 7,
        fill: new Fill({
          color: 'black',
        }),
        stroke: new Stroke({
          color: 'white',
          width: 2,
        }),
      }),
    })
  );
});

const vectorSource = new VectorSource({
  features: [...lines, ...points],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

console.log([+album.longitude, +album.latitude]);

const map = new Map({
  interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer,
  ],
  target: 'map',
  view: new View({
    center: fromLonLat([+album.longitude, +album.latitude]),
    zoom: 6,
  }),
});
