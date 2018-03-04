import {HyperValue} from 'hyper-value';
import {jsx, Component} from 'hv-jsx';
import {renderIn} from 'hv-dom';

class App extends Component<{}> {
    render() {
        return <div>
            <span>Click amount: 0</span>
            <button>Click me!</button>
        </div>;
    }
}

renderIn(document.body, {}, <App />);
