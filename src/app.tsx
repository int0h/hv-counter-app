import {HyperValue} from 'hyper-value';
import {jsx, Component} from 'hv-jsx';
import {renderIn} from 'hv-dom';

class App extends Component<{}> {
    // now instead of count we have an array of
    // stamps wrapped in hyper-value
    // note: [] as number[] - is a way to tell typescript
    // that it's not any[] kind of array
    clickTimes = new HyperValue([] as number[]);

    // it's a hyper-value which is always equal to
    // the last element of the array hyper-value above
    // note: [...].slice(-1)[0] - is a bit wierd but short way
    // to get the last item of an array
    lastClickTime = this.hs.auto(() => this.clickTimes.$.slice(-1)[0] || 'n/a');

    // it's the new click handler
    // hs.insert - insert an element into hyper-value array
    // on "Infinity" position
    // (which is always the end of array)
    handleClick = () => {
        this.hs.insert(this.clickTimes, Infinity, Date.now());
    }

    render() {
        return <div>
            <span>Last click time: {this.lastClickTime}</span>
            <button onClick={this.handleClick}>Click me!</button>
        </div>;
    }
}

renderIn(document.body, {}, <App />);
