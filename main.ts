class FlippyFlop {
    _data: Array<number>;
    constructor() {
        this._data = [];
    }

    count() {
        return this._data.length;
    }

    _randomInt(max: number) {
        if (!max || max < 0) {
            max = this.count();
        }
        return Math.floor(Math.random() * (max + 1));
    }

    flip(element: number) {
        var success = this._randomInt(1) > 0;
        if (success) {
            var position = this._randomInt(this.count());
            this._data.splice(position, 0, element);
        }
        return success;
    }

    flop() {
        var ret = undefined;
        if (this.count() > 0) {
            var position = this._randomInt(this.count() - 1);
            ret = this._data[position];
            var shouldRemove = this._randomInt(1) > 0;
            if (shouldRemove) {
                this._data.splice(position, 1);
            }
        }
        return ret;
    }
}