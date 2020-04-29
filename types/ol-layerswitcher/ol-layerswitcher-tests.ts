import LayerSwitcher, { Options } from 'ol-layerswitcher';
import BaseLayer from 'ol/layer/Base';
import { Group } from 'ol/layer';
import Map from 'ol/Map';

const map = new Map({});
const groupLayer = new Group();
const panel = document.createElement('div');

/**
 * ==================================================
 * static methods
 * ==================================================
 */
LayerSwitcher.isBaseGroup(new BaseLayer({}));
LayerSwitcher.setGroupVisibility(map);
LayerSwitcher.setChildVisibility(map);
const forEachRecursiveFunction = ((lry: BaseLayer, idx: number, a: BaseLayer[]) => undefined);
LayerSwitcher.forEachRecursive(groupLayer, forEachRecursiveFunction);
// without options
LayerSwitcher.renderPanel(map, panel);
// with options
LayerSwitcher.renderPanel(map, panel, {groupSelectStyle: 'none', reverse: true});

/**
 * ==================================================
 * LayerSwitcher
 * ==================================================
 */

const layerSwitcher = new LayerSwitcher({
    activationMode: 'click',
    collapseLabel: '\u00BB',
    label: '\u00AB',
    tipLabel: 'Check between different map layers',
    groupSelectStyle: 'none',
    reverse: false,
});

// undefined function
layerSwitcher.getGroupsAndLayers(map);
const filterFunction = (l: BaseLayer, idx: number, a: BaseLayer[]) => true;
// with defined filter function
layerSwitcher.getGroupsAndLayers(map, filterFunction);

layerSwitcher.hidePanel();

layerSwitcher.renderPanel();

layerSwitcher.setMap(map);

layerSwitcher.showPanel();

layerSwitcher.uuid();
