import { Record, Maybe} from 'typed-immutable';

class Market extends Record({
	id: Number,
	name: String,
	areaLat: Maybe(Number),
	areaLon: Maybe(Number),
	areaZoom: Maybe(Number),
	displayName: String,
	monthly: Boolean,
	status: String,
	countryCode: String
}) {
	get lat () {
		return this.areaLat;
	}
	get lon () {
		return this.areaLon;
	}
	get zoom () {
		return this.areaZoom;
	}
}

export default Market;
