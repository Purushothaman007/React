import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // For React 17

configure({ adapter: new Adapter() });
