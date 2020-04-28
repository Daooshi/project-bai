<template>

  <div style="height: 500px; width: 100%">
    <div style="height: 200px overflow: auto;">
      <p>These are our stores. Click on them for more info!</p>
      <br>
      <button @click="showLongText">
        Show availablity in the store
      </button>
      <button @click="showMap = !showMap">
        Toggle map
      </button>
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            Store k.Gurgacza 6
            <p v-show="showParagraph">
                Available segways to rent:
                {{allAvailability.gurgacza}}
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withPopup2">
        <l-popup>
          <div @click="innerClick">
            Store Karmelicka 45
            <p v-show="showParagraph">
                Available segways to rent:
                {{allAvailability.karmelicka}}
            </p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { Icon } from 'leaflet';
import {mapGetters} from 'vuex';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 13,
      center: latLng(50.064878, 19.965705),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(50.056806, 19.951279),
      withPopup2: latLng(50.067724, 19.928360),
      currentZoom: 13,
      currentCenter: latLng(50.064878, 19.965705),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  computed: mapGetters(['allReservations', 'allAvailability'])
};
</script>