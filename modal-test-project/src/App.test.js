import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, mount, shallow } from 'enzyme';

//npm i --save-dev enzyme
//npm i --save react@16 react-dom@16
//npm i --save-dev enzyme enzyme-adapter-react-16


//npm test -- --coverage
configure({ adapter: new Adapter() });

describe('Rendering <App />', () => {
  it('renders root app correctly', () => {
    const component = shallow(<App />);
    expect(component).not.toBeNull();
  });
});








// test('renders root app correctly', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   const component = shallow(<App />);
//   expect(component).not.toBeNull();
// });