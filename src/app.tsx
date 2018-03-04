import {HyperValue} from 'hyper-value';
import {jsx, Component} from 'hv-jsx';
import {renderIn} from 'hv-dom';

class App extends Component<{}> {
    // we are creating a "hyper-value" here,
    // it's not required to be a class property
    // it can be any variable in any place in your code
    // 0 - is the initial value of this hyper-value
    count = new HyperValue(0);

    render() {
        // here we're doing 2 things:
        // 1) we output count hyper-value
        // right into the document
        // 2) we handle button click
        // via increasing count value

        return <div>
            <span>Click amount: {this.count}</span>
            <button onClick={() => this.count.$++}>Click me!</button>
        </div>;
    }
}

renderIn(document.body, {}, <App />);
