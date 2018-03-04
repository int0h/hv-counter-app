import {HyperValue} from 'hyper-value';
import {jsx, Component} from 'hv-jsx';
import {renderIn} from 'hv-dom';

class App extends Component<{}> {
    clickTimes = new HyperValue([] as number[]);
    lastClickTime = this.hs.auto(() => this.clickTimes.$.slice(-1)[0] || 'n/a');

    // it's a hyper-value represnting the quantity
    // of items to show
    showItems = new HyperValue(5);

    // it's a negative value of showItems
    // which is needed to slice array from the end
    sliceStart = this.hs.auto(() => this.showItems.$ > 0 ? -this.showItems.$ : 0);

    // now showedLog is always equal to
    // 'showItems' last elements of clickItems
    showedLog = this.hs.slice(this.clickTimes, this.sliceStart);

    handleClick = () => {
        this.hs.insert(this.clickTimes, Infinity, Date.now());
    }

    render() {
        return <div>
            <span>Last click time: {this.lastClickTime}</span>
            <button onClick={this.handleClick}>Click me!</button>
            <div>
                <h5>Log:</h5>
                Show last <input type='number' value={this.showItems}/> entries:
                <ol>{
                    this.hs.map(this.showedLog, item => {
                        const dateString = (new Date(item)).toString();
                        return <li>{dateString}</li>;
                    })
                }</ol>
            </div>
        </div>;
    }
}

renderIn(document.body, {}, <App />);
