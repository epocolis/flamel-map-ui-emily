import { environment } from '../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { FeatureCollection, Polygon } from 'geojson';
import * as mapboxgl from 'mapbox-gl';
import * as farm_polygons from '../data/farm_polygons.json';
import * as weather_stations from '../data/stations.json';
import { FarmField, IrrigationRecommendation } from '../irrigation/irrigation.model';
import { FormBuilder } from '@angular/forms';
import { MockIrrigationService } from '../irrigation/service/irrigation.mock.service';
import { defaultIrrigation, defaultOnwerships } from '../data/mocks';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  @Input() farmFields?: FarmField[] | null;
  selectedField?: FarmField;
  selectedDate?: string;
  irricationRec?: IrrigationRecommendation;

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/satellite-v9';
  albertaLng = -111.5504;
  albertaLat = 49.6879;
  albertaLngLat = new mapboxgl.LngLat(this.albertaLng, this.albertaLat);
  layerIdAllFields = 'fields';
  layerIdWeatherStations = 'weatherStations';
  popup?: mapboxgl.Popup;
  showWeatherStations = false;
  showSoilMoisture = false;
  capacity = {
    clay: 36,
    silt: 32,
    loam: 26,
    sand: 12,
  }

  fieldForm = this.formBuilder.group({
    selectField: '',
    date: '',
    coordinateInput: '',
    cropType: 'Crop Type',
    crop: 'Crop',
    capacityPoint: '36%'
  });

  constructor(private formBuilder: FormBuilder, private mockService: MockIrrigationService) { }

  ngOnInit(): void {
    this.setUpMap();
    this.setCoordinateInput();

    this.map?.on('click', this.layerIdAllFields, (e) => {
      if (this.map && e?.features && e.features.length > 0 && e.features[0].properties) {
        const clickedFieldId = e.features[0].properties['farm_id'];
        this.selectedField = this.getMatchingField(clickedFieldId)

        this.popup = new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`Field id: ${clickedFieldId}`)
          .addTo(this.map);
      }
    });

    this.map?.on('zoomend', (e) => {
      this.fieldForm.get('coordinateInput')?.setValue(this.formatCoordinates())
    });
  };

  setUpMap(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 3,
      center: this.albertaLngLat
    });

    this.map.on('load', () => {
      this.map?.addControl(new mapboxgl.NavigationControl());
      this.map?.addControl(new mapboxgl.ScaleControl());

      this.map?.addSource(this.layerIdAllFields, {
        type: 'geojson',
        data: farm_polygons as unknown as FeatureCollection
      });

      this.map?.addLayer({
        'id': this.layerIdAllFields,
        'type': 'fill',
        'source': this.layerIdAllFields,
        'layout': {
          'visibility': 'none',
        },
        'paint': {
          'fill-color': 'brown',
          'fill-opacity': 0.6,
          'fill-outline-color': 'pink',
        }
      });

      this.map?.addSource(this.layerIdWeatherStations, {
        type: 'geojson',
        data: weather_stations as unknown as FeatureCollection
      });

      this.map?.addLayer({
        'id': this.layerIdWeatherStations,
        'type': 'circle',
        'source': this.layerIdWeatherStations,
        'layout': {
          'visibility': 'none',
        },
        'paint': {
          'circle-radius': 8,
          'circle-color': 'orange'
        },
      });
    });
  }

  getMatchingField(clickedFieldId: string): FarmField | undefined {
    return this.farmFields?.find((field: FarmField) => field.field_id === clickedFieldId)
  }

  onSelectField(): void {
    this.selectedField = undefined;
    this.popup?.remove();
    const selectedFieldValue = this.fieldForm.get('selectField')?.value;

    if (selectedFieldValue === 'allFields') {
      this.map?.setFilter(this.layerIdAllFields, null);
      this.map?.setLayoutProperty(this.layerIdAllFields, 'visibility', 'visible');
      this.map?.fitBounds(new mapboxgl.LngLatBounds(this.albertaLngLat, this.albertaLngLat), {
        maxZoom: 10.5
      })
    } else if (selectedFieldValue) {
      this.setLayerValues(selectedFieldValue)
    }
  }

  getOwnership(fieldId: string): string {
    const ownership = defaultOnwerships.find(ownership => ownership.field_id === fieldId);
    return ownership?.owned_by || '';
  }

  setLayerValues(id: string) {
    this.selectedField = this.getMatchingField(id);
    this.fieldForm.get('cropType')?.setValue(this.selectedField?.crop_type as string);
    this.fieldForm.get('crop')?.setValue(this.selectedField?.crop_name as string);
    this.map?.setFilter(this.layerIdAllFields, ['==', ['get', 'farm_id'], id]);
    this.map?.setLayoutProperty(this.layerIdAllFields, 'visibility', 'visible');
    this.zoomToPolygonFeature(id);
  }

  setCoordinateInput(): void {
    if (!this.fieldForm.get('coordinateInput')?.value) {
      this.fieldForm.get('coordinateInput')?.setValue(this.formatCoordinates())
    }
  }

  zoomToPolygonFeature(fieldId: string) {
    const allFeatures = farm_polygons as unknown as FeatureCollection;
    const feature = allFeatures.features?.find(feature => feature.properties!['farm_id'] === fieldId)
    const featureGeometry = feature?.geometry as Polygon;

    if (!!featureGeometry) {
      const polygon = new mapboxgl.LngLatBounds(featureGeometry.coordinates[0] as any);
      this.map?.fitBounds(polygon, {
        maxZoom: 12
      })
    }
  }

  formatCoordinates(): string {
    return `${this.map?.getCenter().lng.toFixed(4)}, ${this.map?.getCenter().lat.toFixed(4)}`;
  }

  onToggleWeatherStations(): void {
    this.showWeatherStations = !this.showWeatherStations

    this.showWeatherStations ?
      this.map?.setLayoutProperty(this.layerIdWeatherStations, 'visibility', 'visible') :
      this.map?.setLayoutProperty(this.layerIdWeatherStations, 'visibility', 'none');

    this.showWeatherStations ?
      this.map?.setLayoutProperty(this.layerIdAllFields, 'visibility', 'visible') :
      this.map?.setLayoutProperty(this.layerIdAllFields, 'visibility', 'none');
  }

  onSelectDate(): void {
    if (!this.fieldForm.get('selectField')?.value) {
      alert('Please selet a field');
    }

    this.selectedDate = this.fieldForm.get('date')?.value as string;

    // const irricationRec$ = this.mockService.postIrrigationRecommendation(this.selectedField?.field_id || '', this.fieldForm.get('date')?.value || '');
    this.irricationRec = defaultIrrigation;
  }

  onToggleSoilMoisture(): void {
    const fieldValue = this.fieldForm.get('selectField')?.value;
    const dateValue = this.fieldForm.get('date')?.value;

    if ((!fieldValue && !dateValue) || !fieldValue || !dateValue) {
      alert('Please selet a valid field and date to view the soil moisture data');
    } else {
      this.showSoilMoisture = !this.showSoilMoisture;
    }
  }
}