import {HyperValue} from 'hyper-value';
import {jsx, Component} from 'hv-jsx';
import {renderIn} from 'hv-dom';

class App extends Component<{}> {
    clickTimes = new HyperValue([] as number[]);
    lastClickTime = this.hs.auto(() => this.clickTimes.$.slice(-1)[0] || 'n/a');

    // here we are creating a hyper-value array
    // which is always equal to 5 latests items
    // of clickItems array
    showedLog = this.hs.slice(this.clickTimes, -5);

    handleClick = () => {
        this.hs.insert(this.clickTimes, Infinity, Date.now());
    }

    render() {
        return <div>
            <span>Last click time: {this.lastClickTime}</span>
            <button onClick={this.handleClick}>Click me!</button>
            <div>
                <h5>Log:</h5>
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
