export class Belief extends Item implements ArthaEarner {
    prepareData() {
        this.updateProperties();
    }

    updateProperties() {
        this.fate = this.data.fate;
        this.persona = this.data.persona;
        this.deeds = this.data.deeds;
        this.text = this.data.text;
    }

    data: BeliefData;

    fate: boolean;
    persona: boolean;
    deeds: boolean;
    text: string;
}

interface BeliefData extends BaseEntityData, ArthaEarner {
    text: string;
}

interface ArthaEarner {
    fate: boolean;
    persona: boolean;
    deeds: boolean;
}